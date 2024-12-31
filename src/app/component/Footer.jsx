import React from "react";
import Image from "next/image"; // Import Image from Next.js
import logo from "../assets/8E_logo-A 1 copy.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { MdEmail } from "react-icons/md";
import { LocationIcon } from "../assets/Icons/Icon1";

const Footer = () => {
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

            {/* Third Section */}
            <div className="w-full sm:w-[25%] mb-6 text-center sm:text-left">
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

            {/* Fourth Section */}
            <div className="w-full sm:w-[25%] mb-6 text-center sm:text-left">
  <div className="mb-6">
    {/* <h2 className="mb-4 text-lg font-bold">Follow Us</h2> */}
    <ul className="space-y-2">
      <li>
        <p className="flex items-center justify-center sm:justify-start space-x-2">
          <LocationIcon className="inline-block w-4 h-4 mb-2 ml-7" />
          <span className="text-sm text-white">
            20 Eliott Dr, Monroe, NJ 08831
          </span>
        </p>
      </li>
      <li>
        <p className="flex items-center justify-center sm:justify-start">
          <span className="inline-block w-4 h-4 mb-2 mr-2">&#x260E;</span>
          +1 (470) 286-5319, +91 98481 26864
        </p>
      </li>
      <li>
        <p className="flex items-center justify-center sm:justify-start">
          <MdEmail className="inline-block w-4 h-4 mb-2 mr-2" />
          info@8thelement.ai
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

// <div className="flex flex-wrap justify-center sm:justify-between">

//             <div className="w-full sm:w-[40%] mb-6 text-center sm:text-left">
//               <div className="flex items-center justify-center mb-4 sm:justify-start">
//                 <Image
//                   src={logo}
//                   alt="8th Element Logo"
//                   width={202.11}
//                   height={48}
//                   className="custom-logo"
//                 />
//               </div>

//               <p className="text-center sm:text-left">
//                 11th Floor, Sri Harsha Icon, Nanakramguda
//                 <br />
//                 Service Rd, Financial District,
//                 <br />
//                 Hyderabad - 500032, India
//               </p>

//             </div>

//             <div className="w-full sm:w-[25%] mb-6 text-center sm:text-left">
//               <div className="mb-6">
//                 <h2 className="mb-4 text-lg font-bold">Company</h2>
//                 <ul className="space-y-2">
//                   <li>
//                     <a href="#" className="hover:underline">
//                       About Us
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#" className="hover:underline">
//                       Leadership Team
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#" className="hover:underline">
//                       Solutions
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#" className="hover:underline">
//                       Services
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>

//             <div className="w-full sm:w-[35%] mb-6 text-center sm:text-left">
//               <div className="mb-6">
//                 <h2 className="mb-4 text-lg font-bold">Contact</h2>
//                 <ul className="space-y-2">
//                   <li>
//                     <a href="#" className="hover:underline">
//                       Contact Us
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#" className="hover:underline">
//                       Careers
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             <div className="w-full sm:w-[40%]  text-center sm:text-left">
//               <div className="flex items-center justify-center mb-4 sm:justify-start">

//                 <p className="flex items-center space-x-2">
//                   <LocationIcon className="w-4 h-4 text-gray-500" />
//                   <span className="text-sm text-white">
//                     20 Eliott Dr, Monroe, NJ 08831
//                   </span>
//                 </p>
//               </div>

//             </div>

//             <div className="w-full sm:w-[30%]  text-center sm:text-left">
//               <p className="flex items-center justify-center sm:justify-start">
//                 <span className="inline-block w-4 h-4 mb-2 mr-2">&#x260E;</span>
//                 +1 (470) 286-5319, +91 98481 26864
//               </p>
//             </div>

//             <div className="w-full sm:w-[30%]  text-end sm:text-right">
//               <p className="flex items-center justify-center sm:justify-end">
//                 <MdEmail className="inline-block w-6 mr-2" />
//                 info@8thelement.ai
//               </p>
//             </div>
//           </div>
