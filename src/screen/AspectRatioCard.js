import React from "react";

import SquareCard from "../components/SquareCard";
const AspectRatioCardScreen = () => {
  return (
    <div className="w-full sm:grid sm:grid-flow-row sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 bg-black sm:bg-green-300 md:bg-red-300 lg:bg-yellow-300 xl:bg-indigo-300 2xl:bg-purple-300">
      <div className="m-10">
        <SquareCard></SquareCard>
      </div>
      <div className="m-10">
        <SquareCard></SquareCard>
      </div>
      <div className="m-10">
        <SquareCard></SquareCard>
      </div>
      <div className="m-10">
        <SquareCard></SquareCard>
      </div>
      <div className="m-10">
        <SquareCard></SquareCard>
      </div>
    </div>
  );
};

export default AspectRatioCardScreen;
