/*CardWithDescription Gives a Vertical Card on smaller Displays and a horizontal Card on Larger displays*/
/*Horizontal -> Ipad Pro and Above */
/*Vertival   -> Rest of Devices */
import React, { useState } from "react";

const CardWithDescription = ({
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
    <div
      className="bg-gray-50 dark:bg-gray-800 lg:mt-8 rounded-xl shadow-lg sm:max-w-xs mx-auto
    lg:grid lg:grid-cols-5 2xl:grid-cols-3 lg:max-w-none lg:m-2 "
    >
      <div className="lg:aspect-w-1 lg:aspect-h-1">
        <img
          src={imageSrc}
          className="rounded-t-lg shadow-2xl object-cover object-center w-full h-56 lg:h-full lg:rounded-xl"
        />
      </div>
      <div className="px-2 py-1 lg:col-span-4 2xl:col-span-2 lg:mx-4  lg:relative">
        <h1 className="text-center text-2xl font-bold text-gray-800 dark:text-gray-50 mt-3 lg:text-justify">
          {name}
        </h1>
        <pre className="line-clamp-3 text-lg font-light my-2 text-gray-700 dark:text-gray-200">
          {description}
        </pre>
        <div className="lg:absolute lg:w-full lg:flex justify-between lg:bottom-0 lg:left-0 lg:mx-1">
          <p className="text-center text-xl font-semibold text-gray-800 dark:text-gray-100 lg:inline-block lg:order-2 lg:self-center">
            Price:- {price}
          </p>
          <div
            className="bg-indigo-500 font-semibold text-center text-gray-50 dark:text-gray-100 px-4 py-2 rounded-full shadow-xl my-2 lg:inline-block lg:order-1 cursor-pointer"
            onClick={addToCart}
          >
            {count !== 0 ? (
              <span className="bg-indigo-600 px-2 mx-2 float-right  lg:inline-block  ">
                {count}
              </span>
            ) : (
              ""
            )}
            <a className="capitalize text-center  ">add to cart</a>
          </div>
          <div className="bg-indigo-500 text-center font-semibold text-gray-50 px-4 py-2 rounded-full shadow-xl my-2 lg:inline-block lg:order-3 cursor-pointer">
            <a className="capitalize  ">buy now</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardWithDescription;
