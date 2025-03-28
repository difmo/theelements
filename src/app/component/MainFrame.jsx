"use client";
import Image from "next/image";
import img1 from "../assets/images/headerimage1.png";
import img2 from "../assets/images/headerimage2.png";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

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
    heading: "Navigating Healthcare and complexity with clear & innovative solutions",
    description:
      "We provide end-to-end healthcare data solutions, enabling clients to fully harness their data for impactful and measurable improvements.",
  },
];

const MainFrame = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animateText, setAnimateText] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const cycleContent = setInterval(() => {
      setAnimateText(false); // Reset animation state
      setTimeout(() => setCurrentIndex((prevIndex) => (prevIndex + 1) % headerdata.length), 1000); // Wait for text to slide out
    }, 5000);

    return () => clearInterval(cycleContent);
  }, []);

  useEffect(() => {
    setTimeout(() => setAnimateText(true), 100); // Trigger slide-in animation after slide change
  }, [currentIndex]);

  return (
    <div className="relative w-full h-[350px] md:h-[850px] mx-auto overflow-hidden">
      {/* Wrapper for the sliding effect */}
      <div
        className="absolute inset-0 flex transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: "transform 1s ease-in-out",
        }}
      >
        {headerdata.map((data, index) => (
          <div key={index} className="flex-none w-full h-full relative">
            {/* Video for desktop view */}
            <video
              className="hidden object-cover transition-opacity duration-1000 ease-in-out w-full h-full md:block"
              autoPlay
              loop
              muted
            >
              <source src={data.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Overlay on video */}
            <div className="hidden md:block absolute inset-0 bg-black opacity-50"></div>
            <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-blue-800 via-transparent to-transparent opacity-60"></div>

            {/* Image for mobile view */}
            <div className="absolute inset-0 flex items-center justify-center md:hidden">
              <Image
                src={data.img}
                alt={`Image ${index + 1}`}
                className="object-cover w-full h-full transition-opacity duration-1000 ease-in-out"
                width={500}
                height={350}
              />
              {/* Overlay on image */}
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-blue-800 via-transparent to-transparent opacity-60"></div>
            </div>

            {/* Text Content */}
            <div
              className={`absolute inset-0 flex flex-col items-center justify-center w-full px-4 sm:px-16 md:px-16 text-center transition-all duration-1000 ease-in-out ${animateText ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
                }`}
            >
              <div className="text-[24px] sm:text-[36px] md:text-[48px] lg:text-[60px] leading-[36px] sm:leading-[45px] md:leading-[55px] lg:leading-[66.48px] text-[#F3F4F6] font-lato capitalize">
                {data.heading}
              </div>
              <div className="text-[16px] sm:text-[20px] md:text-[28px] lg:text-[36px] leading-[24px] sm:leading-[28px] md:leading-[36px] lg:leading-[50px] text-[#F3F4F6] font-medium capitalize mt-2">
                {data.description}
              </div>
              <div className="mt-6 sm:mt-8">
                {/* <button className="text-[#F3F4F6] text-lg font-medium bg-[#1A95CB] rounded-[30px] px-8 py-3">
                  Contact Us
                </button> */}
                <a href="#" onClick={(e) => {
                  e.preventDefault(); // Prevent default link behavior
                  router.push('/contact-us'); // Navigate to the Contact Us page
                }} className="hover:underline">
                  <button
                    className="text-[#F3F4F6] text-lg font-medium bg-[#1A95CB] rounded-[30px] px-8 py-3"
                    onClick={() => {
                      router.push('/contact-us');
                    }}
                  >
                    Contact Us
                  </button>
                </a>


              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {headerdata.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`cursor-pointer w-3 h-3 rounded-full ${currentIndex === index ? "bg-blue-500" : "bg-gray-300"
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default MainFrame;


