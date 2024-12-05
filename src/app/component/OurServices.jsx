"use client";

import React, { useState } from "react";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { MdNorthEast, MdOutlineScore } from "react-icons/md";
import { generateRandomString } from "./utils/random_string";
import {
  FaAd,
  FaArrowUp,
  FaHandHoldingMedical,
  FaLongArrowAltLeft,
  FaRobot,
} from "react-icons/fa";
import {
  Unleash,
  Unlock,
  Elevate,
  BuildZero,
  UnLockIcon1,
  UnLockIcon2,
  UnLockIcon3,
  UnLockIcon4,
  Buildzero1Icon,
  Buildzero2Icon,
  Buildzero3Icon,
  Buildzero4Icon,
  Elevate1Icon,
  Elevate2Icon,
  Elevate3Icon,
  Elevate4Icon,
  UnleashIcon1,
  UnleashIcon2,
  UnleashIcon3,
  UnleashIcon4,
  Unlock2,
  Unleash2,
  BuildZero2,
  Elevate2,
} from "../assets/Icons/Icon1";
import Heading from "./Heading";

const OurServices2 = () => {
  const [activeTab, setActiveTab] = useState(1); // Default active tab is 1
  const [tabOrder, setTabOrder] = useState([0, 1, 2, 3]); // Initial tab order (show all tabs)
  const [expandedTab, setExpandedTab] = useState(null); // To manage expanded state on small devices

  const leftContainerContent = [
    {
      key: "1",
      icon2: <Unlock2 />,
      icon: <Unlock />,

      leftIcon: [
        <UnLockIcon1 key={generateRandomString()} />,
        <UnLockIcon2 key={generateRandomString()} />,
        <UnLockIcon3 key={generateRandomString()} />,
        <UnLockIcon4 key={generateRandomString()} />,
      ],
      leftIconTitle: [
        "HEDIS Score Cards",
        "Quality Check Dashboards",
        "Retrospective Reporting",
        "Predictive Insights",
      ],

      title: "Unlock Opportunities",
      subtitle: "From Healthcare Data With Advanced Analytics",
      description:
        "Leverage advanced analytics to unlock new opportunities for improved care delivery, streamline processes, and drive innovation.",
      buttonText: "Learn More",
    },
    {
      key: "2",

      icon2: <Unleash2 />,
      icon: <Unleash />,
      title: "Unleash Full Potential",
      leftIcon: [
        <UnleashIcon1 key={generateRandomString()} />,
        <UnleashIcon2 key={generateRandomString()} />,
        <UnleashIcon3 key={generateRandomString()} />,
        <UnleashIcon4 key={generateRandomString()} />,
      ],
      leftIconTitle: [
        "Healthcare Master Data management",
        "Data Integration & Interoperability",
        "Data Quality Management",
        "Real-time data Streaming",
      ],
      subtitle: "Of Your Healthcare Data",
      description:
        "Our solution transforms healthcare data into actionable insights, integrating analytics and real-time reporting to enhance outcomes.",
      buttonText: "Learn More",
    },
    {
      key: "3",

      icon2: <Elevate2 />,
      icon: <Elevate />,
      title: "Elevate Care Outcomes ",
      leftIcon: [
        <Elevate1Icon key={generateRandomString()} />,
        <Elevate2Icon key={generateRandomString()} />,
        <Elevate3Icon key={generateRandomString()} />,
        <Elevate4Icon key={generateRandomString()} />,
      ],
      leftIconTitle: [
        "Virtual Healthcare Portal",
        "Resource Management",
        "Robust AI & ML models",
        "Cloud Migration",
      ],

      subtitle: " With AI-Driven Solutions",
      description:
        "We integrate AI to enhance diagnoses, optimize resources, and drive innovation and excellence in healthcare.",
      buttonText: "Learn More",
    },
    {
      key: "4",

      icon2: <BuildZero2 />,
      icon: <BuildZero />,
      leftIcon: [
        <Buildzero1Icon key={generateRandomString()} />,
        <Buildzero2Icon key={generateRandomString()} />,
        <Buildzero3Icon key={generateRandomString()} />,
        <Buildzero4Icon key={generateRandomString()} />,
      ],
      leftIconTitle: [
        "Electronic health records",
        "Patient communication",
        "claim & billing processing",
        "Telehealth & remote monitoring",
      ],

      title: "Build Zero Touch Experiences ",
      subtitle: "For Patients & Members With Automation",
      description:
        "By reducing manual interventions, streamline operations, improve efficiency, and focus on providing an effortless experience for every patient and member.",
      buttonText: "Learn More",
    },
  ];

  const handleTabClick = (clickedTabIndex) => {
    setActiveTab(clickedTabIndex);
  };

  const handleExpandTab = (tabIndex) => {
    setExpandedTab(expandedTab === tabIndex ? null : tabIndex);
  };

  return (
    <div id="services">
      <Heading title={"OUR SERVICES"} />
      <div className="flex flex-col items-center justify-between gap-10 p-8 lg:flex-row">
        {/* Left Container (Shows Only the Clicked Tab) */}
        <div
          className="relative hidden md:flex w-full p-8 bg-white rounded-[60px] bg-gradient-to-r from-blue-100 via-white to-blue-50"
          style={{
            backgroundImage: `url('bgvector.svg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="z-10 flex flex-col md:flex-row gap-36">
            <div className="flex flex-col md:flex-row md:w-full">
              <div className="w-3/4 pr-10">
                {leftContainerContent[activeTab].icon2}
                <h2 className="pt-8 text-2xl font-bold">
                  <p className="text-[#CF7B41]">
                    {leftContainerContent[activeTab].title}
                  </p>
                  {leftContainerContent[activeTab].subtitle}
                </h2>
                <p className="mt-4 text-gray-700">
                  {leftContainerContent[activeTab].description}
                </p>

                <button className="flex items-center px-6 py-3 mt-6 space-x-2 text-white rounded-md">
                  <div className="flex gap-6 px-4 py-2 hover:text-white hover:bg-[#383c44]  text-black border rounded-full">
                    <span>Learn More</span>
                    {/* <FaLongArrowAltLeft size={20} /> */}
                    <MdNorthEast size={20} />
                  </div>
                </button>
              </div>
              <div>
                <div className="flex flex-col gap-4 mt-8 md:flex-row ">
                  <div className="flex flex-col items-center justify-center w-full gap-3 mt-12">
                    <div className="flex flex-col items-center justify-center space-y-2 bg-blue-100 rounded-[10px] sm:rounded-[40px] pr-5 sm:pr-0 w-[180px] h-[180px]">
                      <div className="flex items-center h-[72px] w-[72px]   justify-center  ">
                        {/* {leftContainerContent[activeTab].leftIcon[2]} */}
                        {leftContainerContent[activeTab].leftIcon[0]}
                      </div>
                      <span
                        key={0}
                        className="px-4 text-center text-gray-800 sm:text-sm"
                      >
                        {leftContainerContent[activeTab].leftIconTitle[0]}
                      </span>
                    </div>
                    <div className="flex flex-col items-center justify-center space-y-2 bg-blue-100 rounded-[10px] sm:rounded-[40px] pr-5 sm:pr-0 w-[180px] h-[180px]">
                      <div className="flex items-center h-[72px] w-[72px]   justify-center  ">
                        {/* {leftContainerContent[activeTab].leftIcon[2]} */}
                        {leftContainerContent[activeTab].leftIcon[1]}
                      </div>
                      <span className="text-sm text-center text-gray-800 sm:px-4">
                        {leftContainerContent[activeTab].leftIconTitle[1]}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col items-center justify-center w-full gap-3">
                    <div className="flex flex-col items-center justify-center space-y-2 bg-blue-100 rounded-[10px] sm:rounded-[40px] pr-5 sm:pr-0 w-[180px] h-[180px]">
                      <div className="flex items-center h-[72px] w-[72px]   justify-center  ">
                        {leftContainerContent[activeTab].leftIcon[2]}
                      </div>
                      <span className="px-4 text-sm text-center text-gray-800">
                        {leftContainerContent[activeTab].leftIconTitle[2]}
                      </span>
                    </div>
                    <div className="flex flex-col items-center justify-center space-y-2 bg-blue-100 rounded-[10px] sm:rounded-[40px] pr-5 sm:pr-0 w-[180px] h-[180px]">
                      <div className="flex items-center h-[72px] w-[72px]   justify-center  ">
                        {leftContainerContent[activeTab].leftIcon[3]}
                      </div>
                      <span className="px-4 text-sm text-center text-gray-800">
                        {leftContainerContent[activeTab].leftIconTitle[3]}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Menu */}
        <div className="flex flex-col items-center w-full gap-4 lg:w-1/3">
          <div className="hidden lg:block">
            {tabOrder.map((tabIndex) => (
              <div
                key={tabIndex}
                className={`flex items-center mb-2  gap-2  px-10 md:w-[380px] md:h-[124px] space-x-4 bg-white rounded-full cursor-pointer ${
                  activeTab === tabIndex ? "bg-[#fdecdf]" : "bg-white"
                }`}
                onClick={() => handleTabClick(tabIndex)}
              >
                {/* Icon Section */}
                <div className="">
                  {" "}
                  {/* Add margin right to space out the icon and text */}
                  {leftContainerContent[tabIndex].icon}
                </div>

                {/* Title Section */}
                <span
                  className={`text-lg font-bold ${
                    activeTab === tabIndex ? "text-[#CF7B41]" : "text-[#CF7B41]"
                  }`}
                >
                  {leftContainerContent[tabIndex].title}
                </span>
              </div>
            ))}
          </div>

          <div className="w-full lg:hidden">
            {tabOrder.map((tabIndex) => (
              <div key={tabIndex} className="mb-4">
                <div
                  onClick={() => handleExpandTab(tabIndex)}
                  className="flex items-center justify-between w-full p-4 bg-white cursor-pointer"
                >
                  <div className="flex items-center space-x-4">
                    <div> {leftContainerContent[tabIndex].icon}</div>

                    <span
                      className={`text-lg font-semibold text-[#CF7B41] md:flex ${
                        expandedTab === tabIndex ? "hidden" : "flex"
                      }`}
                    >
                      {leftContainerContent[tabIndex].title}
                    </span>
                  </div>
                  <span className="text-xl">
                    {expandedTab === tabIndex ? " " : "+"}
                  </span>
                </div>

                {expandedTab === tabIndex && (
                  <div className="px-4 bg-white">
                    <h3 className="font-semibold">
                      <span className="text-lg font-semibold text-[#CF7B41] md:flex">
                        {leftContainerContent[tabIndex].title}
                      </span>
                      <span> {leftContainerContent[tabIndex].subtitle}</span>
                    </h3>
                    <p>{leftContainerContent[tabIndex].description}</p>
                    <button className="flex items-center mt-4 space-x-2 text-white rounded-md">
                      <div className="flex gap-6 px-4 py-2 text-black border rounded-full">
                        <span>Learn More</span>
                        <MdNorthEast size={20} />
                        </div>
                    </button>

                    <div className="grid grid-cols-2 gap-4 pb-10 mt-8">
                      <div className="flex flex-col gap-3 md:mt-8">
                        <div className="flex flex-col items-center justify-center space-x-4 bg-blue-100 rounded-[10px] sm:rounded-[40px] pr-5 sm:pr-0 w-180px h-[180px]">
                        <div className="flex items-center h-[72px] w-[72px]   justify-center  ">
                            {leftContainerContent[activeTab].leftIcon[0]}
                          </div>
                          <span className="px-4 text-sm text-center text-gray-800">
                            {leftContainerContent[activeTab].leftIconTitle[0]}
                          </span>
                        </div>
                        <div className="flex flex-col items-center justify-center space-x-4 bg-blue-100 rounded-[10px] sm:rounded-[40px] pr-5 sm:pr-0 w-180px h-[180px]">
                        <div className="flex items-center h-[72px] w-[72px]   justify-center  ">
                            {leftContainerContent[activeTab].leftIcon[1]}
                          </div>
                          <span className="px-4 text-sm text-center text-gray-800">
                            {leftContainerContent[activeTab].leftIconTitle[1]}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-3 ">
                        <div className="flex flex-col items-center justify-center space-x-4 bg-blue-100 rounded-[10px] sm:rounded-[40px] pr-5 sm:pr-0 w-180px h-[180px]">
                        <div className="flex items-center h-[72px] w-[72px]   justify-center  ">
                            {leftContainerContent[activeTab].leftIcon[2]}
                          </div>
                          <span className="px-4 text-sm text-center text-gray-800">
                            {leftContainerContent[activeTab].leftIconTitle[2]}
                          </span>
                        </div>


                        <div className="flex flex-col items-center justify-center space-x-4 bg-blue-100 rounded-[10px] sm:rounded-[40px] pr-5 sm:pr-0 w-180px h-[180px]">
                        <div className="flex items-center h-[72px] w-[72px]  justify-center  ">
                            {leftContainerContent[activeTab].leftIcon[3]}
                          </div>
                          <span className="px-4 text-sm text-center text-gray-800">
                            {leftContainerContent[activeTab].leftIconTitle[3]}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices2;
