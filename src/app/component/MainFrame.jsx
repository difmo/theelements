import React from 'react';

const MainFrame = () => {
  return (
    <div className="relative w-full   h-[350px]  md:h-[850px] mt-14 mx-auto ">
      {/* Video Background */}
      <video className="absolute w-full h-[350px] sm:h-full object-cover" autoPlay loop muted>
        <source src="/-8c96-448f-a957-d5bd7401b68e.mp4" type="video/mp4" />
        <track
          src="/-8c96-448f-a957-d5bd7401b68e.mp4"
          kind="subtitles"
          srcLang="en"
          label="English"
        />
        Your browser does not support the video tag.
      </video>
      
      {/* Content */}
      <div className="absolute w-full container h-auto left sm:right-4 sm:px-16 md:px-4  my-5 sm:top-1/2 sm:transform sm:-translate-y-1/2 flex flex-col  sm:items-start gap-[30px] sm:gap-[60px] px-4 ">
        {/* Heading */}
        <div className="w-full  lg:w-[985px] text-[28px] sm:text-[36px] md:text-[48px] lg:text-[60px] leading-[36px] sm:leading-[45px] md:leading-[55px] lg:leading-[66.48px] text-[#F3F4F6] text-left capitalize font-quattrocento font-bold  sm:text-left">
          Navigating Healthcare complexity with clear & innovative solutions
        </div>

        {/* Subheading */}
        <div className="w-full text-[16px] sm:text-[20px] md:text-[28px] lg:text-[36px] leading-[24px] sm:leading-[28px] md:leading-[36px] lg:leading-[50px] text-[#F3F4F6] font-medium text-left font-mulish capitalize  sm:text-left">
          We provide end-to-end healthcare data solutions, enabling clients to fully harness their data for impactful and measurable improvements.
        </div>

        {/* Contact Button */}
        <div className="flex justify-center  w-[179px] h-[51px] bg-[#1A95CB] rounded-[30px] px-[36px] py-[12px] gap-[12px]">
          <button className="text-[#F3F4F6] text-lg font-medium">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default MainFrame;

 