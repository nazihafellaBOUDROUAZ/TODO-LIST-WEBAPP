import React, { useState, useMemo } from "react";
import { Link, useLocation } from "react-router-dom"; // useLocation is used to get the current route
import img from "../assets/img.png";
import logo from "../assets/logoo.png";
import home from "../assets/home.png";
import Calendar from "../assets/Calendar.png";
import todo from "../assets/todo.png";
import check from "../assets/check.png";
import notification from "../assets/notification.png";
import Setting from "../assets/Setting.png";
import support from "../assets/support.png";
import report from "../assets/report.png";
//lmlihaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
export default function Sidebar({ children }) {
  const [open, setOpen] = useState(true);
  const location = useLocation(); // useLocation hook to get the current route

  // Memoize the Menus array to avoid unnecessary re-renders
  const Menus = useMemo(() => [
    { title: "Dashboard", src: home, path: "/welcome" },
    { title: "Calendar", src: Calendar, path: "/calendar" },
    { title: "Projects List", src: todo, path: "/projects" },
    { title: "Daily Notes", src: check, path: "/daily-notes" },
    { title: "Notifications", src: notification, path: "/notifications", gap: true },
    { title: "Settings", src: Setting, path: "/settings" },
    { title: "Support", src: support, path: "/support" },
    { title: "Report", src: report, path: "/repport" },
  ], []); // Empty dependency array ensures it doesn't change unless needed

  return (
    <div className="flex">
      {/* Sidebar: Fixed to the left */}
      <div
        className={`fixed top-0 left-0 h-screen ${
          open ? "w-64" : "w-20"
        } p-5 pt-0 duration-300 bg-dark-purple`}
      >
        <img
          src={img}
          className={`absolute cursor-pointer -right-3 rounded-full top-9 w-7 border-2 border-dark-purple bg-white ${
            !open && "rotate-180"
          }`}
          alt="Toggle Sidebar"
          onClick={() => setOpen(!open)}
        />

        <div className="flex gap-x-4 items-center justify-center -mb-2">
          <img
            src={logo}
            className={`cursor-pointer duration-400 w-32 ${
              open && "rotate-[360deg]"
            }`}
            alt="Logo"
          />
        </div>

        {/* HR between Logo and Dashboard */}
        <hr className="border-black-600" />

        <ul>
          {/* Insert <hr /> before Notifications */}
          {Menus.map((menu, index) => (
            <>
              {menu.title === "Notifications" && (
                <hr className="border-black-600 mt-28 -mb-20" />
              )}

              <Link to={menu.path} key={index}>
                <li
                  className={`text-gray-300 text-xs flex items-center -ml-6 gap-x-6 cursor-pointer p-1.5 hover:bg-purple rounded-md focus:outline-none focus:ring-0
                     ${menu.gap ? "mt-20" : "mt-2"} ${
                    location.pathname === menu.path
                      ? "bg-purple text-white"
                      : ""
                  }`}
                >
                  <img className="w-6" src={menu.src} alt={menu.title} />
                  <span
                    className={`${
                      !open && "hidden"
                    } font-medium origin-left duration-200`}
                  >
                    {menu.title}
                  </span>
                </li>
              </Link>
            </>
          ))}
        </ul>

        
      </div>

      {/* Main Content: Scrollable */}
      <div
        className={`flex-1 p-8 overflow-y-auto min-h-screen ${
          open ? "ml-64" : "ml-20"
        }`}>
        {children}
      </div>
    </div>
  );
}
