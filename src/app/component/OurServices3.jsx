'use client'

import React, { useState } from "react";
import { AiOutlineFundProjectionScreen } from "react-icons/ai"; 
import { MdOutlineScore } from "react-icons/md"; 
import { FaAd, FaArrowUp, FaHandHoldingMedical, FaLongArrowAltLeft, FaRobot } from "react-icons/fa"; 

const OurServices2 = () => {
  const [activeTab, setActiveTab] = useState(1); // Default active tab is 1
  const [tabOrder, setTabOrder] = useState([0, 1, 2, 3]); // Initial tab order (show all tabs)
  const [animating, setAnimating] = useState(false); // To handle animation state

  // Left container content for each tab
  const leftContainerContent = [
    {
      icon: <FaRobot size={36} className="text-blue-500" />,
      title: "Unlock Opportunities",
      subtitle: "From Healthcare Data With Advanced Analytics",
      description:
        "Leverage advanced analytics to unlock new opportunities for improved care delivery, streamline processes, and drive innovation.",
      buttonText: "Learn More",
    },
    {
      icon: <MdOutlineScore size={36} className="text-blue-500" />,
      title: "HEDIS Score Cards",
      subtitle: "Advanced Scorecard Analytics",
      description:
        "Monitor and optimize performance across multiple metrics with advanced scorecards to drive better healthcare outcomes.",
      buttonText: "Learn More",
    },
    {
      icon: <FaAd size={36} className="text-blue-500" />,
      title: "Predictive Insights",
      subtitle: "AI-Driven Predictions",
      description:
        "Utilize AI to predict future trends and outcomes, ensuring better decision-making and enhanced patient care.",
      buttonText: "Learn More",
    },
    {
      icon: <FaHandHoldingMedical size={36} className="text-blue-500" />,
      title: "Retrospective Reporting",
      subtitle: "Track and Optimize Past Data",
      description:
        "Analyze past healthcare data to identify opportunities for improvement, optimize treatment strategies, and enhance patient outcomes.",
      buttonText: "Learn More",
    },
  ];

  // Function to handle tab click with sliding animation
  const handleTabClick = (clickedTabIndex) => {
    if (animating) return; // Prevent clicking while animation is running
    setAnimating(true); // Start animation

    // Set the clicked tab as the active tab on the left side
    setActiveTab(clickedTabIndex);

    // Rotate tabs on the right side (moving clicked tab to the end of the order)
    setTabOrder((prevOrder) => {
      const updatedOrder = [...prevOrder];
      const indexToRemove = updatedOrder.indexOf(clickedTabIndex);
      updatedOrder.splice(indexToRemove, 1); // Remove clicked tab
      updatedOrder.push(clickedTabIndex); // Add clicked tab to the end of the order
      return updatedOrder;
    });

    // After animation time (500ms), reset animating state
    setTimeout(() => {
      setAnimating(false);
    }, 500); // Match the animation duration
  };

  return (
    <div className="flex flex-col items-center justify-between gap-10 p-8 lg:flex-row bg-gradient-to-r from-blue-100 via-white to-blue-50">
      {/* Left Container (Shows Only the Clicked Tab) */}
      <div className="relative  w-full p-8 bg-white rounded-[60px]  ">
        <div className="absolute inset-0 z- 0 opacity-10">
            <svg
        
              viewBox="0 0 913 540"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M371.531 294.499C376.225 354.727 401.704 413.635 448.019 459.532C550.224 560.826 714.602 560.398 816.365 458.635C918.338 356.662 918.347 191.374 816.413 89.4402C770.565 43.5922 711.915 18.3714 651.971 13.7643C583.375 8.50599 529.48 -45.6602 524.16 -114.268C519.479 -174.459 494.025 -233.317 447.783 -279.214C345.615 -380.594 181.114 -380.241 79.3265 -278.428C-22.6337 -176.468 -22.6551 -11.1674 79.2787 90.7664C125.114 136.602 183.752 161.81 243.684 166.43C312.304 171.713 366.224 225.879 371.556 294.499L371.531 294.499Z"
                stroke="#000"
                strokeWidth="40"
                strokeMiterlimit="10"
              />
            </svg>
        </div>
        <div className="z-10 flex flex-col md:flex-row gap-36 md:flex">
          <div className="flex flex-col md:w-2/4 ">
          {leftContainerContent[activeTab].icon}
          <h2 className="text-2xl font-bold">
              <p className="text-orange-600">{leftContainerContent[activeTab].title}</p>
              {leftContainerContent[activeTab].subtitle}
            </h2>
            <p className="mt-4 text-gray-700">{leftContainerContent[activeTab].description}</p>

            <button className="flex items-center px-6 py-2 mt-6 space-x-2 text-white rounded-md ">
              <div  className="flex gap-6 px-4 py-2 text-black border rounded-full" > 

              <span>Learn More</span>
              <FaLongArrowAltLeft size={20} />
              </div>
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="flex flex-col gap-3 mt-8">
              <div className="flex flex-col items-center  justify-center space-x-4 bg-blue-100 rounded-[40px] w-180px] h-[180px]">
                <MdOutlineScore size={36} className="text-blue-500" />
                <span className="text-sm font-semibold text-gray-800 text">
                  HEDIS Score Cards
                </span>
              </div>
              <div className="flex flex-col items-center justify-center space-x-4 bg-blue-100 rounded-[40px] w-180px] h-[180px]">
                {" "}
                <FaAd size={36} className="text-blue-500" />
                <span className="text-sm font-semibold text-gray-800 text">
                  Predictive Insights
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-3 ">
              <div className="flex flex-col items-center justify-center space-x-4 bg-blue-100 rounded-[40px] w-180px] h-[180px]">
                {" "}
                <FaRobot size={36} className="text-blue-500" />
                <span className="text-sm font-semibold text-gray-800 text">
                  Quality Check Dashboards
                </span>
              </div>
              <div className="flex flex-col items-center justify-center space-x-4 bg-blue-100 rounded-[40px] w-180px] h-[180px]">
                {" "}
                <FaHandHoldingMedical size={36} className="text-blue-500" />
                <span className="text-sm font-semibold text-gray-800 text">
                  Retrospective Reporting
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center w-full gap-4 lg:w-1/3">
        <div
          className={`transition-transform duration-500 ease-in-out transform ${animating ? 'translate-y-[-100%]' : 'translate-y-0'}`} // Apply vertical animation
        >
          {tabOrder.slice(0, 3).map((tabIndex) => (
            <div
              key={tabIndex}
              className="flex items-center mb-2 justify-center md:w-[380px] md:h-[164px] space-x-4 bg-white rounded-full cursor-pointer"
              onClick={() => handleTabClick(tabIndex)} // Handle tab click
            >
              {leftContainerContent[tabIndex].icon}
              <span className="text-lg font-bold text-orange-500">{leftContainerContent[tabIndex].title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices2;
