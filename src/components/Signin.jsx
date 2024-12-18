import React from "react";
import myimage from "../assets/myimage.png";
import logoo from "../assets/logoo.png";
import { Link } from "react-router-dom";

export const Signin = () => {
  return (
    <div className="signin flex justify-evenly bg-white">
      {/* Left Section: Image & Logo */}
      <div className="image flex flex-col">
        <div className="logo  -ml-[14%]">
          <img src={logoo} alt="Logo" />
        </div>
        <div className="myimage -ml-10">
          <img src={myimage} alt="" />
        </div>
      </div>

      {/* Right Section: Form */}
      <div className="adduser mt-[70px] p-10 rounded-lg shadow-lg">
        <h3 className="text-center text-[#9C74FA] font-bold text-2xl uppercase">
          Sign In
        </h3>
        <form className="adduserform mt-6">
          <div className="inputGroup flex flex-col">
            {/* Name Input */}
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              type="text"
              id="name"
              autoComplete="off"
              placeholder="Name"
              className="mt-2 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#9C74FA]"
            />

            {/* Email Input */}
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="email"
              id="email"
              autoComplete="off"
              placeholder="Email"
              className="mt-4 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#9C74FA]"
            />

            {/* Password Input */}
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              type="password"
              id="password"
              autoComplete="off"
              placeholder="Enter your password"
              className="mt-4 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#9C74FA]"
            />

            {/* Create Account Button */}
            <Link
              to="/Welcome"
              className="btn mt-6 py-2 px-4 bg-[#9C74FA] text-white text-center rounded hover:bg-[#5A3497]"
            >
              Create Account
            </Link>

            <p className="mt-8 mb-0 text-gray-500 text-center">
              ______________Already Have An Account?______________
            </p>

            {/* Login Button */}
            <div className="login mt-4">
              <Link
                to="/login"
                className="btn btn-primary w-full bg-transparent border-[#9C74FA] text-black hover:bg-[#9C74FA]  "
              >
                Log In
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;