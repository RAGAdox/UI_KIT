import React, { useState } from "react";
import rishi from "../assets/rishi";
import vas from "../assets/vas.jpg";
const CardWithDescription = () => {
  const [count, setCount] = useState(0);
  const addToCart = () => {
    setCount(count + 1);
  };
  return (
    <div className="bg-gray-50 m-8 rounded-xl shadow-lg sm:max-w-xs mx-auto">
      <img
        src={vas}
        className="rounded-t-lg object-cover object-center w-full h-56 "
      />
      <div className="px-2 py-1">
        <h1 className="text-center text-2xl font-bold text-gray-800 mt-3">
          Rishi Mukherjee
        </h1>
        <p className="line-clamp-3 text-lg font-light my-2 text-gray-700">
          This is Rishi Mukherjee. work.He likes to tinker with stuff and plays
          with computers.
          <br className="hidden sm:inline" /> He is currently trying to learn
          Tailwind Css using react.<br className="hidden sm:inline"></br> The
          current end goal of this project is to make a UI Kit that can be
          thrown into any frontend React based project and it should just work .
          <br className="hidden sm:inline" />
          Hiii I am RAGAdox
        </p>
        <p className="text-center text-xl font-semibold text-gray-800">
          Price:- Rs 1000
        </p>
        <div
          className="bg-indigo-500 font-semibold text-center text-gray-50 px-4 py-2 rounded-full shadow-xl my-2 
          focus:outline-none focus:ring-4 focus:border-blue-500
          hover:outline-none hover:ring-4 hover:border-blue-500"
          onClick={addToCart}
        >
          {count != 0 ? (
            <span className="bg-indigo-600 px-2 float-right">{count}</span>
          ) : (
            ""
          )}
          <a className="capitalize text-center">add to cart</a>
        </div>
        <div className="bg-indigo-500 text-center font-semibold text-gray-50 px-4 py-2 rounded-full shadow-xl my-2">
          <a className="capitalize">buy now</a>
        </div>
      </div>
    </div>
  );
};

export default CardWithDescription;
