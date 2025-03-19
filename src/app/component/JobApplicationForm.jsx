import React from "react";
import Heading2 from "./Headding2";
import Image from "next/image";
import img2 from '../assets/Icons/contactleft.svg'
import img3 from '../assets/Icons/contactright.svg'

const JobApplicationForm = () => {
  return (
    <div className="flex relative flex-col justify-center items-center min-h-screen bg-primarybg">
      <Heading2 title="Job Application Form" />
      <div className="absolute  right-0 bottom-0">
        <Image
          src={img2}
          alt="Element Image"
        />
      </div>
      <div className="absolute  left-0 top-0">
        <Image
          src={img3}
          alt="Element Image"
        />
      </div>

      <div className="w-full max-w-lg p-8 relative z-10">
        <div className="flex flex-col items-center mb-6">

        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Name</label>
            <input
              type="text"
              placeholder="Full name"
              className="mt-1 w-full bg-primarybg p-3 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              placeholder="email@address.com"
              className="mt-1 w-full bg-primarybg p-3 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Resume</label>
            <div className="mt-1 w-full p-6 border border-primary-200 rounded-lg flex items-center justify-center bg-primarybg cursor-pointer">
              <span className="text-sectext-secondary-600">Drop your file here or browse</span>
            </div>
          </div>
          <div>
            <label className="block text-gray-700 font-medium">LinkedIn Profile</label>
            <input
              type="url"
              placeholder="https://www.linkedin.com/in/you"
              className="mt-1 w-full bg-primarybg p-3 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Desired Compensation</label>
            <input
              type="text"
              placeholder="Enter compensation"
              className="mt-1 w-full bg-primarybg p-3 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="px-4 py-3 my-4  w-full text-sm  transition-all duration-300 rounded-full hover:cursor-pointer bg-newprimary/80 hover:border-secondary-600 text-white hover:bg-secondary-600 "
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobApplicationForm;
