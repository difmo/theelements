

'use client'
import React, { useState } from 'react';

const Dummy3 = () => {
  const [order, setOrder] = useState([1, 2, 3]); // This will manage the order of the containers

  const handleClick = () => {
    // Swap 1 and 3 when the 2nd container is clicked
    setOrder([order[0] === 1 ? 3 : 1, 2, order[0] === 1 ? 1 : 3]);
  };

  return (
    <div
      className="relative flex items-center justify-center h-screen space-x-4"
      onClick={handleClick}
    >
      <div
        className={`w-48 h-24 bg-blue-300 flex items-center justify-center absolute transition-all duration-500 ease-in-out ${
          order[0] === 1 ? 'transform -translate-x-48' : order[0] === 3 ? 'transform translate-x-48' : ''
        }`}
      >
        Container 1
      </div>

      <div className="z-10 flex items-center justify-center w-48 h-24 bg-red-300">Container 2</div>

      <div
        className={`w-48 h-24 bg-green-300 flex items-center justify-center absolute transition-all duration-500 ease-in-out ${
          order[2] === 3 ? 'transform translate-x-48' : order[2] === 1 ? 'transform -translate-x-48' : ''
        }`}
      >
        Container 3
      </div>
    </div>
  );
};

export default Dummy3;
