"use client";
import Image from "next/image";
import img1 from "../assets/leader1.png";
import img2 from "../assets/leader2.png";
import img3 from "../assets/leader3.png";
import { FaLinkedin, FaLinkedinIn } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
// import { ChevronLeft, ChevronRight } from "react-icons/fa"; // Import missing icons

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  const leaders = [
    {
      name: "Rama Evani",
      image: img3,
      linkedin: "https://www.linkedin.com/in/ramaevani",
      title:
        "“I have met wonderful people that make Hexaware a great workplace.”",
      post: "QA Lead",
    },
    {
      name: "Prashanth Kasturi",
      image: img1,
      linkedin: "https://www.linkedin.com/in/prashanthkasturi",
      title:
        "“I have met wonderful people that make Hexaware a great workplace.”",
      post: "DA Competency Manager",
    },
    {
      name: "Matt Whitnack",
      image: img2,
      linkedin: "https://www.linkedin.com/in/mattwhitnack",
      title:
        "“I have met wonderful people that make Hexaware a great workplace.”",
      post: "DA Competency Manager",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.max(1, leaders.length - visibleCards + 1);

  const nextSlide = () => {
    if (leaders.length > visibleCards) {
      setCurrentSlide((current) => (current + 1) % totalSlides);
    }
  };

  const prevSlide = () => {
    if (leaders.length > visibleCards) {
      setCurrentSlide((current) => (current - 1 + totalSlides) % totalSlides);
    }
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="bg-[#E8F6FC]">
      <div>
        <h1 className="text-4xl md:px-14  py-4">Employee Testimonials</h1>
        <p className="text-lg md:px-14 py-2">
          Discover the 8th Element journey through the eyes of our exceptional
          team, sharing brief yet impactful tales of growth, innovation, and
          success.
        </p>
      </div>
      <div className="py-5 bg-gradient-to-b md:px-14 px-4">
        <div
          className="sm:flex sm:flex-col items-center justify-between sm:py-12 relative"
          style={{
            backgroundImage: `url('bgvector.svg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="w-full overflow-hidden relative">
            <div
              className="flex transition-transform duration-500 ease-in-out gap-4 sm:gap-6 md:gap-10"
              style={{
                transform: `translateX(-${
                  currentSlide * (100 / visibleCards)
                }%)`,
              }}
            >
              {leaders.map((leader, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full sm:w-[300px] md:w-[400px] px-4 py-6 bg-white rounded-lg shadow-lg"
                >
                  <div className="relative bg-white px-2 flex justify-center">
                    <div className="h-[160px] w-[160px] sm:h-[160px] sm:w-[160px] md:h-[240px] md:w-[240px] bg-gray-200 overflow-hidden rounded-full">
                      <Image
                        src={leader.image}
                        alt={leader.name}
                        layout="intrinsic"
                        objectFit="cover"
                        className="rounded-full"
                      />
                    </div>
                  </div>
                  <h1 className="mt-4 px-4 text-lg text-center text-gray-600">
                    {leader.title}
                  </h1>
                  <h3 className="mt-4 text-lg font-semibold text-center text-[#CF7B41]">
                    {leader.name}
                  </h3>
                  <a
                    href={leader.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 px-4 text-lg text-center text-blue-600 flex justify-center"
                  >
                    <FaLinkedin className="w-8 h-8" />
                  </a>
                </div>
              ))}
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="flex justify-center mt-4">
            {leaders.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 mx-1 rounded-full ${
                  index === currentSlide ? "bg-[#CF7B41]" : "bg-gray-300"
                } transition duration-300`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
