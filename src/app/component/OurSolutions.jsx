import React from "react";
import Image from "next/image";
import ourimage from "../assets/image2.jpg";
import ourimage2 from "../assets/oursolution.png";
import ourimage3 from "../assets/oursolution2.png";
import { MdNorthEast } from "react-icons/md"; // Import Material Design icon

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
      {/* Centering "Our Solutions" */}
      <div className="flex items-center justify-center w-full mt-12">
        <div
          className="flex justify-center items-center text-center w-[196px] h-[33px] px-4 py-1 gap-3 rounded-[60px] border border-opacity-0"
          style={{
            fontFamily: "Mulish", // Custom font family
            fontSize: "20px", // Custom font size
            fontWeight: 500, // Custom font weight
            lineHeight: "25.1px", // Custom line height
            textAlign: "center", // Custom text alignment
            textUnderlinePosition: "from-font", // Custom text underline position
            textDecorationSkipInk: "none", // Custom text decoration skip ink
          }}
        >
          Our Solutions
        </div>
      </div>

      <div className="relative w-full max-w-[1440px] mt-14 mx-auto">
        {/* Content Section */}
        <div className="relative z-10 flex flex-col items-center px-4 sm:px-8 lg:px-16">
          {/* Grid Container */}
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {/* Map through cardData array to create each card */}
            {cardData.map((card, index) => (
              <div
                key={index}
                className="group relative w-full h-[540px] md:rounded-[60px] overflow-hidden flex flex-col items-center"
              >
                {/* Card Image */}
                <div className="relative w-full h-full overflow-hidden transition-shadow duration-300 md:rounded-lg group-hover:shadow-lg group-hover:shadow-black">
                  <Image
                    src={card.image} // Dynamic card image
                    alt={card.title} // Dynamic alt text
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 ease-in-out rounded-lg group-hover:scale-105"
                  />
                </div>

                {/* Overlay Layer with Custom Radial Gradient */}
                <div
                  className="absolute inset-0 flex flex-col items-start justify-end px-6 pb-6 text-left text-white"
                  style={{
                    background:
                      "radial-gradient(100% 100% at 0% 100%, #0C455E 30.5%, rgba(12, 69, 94, 0) 100%)",
                  }}
                >
                  {/* Card Title */}
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
