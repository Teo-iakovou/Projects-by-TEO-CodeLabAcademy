import React from "react";
import codingLogo from "../assets/coding.png";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex w-3/5 shadow-lg rounded-lg overflow-hidden">
        {/* Left Section */}
        <div className="bg-indigo-900 flex justify-center items-center w-1/2 p-8">
          <img src={codingLogo} alt="Coding Logo" className="w-64 h-auto" />
        </div>

        {/* Right Section */}
        <div className="bg-white w-1/2 p-10 flex flex-col justify-center items-center">
          <h3 className="text-indigo-600 mb-6 text-2xl">Join Coders Now!</h3>
          <form className="w-full">
            <input
              type="text"
              placeholder="First Name"
              required
              className="w-full p-3 mb-4 border rounded-md bg-indigo-900 text-white placeholder-white"
            />
            <input
              type="text"
              placeholder="Last Name"
              required
              className="w-full p-3 mb-4 border rounded-md bg-indigo-900 text-white placeholder-white"
            />
            <input
              type="email"
              placeholder="Email"
              required
              className="w-full p-3 mb-4 border rounded-md bg-indigo-900 text-white placeholder-white"
            />
            <input
              type="password"
              placeholder="Password"
              required
              className="w-full p-3 mb-4 border rounded-md bg-indigo-900 text-white placeholder-white"
            />
            <button
              type="submit"
              className="w-full p-3 bg-cyan-400 text-white rounded-md hover:bg-indigo-500 transition mt-4"
            >
              Sign Up
            </button>
          </form>
          <p className="text-sm mt-4">
            Already have an account?
            <Link
              to="/signin"
              className="text-indigo-600 font-bold hover:underline ml-2"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
