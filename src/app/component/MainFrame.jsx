"use client";
import Image from "next/image";
import img1 from "../assets/image1.jpg";
import img2 from "../assets/image2.jpg";
import React, { useEffect, useState } from "react";
import { SlideIndicatorLeft, SlideIndicatorRight } from "../assets/Icons/Icon1";

const headerdata = [
  {
    img: img2,
    video: "-8c96-448f-a957-d5bd7401b68e.mp4",
    heading: "Transforming Healthcare outcomes with data driven decisions",
    description:
      "Embark with us on a data-driven journey with high-performance strategic solutions.",
  },
  {
    img: img1,
    video: "video2.mp4",
    heading: "Navigating Healthcare complexity with clear & innovative solutions",
    description:
      "We provide end-to-end healthcare data solutions, enabling clients to fully harness their data for impactful and measurable improvements.",
  },
];

const MainFrame = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const cycleContent = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % headerdata.length);
    }, 5000);

    return () => clearInterval(cycleContent);
  }, []);

  return (
    <div className="relative w-full h-[350px] md:h-[850px] mx-auto overflow-hidden">
      {/* Wrapper for the sliding effect */}
      <div
        className="absolute inset-0 flex transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: "transform 1s ease-in-out",
        }}
      >
        {headerdata.map((data, index) => (
          <div key={index} className="flex-none w-full h-full relative">
            <video
              className="hidden object-cover w-full h-full md:block"
              autoPlay
              loop
              muted
            >
              <source src={data.video} type="video/mp4" />
              <track src={data.video} kind="subtitles" srcLang="en" label="English" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 flex items-center justify-center md:hidden">
              <Image
                src={data.img}
                alt={`Image ${index + 1}`}
                className="object-cover w-full h-full"
                width={500}
                height={350}
              />
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-blue-800 via-transparent to-transparent opacity-60"></div>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center w-full px-4 sm:px-16 md:px-16 text-center">
              <div className="text-[24px] sm:text-[36px] md:text-[48px] lg:text-[60px] leading-[36px] sm:leading-[45px] md:leading-[55px] lg:leading-[66.48px] text-[#F3F4F6] font-quattrocento capitalize">
                {data.heading}
              </div>
              <div className="text-[16px] sm:text-[20px] md:text-[28px] lg:text-[36px] leading-[24px] sm:leading-[28px] md:leading-[36px] lg:leading-[50px] text-[#F3F4F6] font-medium capitalize mt-2">
                {data.description}
              </div>
              <div className="mt-6 sm:mt-8">
                <button className="text-[#F3F4F6] text-lg font-medium bg-[#1A95CB] rounded-[30px] px-8 py-3">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {headerdata.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`cursor-pointer w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-blue-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default MainFrame;




// "use client";
// import Image from "next/image";
// import img1 from "../assets/image1.jpg";
// import img2 from "../assets/image2.jpg";
// import React, { useEffect, useState } from "react";
// import { SlideIndicatorLeft, SlideIndicatorRight } from "../assets/Icons/Icon1";

// const headerdata = [
//   {
//     img: img2,
//     video: "-8c96-448f-a957-d5bd7401b68e.mp4",
//     heading: "Transforming Healthcare outcomes with data driven decisions",
//     description:
//       "Embark with us on a data-driven journey with high-performance strategic solutions.",
//   },
//   {
//     img: img1,
//     video: "video2.mp4",
//     heading: "Navigating Healthcare complexity with clear & innovative solutions",
//     description:
//       "We provide end-to-end healthcare data solutions, enabling clients to fully harness their data for impactful and measureable improvements.",
//   },
// ];

// const MainFrame = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const cycleContent = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % headerdata.length);
//     }, 5000);

//     return () => clearInterval(cycleContent);
//   }, []);

//   return (
//     <div className="relative w-full h-[350px] md:h-[850px] mx-auto">
//       <video
//         key={currentIndex}
//         className="absolute hidden object-cover w-full h-full md:block"
//         autoPlay
//         loop
//         muted
//       >
//         <source
//           src={headerdata[currentIndex].video}
//           type="video/mp4"
//         />
//         <track
//           src={headerdata[currentIndex].video}
//           kind="subtitles"
//           srcLang="en"
//           label="English"
//         />
//         Your browser does not support the video tag.
//       </video>

//       <div className="absolute flex items-center justify-center w-full h-full md:hidden sm:px-16">
//         <Image
//           src={headerdata[currentIndex].img}
//           alt={`Image ${currentIndex + 1}`}
//           className="object-cover w-full h-full"
//           width={500}
//           height={350}
//         />
//         <div className="absolute inset-0 bg-black opacity-50"></div>
//         <div className="absolute inset-0 bg-gradient-to-t from-blue-800 via-transparent to-transparent opacity-60"></div>

//         <div className="absolute flex flex-col items-start justify-center w-full h-full px-10 my-5 sm:px-16 md:px-16">
//           <div className="w-full text-[24px] sm:text-[36px] md:text-[48px] lg:text-[60px] leading-[36px] sm:leading-[45px] md:leading-[55px] lg:leading-[66.48px] text-[#F3F4F6] font-quattrocento capitalize text-center sm:text-center">
//             {headerdata[currentIndex].heading}
//           </div>
//           <div className="w-full text-center text-[16px] sm:text-[20px] md:text-[28px] lg:text-[36px] leading-[24px] sm:leading-[28px] md:leading-[36px] lg:leading-[50px] text-[#F3F4F6] font-medium capitalize text-center sm:text-center">
//             {headerdata[currentIndex].description}
//           </div>
//           <div className="flex justify-center w-full mt-6 sm:mt-8 sm:justify-start">
//             <button className="text-[#F3F4F6] text-lg font-medium bg-[#1A95CB] rounded-[30px] px-8 py-3">
//               Contact Us
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="absolute flex flex-col items-center justify-center hidden w-full h-full md:block">
//         <div className="absolute inset-0 bg-black opacity-50"></div>
//         <div className="absolute flex flex-col items-center justify-center w-full h-full px-4 sm:px-16 md:px-16">
//           <div className="w-full text-center text-[24px] sm:text-[36px] md:text-[48px] lg:text-[60px] leading-[36px] sm:leading-[45px] md:leading-[55px] lg:leading-[66.48px] text-[#F3F4F6] font-quattrocento font-semibold capitalize">
//             {headerdata[currentIndex].heading}
//           </div>
//           <div className="w-full text-center text-[16px] sm:text-[16px] md:text-[18px] lg:text-[24px] leading-[24px] sm:leading-[28px] md:leading-[36px] lg:leading-[50px] text-[#F3F4F6] font-medium capitalize">
//             {headerdata[currentIndex].description}
//           </div>
//           <div className="mt-6 sm:mt-8">
//             <button className="text-[#F3F4F6] text-lg font-medium bg-[#1A95CB] rounded-[30px] px-8 py-3">
//               Contact Us
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="absolute flex justify-center transform -translate-x-1/2 bottom-4 left-1/2">
//         <div
//           className={`w-6 h-6 flex items-center justify-center rounded-full`}
//         >
//           {currentIndex === 0 ? (
//             <SlideIndicatorLeft />
//           ) : (
//             <SlideIndicatorRight />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MainFrame;