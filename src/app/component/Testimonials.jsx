"use client";
import Image from "next/image";
import img1 from "../assets/leader1.png";
import img2 from "../assets/leader2.png";
import img3 from "../assets/leader3.png";
import { FaLinkedin } from "react-icons/fa"; // Make sure to install react-icons

const Testimonials = () => {
  const leaders = [
    {
      name: "Rama Evani",
      image: img3,
      linkedin: "https://www.linkedin.com/in/ramaevani",
    },
    {
      name: "Prashanth Kasturi",
      image: img1,
      linkedin: "https://www.linkedin.com/in/prashanthkasturi",
    },
    {
      name: "Matt Whitnack",
      image: img2,
      linkedin: "https://www.linkedin.com/in/mattwhitnack",
    },
  ];
  return (
    <>
      <div className="bg-[#E8F6FC]">
        <div>
          <h1 className="text-4xl md:px-14 py-4">Employee Testimonials</h1>
          <p className="text-lg md:px-14 py-2">
            Discover the Hexaware journey through the eyes of our exceptional
            team, sharing brief yet impactful tales of growth, innovation, and
            success.
          </p>
        </div>
        <div className="px-5 py-5 bg-gradient-to-b">
          <div
            className="sm:flex sm:flex-col items-center  justify-center sm:py-12"
            style={{
              backgroundImage: `url('bgvector.svg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {leaders.map((leader, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-lg"
                >
                  <div className="relative bg-white p-2">
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
                  <h3 className="mt-4 text-lg font-semibold text-center text-[#CF7B41]">
                    {leader.name}
                  </h3>

                  <a
                    href={leader.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 text-[#0077B5] hover:text-[#004C8C] transition duration-300"
                  >
                    <FaLinkedin className="w-6 h-6" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
