"use client";
import React, { useEffect, useState } from "react";
import { MdNorthEast, MdOutlineScore } from "react-icons/md";
import { sanityClient } from "@/sanity";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";  // Import Framer Motion for animation
import Heading from "./Heading";

const OurServices2 = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [expandedTab, setExpandedTab] = useState(null);
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

  const handleTabClick = (clickedTabIndex) => {
    setActiveTab(clickedTabIndex);
  };

  const handleExpandTab = (tabIndex) => {
    setExpandedTab(expandedTab === tabIndex ? null : tabIndex);
  };

  return (
    <div id="services" className="bg-[#E8F6FC] font-lato container ">
      <div className="bg-[#E8F6FC] font-lato">
        <div className="flex items-center justify-center w-full pt-8 sm:pt-12">
          <Heading title={"    OUR SERVICES"} />
          {/* <div
            className="flex items-center capitalize bg-[#F3F4F6] justify-center gap-3 px-4 text-center border-[1px] rounded-full text-[#0C455E] border-[#1DA4DF]"
            style={{
              fontFamily: "Lato",
              fontSize: "1.25rem",
              fontWeight: 500,
              lineHeight: "1.5rem",
            }}
          >
            OUR SERVICES
          </div> */}
        </div>
      </div>
      <div className="flex flex-col items-center justify-between gap-10 p-8 lg:flex-row">
        {/* Laptop Section */}
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
                    <motion.div
                      key={index}
                      className="transition-all duration-500 ease-in-out transform hover:scale-105"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={80}
                          height={80}
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
                    </motion.div>
                  ) : null
                )}
              </div>
              <div>
                <div className="flex flex-col gap-4 mt-8 md:flex-row">
                  <div className="flex flex-col items-center justify-center w-full gap-3 mt-12">
                    {success[activeTab]?.card.slice(0, 2).map((card, rowIndex) => (
                      <motion.div
                        key={rowIndex}
                        className="transition-all duration-500 ease-in-out transform hover:scale-105 flex flex-col items-center justify-center space-y-2 bg-blue-100 rounded-[10px] sm:rounded-[40px] pr-5 sm:pr-0 w-[180px] h-[180px]"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.8 }}
                      >
                        <div className="flex items-center h-[72px] w-[72px] justify-center">
                          <Image
                            src={card.image}
                            alt={card.subtitle}
                            width={50}
                            height={50}
                            className="object-cover"
                          />
                        </div>
                        <span className="px-8 text-sm text-center text-gray-800">
                          {card.subtitle}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                  <div className="flex flex-col items-center justify-center w-full gap-3">
                    {success[activeTab]?.card.slice(2, 4).map((card, rowIndex) => (
                      <motion.div
                        key={rowIndex}
                        className="transition-all duration-500 ease-in-out transform hover:scale-105 flex flex-col items-center justify-center space-y-2 bg-blue-100 rounded-[10px] sm:rounded-[40px] pr-5 sm:pr-0 w-[180px] h-[180px]"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                      >
                        <div className="flex items-center h-[72px] w-[72px] justify-center">
                          <Image
                            src={card.image}
                            alt={card.subtitle}
                            width={50}
                            height={50}
                            className="object-cover"
                          />
                        </div>
                        <span className="px-8 text-sm text-center text-gray-800">
                          {card.subtitle}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Section */}
        <div className="flex flex-col items-center w-full gap-4 lg:w-1/3">
          {/* Tablet/Laptop - Sidebar */}
          <div className="hidden lg:block">
            {success.map((content, tabIndex) => (
              <motion.div
                key={tabIndex}
                className={`flex items-center mb-2 gap-2 px-10 md:w-[380px] md:h-[124px] rounded-full cursor-pointer 
                ${activeTab === tabIndex ? "bg-[#dbeafe] text-white" : "bg-white text-black"} transition-all duration-500 ease-in-out`}
                onClick={() => handleTabClick(tabIndex)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div>
                  <Image
                    src={content.image}
                    alt={content.name}
                    width={60}
                    height={60}
                    className="object-cover"
                  />
                </div>
                <span
                  className={`text-lg font-bold ${activeTab === tabIndex ? "text-[#cf7b41]" : "text-[#CF7B41]"}`}
                >
                  {content.name}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Mobile View - Expandable list */}
          <div className="w-full lg:hidden">
            {success.map((content, tabIndex) => (
              <div key={tabIndex} className="mb-4">

                <motion.div
                  onClick={() => handleExpandTab(tabIndex)}
                  className="flex items-center justify-between w-full p-4 bg-white cursor-pointer transition-all duration-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="flex items-center space-x-4">
                    <div>
                      <Image
                        src={content.image}
                        alt={content.name}
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                    <span
                      className={`text-lg font-semibold text-[#CF7B41] md:flex ${expandedTab === tabIndex ? "hidden" : "flex"}`}
                    >
                      {content.name}
                    </span>
                  </div>
                  <span className="text-xl">
                    {expandedTab === tabIndex ? " " : "+"}
                  </span>
                </motion.div>
                {expandedTab === tabIndex && (
                  <motion.div
                    className="px-4 bg-white transition-all duration-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <h3 className="font-semibold">
                      <span className="text-lg pr-[4px] font-semibold text-[#CF7B41] md:flex">
                        {content.name}
                      </span>
                      <span>{content.subName}</span>
                    </h3>
                    <p>{content.description}</p>
                    <button className="flex items-center mt-4 space-x-2 text-white rounded-md">
                      <div className="flex gap-6 px-4 py-2 text-black border rounded-full">
                        <span>Learn More</span>
                        <MdNorthEast size={20} />
                      </div>
                    </button>
                    <div className="grid grid-cols-2 gap-4 pb-4 mt-8">
                      {success[tabIndex].card.map((icon, index) => (
                        <motion.div
                          key={index}
                          className="flex flex-col items-center px-12 justify-center bg-blue-100 rounded-[10px] sm:rounded-[40px] w-180px h-[180px]"
                          initial={{ scale: 0.8 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0.8 }}
                        >
                          <Image
                            src={icon.image}
                            alt={icon.name}
                            width={40}
                            height={40}
                            className="object-cover"
                          />
                          <span className="px-1 pt-4 text-sm text-center text-gray-800">
                            {icon.subtitle}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
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
