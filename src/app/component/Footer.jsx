import React from "react";
import Image from "next/image"; // Import Image from Next.js
import logo from "../assets/8E_logo-A 1 copy.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-[#073948] text-white py-8">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap justify-center sm:justify-between">
          {/* Logo Section */}
          <div className="w-full mb-6 text-center sm:w-1/2 lg:w-1/3 sm:text-left">
            <div className="flex items-center justify-center mb-4 sm:justify-start">
              <Image
                src={logo} // Replace with your logo path
                alt="8th Element Logo"
                width={120} // Adjust the width as per your design
                height={40} // Adjust the height as per your design
              />
            </div>
            <p className="text-center sm:text-left">
              11th Floor, Sri Harsha Icon, Nanakramguda
              <br />
              Service Rd, Financial District,
              <br />
              Hyderabad - 500032, India
            </p>
            <p className="flex items-center justify-start space-x-2">
              <span className="w-2 h-2 mb-1">
                <FontAwesomeIcon icon={faLocationPin} />
              </span>
              <span>20 Eliott Dr, Monroe, NJ 08831</span>
            </p>

          </div>

          {/* Company Links */}
          <div className="flex flex-col gap-8 md:flex-row">
            <div className="mb-6 text-center sm:text-left">
              <h2 className="mb-4 text-lg font-bold">Company</h2>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Leadership Team
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Solutions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Services
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Links */}
            <div className="mb-6 ">
              <h2 className="mb-4 text-lg font-bold">Contact</h2>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* <span className="inline-block w-4 mr-2">&#x2709;</span> */}

          {/* Contact Info */}
          <div className="w-full mb-6 text-center sm:w-1/2 lg:w-1/3 sm:text-left">
            <h2 className="mb-4 text-lg font-bold">Get in Touch</h2>
            <p className="flex items-center justify-center sm:justify-start">
              <span className="inline-block w-4 h-4 mr-2">&#x260E;</span>
              +1 (470) 286-5319, +91 98481 26864
            </p>
            <p className="flex items-center justify-center mt-4 sm:justify-start">
              <span className="inline-block w-6 mr-2">&#x2709;</span>
              info@8thelement.ai
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-4 mt-8 text-center border-t border-white/20">
          <p>© 2024 8th Element Digital Inc.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
