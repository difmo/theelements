"use client";

import React, { useState } from "react";

const Dummy2 = () => {
  // State to track the order of the containers
  const [isSwapped, setIsSwapped] = useState(false);

  const handleClick = () => {
    setIsSwapped(!isSwapped);
  };

  return (
    <div className="flex flex-col ">
 
      <div
        className={`w-64 p-10  transition-transform duration-500 ${isSwapped ? "transform translate-y-full" : ""}`}
        onClick={handleClick}
      >
        <div className="bg-slate-500">Container 1</div>
      </div>
      {/* Second container */}
      <div
        className={`w-64 p-10 transition-transform duration-500 ${isSwapped ? "-translate-y-full" : ""}`}
        onClick={handleClick}
      >
        <div className="bg-green-500">Container 2</div>
      </div>
    </div>
  );
};

export default Dummy2;
