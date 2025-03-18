"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import impactfulproject from "../../../public/career/impactfulproject.svg";
import careertrack from "../../../public/career/Career-Track.svg"; //
import worklifeblance from "../../../public/career/Worklife-Balance.svg";//
import event from "../../../public/career/Event.svg";
import rewards from "../../../public/career/Rewards.svg";
import team from "../../../public/career/team.svg";
import carrer from "../../../public/career/carrerbg.svg";
import bg8 from "../../../public/cardsvg5.svg";
import cardsvg1 from "../../../public/cardsvg1.svg";
import cardsvg2 from "../../../public/cardsvg2.svg";
import cardsvg3 from "../../../public/cardsvg3.svg";
import cardsvg4 from "../../../public/cardsvg4.svg";

import { FaPlus, FaMinus } from "react-icons/fa";
import Heading from "./Heading";

const benefits = [
  {
    icon: impactfulproject,
    title: "Be part of Impactful Projects ",
    description:
      "Be part of projects that improve patient care and deliver smarter solutions for payers and providers, creating real change in healthcare.",
    bgsvg: cardsvg1
  },
  {
    icon: careertrack,
    title: "Grow Your Career",
    description:
      "We offer opportunities to learn, tackle challenges, and advance your skills through mentorship, certifications, and hands-on work.",
    bgsvg: cardsvg2
  },
  {
    icon: team,
    title: "Inclusive Team Culture",
    description:
      "We value diverse ideas and foster a collaborative, supportive environment where everyone contributes.",
    bgsvg: cardsvg3
  },

  {
    title: "Flexible Work Environment",
    description:
      "Enjoy work-life balance with flexible policies, remote options, and a focus on your well-being.",
    icon: worklifeblance,
    bgsvg: cardsvg4
  },
];

const Benefits = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleContent = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <Heading title="Why Join 8th Element?" />
      <div className="  w-full max-w-[1440px]  mx-auto ">

        <div className="grid  justify-center grid-cols-1 gap-3 px-2 md:px-10 md:gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2">
          {benefits.map((card, index) => (
            <div
              key={index}
              className="box-border relative flex flex-col w-full gap-0 opacity-100 md:bg-gradient-to-r md:from-blue-100 md:to-white md:rounded-[60px] bg-white"

            >
              {/* <div className="absolute">
                <Image
                  src={bg8}
                  alt={"dfdf"}

                  priority
                />
              </div> */}
              {/* Mobile View: Strip Layout with Icon */}
              <div
                className="flex items-center justify-between cursor-pointer sm:hidden"
                onClick={() => toggleContent(index)}
              >
                <div className="flex items-center space-x-2">
                  <div className="overflow-hidden rounded-full ">
                    <Image
                      src={card.icon}
                      alt={card.title}
                      width={40}
                      height={40}
                      priority
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-medium font-lato text-[#CF7B41] ">{card.title}</h3>
                </div>
                <div className="text-xl text-gray-400">
                  {expandedIndex === index ? "" : <FaPlus />}
                </div>
              </div>

              <div
                className={`mt-1 transition-all duration-700 ease-in-out ${expandedIndex === index
                  ? "opacity-100 scale-100 max-h-screen"
                  : "opacity-0 scale-95 max-h-0 overflow-hidden"
                  }`}
              >
                <p className="font-lato text-base font-normal leading-[20.08px] text-left opacity-100">
                  {card.description}
                </p>
              </div>

              {/* Desktop View: Full Layout with Image and Description */}
              <div className="hidden relative sm:block">
                <div className="absolute "> 
                   <Image
                  src={card.bgsvg}
                  alt={card.title}  
            
                  priority
                
                /></div>
                <div className="relative mb-6">
                  <Image
                    src={card.icon}
                    alt={card.title}
                    width={84}
                    height={84}
                    priority
                    className="top-[24px] left-[24px] p-[5.16px_7.74px]"
                  />
                </div>
                <div className="mb-4">
                  <h3 className="font-lato text-[#CF7B41] text-2xl font-bold leading-[26.59px] text-left opacity-100">
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
    </>
  );
};

export default Benefits;
