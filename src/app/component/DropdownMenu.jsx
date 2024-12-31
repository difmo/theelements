"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";

const DropdownMenu = ({solutions}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

//   // Dropdown items array
//   const dropdownItems = [
//     { label: "Solution 1", href: "/solutions/solution1" },
//     { label: "Solution 2", href: "/solutions/solution2" },
//     { label: "Solution 3", href: "/solutions/solution3" },
//   ];

  const toggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <li className="relative flex flex-col items-start">
      <div
        className="flex items-center justify-between w-full cursor-pointer"
        onClick={toggleDropdown}
      >
        <span className="block hover:cursor-pointer hover:text-blue-500">
          Solutions
        </span>
        <FiChevronDown
          className={`text-lg text-gray-800 transition-transform ${
            dropdownOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>

      {dropdownOpen && (
        <ul 
        // className="absolute left-0 z-10 w-40 mt-2 bg-white border border-gray-200 rounded-md shadow-lg"
        >
          {solutions.map((item, index) => (
            <li key={index} className="hover:bg-gray-100">
              <Link
                // href={item.title}
                href="/"
                className="block px-4 py-2 text-gray-700 hover:text-blue-500"
                onClick={closeDropdown} // Close dropdown after click
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default DropdownMenu;
