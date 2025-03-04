"use client";

import React, { useEffect, useState } from "react";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { MdNorthEast, MdOutlineScore } from "react-icons/md";
import { generateRandomString } from "./utils/random_string";
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
import { sanityClient } from "@/sanity";
import Image from "next/image";
import { useRouter } from "next/navigation";

const OurServices2 = () => {
  const [activeTab, setActiveTab] = useState(1); // Default active tab is 1
  const [tabOrder, setTabOrder] = useState([0, 1, 2, 3]); // Initial tab order (show all tabs)
  const [expandedTab, setExpandedTab] = useState(null); // To manage expanded state on small devices

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState([]);
  const router = useRouter();
  useEffect(() => {
    const fetchSuccessStory = async () => {
      try {
        const result = await sanityClient.fetch(
          `*[_type == "servicesStory"]{
            name,
            "image": image.asset->url,
            description,
            subName,
            card[]{
              subtitle,
              "image": image.asset->url,
              description,
              link
            }
          }`
        );

        setSuccess(result);
      } catch (err) {
        console.error("Failed to fetch success:", err);
        setError("Failed to load data. Please try again later.");
      }
    };

    fetchSuccessStory();
  }, []);

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
        "Healthcare Master Data Management",
        "Data Integration & Interoperability",
        "Data Quality Management",
        "Real-Time Data Streaming",
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
      title: "Elevate Care Outcomes",
      leftIcon: [
        <Elevate1Icon key={generateRandomString()} />,
        <Elevate2Icon key={generateRandomString()} />,
        <Elevate3Icon key={generateRandomString()} />,
        <Elevate4Icon key={generateRandomString()} />,
      ],
      leftIconTitle: [
        "Virtual Healthcare Portal",
        "Resource Management",
        "Robust AI & ML Models",
        "Cloud Migration",
      ],
      subtitle: "With AI-Driven Solutions",
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
        "Electronic Health Records",
        "Patient Communication",
        "Claim & Billing Processing",
        "Telehealth & Remote Monitoring",
      ],
      title: "Build Zero Touch Experiences",
      subtitle: "For Patients & Members With Automation",
      description:
        "By reducing manual interventions, streamline operations, improve efficiency, and focus on providing an effortless experience for every patient and member.",
      buttonText: "Learn More",
    },
  ];

  const handleTabClick = (clickedTabIndex) => {
    console.log(clickedTabIndex);
    setActiveTab(clickedTabIndex);
  };

  const handleExpandTab = (tabIndex) => {
    setExpandedTab(expandedTab === tabIndex ? null : tabIndex);
  };

  // console.log(success, "success");

  return (
    <div id="services" className="bg-[#E8F6FC] font-lato container ">
      <div className='bg-[#E8F6FC] font-lato '>

        <div className="flex items-center justify-center w-full  pt-8 sm:pt-12">
          <div
            className="flex items-center capitalize bg-[#F3F4F6] justify-center gap-3 px-4  text-center border-[1px] rounded-full text-[#0C455E] border-[#1DA4DF]"
            style={{
              fontFamily: "Lato",
              fontSize: "1.25rem",
              fontWeight: 500,
              lineHeight: "1.5rem",
            }}
          >
            OUR SERVICES
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between gap-10 p-8 lg:flex-row">

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
                {success.map((item, index) =>
                  index === activeTab ? (
                    <div key={index}>
                      <div className=" ">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={80} // Width in pixels
                          height={80} // Height in pixels
                        
                          className="object-cover"
                        />
                      </div>
                      <h2 className="pt-8 text-2xl font-bold">
                        <p className="text-[#CF7B41]">{item.name}</p>
                        {item.subName}
                      </h2>
                      <p className="mt-4 text-gray-700">{item.description}</p>
                      <button onClick={() => {
                        router.push('/contact');
                      }} className="flex items-center mt-4 space-x-2 text-white rounded-md">
                        <div className="flex gap-6 px-4 py-2 text-black border rounded-full">
                          <span>Learn More</span>
                          <MdNorthEast size={20} />
                        </div>
                      </button>
                    </div>
                  ) : null
                )}
              </div>
              <div>
                <div className="flex flex-col gap-4 mt-8 md:flex-row">

                  <div className="flex flex-col items-center justify-center w-full gap-3 mt-12">
                    {success[activeTab]?.card.slice(0, 2).map((card, rowIndex) => (
                      <div key={rowIndex} className="flex flex-col items-center justify-center space-y-2 bg-blue-100 rounded-[10px] sm:rounded-[40px] pr-5 sm:pr-0 w-[180px] h-[180px]">
                        {Array.isArray(card.icons) ? (
                          card.icons.map((icon, colIndex) => (
                            <div
                              key={`leftIcon-${activeTab}-${rowIndex}-${colIndex}`} // Ensure unique key
                              className="flex flex-col items-center justify-center space-y-2 bg-blue-100 rounded-[10px] sm:rounded-[40px] pr-5 sm:pr-0 w-[180px] h-[180px]"
                            >
                              <div className="flex items-center h-[72px] w-[72px] justify-center">{icon}</div>
                              <span className="px-4 text-sm text-center text-gray-800">
                                {leftContainerContent[activeTab].leftIconTitle[rowIndex * 2 + colIndex]}
                              </span>
                            </div>
                          ))
                        ) : (
                          <div className="flex flex-col items-center justify-center space-y-2 bg-blue-100 rounded-[10px] sm:rounded-[40px] pr-5 sm:pr-0 w-[180px] h-[180px]">
                            <div className="flex items-center h-[72px] w-[72px] justify-center">
                              {/* Render card image or icon */}
                              <Image
                                src={card.image}
                                alt={card.subtitle}
                                width={50} // Width in pixels
                                height={50} // Height in pixels
                       className="object-cover"
                              />
                            </div>
                            <span className="px-4  text-sm text-center text-gray-800">
                              {card.subtitle}
                            </span>
                          </div>
                        )}

                      </div>
                    ))}
                  </div>

                  {/* Right Column (Next 2 Icons) */}
                  <div className="flex flex-col items-center justify-center w-full gap-3">
                    {success[activeTab]?.card.slice(2, 4).map((card, rowIndex) => (
                      <div key={rowIndex} className="flex flex-col items-center justify-center space-y-2 bg-blue-100 rounded-[10px] sm:rounded-[40px] pr-5 sm:pr-0 w-[180px] h-[180px]">
                        {Array.isArray(card.icons) ? (
                          card.icons.map((icon, colIndex) => (
                            <div
                              key={`leftIcon-${activeTab}-${rowIndex}-${colIndex}`} // Ensure unique key
                              className="flex flex-col items-center justify-center space-y-2 bg-blue-100 rounded-[10px] sm:rounded-[40px] pr-5 sm:pr-0 w-[180px] h-[180px]"
                            >
                              <div className="flex items-center h-[72px] w-[72px] justify-center">{icon}</div>
                              <span className="px-4 text-sm text-center text-gray-800">
                                {leftContainerContent[activeTab].leftIconTitle[rowIndex * 2 + colIndex]}
                              </span>
                            </div>
                          ))
                        ) : (
                          <div className="flex flex-col items-center justify-center space-y-2 bg-blue-100 rounded-[10px] sm:rounded-[40px] pr-5 sm:pr-0 w-[180px] h-[180px]">
                            <div className="flex items-center h-[72px] w-[72px] justify-center">
                              {/* Render card image or icon */}
                              <Image
                                src={card.image}
                                alt={card.subtitle}
                                width={50} // Width in pixels
                                height={50} // Height in pixels
                                className="object-cover"
                               
                              />
                            </div>
                            <span className="px-4 text-sm text-center text-gray-800">
                              {card.subtitle}
                            </span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Right Menu */}
        <div className="flex flex-col items-center w-full gap-4 lg:w-1/3">
          <div className="hidden lg:block">
            {success.map((content, tabIndex) => (
              <div
                key={tabIndex}
                className={`flex items-center mb-2 gap-2 px-10 md:w-[380px] md:h-[124px] rounded-full cursor-pointer 
      ${activeTab === tabIndex ? "bg-[#dbeafe] text-white" : "bg-white text-black"}`}
                onClick={() => handleTabClick(tabIndex)}
              >
                {/* Icon Section */}
                <div>
                  {/* {content.icon} */}
                  <Image
                    src={content.image}
                    alt={content.name}
                    width={60} // Width in pixels
                    height={60} // Height in pixels
                
                    className="object-cover"
                  />
                </div>

                {/* Title Section */}
                <span
                  className={`text-lg font-bold ${activeTab === tabIndex ? "text-[#cf7b41]" : "text-[#CF7B41]"
                    }`}
                >
                  {content.name}
                </span>
                {/* <div className="text-lg">{activeTab === tabIndex ? <MdOutlineScore size={24} /> : null}</div> */}

              </div>
            ))}

          </div>








          <div className="w-full lg:hidden">
            {success.map((content, tabIndex) => (
              <div key={tabIndex} className="mb-4">
                <div
                  onClick={() => handleExpandTab(tabIndex)}
                  className="flex items-center justify-between w-full p-4 bg-white cursor-pointer"
                >
                  <div className="flex items-center space-x-4">
                    {/* <div> {leftContainerContent[tabIndex].icon}</div> */}
                    <div>
                      {/* {content.icon} */}
                      <Image
                        src={content.image}
                        alt={content.name}
                        width={40} // Width in pixels
                        height={40} // Height in pixels
            
                        className="object-cover"
                      />
                    </div>
                    <span
                      className={`text-lg font-semibold text-[#CF7B41] md:flex ${expandedTab === tabIndex ? "hidden" : "flex"
                        }`}
                    >
                      {/* {leftContainerContent[tabIndex].title} */}
                      {content.name}
                    </span>
                  </div>
                  <span className="text-xl">
                    {expandedTab === tabIndex ? " " : "+"}
                  </span>
                </div>

                {expandedTab === tabIndex && (
                  <div className="px-4 bg-white">
                    <h3 className="font-semibold">
                      <span className="text-lg pr-[4px] font-semibold text-[#CF7B41] md:flex">
                        {/* {leftContainerContent[tabIndex].title} */}
                        {content.name}
                      </span>
                      <span>
                        {/* {leftContainerContent[tabIndex].subtitle} */}
                        {content.subName}
                      </span>
                    </h3>
                    <p>{leftContainerContent[tabIndex].description}</p>
                    <button className="flex items-center mt-4 space-x-2 text-white rounded-md">
                      <div className="flex gap-6 px-4 py-2 text-black border rounded-full">
                        <span>Learn More</span>
                        <MdNorthEast size={20} />
                      </div>
                    </button>

                    <div className="grid grid-cols-2 gap-4 pb-10 mt-8">
                      {/* Map for Left Icons and Titles */}
                      {success[tabIndex].card.map((icon, index) => (
                        <div
                          key={index}
                          className="flex flex-col items-center justify-center space-x-4 bg-blue-100 rounded-[10px] sm:rounded-[40px] pr-5 sm:pr-0 w-180px h-[180px]"
                        >

                          <span className="px-4 text-sm text-center text-gray-800">
                            {icon.subtitle}
                          </span>
                        </div>
                      ))}
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
