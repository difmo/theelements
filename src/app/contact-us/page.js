"use client";

import React from "react";
import OurContact from "../component/OurContact";

const Contact = () => {
  return (
    <>
      <div className="bg-primarybg/70 py-8 pt-12 md:py-12 px-4 md:px-8">
        <div className="container  mx-auto text-gray-700">
          <div className="w-full bg-white/40 rounded-full p-5  lg:p-20 text-center">
            <h1 className="text-2xl md:text-4xl  text-secondary-600 font-bold mb-8">
              Contact Us
            </h1>
            <p className="text-sm md:text-lg mb-8">
              Have questions or need assistance? We're here to help! Reach out to
              us through any of the following channels.
            </p>

          </div>
          <OurContact />
        </div>
      </div>
    </>
  );
};

export default Contact;
