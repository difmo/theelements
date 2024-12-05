"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import images from "../assets/health-insurance1.png";
import { FaPlus, FaMinus } from "react-icons/fa"; // Importing the plus and minus icons

const cardData = [
  {
    title: "Healthcare-Only Focus",
    description:
      "Our exclusive focus on healthcare ensures deep expertise and solutions that address unique challenges.",
    image: images,
    backgroundImage: "url('cardsvg1.svg')", // SVG for this card
  },
  {
    title: "Healthcare-Only Focus",
    description:
      "Our exclusive focus on healthcare ensures deep expertise and solutions that address unique challenges.",
    image: images,
    backgroundImage: "url('cardsvg3.svg')", // SVG for this card
  },
  {
    title: "Healthcare-Only Focus",
    description:
      "Our exclusive focus on healthcare ensures deep expertise and solutions that address unique challenges.",
    image: images,
    backgroundImage: "url('cardsvg2.svg')", // SVG for this card
  },
  {
    title: "Healthcare-Only Focus",
    description:
      "Our exclusive focus on healthcare ensures deep expertise and solutions that address unique challenges.",
    image: images,
    backgroundImage: "url('cardsvg4.svg')", // SVG for this card
  },
];

const WhyPartners = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [isClient, setIsClient] = useState(false); // State to track if it's client-side

  useEffect(() => {
    setIsClient(true); // Set to true after component mounts (client-side)
  }, []);

  const toggleContent = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="relative px-2 w-full max-w-[1440px] mt-14 mx-auto py-8">
      <div className="flex items-center justify-center mt-8 mb-8">
        <div
          className="flex justify-center items-center text-center w-auto h-[33px] px-4 py-1 gap-3 rounded-[60px] border border-opacity-0"
          style={{
            fontFamily: "Lato",
            fontSize: "20px",
            fontWeight: 500,
            lineHeight: "25.1px",
            textAlign: "center",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
          }}
        >
          WHY PARTNERS WITH US
        </div>
      </div>

      <div className="grid justify-center grid-cols-1 gap-3 px-2 md:px-10 md:gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="box-border relative flex flex-col w-full gap-0 p-3 md:p-10 opacity-100 md:bg-gradient-to-r md:from-blue-100 md:to-white md:rounded-[60px] bg-white"
            style={{
              backgroundImage: isClient
                ? window.innerWidth >= 468
                  ? `${card.backgroundImage}, linear-gradient(to right, rgba(0, 123, 255, 0.2), rgba(255, 255, 255, 0.2))`
                  : 'none'
                : 'none',
              backgroundSize: isClient && window.innerWidth >= 400 ? '100% 110%' : 'none',
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* Mobile View: Strip Layout with Icon */}
            <div
              className="flex items-center justify-between cursor-pointer sm:hidden"
              onClick={() => toggleContent(index)}
            >
              <div className="flex items-center space-x-2">
                <div className="overflow-hidden rounded-full ">
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={40}
                    height={40}
                    priority
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-medium">{card.title}</h3>
              </div>
              <div className="text-xl text-gray-400">
                {expandedIndex === index ? "" : <FaPlus />}
              </div>
            </div>

            <div
              className={`mt-1 transition-all duration-700 ease-in-out ${
                expandedIndex === index
                  ? "opacity-100 scale-100 max-h-screen"
                  : "opacity-0 scale-95 max-h-0 overflow-hidden"
              }`}
            >
              <p className="font-lato text-base font-normal leading-[20.08px] text-left opacity-100">
                {card.description}
              </p>
            </div>

            {/* Desktop View: Full Layout with Image and Description */}
            <div className="hidden sm:block">
              <div className="relative mb-6">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={84}
                  height={84}
                  priority
                  className="top-[24px] left-[24px] p-[5.16px_7.74px]"
                />
              </div>
              <div className="mb-4">
                <h3 className="font-quattrocento text-2xl font-bold leading-[26.59px] text-left opacity-100">
                  {card.title}
                </h3>
              </div>
              <p className="font-lato text-base font-normal leading-[20.08px] text-left opacity-100">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyPartners;
