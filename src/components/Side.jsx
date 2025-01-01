import React, { useState, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import img from "../assets/img.png";
import logo from "../assets/logoo.png";
import home from "../assets/home.png";
import Calendar from "../assets/Calendar.png";
import todo from "../assets/todo.png";
import check from "../assets/check.png";
import daily from "../assets/daily.png"
import notification from "../assets/notification.png";
import Setting from "../assets/Setting.png";
import support from "../assets/support.png";
import report from "../assets/report.png";

export default function Sidebar({ children }) {
  const [open, setOpen] = useState(true);
  const location = useLocation();

  const Menus = useMemo(() => [
    { title: "Dashboard", src: home, path: "/welcome" },
    { title: "Calendar", src: Calendar, path: "/calendar" },
    { title: "Projects List", src: todo, path: "/ProjectsList" },
    { title: "Todo List", src: check, path: "/Todo" },
    { title: "Daily Notes", src: daily, path: "/DailyNotes" },
    { title: "Notifications", src: notification, gap: true, path: "/notifications" },
    { title: "Settings", src: Setting, path: "/settings" },
    { title: "Support", src: support, path: "/support" },
    { title: "Report", src: report, path: "/repport" },
  ], []);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div 
        className={`${open ? 'lg:w-[15vw] md:w-[20vw] sm:w-[25vw]' : 'w-[7%] '} p-[1.5%] pt-0 duration-300 h-screen bg-dark-purple relative `}
      >
        {/* Toggle button */}
        <img 
          src={img} 
          className={` absolute cursor-pointer -right-3 rounded-full top-9 ${open ? 'w-7' : 'w-6'} border-2 border-dark-purple bg-white ${!open && 'rotate-180'}`} 
          alt="Toggle Sidebar" 
          onClick={() => setOpen(!open)} 
        />
        <div className="overflow-y-scroll h-full pb-10">
        
        {/* Logo */}
        <div className="flex gap-x-4 items-center mb-2 justify-center">
          <img 
            src={logo} 
            className={`cursor-pointer duration-500 w-32 ${open && "rotate-[360deg]"}`} 
            alt="Logo" 
          />
        </div>
        <hr  className="flex align-center border-gray-500 mb-6"/>
        
        {/* Menu Items */}
        <ul className="pl-0">
          {Menus.map((menu, index) => (
            <Link to={menu.path} key={index}> 
            {/* Add hr just before the "Notifications" item */}
            {menu.title === "Notifications" && (
              <hr className="border-gray-500 mb-6 mt-[100%]" />
              
            )}
              <li 
                className={` w-[100%] text-gray-300 text-sm flex items-center gap-x-6 cursor-pointer ${open ? 'p-2 mt-0' :'p-0 mt-2 justify-center '} rounded-md 
                  ${location.pathname === menu.path ? 'bg-purple' : ''}`} // 🔥 Added this line to highlight active menu item
              >
                <img className={`duration-300 w-6 lg:w-8 sm:w-4`} src={menu.src} alt={menu.title} />
                <span className={`${!open && 'hidden'} origin-left duration-200 text-base  md:text-l ${open ? 'text-sm sm:text-xs' : ''}`}>{menu.title}</span>
              </li>
            </Link>
          ))}
        </ul>

        {/* Footer */}
        {/* <p className="text-xs mt-8 text-white font-light">
          © {new Date().getFullYear()} Mind Map. All rights reserved.
        </p> */}
      </div>
      </div>
      {/* Page Content */}
      <div className="flex-1 p-8">
        {children}
      </div>
    </div>
  );
}