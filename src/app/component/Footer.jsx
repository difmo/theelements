import React from "react";
import Image from "next/image"; // Import Image from Next.js
import logo from "../assets/8E_logo-A 1 copy.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { MdEmail } from "react-icons/md";
import { LocationIcon } from "../assets/Icons/Icon1";

const Footer = () => {
  return (
    // <footer className="bg-[#073948] text-white py-8">
    //   <div className="container px-4 mx-auto">
    //     <div className="flex flex-wrap justify-center sm:justify-between">
    //       {/* Logo Section */}
    //       <div className="w-full mb-6 text-center sm:w-1/2 lg:w-1/3 sm:text-left">
    //         <div className="flex items-center justify-center mb-4 sm:justify-start">
    //           <Image
    //             src={logo} // Replace with your logo path
    //             alt="8th Element Logo"
    //             width={120} // Adjust the width as per your design
    //             height={40} // Adjust the height as per your design
    //           />
    //         </div>
    //         <p className="text-center sm:text-left">
    //           11th Floor, Sri Harsha Icon, Nanakramguda
    //           <br />
    //           Service Rd, Financial District,
    //           <br />
    //           Hyderabad - 500032, India
    //         </p>
    //         <p className="flex items-center justify-start space-x-2">
    //           <span className="w-2 h-2 mb-1">
    //             <FontAwesomeIcon icon={faLocationPin} />
    //           </span>
    //           <span>20 Eliott Dr, Monroe, NJ 08831</span>
    //         </p>

    //       </div>

    //       {/* Company Links */}
    //       <div className="flex flex-col gap-8 md:flex-row">
    //         <div className="mb-6 text-center sm:text-left">
    //           <h2 className="mb-4 text-lg font-bold">Company</h2>
    //           <ul className="space-y-2">
    //             <li>
    //               <a href="#" className="hover:underline">
    //                 About Us
    //               </a>
    //             </li>
    //             <li>
    //               <a href="#" className="hover:underline">
    //                 Leadership Team
    //               </a>
    //             </li>
    //             <li>
    //               <a href="#" className="hover:underline">
    //                 Solutions
    //               </a>
    //             </li>
    //             <li>
    //               <a href="#" className="hover:underline">
    //                 Services
    //               </a>
    //             </li>
    //           </ul>
    //         </div>

    //         {/* Contact Links */}
    //         <div className="mb-6 ">
    //           <h2 className="mb-4 text-lg font-bold">Contact</h2>
    //           <ul className="space-y-2">
    //             <li>
    //               <a href="#" className="hover:underline">
    //                 Contact Us
    //               </a>
    //             </li>
    //             <li>
    //               <a href="#" className="hover:underline">
    //                 Careers
    //               </a>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>

    //       {/* <span className="inline-block w-4 mr-2">&#x2709;</span> */}

    //       {/* Contact Info */}
    //       <div className="w-full mb-6 text-center sm:w-1/2 lg:w-1/3 sm:text-left">
    //         <h2 className="mb-4 text-lg font-bold">Get in Touch</h2>
    //         <p className="flex items-center justify-center sm:justify-start">
    //           <span className="inline-block w-4 h-4 mr-2">&#x260E;</span>
    //           +1 (470) 286-5319, +91 98481 26864
    //         </p>
    //         <p className="flex items-center justify-center mt-4 sm:justify-start">
    //         <MdEmail className="inline-block w-6 mr-2" />
    //           info@8thelement.ai
    //         </p>
    //       </div>
    //     </div>

    //     {/* Bottom Section */}
    //     {/* <div className="pt-4 mt-8 text-center bg-white border-t border-white/20">
    //       <p>© 2024 8th Element Digital Inc.</p>
    //     </div> */}
    //   </div>
    // </footer>
    <div>
      <footer className="bg-[#073948] text-white py-8">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap justify-center sm:justify-between">
            {/* Left Section */}
            <div className="w-full sm:w-[40%] mb-6 text-center sm:text-left">
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
              {/* <p className="flex items-center justify-start space-x-2">
          <span className="w-2 h-2 mb-1">
            <FontAwesomeIcon icon={faLocationPin} />
          </span>
          <span>20 Eliott Dr, Monroe, NJ 08831</span>
        </p> */}
            </div>

            {/* Middle Section */}
            <div className="w-full sm:w-[25%] mb-6 text-center sm:text-left">
              <div className="mb-6">
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
            </div>

            {/* Right Section */}
            <div className="w-full sm:w-[35%] mb-6 text-center sm:text-left">
              <div className="mb-6">
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
            <div className="w-full sm:w-[40%]  text-center sm:text-left">
              <div className="flex items-center justify-center mb-4 sm:justify-start">
                {/* <Image
    src={logo} // Replace with your logo path
    alt="8th Element Logo"
    width={202.11} // Adjust the width as per your design
    height={48} // Adjust the height as per your design
    className="custom-logo"
  /> */}
                <p className="flex items-center space-x-2">
                  <LocationIcon className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-white">
                    20 Eliott Dr, Monroe, NJ 08831
                  </span>
                </p>
              </div>

              {/* <p className="text-center sm:text-left">
          11th Floor, Sri Harsha Icon, Nanakramguda
          <br />
          Service Rd, Financial District,
          <br />
          Hyderabad - 500032, India
        </p> */}
              {/* <p className="flex items-center justify-start space-x-2">
          <span className="w-2 h-2 mb-1">
            <FontAwesomeIcon icon={faLocationPin} />
          </span>
          <span>20 Eliott Dr, Monroe, NJ 08831</span>
        </p> */}
            </div>

            {/* Middle Section */}
            <div className="w-full sm:w-[30%]  text-center sm:text-left">
              <p className="flex items-center justify-center sm:justify-start">
                <span className="inline-block w-4 h-4 mb-2 mr-2">&#x260E;</span>
                +1 (470) 286-5319, +91 98481 26864
              </p>
            </div>

            {/* Right Section */}
            <div className="w-full sm:w-[30%]  text-end sm:text-right">
              <p className="flex items-center justify-center sm:justify-end">
                <MdEmail className="inline-block w-6 mr-2" />
                info@8thelement.ai
              </p>
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
