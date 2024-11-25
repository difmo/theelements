"use client";
import React, { useState } from "react";
import images from "../assets/health-insurance1.png";
import Image from "next/image";
import { FaPlus, FaMinus } from "react-icons/fa"; // Importing the plus and minus icons

const cardData = [
  {
    title: "Healthcare-Only Focus",
    description:
      "Our exclusive focus on healthcare ensures deep expertise and solutions that address unique challenges.",
    image: images,
  },
  {
    title: "Healthcare-Only Focus",
    description:
      "Our exclusive focus on healthcare ensures deep expertise and solutions that address unique challenges.",
    image: images,
  },
  {
    title: "Healthcare-Only Focus",
    description:
      "Our exclusive focus on healthcare ensures deep expertise and solutions that address unique challenges.",
    image: images,
  },
  {
    title: "Healthcare-Only Focus",
    description:
      "Our exclusive focus on healthcare ensures deep expertise and solutions that address unique challenges.",
    image: images,
  },
];

const WhyPartners = () => {
  // State to manage expanded/collapsed content for mobile
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleContent = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="relative px-2 w-full max-w-[1440px] mt-14 mx-auto py-8">
      <div className="flex items-center justify-center mt-8 mb-8">
        <div
          className="flex justify-center items-center text-center w-auto h-[33px] px-4 py-1 gap-3 rounded-[60px] border border-opacity-0"
          style={{
            fontFamily: "Mulish",
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

      {/* Responsive Grid Layout */}
      <div className="grid justify-center grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="relative border-2 rounded-[50px] shadow-xl border-[#FFFFFF] 
            bg-[radial-gradient(100%_630.83%_at_0%_0%,_#FFFFFF_0%,_#E8F6FC_100%)]
            w-full max-w-[648px]  opacity-100 flex flex-col gap-0 box-border p-4"
          >
            {/* Mobile View: Strip Layout with Icon */}
            <div className="flex items-center justify-between block cursor-pointer sm:hidden" onClick={() => toggleContent(index)}>
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 overflow-hidden rounded-full">
                  <Image
                    src={card.image}
                    alt={card.title}
                    layout="intrinsic"
                    width={40}
                    height={40}
                    priority
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-medium">{card.title}</h3>
              </div>
              <div className="text-xl">
                {expandedIndex === index ? <FaMinus /> : <FaPlus />}
              </div>
            </div>

            {/* Mobile Content (Expanded on click) */}
            {expandedIndex === index && (
              <div className="mt-4">
                <p className="font-mulish text-base font-normal leading-[20.08px] text-left opacity-100">
                  {card.description}
                </p>
              </div>
            )}

            {/* Desktop View: Regular Grid Layout */}
            <div className="hidden sm:block">
              <div className="relative mb-6">
                <Image
                  src={card.image}
                  alt={card.title}
                  layout="intrinsic"
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
              <p className="font-mulish text-base font-normal leading-[20.08px] text-left opacity-100">
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
