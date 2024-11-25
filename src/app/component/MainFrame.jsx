import React from 'react';

const MainFrame = () => {
  return (
    <div className="relative   w-full h-[350px] md:h-[850px] mt-14 mx-auto">
      {/* Video Background */}
      <video className="absolute object-cover w-full h-full" autoPlay loop muted>
        <source src="/-8c96-448f-a957-d5bd7401b68e.mp4" type="video/mp4" />
        <track
          src="/-8c96-448f-a957-d5bd7401b68e.mp4"
          kind="subtitles"
          srcLang="en"
          label="English"
        />
        Your browser does not support the video tag.
      </video>

      {/* Blackish Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>  {/* This adds a semi-transparent black layer */}

      {/* Content */}
      <div className="absolute flex flex-col items-start justify-center w-full h-full px-4 my-5 sm:px-16 md:px-16">
        {/* Heading */}
        <div className="w-full  text-[24px] sm:text-[36px] md:text-[48px] lg:text-[60px] leading-[36px] sm:leading-[45px] md:leading-[55px] lg:leading-[66.48px] text-[#F3F4F6] font-quattrocento font-semibold capitalize">
          Navigating Healthcare complexity with clear & innovative solutions
        </div>

        {/* Subheading */}
        <div className="w-full  text-[16px] sm:text-[20px] md:text-[28px] lg:text-[36px] leading-[24px] sm:leading-[28px] md:leading-[36px] lg:leading-[50px] text-[#F3F4F6] font-medium capitalize">
          We provide end-to-end healthcare data solutions, enabling clients to fully harness their data for impactful and measurable improvements.
        </div>

        {/* Contact Button */}
        <div className="mt-6 sm:mt-8">
          <button className="text-[#F3F4F6] text-lg font-medium bg-[#1A95CB] rounded-[30px] px-8 py-3">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainFrame;
