import React from "react";
import logoo from "../assets/logoo.png";
import myimage from "../assets/myimage.png";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className="Login flex justify-evenly bg-white">
      {/* Left Section: Logo and Image */}
      <div className="image flex flex-col">
        <div className="logo  -ml-[9.2%]">
          <img src={logoo} alt="Logo" />
        </div>
        <div className="myimage -ml-[4.6%]">
          <img src={myimage} alt="" />
        </div>
      </div>

      {/* Right Section: Login Form */}
      <div className="adduser mt-[70px] p-10 rounded-lg shadow-lg">
        <h3 className="text-center text-[#9C74FA] font-bold text-2xl uppercase">
          Log In
        </h3>
        <form className="adduserform mt-6">
          <div className="inputGroup flex flex-col">
            {/* Email Input */}
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="email"
              id="email"
              autoComplete="off"
              placeholder="Email"
              className="mt-2 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#9C74FA]"
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

            {/* Forgot Password */}
            <div className="forgot-password mt-5 text-[#797979] text-sm pl-2">
              Lost Password?{" "}
              <span className="text-[#9C74FA] font-semibold cursor-pointer">
                Click Here!
              </span>
            </div>

            {/* Create Account Button */}
            <Link
              to="/Welcome"
              className="btn mt-6 py-2 px-4 bg-[#9C74FA] text-white text-center rounded hover:bg-[#5A3497]"
            >
              Create Account
            </Link>

            {/* Divider Text */}
            <p className="mt-8 mb-2 text-gray-500 text-center">
              ______________You Don't Have an Account?______________
            </p>

            {/* Sign In Button */}
            <div className="signin mt-4">
              <Link
                to="/signin"
                className="btn btn-primary  w-full bg-transparent border-[#9C74FA] text-black hover:bg-[#9C74FA]"
              >
                Sign In
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
