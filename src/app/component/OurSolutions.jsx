"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import ourimage from "../assets/image2.jpg";
import ourimage2 from "../assets/oursolution.png";
import ourimage3 from "../assets/oursolution2.png";
import { MdNorthEast } from "react-icons/md"; // Import Material Design icon

import { sanityClient } from "@/sanity";
import { useRouter } from "next/navigation";
import Heading from "./Heading";
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

const OurSolutions = ({title}) => {
  const [error, setError] = useState(null); // Error state to display an error message if data fails to load
  // const [dropdownOpen, setDropdownOpen] = useState(false);
  const [solutions, setSolutions] = useState([]);
  // Fetch solutions from Sanity
  const router = useRouter();
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
    <div id="solutions" className="pt-6">
      <div className="bg-[#E8F6FC] font-lato">
        <div className="flex items-center justify-center w-full  pt-8 sm:pt-12">
      <Heading title={title}/>
         
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
                    fill
            
                    className="transition-transform object-cover duration-500 ease-in-out rounded-lg group-hover:scale-105"
                  />
                </div>

                <div className="absolute inset-0 flex flex-col items-start justify-end   text-left text-white">
                  {/* Background Overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(100% 100% at 0% 100%, #0C455E 30.5%, rgba(12, 69, 94, 0) 100%)",
                    }}
                  ></div>

                  {/* Content */}
                  <div className="relative z-10 ">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-[#3c3f42] opacity-50 group-hover:opacity-75 transition-opacity"></div>

                      <div className="relative z-10 px-6 pb-6  pt-2 ">
                        <h3
                          className="text-[24px]  font-bold mb-2 text-[#E99F6C]"
                          style={{
                            fontFamily: "Lato",
                            fontWeight: 700,
                            lineHeight: "26.59px",
                            textAlign: "left",
                          }}
                        >
                          {card.title}
                        </h3>

                        <div className="border-b-2 border-[#E99F6C] w-[25%]"></div>

                        <p
                          className="text-lg mb-6 pb-2 mt-2 text-[#F3F4F6]"
                          style={{
                            fontFamily: "Lato",
                            fontSize: "18px",
                            fontWeight: 400,
                            lineHeight: "20.08px",
                            textAlign: "left",
                          }}
                        >
                          {card.description}
                        </p>
                        <div className="">
                          <button
                            onClick={() => {
                              router.push("/contact");
                            }}
                            className="px-6 py-2  text-white hover:text-gray-500 rounded-full hover:bg-[#F3F4F6] text-lg font-medium border hover:transition-colors flex items-center space-x-2"
                          >
                            <span>Learn More</span>
                            <MdNorthEast />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
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
