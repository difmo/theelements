import React from "react";
import Image from "next/image";
import weserve2 from "../assets/weserve2.jpg"; // Ensure the correct import path
import CardsSection from "./CardSection";
import Heading from "./Heading";

const Whoweserve2 = () => {
  return (
    <div id="Whoweserve" className="mb-96 sm:mb-32 ">
      {/* Heading component */}
      <Heading title={"WHO WE SERVE"} />

      {/* Main content */}
      <div className="relative w-full max-w-[1440px] my-7 mx-auto">
        <div className="relative w-full h-[250px] sm:h-[400px] ">
          <Image
            src={weserve2} // Correct image reference
            alt="Who we serve"
            fill
            priority={true}
          />
        </div>
        <div className="absolute inset-0 flex sm:items-end  justify-center">
          <CardsSection />
        </div>
      </div>
    </div>
  );
};

export default Whoweserve2;
