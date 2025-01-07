import React from "react";
import Image from "next/image";
import u2 from "../assets/un3.png"; // Ensure correct import path
import u3 from "../assets/u2.png"; // Ensure correct import path
import e3 from "../assets/e3.png"; // Ensure correct import path

const CardsSection = () => {
  // Data for cards
  const cards = [
    { id: 1, img: u2, content: "Payers" },
    { id: 2, img: u3, content: "Providers" },
    { id: 3, img: e3, content: "Health Tech" },
  ];

  return (
    <div className="w-full md:w-[90%] mx-4 sm:mx-0 translate-y-1/2">
  <div 
  className=" sm:mt-8 grid grid-cols-1 rounded-lg py-6 md:grid-cols-3 gap-6 mx-auto px-6 "
    // className="bg-white sm:mt-8 grid grid-cols-1 rounded-lg py-6 md:grid-cols-3 gap-6 mx-auto px-6 shadow-lg"
  >
    {cards.map((card) => (
      <div
        key={card.id}
        className="bg-white p-6 sm:min-h-[200px] rounded-xl shadow-lg border border-gray-200 transition-transform transform hover:scale-105 hover:shadow-2xl hover:shadow-black text-center"

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
        <p className="font-lato font-bold text-center text-[#CF7B41] text-xl md:text-2xl transition-colors duration-300 hover:text-[#a14e24]">
          {card.content}
        </p>
      </div>
    ))}
  </div>
</div>

  );
};

export default CardsSection;
