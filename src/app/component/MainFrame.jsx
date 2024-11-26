"use client";
import Image from "next/image";
import img1 from "../assets/image1.jpg";
import img2 from "../assets/image2.jpg";
import React, { useEffect, useState } from "react";

const headerdata = [
  {
    img: img2,
    video: "-8c96-448f-a957-d5bd7401b68e.mp4",
    heading: "Transforming Healthcare outcomes with data driven decisions",
    description:
      "Embark with us on a data-driven journey with high-performance strategic solutions.",
  },
  {
    img: img1,
    video: "video2.mp4",
    heading: "Navigating Healthcare complexity with clear & innovative solutions",
    description:
      "We provide end-to-end healthcare data solutions, enabling clients to fully harness their data for impactful and measureable improvements.",
  },
];

const MainFrame = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(false);
  const [fadeInText, setFadeInText] = useState(false);

  useEffect(() => {
    const cycleContent = setInterval(() => {
      setFadeIn(false);
      setFadeInText(false);

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % headerdata.length);
        setFadeIn(true);
        setFadeInText(true);
      }, 500);
    }, 5000);

    return () => clearInterval(cycleContent);
  }, []);

  return (
    <div className="relative w-full h-[350px] md:h-[850px] mt-14 mx-auto">
      <video
        key={currentIndex}
        className="absolute hidden object-cover w-full h-full md:block"
        autoPlay
        loop
        muted
      >
        <source
          src={headerdata[currentIndex].video}
          type="video/mp4"
        />
        <track
          src={headerdata[currentIndex].video}
          kind="subtitles"
          srcLang="en"
          label="English"
        />
        Your browser does not support the video tag.
      </video>

      <div className="absolute flex items-center justify-center w-full h-full md:hidden sm:px-16">
        <Image
          src={headerdata[currentIndex].img}
          alt={`Image ${currentIndex + 1}`}
          className={`w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            fadeIn ? "opacity-100" : "opacity-0"
          }`}
          width={500}
          height={350}
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-800 via-transparent to-transparent opacity-60"></div>
        <div className="absolute flex flex-col items-start justify-center w-full h-full px-4 my-5 sm:px-16 md:px-16">
          <div
            className={`w-full text-[24px] sm:text-[36px] md:text-[48px] lg:text-[60px] leading-[36px] sm:leading-[45px] md:leading-[55px] lg:leading-[66.48px] text-[#F3F4F6] font-quattrocento font-semibold capitalize transition-opacity duration-1000 ease-in-out ${
              fadeInText ? "opacity-100" : "opacity-0"
            }`}
          >
            {headerdata[currentIndex].heading}
          </div>
          <div
            className={`w-full text-[16px] sm:text-[20px] md:text-[28px] lg:text-[36px] leading-[24px] sm:leading-[28px] md:leading-[36px] lg:leading-[50px] text-[#F3F4F6] font-medium capitalize transition-opacity duration-1000 ease-in-out ${
              fadeInText ? "opacity-100" : "opacity-0"
            }`}
          >
            {headerdata[currentIndex].description}
          </div>
          <div className="mt-6 sm:mt-8">
            <button className="text-[#F3F4F6] text-lg font-medium bg-[#1A95CB] rounded-[30px] px-8 py-3">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      <div className="absolute flex flex-col items-center justify-center hidden w-full h-full md:block">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute flex flex-col items-center justify-center w-full h-full px-4 sm:px-16 md:px-16">
          <div
            className={`w-full text-[24px] sm:text-[36px] md:text-[48px] lg:text-[60px] leading-[36px] sm:leading-[45px] md:leading-[55px] lg:leading-[66.48px] text-[#F3F4F6] font-quattrocento font-semibold capitalize transition-opacity duration-1000 ease-in-out ${
              fadeInText ? "opacity-100" : "opacity-0"
            }`}
          >
            {headerdata[currentIndex].heading}
          </div>
          <div
            className={`w-full text-[16px] sm:text-[20px] md:text-[28px] lg:text-[36px] leading-[24px] sm:leading-[28px] md:leading-[36px] lg:leading-[50px] text-[#F3F4F6] font-medium capitalize transition-opacity duration-1000 ease-in-out ${
              fadeInText ? "opacity-100" : "opacity-0"
            }`}
          >
            {headerdata[currentIndex].description}
          </div>
          <div className="mt-6 sm:mt-8">
            <button className="text-[#F3F4F6] text-lg font-medium bg-[#1A95CB] rounded-[30px] px-8 py-3">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      <div className="absolute flex justify-center transform -translate-x-1/2 bottom-4 left-1/2">
        <div
          className={`w-6 h-6 flex items-center justify-center rounded-full 
      transition-colors duration-300`}
        >
          {currentIndex === 0 ? (
            <svg
              width="28"
              height="14"
              viewBox="0 0 28 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.8346 11.5612C10.7371 12.4636 9.31055 13.0068 7.7517 13C4.3116 12.9852 1.54004 10.3072 1.54004 6.99995C1.54004 3.68595 4.33406 0.999955 7.78041 0.999955C9.33052 0.999955 10.7483 1.54315 11.8396 2.44235C13.0881 3.47155 14.9148 3.46715 16.1646 2.43875C17.2612 1.53675 18.6865 0.993955 20.2441 0.999555C23.685 1.01235 26.4599 3.69116 26.4595 6.99955C26.4595 10.3132 23.6655 12.9996 20.2191 12.9996C18.6694 12.9996 17.252 12.4564 16.1608 11.5576C14.9115 10.5284 13.0843 10.5324 11.8342 11.5608L11.8346 11.5612Z"
                stroke="#FCF3ED"
                strokeMiterlimit="10"
              />
              <circle cx="20.5" cy="7" r="4" fill="#FCF3ED" />
            </svg>
          ) : (
            <svg
              width="28"
              height="14"
              viewBox="0 0 28 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_2322_684)">
                <path
                  d="M11.8346 11.5616C10.7371 12.464 9.31055 13.0072 7.7517 13.0004C4.3116 12.9856 1.54004 10.3076 1.54004 7.00044C1.54004 3.68644 4.33406 1.00044 7.78041 1.00044C9.33052 1.00044 10.7483 1.54364 11.8396 2.44284C13.0881 3.47204 14.9148 3.46764 16.1646 2.43924C17.2612 1.53724 18.6865 0.994443 20.2441 1.00004C23.685 1.01284 26.4599 3.69164 26.4595 7.00004C26.4595 10.3136 23.6655 13 20.2191 13C18.6694 13 17.252 12.4568 16.1608 11.558C14.9115 10.5288 13.0843 10.5328 11.8342 11.5612L11.8346 11.5616Z"
                  stroke="#FCF3ED"
                  strokeMiterlimit="10"
                />
                <circle cx="7.5" cy="7.00049" r="4" fill="#FCF3ED" />
              </g>
              <defs>
                <clipPath id="clip0_2322_684">
                  <rect
                    width="27"
                    height="14"
                    fill="white"
                    transform="translate(0.5 0.000488281)"
                  />
                </clipPath>
              </defs>
            </svg>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainFrame;
