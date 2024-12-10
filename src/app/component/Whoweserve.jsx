import React from "react";
import Image from "next/image";
import weserve from "../assets/weserve.jpg";
import weserve2 from "../assets/weserve2.jpg";
import weserve3 from "../assets/weserve3.jpg";
import { MdNorthEast } from "react-icons/md"; // Import Material Design icon
import Heading from "./Heading";

const cardData = [
  {
    title: "Payers",
    image: weserve,
    listItems: [
      "⁠Boost HEDIS & Star ratings with real-time insights.",
      "⁠⁠Enhance Medicare & Medicaid outcomes using SDOH.",
      "Drive engagement with a 360° member view.",
    ],
  },
  {
    title: "Providers",
    image: weserve2,
    listItems: [
      "Tools for value-based care and clinical interventions.",
      "Predictive models for care and risk management.",
      "Boost engagement with personalized care.",
    ],
  },
  {
    title: "Health Tech",
    image: weserve3,
    listItems: [
      "Enhance insights with AI in existing solutions.",
      "Platform modernization with next Gen tools",
      "Seamless Integration with Health-Tech ecosystem",
    ],
  },
];

const Whoweserve = () => {
  return (
    <div id="solutions">
      <Heading title={"WHO WE SERVE"} />

      <div className="relative w-full max-w-[1440px] my-14 mx-auto">
        <div className="relative z-10 flex flex-col items-center px-4 sm:px-8 lg:px-16">
          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cardData.map((card, index) => (
              <div
                key={index}
                className="group relative w-full h-[540px] md:rounded-[30px] overflow-hidden flex flex-col items-center"
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
                      fontFamily: "Lato", // Custom font family
                      fontWeight: 700, // Custom font weight
                      lineHeight: "26.59px", // Custom line height
                      textAlign: "left", // Custom text alignment
                      textUnderlinePosition: "from-font", // Custom text underline position
                      textDecorationSkipInk: "none", // Custom text decoration skip ink
                    }}
                  >
                    {card.title} {/* Dynamic title */}
                  </h3>

                  <div className="border-b-2 mb-6 border-[#E99F6C] w-[25%]"></div>

                  <div className="w-full   pr-5 sm:px-0">
                    <ul className="pl-0 space-y-2 list-none  ">
                      {card.listItems.map((item, i) => (
                        <li key={i} className="flex items-start text-sm sm:text-base">
                          <MdNorthEast className="mr-2 text-white font-bold text-xl" />
                          {item}
                        </li>
                      ))}
                    </ul>
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

export default Whoweserve;
