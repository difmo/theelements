'use client'
import React from "react";
import Image from "next/image"; // Import Image from Next.js
import logo from "../assets/8E_logo-A 1 copy.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { LocationIcon } from "../assets/Icons/Icon1";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
const Footer = () => {
  const router = useRouter();
  return (
    <div>
      <footer className="bg-[#073948] text-white py-8">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap justify-center sm:justify-between">
            {/* Left Section */}
            <div className="w-full sm:w-[25%] mb-6 text-center sm:text-left">
              <div className="flex items-center justify-center mb-4 sm:justify-start">
                <Image
                  src={logo} // Replace with your logo path
                  alt="8th Element Logo"
                  width={202.11} // Adjust the width as per your design
                  height={48} // Adjust the height as per your design
                  className="custom-logo"
                />
              </div>
              <p className="text-center sm:text-left">
                11th Floor, Sri Harsha Icon, Nanakramguda
                <br />
                Service Rd, Financial District,
                <br />
                Hyderabad - 500032, India
              </p>
            </div>

            {/* Second Section */}
            <div className="w-full sm:w-[25%] mb-6 text-center sm:text-left">
              <div className="mb-6 ml-5">
                <h2 className="mb-4 text-lg font-bold">Company</h2>
                <ul className="space-y-2">
                  <li onClick={(e) => {
                  const currentPath = window.location.pathname;
                  if (currentPath === "/") {
                    e.preventDefault();
                    const servicesSection = document.getElementById("aboutus");
                    if (servicesSection) {
                      servicesSection.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                  } else {
                    e.preventDefault();
                    window.location.href = "/#solutions";
                  }
                }}>
                    <a href="#" className="hover:underline">
                      About Us
                    </a>
                  </li>
                  {/* <li>
                    <a href="#" className="hover:underline">
                      Leadership Team
                    </a>
                  </li> */}
                  <li onClick={(e) => {
                  const currentPath = window.location.pathname;
                  if (currentPath === "/") {
                    e.preventDefault();
                    const servicesSection = document.getElementById("solutions");
                    if (servicesSection) {
                      servicesSection.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                  } else {
                    e.preventDefault();
                    window.location.href = "/#solutions";
                  }
                }}>
                    <a href="#" className="hover:underline">
                      Solutions
                    </a>
                  </li>
                  <li onClick={(e) => {
                  const currentPath = window.location.pathname;
                  if (currentPath === "/") {
                    e.preventDefault();
                    const servicesSection = document.getElementById("services");
                    if (servicesSection) {
                      servicesSection.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                  } else {
                    e.preventDefault();
                    window.location.href = "/#solutions";
                  }
                }}>
                    <a href="#" className="hover:underline">
                      Services
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Third Section */}
            <div className="w-full sm:w-[25%] mb-6 text-center sm:text-left">
              <div className="mb-6">
                <h2 className="mb-4 text-lg font-bold">Contact</h2>
                <ul className="space-y-2">
                  <li>
                    <a href="#" onClick={(e) => {
                      e.preventDefault(); // Prevent default link behavior
                      router.push('/contact-us'); // Navigate to the Contact Us page
                    }} className="hover:underline">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={(e) => {
                      e.preventDefault(); // Prevent default link behavior
                      router.push('/career'); // Navigate to the Contact Us page
                    }} className="hover:underline">
                      Careers
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Fourth Section */}
            <div className="w-full sm:w-[25%] mb-6 text-center sm:text-left">
              <div className="mb-6">
                {/* <h2 className="mb-4 text-lg font-bold">Follow Us</h2> */}
                <ul className="space-y-2">
                  <li>
                    <p className="flex items-center justify-center sm:justify-start space-x-2">
                      <IoLocationOutline className="inline-block w-5 h-5 mb-2 mr-2 " />
                      <span className="text-sm text-white">
                        20 Eliott Dr, Monroe, NJ 08831
                      </span>
                    </p>
                  </li>

                  <li>
                    <p className="flex items-center justify-center sm:justify-start space-x-2">
                      <FiPhone className="inline-block w-5 h-5 mb-2 mr-2 " />
                      <span className="text-sm text-white">
                        +1 (470) 286-5319, +91 98481 26864
                      </span>
                    </p>
                  </li>

                  <li>
                    <p className="flex items-center justify-center sm:justify-start space-x-2">
                      <MdEmail className="inline-block w-5 h-5 mb-2 mr-2 " />
                      <span className="text-sm text-white">
                        info@8thelement.ai
                      </span>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="my-2 text-center bg-white border-t border-white/20">
        <p>© 2024 8th Element Digital Inc.</p>
      </div>
    </div>
  );
};

export default Footer;
