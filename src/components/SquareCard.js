import React from "react";

const SquareCard = ({ children }) => {
  return (
    <div
      className="shadow-lg rounded-lg
                mx-auto w-full h-0 square-full 
                bg-gradient-to-br from-indigo-300 to-purple-500"
    >
      {children}
    </div>
  );
};

export default SquareCard;
