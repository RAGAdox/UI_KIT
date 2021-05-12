import React from "react";

import SquareCard from "../components/SquareCard";
const AspectRatioCardScreen = () => {
  return (
    <div className="w-full sm:grid sm:grid-flow-row sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 ">
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
        <SquareCard>
          <h1 className="inline-block text-4xl text-center text-gray-50 mt-10">
            Hii I am a children
          </h1>
        </SquareCard>
      </div>
    </div>
  );
};

export default AspectRatioCardScreen;
