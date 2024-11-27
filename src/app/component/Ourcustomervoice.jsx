"use client";
import React, { useState, useEffect } from "react";
import img from "../assets/prifileimg.png";
import img2 from "../assets/profileimg2.png";
import Image from "next/image";
import { OurCustomerVoiceBottom, OurCustomerVoiceTop, SlideIndicatorLeft, SlideIndicatorRight } from "../assets/Icons/Icon1";
import Heading from "./Heading";
import { motion } from "framer-motion"; // Import motion from framer-motion

const testimonials = [
  {
    text: `"8th Element team showed deep healthcare expertise and delivered solutions that enhanced our data usability by over 50%."`,
    author: "- Chief Data Office, Leading East Coast Plan",
    image: img,
  },
  {
    text: `"Partnering with 8th Element has seamlessly enhanced our care delivery and optimized operations with their data-driven approach and commitment to quality."`,
    author: "- CMD, Leading Hospital In Atlanta",
    image: img2,
  },
];

const OurCustomerVoice = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-[#383C44] p-2 md:p-16">
      <Heading title={"OUR CUSTOMER VOICE"} />
      <div className="p-6 overflow-hidden text-white lg:py-36">
        {/* Background Icons */}
        {activeTestimonial % 2 === 0 ? (
          <div className="absolute top-0 left-4 md:top-0 md:left-6 opacity-10">
            <OurCustomerVoiceTop />
          </div>
        ) : (
          <div className="absolute bottom-0 right-0 md:bottom-0 md:right-0 opacity-10">
            <OurCustomerVoiceBottom />
          </div>
        )}

        {/* Testimonial Section with motion */}
        <motion.div
          key={activeTestimonial} // This will trigger the animation when the testimonial changes
          initial={{ opacity: 0, x: -50 }} // Starting position off-screen and faded
          animate={{ opacity: 1, x: 0 }} // End position with full opacity and centered
          exit={{ opacity: 0, x: 50 }} // Transition to the right before the next testimonial comes
          transition={{ type: "spring", stiffness: 300, damping: 30 }} // Customize the motion transition
          className="flex flex-col items-center text-center md:flex-row md:items-start"
        >
          <div className="mb-6 md:mb-0">
            <div className="w-[120px] h-[120px] md:w-[180px] md:h-[180px] rounded-full overflow-hidden">
              <Image
                src={testimonials[activeTestimonial].image}
                alt={testimonials[activeTestimonial].author}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="md:ml-6">
            <h2 className="text-xl font-semibold md:text-3xl lg:text-4xl">
              {testimonials[activeTestimonial].text}
            </h2>
            <p className="my-4 text-sm font-light md:text-lg">
              {testimonials[activeTestimonial].author}
            </p>
          </div>
        </motion.div>

        {/* Pagination Indicator */}
        <div className="absolute flex justify-center transform -translate-x-1/2 bottom-4 left-1/2">
          <div
            className={`w-6 h-6 flex items-center justify-center rounded-full transition-colors duration-300`}
          >
            {activeTestimonial === 0 ? <SlideIndicatorLeft /> : <SlideIndicatorRight />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCustomerVoice;
