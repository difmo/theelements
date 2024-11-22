"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image"; // Importing Image correctly for Next.js
import image1 from "../assets/Section.png"; // First image asset
import image2 from "../assets/section-2.png"; // Second image asset

const Ourcustomervoice = () => {
  const [activeImage, setActiveImage] = useState(0); // Tracks the active image
  const images = [image1, image2]; // Array of images

  useEffect(() => {
    const interval = setInterval(() => {
      // Toggle between images
      setActiveImage((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div>
      {/* Frame */}
      <div
        className="relative pt-5 flex justify-center items-center"
        style={{
          background: "#383C44", // Frame background color
          width: "100%", // Full width
          height: "568px", // Fixed height
        }}
      >
        {/* Displaying the Active Image with Fade Transition */}
        <div className="relative">
          <Image
            src={images[activeImage]} // Dynamically select the active image
            alt="Our customer voice section" // Accessible alt text
            layout="intrinsic" // Adjust layout
            width={1440} // Explicit width
            height={568} // Explicit height
            priority // Ensures the first image loads faster
            className="rounded-md transition-opacity duration-1000 opacity-100" // Smooth fade effect
          />
        </div>
      </div>
    </div>
  );
};

export default Ourcustomervoice;
