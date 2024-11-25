"use client";
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi"; // Importing a search icon from React Icons
import Image from "next/image"; // Importing Next.js Image component
import logo from "../assets/8E_logo-A 1.svg";
import { FiPlus } from "react-icons/fi";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // To handle the mobile menu toggle

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="absolute top-0 left-0 w-full bg-[#E8F6FC] shadow-md z-50">
      <nav className="flex justify-between items-center h-[60px] px-6 sm:px-8">
        {/* Logo Section */}
        <div className="flex items-center">
          <Image
            src={logo}
            alt="Difmo Logo"
            width={200}
            height={64}
            className="h-[30px] w-[126px]"
          />
        </div>

        {/* Navigation Section */}
        <div className="flex items-center space-x-4 sm:space-x-6">
          {/* Mobile Menu Toggle */}
          <div className="sm:hidden">
          <button onClick={toggleMenu} className="text-gray-800">
  {/* Conditionally render hamburger or cross icon */}
  {menuOpen ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  )}
</button>

          </div>

          {/* Links for larger screens */}
          <ul className="items-center hidden space-x-6 text-gray-800 sm:flex">
            <li>
              <a href="#solutions" className="hover:text-blue-500">
                Solutions
              </a>
            </li>
            <span className="hidden w-px h-5 bg-gray-400 sm:block"></span>
            <li>
              <a href="#services" className="hover:text-blue-500">
                Services
              </a>
            </li>
            <span className="hidden w-px h-5 bg-gray-400 sm:block"></span>
            <li>
              <a href="#about-us" className="hover:text-blue-500">
                About Us
              </a>
            </li>
            <span className="hidden w-px h-5 bg-gray-400 sm:block"></span>
            <li>
              <a href="#careers" className="hover:text-blue-500">
                Careers
              </a>
            </li>
            <li className="hidden sm:block">
              <FiSearch className="text-lg text-gray-800 cursor-pointer hover:text-blue-500" />
            </li>
            <li>
              <a
                href="#contact-us"
                className="px-4 py-1 text-sm font-semibold text-gray-800 border border-gray-400 rounded-full hover:bg-blue-500 hover:text-white"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Menu (if menu is open) */}
      {menuOpen && (
  <div className="sm:hidden absolute top-[60px] px-6 left-0 w-full p-4 bg-[#E8F6FC] py-2">
    <ul className="space-y-4">
      <li>
        <div className="relative w-full">
          {/* Input Field */}
          <input
            type="text"
            placeholder="Search"
            className="block w-full px-4 py-1 pl-10 mx-1 text-sm font-semibold text-gray-800 border border-gray-400 rounded-full focus:outline-none focus:ring-2 hover:text-gray-800 "
          />
          {/* Search Icon */}
          <FiSearch className="absolute text-lg text-gray-800 transform -translate-y-1/2 cursor-pointer left-3 top-1/2 hover:text-blue-500" />
        </div>
      </li>

      <li className="flex items-center justify-between">
        <a href="#solutions" className="block hover:text-blue-500" onClick={() => setMenuOpen(false)}>
          Solutions
        </a>
        <FiPlus className="text-lg text-gray-800 cursor-pointer hover:text-blue-500" />
      </li>

      <li className="flex items-center justify-between">
        <a href="#services" className="block hover:text-blue-500" onClick={() => setMenuOpen(false)}>
          Services
        </a>
        <FiPlus className="text-lg text-gray-800 cursor-pointer hover:text-blue-500" />
      </li>

      <li>
        <a href="#about-us" className="block hover:text-blue-500" onClick={() => setMenuOpen(false)}>
          About Us
        </a>
      </li>

      <li>
        <a href="#careers" className="block hover:text-blue-500" onClick={() => setMenuOpen(false)}>
          Careers
        </a>
      </li>

      <li>
        <a
          href="#contact-us"
          className="block p-1 mx-1 text-sm font-semibold text-gray-800 border border-gray-400 rounded-full hover:bg-blue-500 hover:text-white"
          onClick={() => setMenuOpen(false)}
        >
          Contact Us
        </a>
      </li>
    </ul>
  </div>
)}

    </header>
  );
};

export default Header;
