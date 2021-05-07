import "./App.css";
import React from "react";
import Workcation from "./components/Workcation";
import CardWithDescription from "./components/card";
function App() {
  return (
    <div className="grid md:grid-flow-row md:grid-cols-2 sm:bg-red-300 md:bg-yellow-100 lg:bg-green-100 xl:bg-blue-100 2xl:bg-purple-400 bg-black">
      <CardWithDescription></CardWithDescription>
      <CardWithDescription></CardWithDescription>
      <CardWithDescription></CardWithDescription>
    </div>
  );
}

export default App;
