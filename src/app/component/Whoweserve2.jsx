import React from "react";
import Image from "next/image";
import weserve2 from "../assets/pexels-photo-305565.webp"; // Ensure the correct import path
import CardsSection from "./CardSection";
import Heading from "./Heading";
import HealthTech from "../assets/Icons/whoweserve/helthtech.svg";

const Whoweserve2 = () => {
  return (
    <div id="Whoweserve" className="mb-[500px] sm:mb-44">
      <Heading title={"WHO WE SERVE"} />
      <div className="relative w-full max-w-[1440px] my-7 mx-auto">
        <div className="relative w-full h-[250px] sm:h-[560px]">
          <Image
            src={weserve2}
            alt="Who we serve"
            fill
            priority={true}
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/40 sm:bg-gradient-to-b sm:from-black/50 sm:to-black/20 z-10"></div>
        <div className="absolute inset-0 flex sm:items-end justify-center z-30">
          <CardsSection />
        </div>
      </div>
    </div>
  );
};

export default Whoweserve2;
