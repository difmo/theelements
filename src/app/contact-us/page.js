"use client";

import React from "react";
import OurContact from "../component/OurContact";
import Image from "next/image";
import logo from '../assets/Icons/horizontallogo.svg'

const Contact = () => {
  return (
    <>
      <div className=" relative py-8 pt-12 md:py-12 px-4 md:px-8">
        <div className="container mx-auto text-gray-700">
          <div className="w-full bg-white/40 rounded-sm p-5 lg:p-20 text-center relative z-10">
            {/* Background image container */}
            <div className="absolute left-[800px] inset-0  overflow-hidden z-0">
              <Image
                src={logo}
                alt="Logo"
                className=" object-left w-[570px] mx-auto"
                layout="intrinsic"
                priority
              />
            </div>
            <h1 className="text-2xl md:text-4xl text-secondary-600 font-bold mb-8 relative z-10">
              Contact Us
            </h1>
            <p className="text-sm md:text-lg mb-8 relative z-10">
              Have questions or need assistance? We&apos;re here to help! Reach out to
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
