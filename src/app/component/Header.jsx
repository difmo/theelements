
"use client";
import React, { useEffect, useState } from "react";
import { FiChevronDown, FiPlus } from "react-icons/fi";
import Image from "next/image";
import logo from "../assets/8E_logo-A 1.svg";
import { motion } from "framer-motion";
import Link from "next/link";
import { sanityClient } from "@/sanity";
import DropdownMenu from "./DropdownMenu";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [solutions, setSolutions] = useState([]);
  const [error, setError] = useState(null); 
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Fetch solutions from Sanity
  useEffect(() => {
    const fetchSolutions = async () => {
      try {
        const result = await sanityClient.fetch(
          `*[_type == "solution"]{
            title,
            "icon": icon.asset->url,
            description
          }`
        );
        setSolutions(result);
      } catch (err) {
        console.error("Failed to fetch solutions:", err);
        setError("Failed to load data. Please try again later.");
      }
    };

    fetchSolutions();
  }, []);

  // Hover event handlers
  const handleMouseEnter = () => setDropdownOpen(true);
  const handleMouseLeave = () => setDropdownOpen(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  // console.log(solutions, "solu");
  return (
    <header className="sticky top-0 left-0 w-full bg-[#E8F6FC] z-50">
      <nav className="flex justify-between items-center h-[60px] px-6 sm:px-8">
        <div className="flex items-center h-full">
          <Link href="/" passHref>
            <Image
              src={logo}
              alt="Difmo Logo"
              width={200}
              height={64}
              className="h-[30px] w-[126px]"
            />
          </Link>
        </div>

        <div className="flex items-center justify-center">
          {/* Mobile Menu Toggle */}
          <div className="flex items-center justify-center h-full md:hidden">
            <button onClick={toggleMenu} className="text-gray-800">
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

          <ul className="items-center hidden space-x-6 text-gray-800 md:flex">

            {/* <li
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button onClick={(e) => {
                          const currentPath = window.location.pathname;
                          if (currentPath === "/") {
                            e.preventDefault(); // Prevent navigation
                            const servicesSection = document.getElementById("solutions");
                            if (servicesSection) {
                              servicesSection.scrollIntoView({ behavior: "smooth", block: "start" });
                            }
                          }
                        }} className="flex items-center   hover:cursor-pointer">
                Solutions
              </button>
           
            </li> */}
            <li>
              <Link
                href="/"
                onClick={(e) => {
                  const currentPath = window.location.pathname;
                  if (currentPath === "/") {
                    e.preventDefault();
                    const servicesSection = document.getElementById("solutions");
                    if (servicesSection) {
                      servicesSection.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                  }
                }}
                className="transition-all duration-300 hover:text-newprimary hover:cursor-pointer"
              >
               Solutions
              </Link>

            </li>
            <span className="hidden w-px h-5 transition-all duration-300 bg-gray-400 md:block"></span>
            <li>
              <Link
                href="/"
                onClick={(e) => {
                  const currentPath = window.location.pathname;
                  if (currentPath === "/") {
                    e.preventDefault();
                    const servicesSection = document.getElementById("services");
                    if (servicesSection) {
                      servicesSection.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                  }
                }}
                className="transition-all duration-300 hover:text-newprimary hover:cursor-pointer"
              >
                Services
              </Link>

            </li>

            <span className="hidden w-px h-5 transition-all duration-300 bg-gray-400 md:block"></span>
            <li>
              <Link
                href="/"
                className="transition-all duration-300 hover:text-newprimary hover:cursor-pointer"
              >
                About Us
              </Link>
            </li>
            <span className="hidden w-px h-5 transition-all duration-300 bg-gray-400 md:block"></span>
            <li>
              <Link
                href="/career"
                className="transition-all duration-300 hover:text-newprimary hover:cursor-pointer"
              >
                Careers
              </Link>
            </li>

            {/* Link to contact page */}
            <li>
              <Link
                href="/contact-us"
                className="px-4 py-2 text-sm text-gray-800 transition-all duration-300 border border-gray-400 rounded-full hover:cursor-pointer hover:bg-newprimary/80 hover:border-newprimary/80 hover:text-white"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Menu for smaller screens */}
      <motion.div
        className="md:hidden left-0 w-full bg-[#E8F6FC] overflow-hidden"
        initial={{ height: 0, scaleY: 0.8 }}
        animate={{
          height: menuOpen ? "auto" : 0,
          scaleY: menuOpen ? 1 : 0.8,
          opacity: menuOpen ? 1 : 0,
        }}
        exit={{
          height: 0,
          scaleY: 0.8,
          opacity: 0,
        }}
        transition={{ duration: 0.4 }}
      >
        <ul className="p-4 space-y-4">
      
          <DropdownMenu solutions={solutions} />

          <li className="flex items-center justify-between">
            <Link
              href="/services"
              className="block hover:text-newprimary"
              onClick={() => setMenuOpen(false)}
            >
              Services
            </Link>
            <FiPlus className="text-lg text-gray-800 cursor-pointer hover:text-newprimary" />
          </li>

          <li>
            <Link
              href="/"
              className="block hover:text-newprimary"
              onClick={() => setMenuOpen(false)}
            >
              About Us
            </Link>
          </li>

          <li>
            <Link
              href="/career"
              className="block hover:text-newprimary"
              onClick={() => setMenuOpen(false)}
            >
              Careers
            </Link>
          </li>

          <li>
            <Link
              href="/contact-us"
              className="block p-3 text-sm font-semibold text-gray-800 border border-gray-400 rounded-full hover:border-none hover:bg-blue-500 hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </motion.div>
    </header>
  );
};

export default Header;
