import React, { useState } from "react";

const VerticalCard = ({
  name = "Card Title",
  description = "Card Description",
  imageSrc = "https://via.placeholder.com/300.png/09f/fff?text=Card%20Image",
  price = "Rs 0.00",
}) => {
  const [count, setCount] = useState(0);
  const addToCart = () => {
    setCount(count + 1);
  };
  return (
    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg sm:max-w-xs mx-10">
      <div className="">
        <img
          src={imageSrc}
          className="rounded-t-lg shadow-2xl object-cover object-center w-full h-56"
        />
      </div>
      <div className="px-2 py-1">
        <h1 className="text-center text-2xl font-bold text-gray-800 dark:text-gray-50 mt-3 ">
          {name}
        </h1>
        <pre className="line-clamp-3 text-lg font-light my-2 text-gray-700 dark:text-gray-200">
          {description}
        </pre>

        <p className="text-center text-xl font-semibold text-gray-800 dark:text-gray-100">
          Price:- {price}
        </p>
        <div
          className="bg-indigo-500 font-semibold text-center text-gray-50 px-4 py-2 rounded-full shadow-xl my-2 cursor-pointer"
          onClick={addToCart}
        >
          {count !== 0 ? (
            <span className="bg-indigo-600 px-2 mx-2 float-right">{count}</span>
          ) : (
            ""
          )}
          <a className="capitalize text-center">add to cart</a>
        </div>
        <div className="bg-indigo-500 text-center font-semibold text-gray-50 px-4 py-2 rounded-full shadow-xl my-2 cursor-pointer">
          <a className="capitalize">buy now</a>
        </div>
      </div>
    </div>
  );
};

export default VerticalCard;
