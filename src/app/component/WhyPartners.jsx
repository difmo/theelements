"use client";
import React from "react";
import images from "../assets/health-insurance1.png";
import Image from "next/image";

const cardData = [
  {
    title: "Healthcare-Only Focus  kkjn",
    description: "Our exclusive focus on healthcare ensures deep expertise and solutions that address unique challenges.",
    image: images,
  },
  {
    title: "Healthcare-Only Focus",
    description: "Our exclusive focus on healthcare ensures deep expertise and solutions that address unique challenges.",
    image: images,
  },
  {
    title: "Healthcare-Only Focus",
    description: "Our exclusive focus on healthcare ensures deep expertise and solutions that address unique challenges.",
    image: images,
  },
  {
    title: "Healthcare-Only Focus",
    description: "Our exclusive focus on healthcare ensures deep expertise and solutions that address unique challenges.",
    image: images,
  },
];

const WhyPartners = () => {
  return (
    <div className="relative w-full max-w-[1440px] mt-14 mx-auto">
      <div className="flex justify-center items-center mb-8 mt-8">
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

      {/* Flex container for rows */}
      <div className="flex flex-wrap justify-center gap-8">
        {cardData.map((card, index) => (
          <div
          key={index}
          className="border-2 rounded-[50px] shadow-xl border-[#FFFFFF] 
          bg-[radial-gradient(100%_630.83%_at_0%_0%,_#FFFFFF_0%,_#E8F6FC_100%)]
          w-[648px] h-[248px] opacity-100 flex flex-col gap-0 box-border p-4"
        >
        
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
        ))}
      </div>
    </div>
  );
};

export default WhyPartners;
