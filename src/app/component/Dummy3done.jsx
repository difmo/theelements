'use client'
import React, { useState } from 'react';

const Dummy4 = () => {
  const [order, setOrder] = useState([1, 2, 3, 4]); // Manage the order of the containers
  const [hidden, setHidden] = useState(null); // Manage which container is hidden

  const handleClick = (container) => {
    if (hidden === container) return; // If the clicked container is already hidden, don't do anything.

    // Hide the clicked container
    setHidden(container);

    if (container === 2) {
      // When clicking on container 2, swap container 1, 3, and 4
      setOrder([order[2], order[3], order[0], order[1]]);
    } else if (container === 1) {
      // When clicking on container 1, swap containers 2, 3, and 4
      setOrder([order[1], order[2], order[3], order[0]]);
    } else if (container === 3) {
      // When clicking on container 3, swap containers 1, 2, and 4
      setOrder([order[3], order[0], order[1], order[2]]);
    } else if (container === 4) {
      // When clicking on container 4, swap containers 1, 2, and 3
      setOrder([order[2], order[3], order[0], order[1]]);
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
          hidden === 1 ? 'hidden' : ''
        } ${order[0] === 1 ? 'transform -translate-y-48' : order[0] === 4 ? 'transform translate-y-48' : ''}`}
      >
        Container 1
      </div>

      {/* Container 2 */}
      <div
        data-container="2"
        className={`w-48 h-24 bg-red-300 flex items-center justify-center z-10 transition-all duration-500 ease-in-out ${
          hidden === 2 ? 'hidden' : ''
        } ${order[1] === 1 ? 'transform -translate-y-48' : order[1] === 4 ? 'transform translate-y-48' : ''}`}
      >
        Container 2
      </div>

      {/* Container 3 */}
      <div
        data-container="3"
        className={`w-48 h-24 bg-green-300 flex items-center justify-center absolute transition-all duration-500 ease-in-out ${
          hidden === 3 ? 'hidden' : ''
        } ${order[2] === 1 ? 'transform -translate-y-48' : order[2] === 4 ? 'transform translate-y-48' : ''}`}
      >
        Container 3
      </div>

      {/* Container 4 */}
      <div
        data-container="4"
        className={`w-48 h-24 bg-yellow-300 flex items-center justify-center absolute transition-all duration-500 ease-in-out ${
          hidden === 4 ? 'hidden' : ''
        } ${order[3] === 1 ? 'transform -translate-y-48' : order[3] === 4 ? 'transform translate-y-48' : ''}`}
      >
        Container 4
      </div>
    </div>
  );
};

export default Dummy4;
