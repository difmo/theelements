import React from "react";

const CustomIndicator = () => {
  return (
    <div className="bg-red-500">
      <svg
        width="28"
        height="14"
        viewBox="0 0 28 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_2322_684)">
          <path
            d="M11.8346 11.5616C10.7371 12.464 9.31055 13.0072 7.7517 13.0004C4.3116 12.9856 1.54004 10.3076 1.54004 7.00044C1.54004 3.68644 4.33406 1.00044 7.78041 1.00044C9.33052 1.00044 10.7483 1.54364 11.8396 2.44284C13.0881 3.47204 14.9148 3.46764 16.1646 2.43924C17.2612 1.53724 18.6865 0.994443 20.2441 1.00004C23.685 1.01284 26.4599 3.69164 26.4595 7.00004C26.4595 10.3136 23.6655 13 20.2191 13C18.6694 13 17.252 12.4568 16.1608 11.558C14.9115 10.5288 13.0843 10.5328 11.8342 11.5612L11.8346 11.5616Z"
            stroke="#FCF3ED"
            strokeMiterlimit="10"
          />
          <circle cx="7.5" cy="7.00049" r="4" fill="#FCF3ED" />
        </g>
        <defs>
          <clipPath id="clip0_2322_684">
            <rect
              width="27"
              height="14"
              fill="white"
              transform="translate(0.5 0.000488281)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default CustomIndicator;
