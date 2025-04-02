import React from "react";
import Heading from "./Heading";
import img from '../assets/weserve3.jpg'
import Image from "next/image";
import aboutusimg from "../assets/images/aboutus.svg";

const AboutUs = () => {
  return (
    <div className="w-full">
      {/* Header Section */}
      <div className="relative w-full h-64 text-white flex items-center justify-center">
        <Heading title={"About Us"}/>
      </div>
      
      {/* Content Section */}
      <div className="max-w-6xl mx-auto p-8 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 relative">
          <Image
            src={aboutusimg}a
            alt="Business Meeting"
            className="  w-[500px]  "
          />
        </div>
        <div className=" border-l w-1 rounded-full bg-slate-400 border-gray-400 h-[500px]"></div>
        <div className="md:w-1/2">
          <h2 className="text-xl font-bold font-quattrocento text-secborder-secondary-600 mb-2 ">Who We Are</h2>
          <h1 className="text-3xl text-primary-900 font-bold mb-4 font-mulish">
            Your Trusted Advisors In Business Success.
          </h1>
          <p className="text-gray-600 mb-6  font-mulish">
            At Potensial, we embrace the challenges and complexities that businesses face
            in today’s world. We offer innovative solutions to help our clients
            confidently move forward.
          </p>
          <button className= "bg-secondary-600 border-secondary-600 text-white px-6 py-2 font-mulish rounded-lg font-bold hover:bg-orange-600 transition">
            Read More
          </button>
          
          <div className="flex justify-start space-x-8 mt-8">   
            <div>
              <h2 className="text-3xl font-bold text-gray-600 font-mulish">500+</h2>
              <p className="text-gray-600 font-mulish">Satisfied Customers</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-700 font-mulish">10+</h2>
              <p className="text-gray-600 font-mulish">Years Experience</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-700 font-mulish">40+</h2>
              <p className="text-gray-600 font-mulish">Projects Completed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;