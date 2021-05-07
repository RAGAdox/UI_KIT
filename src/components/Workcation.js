import React from "react";
import logo from "../assets/logo.svg";
import beachWork from "../assets/beach-work.jpg";
const Workcation = () => {
  return (
    <React.Fragment>
      <div className="lg:grid lg:grid-cols-2 ">
        <div className="px-8 py-12 lg:px-12  max-w-md sm:max-w-2xl mx-auto lg:max-w-full xl:mr-0">
          <div className="xl:max-w-xl">
            <img alt="Workcation" className="h-10 xl:h-20" src={logo}></img>
            <img
              alt="work on a beach"
              className="mt-6 sm:mt-8 shadow-xl rounded-xl sm:h-64 sm:w-full sm:object-cover object-center lg:hidden"
              src={beachWork}
            ></img>
            <h1 className="mt-6 sm:mt-8 text-2xl sm:text-4xl lg:text-3xl xl:text-4xl font-bold text-gray-800">
              You can now work from anywhere.
              <br className="hidden lg:inline" />
              <span className="text-indigo-500">Take advantage of it.</span>
            </h1>
            <p class="mt-2 sm:mt-4 text-gray-600 sm:text-xl xl:text-2xl">
              Workcation helps you find work-friendly rentals in beautiful
              locations so you can enjoy some nice weather even when you're not
              on vacation.
            </p>
            <div className="mt-4 sm:mt-6">
              <a className="inline-block bg-indigo-500 text-white rounded-lg shadow-lg px-5 py-2 uppercase tracking-wider font-semibold text-sm sm:tracking-widest sm:text-lg">
                Book your escape
              </a>
            </div>
          </div>
        </div>
        <div className="hidden lg:block relative">
          <img
            alt="work on a beach"
            className=" absolute inset-0 w-full h-full object-cover object-center"
            src={beachWork}
          ></img>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Workcation;
