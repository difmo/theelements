import React from "react";
import Image from "next/image";
import u2 from "../assets/img3.jpg"; // Ensure correct import path
import u3 from "../assets/image1.jpg"; // Ensure correct import path
import e3 from "../assets/img1.jpg"; // Ensure correct 
import HealthTech from "../assets/Icons/whoweserve/helthtech.svg";
import Provider from "../assets/Icons/whoweserve/provider.svg";
import Payers from "../assets/Icons/whoweserve/payers.svg";

const CardsSection = () => {

  const cards = [
    { id: 1, img: Payers, content: "Payers", description: ["⁠Boost HEDIS & Star ratings with real-time insights.", "⁠⁠Enhance Medicare & Medicaid outcomes using SDOH.", "Drive engagement with a 360° member view."] },
    { id: 2, img: Provider, content: "Providers", description: ["Tools for value-based care and clinical interventions.", "Predictive models for care and risk management.", "Boost engagement with personalized care."] },
    { id: 3, img: HealthTech, content: "Health Tech", description: ["Enhance insights with AI in existing solutions.", "Platform modernization with next Gen tools", "Seamless Integration with Health-Tech ecosystem"] },
  ];

  return (
    <div className="w-full md:w-[90%] mx-4 sm:mx-0 translate-y-1/2">
      <div className="grid grid-cols-1 rounded-lg py-6 md:grid-cols-3 gap-6 mx-auto px-6">

        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-white p-6 sm:min-h-[200px] group rounded-xl transition-transform transform hover:scale-105 hover:shadow-black text-center relative overflow-hidden"
          >
            <div className="flex justify-center mb-4">
              <Image
                src={card.img}
                alt={`Image for card ${card.id}`}
                width={80}
                height={80}
              />
            </div>
            <p className="font-lato font-bold text-center text-[#cf7b41] text-xl md:text-xl transition-colors duration-300 ">
              {card.content}
            </p>

            {/* Sliding Description */}
            <div className="absolute gap-5 p-4 flex-col inset-0 bg-primary-900 rounded-lg flex items-center justify-center opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              <p className="font-lato font-extrabold w-full text-center px-5 text-[#ffffff] text-xl md:text-2xl transition-colors duration-300 ">
                {card.content}
              </p>
              <ul className="font-mulish text-left text-[#fff] list-disc list-inside">
                {card.description.map((desc, index) => (
                  <li className="text-sm" key={index}>{desc}</li>
                ))}
              </ul>
            </div>
         
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsSection;
