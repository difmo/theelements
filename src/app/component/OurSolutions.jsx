import React from "react";
import Image from "next/image";
import ourimage from "../assets/image2.jpg";
import ourimage2 from "../assets/oursolution.png";
import ourimage3 from "../assets/oursolution2.png";
import { MdNorthEast } from "react-icons/md"; // Import Material Design icon
import Header from "./Header";
import Heading from "./Heading";

const cardData = [
  {
    title: "Social Determinant of Health (SDOH)",
    description:
      "Description of solution 1 that highlights its benefits and unique features. This solution is tailored to provide the best outcomes for your needs.",
    image: ourimage,
  },
  {
    title: "Health Equity Solutions",
    description:
      "Description of solution 2 that addresses health disparities and promotes equitable care for all.",
    image: ourimage2,
  },
  {
    title: "Community Health Outreach",
    description:
      "Description of solution 3 aimed at improving community health and access to resources.",
    image: ourimage3,
  },
];

const OurSolutions = () => {
  return (
    <div>

      <Heading title={"OUR SOLUTIONS"}/>

      <div className="relative w-full max-w-[1440px] mt-14 mx-auto">
        <div className="relative z-10 flex flex-col items-center px-4 sm:px-8 lg:px-16">
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cardData.map((card, index) => (
              <div
                key={index}
                className="group relative w-full h-[540px] md:rounded-[60px] overflow-hidden flex flex-col items-center"
              >
                <div className="relative w-full h-full overflow-hidden transition-shadow duration-300 md:rounded-lg group-hover:shadow-lg group-hover:shadow-black">
                  <Image
                    src={card.image} // Dynamic card image
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
                      fontFamily: "Quattrocento", // Custom font family
                      fontWeight: 700, // Custom font weight
                      lineHeight: "26.59px", // Custom line height
                      textAlign: "left", // Custom text alignment
                      textUnderlinePosition: "from-font", // Custom text underline position
                      textDecorationSkipInk: "none", // Custom text decoration skip ink
                    }}
                  >
                    {card.title} {/* Dynamic title */}
                  </h3>

                  <div className="border-b-2 border-[#E99F6C] w-[25%]"></div>

                  {/* Card Description */}
                  <p
                    className="text-lg mb-6 mt-2 text-[#F3F4F6]"
                    style={{
                      fontFamily: "Mulish", // Custom font family
                      fontSize: "16px", // Custom font size
                      fontWeight: 400, // Custom font weight
                      lineHeight: "20.08px", // Custom line height
                      textAlign: "left", // Custom text alignment
                      textUnderlinePosition: "from-font", // Custom text underline position
                      textDecorationSkipInk: "none", // Custom text decoration skip ink
                    }}
                  >
                    {card.description} {/* Dynamic description */}
                  </p>

                  {/* Button */}
                  <button className="px-6 py-2 text-white hover:text-gray-500 rounded-full hover:bg-[#F3F4F6] text-lg font-medium border hover:transition-colors flex items-center space-x-2">
                    <span>Learn More</span> {/* Text */}
                    <MdNorthEast /> {/* North-East Icon */}
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
