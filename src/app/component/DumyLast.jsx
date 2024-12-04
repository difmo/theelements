'use client'
import React, { useState } from 'react';

const DummyLast = () => {
  const [order, setOrder] = useState([1, 2, 3]); // This will manage the order of the containers

  const handleClick = (container) => {
    if (container === 2) {
      // When clicking on container 2, swap container 1 and container 3
      setOrder([order[2], order[1], order[0]]);
    } else if (container === 1) {
      // When clicking on container 1, rotate containers: 2 to 1, 3 to 2, 1 to 3
      setOrder([order[1], order[2], order[0]]);
    } else if (container === 3) {
      // When clicking on container 3, rotate containers: 3 to 2, 2 to 1, 1 to 3
      setOrder([order[2], order[0], order[1]]);
    }
  };

  return (
    <div
      className="relative flex flex-col items-center justify-center h-screen space-y-4"
      onClick={(e) => handleClick(Number(e.target.dataset.container))}
    >
      {/* Container 1 */}
      <div
        data-container="1"
        className={`w-48 h-24 bg-blue-300 flex items-center justify-center absolute transition-all duration-500 ease-in-out ${
          order[0] === 1 ? 'transform -translate-y-48' : order[0] === 3 ? 'transform translate-y-48' : ''
        }`}
      >
        Container 1
      </div>

      {/* Container 2 */}
      <div
        data-container="2"
        className={`w-48 h-24 bg-red-300 flex items-center justify-center z-10 transition-all duration-500 ease-in-out ${
          order[1] === 1 ? 'transform -translate-y-48' : order[1] === 3 ? 'transform translate-y-48' : ''
        }`}
      >
        Container 2
      </div>

      {/* Container 3 */}
      <div
        data-container="3"
        className={`w-48 h-24 bg-green-300 flex items-center justify-center absolute transition-all duration-500 ease-in-out ${
          order[2] === 1 ? 'transform -translate-y-48' : order[2] === 3 ? 'transform translate-y-48' : ''
        }`}
      >
        Container 3
      </div>
    </div>
  );
};

export default DummyLast;
