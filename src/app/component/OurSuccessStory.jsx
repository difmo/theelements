'use client';

import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Image from 'next/image'; // Import Image from Next.js
import img1 from '../assets/oursuccess1.png';
import img2 from '../assets/oursuccess2.png';
import img3 from '../assets/oursuccess3.png';

const OurSuccessStory = () => {
  const [activeIndex, setActiveIndex] = useState(0);
// sdfsdfs
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
    <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-16">
      {/* Title Section */}
      <div className="flex items-center justify-center w-full mt-8 sm:mt-12">
        <div
          className="flex items-center justify-center gap-3 px-4 py-2 text-center border border-opacity-0 rounded-full"
          style={{
            fontFamily: "Mulish",
            fontSize: "1.25rem",
            fontWeight: 500,
            lineHeight: "1.5rem",
          }}
        >
          OUR SUCCESS STORIES
        </div>
      </div>

      {/* Success Stories Section */}
      <div className="flex items-center justify-center py-8">
        <div className="flex w-full h-full p-4 space-x-4 overflow-x-auto sm:space-x-6 lg:space-x-8">
          {sections.map((section, index) => {
            // UseSpring Hook: Manage animation for each section
            const style = useSpring({
              flex: activeIndex === index ? 3 : 1,
              config: { tension: 220, friction: 20 },
            });

            return (
              <animated.div
                key={index}
                style={style}
                className="overflow-hidden transition-all bg-white cursor-pointer rounded-3xl"
                onClick={() => setActiveIndex(index)}
              >
                <div className={`relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px]`}>
                  <Image
                    src={section.image}
                    alt={section.title}
                    layout="fill"
                    objectFit="cover"
                  />
                  {activeIndex === index && (
                    <div className="absolute inset-0 right-0 flex flex-col justify-center p-4 text-white bg-gray-900 bg-opacity-50">
                      <h3 className="text-lg font-bold sm:text-xl md:text-2xl">{section.title}</h3>
                      <p className="mt-2 text-sm sm:text-base">{section.description}</p>
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
