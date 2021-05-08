import React from "react";
import VerticalCard from "../components/verticalCard";
const VerticalCardScreen = () => {
  return (
    <div className="sm:grid sm:grid-flow-row sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <div className="m-3">
        <VerticalCard></VerticalCard>
      </div>
      <div className="m-3">
        <VerticalCard></VerticalCard>
      </div>
      <div className="m-3">
        <VerticalCard></VerticalCard>
      </div>
      <div className="m-3">
        <VerticalCard></VerticalCard>
      </div>
      <div className="m-3">
        <VerticalCard></VerticalCard>
      </div>
    </div>
  );
};

export default VerticalCardScreen;
