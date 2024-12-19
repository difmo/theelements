"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import ourimage from "../assets/image2.jpg";
import ourimage2 from "../assets/oursolution.png";
import ourimage3 from "../assets/oursolution2.png";
import { MdNorthEast } from "react-icons/md"; // Import Material Design icon
import Header from "./Header";
import Heading from "./Heading";
import { sanityClient } from "@/sanity";
const cardData = [
  {
    title: "Prospective HEDIS Analysis",
    description:
    "Boost your HEDIS performance with forward-looking analytics that identify improvement areas and drive higher scores.",
    image: ourimage2,
  },
  {
    title: "360° View of your Customer Data",
    description:
    "Gain a comprehensive, unified view of your customer data to better understand patient needs and improve engagement.",
    image: ourimage3,
  },
  {
    title: "Social Determinant of Health (SDOH)",
    description:
      "Address health disparities by integrating SDOH insights to create more personalized and effective care strategies.",
    image: ourimage,
  },
];

const OurSolutions = () => {
  const [error, setError] = useState(null); // Error state to display an error message if data fails to load
  // const [dropdownOpen, setDropdownOpen] = useState(false);
  const [solutions, setSolutions] = useState([]);
  // Fetch solutions from Sanity
  useEffect(() => {
    const fetchSolutions = async () => {
      try {
        const result = await sanityClient.fetch(
          `*[_type == "solution"]{
            title,
            "icon": icon.asset->url,
            description
          }`
        );
        setSolutions(result);
      } catch (err) {
        console.error("Failed to fetch solutions:", err);
        setError("Failed to load data. Please try again later.");
      }
    };

    fetchSolutions();
  }, []);
  // console.log(solutions, "solutions");
  return (
    <div id="solutions">

      {/* <Heading title={"OUR SOLUTIONS"}/> */}
      <div className='bg-[#E8F6FC] font-lato'>

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
      {/* {title} */}
      OUR SOLUTIONS
    </div>
  </div>
  </div>

      <div className="relative w-full max-w-[1440px] mt-14 mx-auto">
        <div className="relative z-10 flex flex-col items-center px-4 sm:px-8 lg:px-16">
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {/* {solutions.map((card, index) => ( */}
            {solutions.map((card, index) => (
              // <div key={index}>
              //  {card.title}
              // </div>
              <div
                key={index}
                className="group relative w-full h-[540px] md:rounded-[60px] overflow-hidden flex flex-col items-center"
              >
                <div className="relative w-full h-full overflow-hidden transition-shadow duration-300 md:rounded-lg group-hover:shadow-lg group-hover:shadow-black">
                  <Image
                    src={card.icon} // Dynamic card image
                    alt={card.title} // Dynamic alt text
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 ease-in-out rounded-lg group-hover:scale-105"
                  />
                </div>

                <div
                  className="absolute inset-0 flex flex-col items-start justify-end px-6 pb-6 text-left text-white"
                  style={{
                    background:
                      "radial-gradient(100% 100% at 0% 100%, #0C455E 30.5%, rgba(12, 69, 94, 0) 100%)",
                  }}
                >
                  <h3
                    className="text-[24px] font-bold mb-2 text-[#E99F6C]"
                    style={{
                      fontFamily: "Lato",
                      fontWeight: 700,  
                      lineHeight: "26.59px",  
                      textAlign: "left",  
                      textUnderlinePosition: "from-font",  
                      textDecorationSkipInk: "none", 
                    }}
                  >
                  {card.title}  
                  </h3>

                  <div className="border-b-2 border-[#E99F6C] w-[25%]"></div>

                  
                  <p
                    className="text-lg mb-6 mt-2 text-[#F3F4F6]"
                    style={{
                      fontFamily: "Lato",  
                      fontSize: "16px",  
                      fontWeight: 400, 
                      lineHeight: "20.08px",  
                      textAlign: "left", 
                      textUnderlinePosition: "from-font", 
                      textDecorationSkipInk: "none", 
                    }}
                  >
                    {card.description}  
                  </p>
 
                  <button className="px-6 py-2 text-white hover:text-gray-500 rounded-full hover:bg-[#F3F4F6] text-lg font-medium border hover:transition-colors flex items-center space-x-2">
                    <span>Learn More</span>  
                    <MdNorthEast /> 
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurSolutions;
