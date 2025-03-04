"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import Image from "next/image"; // Import Image from Next.js
import img1 from "../assets/oursuccess1.png";
import img2 from "../assets/oursuccess2.png";
import img3 from "../assets/oursuccess3.png";
import Heading from "./Heading";
import { sanityClient } from "@/sanity";

const OurSuccessStory = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const [error, setError] = useState(null);  
  const [success, setSuccess] = useState([]);
  const scrollContainerRef = useRef(null); // Ref for the scroll container

  const sections = [
    {
      title: "Improved Patient Outcomes With Predictive Analytics",
      description:
        "Using predictive analytics, a leading hospital in Virginia reduced hospital readmissions by 25%.",
      image: img2,
    },
    {
      title: "Enhanced Operational Efficiency through Data Integration",

      description:
        "A provider reduced administrative costs by 30% and boosted patient throughput by 20% with streamlined data integration.",
      image: img1,
    },
    {
      title: "Optimized Resource Allocation with Real-Time Analytics",

      description:
        "A healthcare network used real-time data to cut wait times by 15% and boost patient satisfaction by 10%.",
      image: img3,
    },
  ];


   
    useEffect(() => {
      const fetchSuccessStory = async () => {
        try {
          const result = await sanityClient.fetch(
            `*[_type == "successStory"]{
              title,
              "image": image.asset->url,
              description
            }`
          );
          setSuccess(result);
        } catch (err) {
          console.error("Failed to fetch success:", err);
          setError("Failed to load data. Please try again later.");
        }
      };
  
      fetchSuccessStory();
    }, []);
    // console.log(success, "success");


  const autoScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const sectionWidth = container.firstChild.offsetWidth;
      const currentScroll = container.scrollLeft;

      const nextScroll = currentScroll + sectionWidth;

      if (nextScroll >= container.scrollWidth) {
        container.scrollLeft = 0;
      } else {
        container.scrollLeft = nextScroll;
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(autoScroll, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-16 flex flex-col justify-center items-center ">
      <Heading title={" OUR SUCCESS STORIES"} />

      <div className="flex items-center justify-center py-8 container">
        <div className="hidden w-full h-full p-4 space-x-4 overflow-x-auto lg:flex">
          {success.map((section, index) => {
            return (
              <motion.div
                key={index}
                initial={{ flex: 1 }}
                animate={{ flex: activeIndex === index ? 5 : 1 }}
                // transition={{ type: "spring", stiffness: 180, damping: 10 }}
                className={`overflow-hidden  ${
                  activeIndex === index ? "rounded-[100px]" : "rounded-full"
                } bg-white cursor-pointer`}
                onClick={() => setActiveIndex(index)}
              >
                <div className={`flex w-full h-[500px]`}>
                  <div
                    className={`relative w-full h-full ${
                      activeIndex === index ? "opacity-100" : ""
                    } transition-all duration-300`}
                    style={{ zIndex: 1 }} 
                  >
                    <Image
                      src={section.image}
                      alt={section.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {activeIndex !== index && (
                    <div className="absolute inset-0 opacity-50 z-10rounded-t-lg sm:rounded-l-lg sm:rounded-t-none" />
                  )}

                  {/* Text Content */}
                  {activeIndex === index && (
                    <div className="flex flex-col mb-24 justify-end w-[500px] px-6 py-4 text-left bg-white">
                      <h3 className="text-lg text-[#CF7B41] font-bold sm:text-xl md:text-2xl">
                        {section.title}
                      </h3>
                      <p className="mt-2 text-sm sm:text-base">
                        {section.description}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        <div
          ref={scrollContainerRef} // Attach the ref to the container
          className="flex w-full h-full gap-3 p-4 overflow-x-auto lg:hidden scroll-smooth scrollbar-hidden"
        >
          {sections.map((section, index) => {
            return (
              <div
                key={index}
                className="overflow-hidden bg-white rounded-lg w-[300px] sm:w-[300px] lg:w-[350px] flex-shrink-0"
              >
                <div className="flex flex-col items-center">
                  <div className="relative w-full h-48 sm:h-64">
                    <Image
                      src={section.image}
                      alt={section.title}
                      fill
       
                      className="rounded-t-lg object-cover sm:rounded-l-lg sm:rounded-t-none"
                    />
                  </div>

                  <div className="flex flex-col justify-center w-full p-4 bg-white">
                    <h3 className="text-lg text-[#CF7B41] font-bold sm:text-xl">
                      {section.title}
                    </h3>
                    <p className="mt-2 text-sm sm:text-base">
                      {section.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurSuccessStory;
