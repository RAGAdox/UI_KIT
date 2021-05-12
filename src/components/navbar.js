import React, { useState } from "react";
import logo from "../logo.svg";
const Navbar = () => {
  const [navVisible, setNavVisible] = useState(false);
  const showMenu = () => {
    console.log("Opening NavBar in Small devices");
    setNavVisible(!navVisible);
  };
  return (
    <div className="bg-gray-800 text-gray-300 flex flex-col sm:flex-row justify-between text-2xl py-1 sticky top-0 z-50">
      <div className="flex flex-row justify-between px-6 ">
        <a href="#" className="flex flex-row items-center h-full ">
          <img src={logo} className=""></img>
          Rishi
        </a>
        <span className="flex self-center sm:hidden" onClick={showMenu}>
          <i className="fas fa-bars"></i>
        </span>
      </div>
      <div
        className={`sm:flex sm:flex-row ${
          !navVisible ? "hidden" : "flex flex-col px-5 mt-1 py-2"
        }`}
      >
        <a
          className={`flex px-6  h-full content-center items-center hover:bg-gray-900 ${
            !navVisible ? "mx-1" : ""
          }`}
        >
          Home
        </a>
        <a
          className={`flex px-6  h-full content-center items-center hover:bg-gray-900 ${
            !navVisible ? "mx-1" : ""
          }`}
        >
          About
        </a>
        <a
          className={`flex px-6  h-full content-center items-center hover:bg-gray-900 ${
            !navVisible ? "mx-1" : ""
          }`}
        >
          Links
        </a>
        <a
          className={`flex px-6  h-full content-center items-center hover:bg-gray-900 ${
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
