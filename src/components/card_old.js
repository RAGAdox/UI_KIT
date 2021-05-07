import React, { useState } from "react";
import rishi from "../assets/rishi";
const CardWithDescription = () => {
  const [count, setCount] = useState(0);
  const addToCart = () => {
    setCount(count + 1);
  };
  return (
    <div className="bg-gray-100 max-w-4xl m-8 rounded-lg shadow-lg grid md:grid-cols-4">
      <div className=" relative ">
        <img
          src={rishi}
          className="h-full w-full absolute inset-0 object-cover object-center rounded-lg"
        />
      </div>
      <div className="w-full col-span-3 p-4 ">
        <div className="">
          <h1 className="text-gray-800 text-2xl font-semibold">
            Rishi Mukherjee
          </h1>
          <p className="mt-2 text-gray-700 text-lg truncate">
            This is Rishi Mukherjee. work.He likes to tinker with stuff and
            plays with computers.<br></br> He is currently trying to learn
            Tailwind Css using react.<br></br> The current end goal of this
            project is to make a UI Kit that can be thrown into any frontend
            React based project and it should just work .<br></br>Hiii I am
            RAGAdox
          </p>
          <p className="text-xl text-gray-800">Price :- Rs. 10000.53</p>
          <div className="mt-4 w-full bg-red-700">
            <div className="bg-yellow-200 float-left">
              <a
                className=" bg-indigo-500 text-white rounded-lg shadow-lg px-5 py-2 uppercase tracking-wider font-semibold text-sm "
                onClick={addToCart}
              >
                {count !== 0 ? (
                  <span className="bg-indigo-700 mr-4 p-2 rounded-sm">
                    {count}
                  </span>
                ) : (
                  ""
                )}
                Add to cart
              </a>
            </div>
            <div className="float-right">
              <a className=" bg-indigo-500 text-white rounded-lg shadow-lg px-5 py-2 uppercase tracking-wider font-semibold text-sm ">
                Buy Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardWithDescription;
