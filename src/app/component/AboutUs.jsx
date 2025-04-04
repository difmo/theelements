import React from "react";
import Heading from "./Heading";
import img from '../assets/weserve3.jpg'
import Image from "next/image";
import aboutusimg from "../assets/images/aboutus.svg";
import aboutus from "../assets/images/aboutusimg.jpeg";

const AboutUs = () => {
  return (
    <div className="w-full">
      {/* Header Section */}
      <div className="relative w-full h-64 text-white flex items-center justify-center">
        <Heading title={"About Us"}/>
      </div>
      
      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 relative">
          <Image
            src={aboutus}
            alt="Business Meeting"
            className="  w-[500px]  "
          />
        </div>
        {/* <div className=" border-l w-2 hidden md:flex rounded-full bg-primary-900/40  h-[500px]"></div> */}
        <div className="md:w-1/2">
          <h2 className="text-xl font-bold text-primary-900 font-quattrocento text-secborder-secondary-600 mb-2 ">About 8thElement</h2>
          <h1 className="text-xl text-primary-900/80 font-bold mb-4 font-mulish">
          At 8th Element, we harness technology to transform healthcare. Our mission is to help organizations streamline operations, improve patient care, and make informed decisions through innovation. With deep industry expertise, we deliver practical, forward-thinking solutions that drive efficiency and support growth. 


          </h1>
          <p className="text-gray-600 mb-6  font-mulish">
          We believe technology has the power to revolutionize healthcare, and we are dedicated to bridging the gap between the two—empowering our clients to innovate, scale, and lead in a rapidly evolving world.


          </p>
          <p className="text-gray-600 mb-6  font-mulish">
          Thank you for being part of this journey. Together, we can shape the future of healthcare.
          </p>
          {/* <button className= "bg-secondary-600 border-secondary-600 text-white px-6 py-2 font-mulish rounded-lg font-bold hover:bg-orange-600 transition">
            Read More
          </button> */}
          
          {/* <div className="flex justify-start space-x-8 mt-8">   
            <div className="border border-gray-300 rounded-xl p-3 ">
              <h2 className="  text-3xl font-bold text-gray-600 font-mulish">500+</h2>
              <p className="text-gray-600 font-mulish">Satisfied Customers</p>
            </div>
            <div className="border border-gray-300 rounded-xl p-3 ">
              <h2 className="text-3xl font-bold text-gray-700 font-mulish">10+</h2>
              <p className="text-gray-600 font-mulish">Years Experience</p>
            </div>
            <div className="border border-gray-300 rounded-xl p-3 ">
              <h2 className="text-3xl font-bold text-gray-700 font-mulish">40+</h2>
              <p className="text-gray-600 font-mulish">Projects Completed</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;