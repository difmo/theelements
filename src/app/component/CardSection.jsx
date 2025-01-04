import React from "react";
import Image from "next/image";
import u2 from "../assets/un3.png"; // Ensure correct import path

const CardsSection = () => {
  // Data for cards
  const cards = [
    { id: 1, img: u2, content: "Medical Services" },
    { id: 2, img: u2, content: "Dental Services" },
    { id: 3, img: u2, content: "Behavioral Health" },
  ];

  return (
    <div className="  w-full md:w-[60%] mx-4 sm:mx-0    translate-y-1/2">
      <div className=" bg-[#8dc3da] grid grid-cols-1 rounded-lg  py-6 md:grid-cols-3 gap-4 mx-auto px-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-white p-6 sm:min-h-[180px] rounded-lg shadow-md text-center"
          >
            <div className="flex justify-center mb-4">
              <Image
                src={card.img}
                alt={`Image for card ${card.id}`}
                width={50}
                height={50}
                objectFit="cover"
              />
            </div>
            <p>{card.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsSection;
