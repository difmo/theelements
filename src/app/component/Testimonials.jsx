"use client";

import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

// Import images
import our1 from "../assets/leader1.png";
import our2 from "../assets/leader2.png";
import our3 from "../assets/leader3.png";
import our4 from "../assets/leader4.png";
import our5 from "../assets/leader5.png";

const Testimonials = () => {
  const testimonials = [
    {
      image: our1,
      title: "Project One",
      description: "Description for project one.",
    },
    {
      image: our2,
      title: "Project Two",
      description: "Description for project two.",
    },
    {
      image: our3,
      title: "Project Three",
      description: "Description for project three.",
    },
    {
      image: our4,
      title: "Project Four",
      description: "Description for project four.",
    },
    {
      image: our5,
      title: "Project Five",
      description: "Description for project five.",
    },
  ];

  const [centerSlidePercentage, setCenterSlidePercentage] = useState(33.33);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCenterSlidePercentage(100); // 1 slide on small screens
      } else if (window.innerWidth < 1024) {
        setCenterSlidePercentage(50); // 2 slides on medium screens
      } else {
        setCenterSlidePercentage(33.33); // 3 slides on large screens
      }
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className=" mx-auto px-4  bg-[#E8F6FC]"
      style={{
        backgroundImage: `url('ring.svg')`,
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        backgroundSize: "1800px",
      }}
    >
      <h2 className="text-3xl font-bold text-left mb-6 text-gray-700">
        Employee Testimonials
      </h2>
      <p className="text-gray-600 text-lg mb-10">
        Discover the Hexaware journey through the eyes of our exceptional team,
        sharing brief yet impactful tales of growth, innovation, and success.
      </p>

      <Carousel
        showArrows={true}
        showStatus={false}
        showIndicators={true}
        infiniteLoop={true}
        autoPlay={false}
        interval={3000}
        stopOnHover={true}
        swipeable={true}
        emulateTouch={true}
        dynamicHeight={false}
        centerMode={true}
        centerSlidePercentage={centerSlidePercentage}
      >
        {testimonials.map((testimonial, index) => (
          <div key={index} className="px-4 py-10">
            <div className="bg-white rounded-lg shadow-2xl overflow-hidden h-[450px] flex flex-col border border-gray-400 items-center text-center p-6">
              <Image
                src={testimonial.image}
                alt={testimonial.title}
                className=" h-64 bg-cover "
              />
              <h3 className="text-xl font-semibold">{testimonial.title}</h3>
              <p className="text-gray-600 text-sm mt-3">
                {testimonial.description}
              </p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Testimonials;
