'use client';

import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Image from 'next/image'; // Import Image from Next.js
import img1 from '../assets/oursuccess1.png';
import img2 from '../assets/oursuccess2.png';
import img3 from '../assets/oursuccess3.png';

const OurSuccessStory = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const sections = [
    {
      title: "Improved Patient Outcomes With Predictive Analytics",
      description:
        "Using predictive analytics, a leading hospital in Virginia reduced hospital readmissions by 25%.",
      image: img1,
    },
    {
      title: "Optimized Diagnostics With AI",
      description:
        "AI-powered solutions improved diagnostic accuracy by 30% at a healthcare center.",
      image: img2,
    },
    {
      title: "Enhanced Patient Experience",
      description:
        "An integrated telehealth solution enhanced patient satisfaction by 50%.",
      image: img3,
    },

  ];

  return (
    <div className="mx-12"> {/* Centering the whole content */}
     <div className="flex items-center justify-center w-full mt-12">
        <div
          className="flex justify-center items-center text-center w-[296px] h-[33px] px-4 py-1 gap-3 rounded-[60px] border border-opacity-0"
          style={{
            fontFamily: "Mulish", // Custom font family
            fontSize: "20px", // Custom font size
            fontWeight: 500, // Custom font weight
            lineHeight: "25.1px", // Custom line height
            textAlign: "center", // Custom text alignment
            textUnderlinePosition: "from-font", // Custom text underline position
            textDecorationSkipInk: "none", // Custom text decoration skip ink
          }}
        >
            OUR SUCCESS STORIES
        </div>
      </div>
    <div className="flex items-center justify-center h-screen py-8 ">
      <div className="flex w-full h-full p-4 space-x-4 overflow-x-auto">
        {sections.map((section, index) => {
          const isActive = activeIndex === index;

          const style = useSpring({
            flex: isActive ? 3 : 1,
            config: { tension: 220, friction: 5 },
          });

          return (
            <animated.div
              key={index}
              style={style}
              className={`rounded-[100px] cursor-pointer bg-white overflow-hidden transition-all`}
              onClick={() => setActiveIndex(index)}
            >
              <div
                className={`relative w-full h-full ${isActive ? "flex" : "flex w-full items-center justify-center"}`}
              >
                <Image
                  src={section.image}
                  alt={section.title}
                  layout="fill"
                  objectFit="cover" 
                />
                {isActive && (
                  <div className="absolute inset-0 right-0 flex flex-col justify-center p-4 text-white bg-gray-900 bg-opacity-50">
                    <h3 className="text-lg font-bold">{section.title}</h3>
                    <p className="mt-2 text-sm">{section.description}</p>
                  </div>
                )}
              </div>
            </animated.div>
          );
        })}
      </div>
    </div>
    </div>
  );
};

export default OurSuccessStory;
