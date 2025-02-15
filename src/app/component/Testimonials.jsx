"use client";
import Image from "next/image";
import img1 from "../assets/leader1.png";
import img2 from "../assets/leader2.png";
import img3 from "../assets/leader3.png";
import { FaLinkedin } from "react-icons/fa";
import React from "react";

const Testimonials = () => {
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
    {
      name: "John Doe",
      image: img1,
      linkedin: "https://www.linkedin.com/in/johndoe",
      title:
        "“I have met wonderful people that make Hexaware a great workplace.”",
      post: "DA Competency Manager",
    },
    {
      name: "Jane Smith",
      image: img2,
      linkedin: "https://www.linkedin.com/in/janesmith",
      title:
        "“I have met wonderful people that make Hexaware a great workplace.”",
      post: "DA Competency Manager",
    },
    {
      name: "Alex Johnson",
      image: img3,
      linkedin: "https://www.linkedin.com/in/alexjohnson",
      title:
        "“I have met wonderful people that make Hexaware a great workplace.”",
      post: "DA Competency Manager",
    },
  ];

  const [currentSlide, setCurrentSlide] = React.useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % (leaders.length - 2));
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + leaders.length - 2) % (leaders.length - 2)
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <>
      <div className="bg-[#E8F6FC]">
        <div>
          <h1 className="text-4xl md:px-14 py-4">Employee Testimonials</h1>
          <p className="text-lg md:px-14 py-2">
            Discover the 8th Element journey through the eyes of our exceptional
            team, sharing brief yet impactful tales of growth, innovation, and
            success.
          </p>
        </div>
        <div className="py-5 bg-gradient-to-b md:px-14 px-4">
          <div
            className="sm:flex sm:flex-col items-center justify-center sm:py-12 relative"
            style={{
              backgroundImage: `url('bgvector.svg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="w-full overflow-hidden relative">
              <div
                className="flex transition-transform duration-500 ease-in-out gap-4 sm:gap-6 md:gap-14"
                style={{
                  transform: `translateX(-${currentSlide * 100}%)`,
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
                    <p className="mt-4 px-4 text-lg text-center text-gray-600">
                      {leader.post}
                    </p>
                  </div>
                ))}
              </div>

              <button
                onClick={prevSlide}
                className="absolute left-5 top-1/2 transform -translate-y-1/2 text-[#0077B5] bg-white rounded-full shadow-lg p-2 hover:bg-[#0077B5] hover:text-white transition duration-300"
              >
                &lt;
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-5 top-1/2 transform -translate-y-1/2 text-[#0077B5] bg-white rounded-full shadow-lg p-2 hover:bg-[#0077B5] hover:text-white transition duration-300"
              >
                &gt;
              </button>
            </div>

            <div className="flex justify-center mt-4">
              {leaders.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-12 h-3 mx-1 rounded-full ${
                    index === currentSlide ? "bg-[#CF7B41]" : "bg-gray-300"
                  } transition duration-300`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
