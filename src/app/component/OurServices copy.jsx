"use client";

import React, { useState } from "react";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { MdOutlineScore } from "react-icons/md";

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
} from "../assets/Icons/Icon1";
import Heading from "./Heading";

const OurServices2 = () => {
  const [activeTab, setActiveTab] = useState(1); // Default active tab is 1
  const [tabOrder, setTabOrder] = useState([0, 1, 2, 3]); // Initial tab order (show all tabs)
  const [animating, setAnimating] = useState(false); // To handle animation state
  const [expandedTab, setExpandedTab] = useState(null); // To manage expanded state on small devices

  const leftContainerContent = [
    {
      key: "1",
      icon: <Unlock />,
      leftIcon: [
        <UnLockIcon1 key="unLock1" />,
        <UnLockIcon2 key="unLock2" />,
        <UnLockIcon3 key="unLock3" />,
        <UnLockIcon4 key="unLock4" />,
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
      icon: <Unleash />,
      title: "Unleash full potential",
      leftIcon: [
        <UnleashIcon1 key="unleash1" />,
        <UnleashIcon2 key="unleash2" />,
        <UnleashIcon3 key="unleash3" />,
        <UnleashIcon4 key="unleash4" />,
      ],
      leftIconTitle: [
        "Healthcare Master Data management",
        "Data Integration & Interoperability",
        "Data Quality Management",
        "Real-time data Streaming",
      ],
      subtitle: "Advanced Scorecard Analytics",
      description:
        "Monitor and optimize performance across multiple metrics with advanced scorecards to drive better healthcare outcomes.",
      buttonText: "Learn More",
    },
    {
      icon: <Elevate />,
      title: "Elevate care outcomes ",
      leftIcon: [
        <Elevate1Icon key="elevate1" />,
        <Elevate2Icon key="elevate2" />,
        <Elevate3Icon key="elevate3" />,
        <Elevate4Icon key="elevate4" />,
      ],
      leftIconTitle: [
        "Virtual Healthcare Portal",
        "Resource Management",
        "Robust AI & ML models",
        "Cloud Migration",
      ],
      subtitle: "AI-Driven Predictions",
      description:
        "Utilize AI to predict future trends and outcomes, ensuring better decision-making and enhanced patient care.",
      buttonText: "Learn More",
    },
    {
      icon: <BuildZero />,
      leftIcon: [
        <Buildzero1Icon key="buildzero1" />,
        <Buildzero2Icon key="buildzero2" />,
        <Buildzero3Icon key="buildzero3" />,
        <Buildzero4Icon key="buildzero4" />,
      ],
      leftIconTitle: [
        "Electronic health records",
        "Patient communication",
        "claim & billing processing",
        "Telehealth & remote monitoring",
      ],
      title: "Build Zero Touch Experiences ",
      subtitle: "Track and Optimize Past Data",
      description:
        "Analyze past healthcare data to identify opportunities for improvement, optimize treatment strategies, and enhance patient outcomes.",
      buttonText: "Learn More",
    },
  ];

  const handleTabClick = (clickedTabIndex) => {
    if (animating) return;
    setAnimating(true);
    setActiveTab(clickedTabIndex);

    setTabOrder((prevOrder) => {
      const updatedOrder = [...prevOrder];
      const indexToRemove = updatedOrder.indexOf(clickedTabIndex);
      updatedOrder.splice(indexToRemove, 1); // Move clicked tab to the end of the order
      updatedOrder.push(clickedTabIndex); // Ensure clicked tab goes to the end
      return updatedOrder;
    });

    setTimeout(() => {
      setAnimating(false);
    }, 500); // Match animation duration with setTimeout delay
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
                {leftContainerContent[activeTab].icon}
                <h2 className="pt-8 text-2xl font-bold">
                  <p className="text-[#CF7B41]">
                    {leftContainerContent[activeTab].title}
                  </p>
                  {leftContainerContent[activeTab].subtitle}
                </h2>
                <p className="mt-4 text-gray-700">
                  {leftContainerContent[activeTab].description}
                </p>

                <button className="flex items-center px-6 py-2 mt-6 space-x-2 text-white rounded-md">
                  <div className="flex gap-6 px-4 py-2 text-black border rounded-full">
                    <span>Learn More</span>
                    <FaLongArrowAltLeft size={20} />
                  </div>
                </button>
              </div>

              <div className="grid grid-cols-2  mt-8 w-full max-w-[960px] mx-auto">
                <div className="flex flex-col w-full gap-2 mt-8">
                  {leftContainerContent[activeTab].leftIcon.map((icon, index) => (
                    <div key={index} className="flex flex-col items-center justify-center space-x-4 bg-blue-100 rounded-[40px] w-[180px] h-[180px] mx-auto">
                      <div className="flex flex-col items-center justify-center">
                        {icon}
                        <span className="text-sm text-gray-800">
                          {leftContainerContent[activeTab].leftIconTitle[index]}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Menu */}
        <div className="flex flex-col items-center w-full gap-4 lg:w-1/3">
          <div className="hidden lg:block">
            <div
              className={`transition-transform duration-500 ease-in-out transform ${
                animating ? "translate-x-[-10%]" : "translate-x-0"
              }`}
            >
              {tabOrder.slice(0, 3).map((tabIndex) => (
                <div
                  key={tabIndex}
                  className="flex items-center mb-2 justify-center md:w-[380px] md:h-[164px] space-x-4 bg-white rounded-full cursor-pointer"
                  onClick={() => handleTabClick(tabIndex)}
                >
                  {leftContainerContent[tabIndex].icon}
                  <span className="text-lg font-bold text-[#CF7B41]">
                    {leftContainerContent[tabIndex].title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:hidden">
            {tabOrder.map((tabIndex) => (
              <div key={tabIndex} className="mb-4">
                <div
                  onClick={() => handleExpandTab(tabIndex)}
                  className="flex items-center justify-between w-full p-4 bg-white cursor-pointer"
                >
                  <div className="flex items-center space-x-4">
                    <div>{leftContainerContent[tabIndex].icon}</div>
                    <span
                      className={`text-lg font-semibold text-[#CF7B41] md:flex ${
                        expandedTab === tabIndex ? "hidden" : "flex"
                      }`}
                    >
                      {leftContainerContent[tabIndex].title}
                    </span>
                  </div>
                  <span className="text-xl">{expandedTab === tabIndex ? " " : "+"}</span>
                </div>

                {expandedTab === tabIndex && (
                  <div className="px-4 bg-white">
                    {/* Expanded content */}
                    <p>{leftContainerContent[tabIndex].description}</p>
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
