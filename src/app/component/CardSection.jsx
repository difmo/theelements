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
    { id: 1, img: Payers, content: "Payers" },
    { id: 2, img: Provider, content: "Providers" },
    { id: 3, img: HealthTech, content: "Health Tech" },
  ];

  return (
    <div className="w-full md:w-[90%] mx-4 sm:mx-0 translate-y-1/2">
  <div 
  className="   grid grid-cols-1 rounded-lg py-6 md:grid-cols-3 gap-6 mx-auto px-6 "
  >
    {cards.map((card) => (
      <div
        key={card.id}
        className="bg-white p-6 sm:min-h-[200px] rounded-xl border transition-transform transform hover:scale-105  hover:shadow-black text-center"

      >
        {/* Image Section */}
        <div className="flex justify-center mb-4">
          <Image
            src={card.img}
            alt={`Image for card ${card.id}`}
            width={80}
            height={80}
            // objectFit="fit"
            // className="rounded-full shadow-md"
          />
        </div>
        {/* Content Section */}
        <p className="font-lato font-bold text-center text-[#cf7b41] text-xl md:text-2xl transition-colors duration-300 ">
          {card.content}
        </p>
      </div>
    ))}
  </div>
</div>

  );
};

export default CardsSection;
