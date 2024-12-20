import React from "react";
import logoo from "../assets/logoo.png";
import myimage from "../assets/myimage.png";
import { Link } from "react-router-dom";

export const First = () => {
  return (
    <div className="first flex justify-around items-center ">
      {/* Left Section: Welcome Content */}
      <div className="welcomming">
        <img src={logoo} alt="Logo" className="  w-[20%] " />
        <div className="h2">
          <h2 className="font-bold lg:text-[50px] sm:text-[50px] mt-2">Easily</h2>
          <h2 className="font-bold lg:text-[50px] sm:text-[50px]  mt-2">Manage Your</h2>
        </div>
        <div className="hh2">
          <h2
            className="font-bold lg:text-[55px] sm:text-[50px]  mt-2 bg-gradient-to-r from-[#5A3497] via-[#9071D9] 
            to-[#C8EAF8] bg-clip-text text-transparent"
          >
            Daily Tasks
          </h2>
        </div>
        {/* Description Text */}
        <p className="text-[10px] lg:text-[16px] sm:text-[12px] sm:w-[40vw] sm:-m mt-4 leading-relaxed">
          Take control of your day with ease! Our to-do list platform helps you
          organize tasks,
          <br />
          set priorities, and track your progress—all in one place. Whether it
          is planning your
          <br />
          work, managing errands, or staying on top of personal goals, we are
          here to make your
          <br />
          daily life smoother and more productive. Start simplifying your
          routine today!
        </p>

        {/* Get Started Button */}
        <div className="getstarted mt-7">
          <Link
            to="/signin"
            className="btn btn-primary w-[35%] py-3 bg-dark-purple text-white 
             hover:bg-[#5A3497] transition border-[#9C74FA]"
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* Right Section: Image */}
      <div className="picture mt-[7%]">
        <img src={myimage} alt="Illustration" />
      </div>
    </div>
  );
};

export default First;
