import React, { useState } from "react";
import logo from "../logo.svg";
const Navbar = () => {
  const [navVisible, setNavVisible] = useState(false);
  const toggleMenu = () => {
    console.log("Opening NavBar in Small devices");
    setNavVisible(!navVisible);
  };
  return (
    <div className="bg-gray-800 text-gray-300 flex flex-col sm:flex-row justify-between text-2xl  sticky top-0 z-50">
      <div className="flex flex-row justify-between px-6 shadow-sm ">
        <a href="/" className="flex flex-row items-center h-full ">
          <img src={logo} className="self-center"></img>
          <span className="self-center">Rishi</span>
        </a>
        <span className="flex self-center sm:hidden" onClick={toggleMenu}>
          <i className={`fas fa-bars ${navVisible ? "hidden" : "inline"}`}></i>
          <i class={`fa fa-times ${!navVisible ? "hidden" : "inline"}`}></i>
        </span>
      </div>
      <div
        className={`sm:flex sm:flex-row  sm:p-0 sm:mt-0 ${
          !navVisible ? "hidden" : "flex flex-col px-5 mt-1 py-2"
        }`}
      >
        <a
          href="/"
          className={`flex px-6  h-full content-center items-center hover:bg-gray-900 focus:bg-gray-900 active:bg-green-700 sm:mx-0 ${
            !navVisible ? "mx-1" : ""
          }`}
        >
          Home
        </a>
        <a
          href="/"
          className={`flex px-6  h-full content-center items-center hover:bg-gray-900 focus:bg-gray-900 active:bg-green-700 sm:mx-0 ${
            !navVisible ? "mx-1" : ""
          }`}
        >
          About
        </a>
        <a
          href="/"
          className={`flex px-6  h-full content-center items-center hover:bg-gray-900 focus:bg-gray-900 active:bg-green-700 sm:mx-0 ${
            !navVisible ? "mx-1" : ""
          }`}
        >
          Links
        </a>
        <a
          href="/"
          className={`flex px-6  h-full content-center items-center hover:bg-gray-900 focus:bg-gray-900 active:bg-green-700 sm:mx-0 ${
            !navVisible ? "mx-1" : ""
          }`}
        >
          Contacts
        </a>
      </div>
    </div>
  );
};

export default Navbar;
