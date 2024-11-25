import React from "react";

const OurServices = () => {
  return (
    <div className="w-full px-4 mt-12">
      <div className="flex items-center justify-center mb-8">
        <div
          className="flex justify-center items-center text-center w-[196px] h-[33px] px-4 py-1 gap-3 rounded-[60px] border border-opacity-0"
          style={{
            fontFamily: "Mulish",
            fontSize: "20px",
            fontWeight: 500,
            lineHeight: "25.1px",
            textAlign: "center",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
          }}
        >
         Our Solution
        </div>
      </div>

      {/* Content Section */}
      <div className="relative flex flex-col items-center justify-between w-full gap-6 mx-auto lg:flex-row">
        {/* Left Frame */}
        <div className="flex flex-col items-start gap-6 w-full lg:w-[360px]">
          {/* Icon */}
          <div className="w-[84px] h-[84px] bg-[#CF7B41]"></div>

          {/* Content */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[#CF7B41] text-[20px] md:text-[24px] font-bold capitalize">
              Unlock opportunities from healthcare data with advanced analytics
            </h3>
            <p className="text-[#494F59] text-[14px] md:text-[16px]">
              Leverage advanced analytics to unlock new opportunities for
              improved care delivery, streamline processes, and drive innovation.
            </p>
          </div>

          {/* Learn More Button */}
          <button className="flex flex-row items-center gap-4 w-[169px] h-[48px] border border-[#383C44] rounded-full px-6 py-3">
            <span className="text-[#383C44] text-[14px] md:text-[16px] font-medium">
              Learn More
            </span>
            <div className="w-[24px] h-[24px] bg-[#383C44]"></div>
          </button>
        </div>

        {/* Center Frame */}
        {/* <div className="relative w-full lg:w-[916px] h-[300px] lg:h-[540px]">
          <div className="absolute w-full h-full bg-white rounded-[60px]"></div>
          <div
            className="absolute hidden lg:block w-[1042px] h-[522px] opacity-40 border-[40px] border-[#E8F6FC] transform -rotate-45"
            style={{
              left: "calc(50% - 1042px/2 + 1064px)",
              top: "calc(50% - 522px/2 + 265px)",
            }}
          ></div>
        </div> */}

        {/* Right Frame */}
        <div className="flex flex-col items-start gap-6 w-full lg:w-[380px]">
          {/* Card 1 */}
          <div className="relative w-full h-[120px] lg:h-[164px] bg-white rounded-[200px] flex items-center justify-center">
            <div className="flex items-center justify-center gap-2">
              <div className="w-[48px] h-[48px] bg-[#CF7B41]"></div>
              <h4 className="text-[#CF7B41] text-[18px] md:text-[24px] font-bold capitalize">
                Unleash full potential
              </h4>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative w-full h-[120px] lg:h-[164px] bg-white rounded-[200px] flex items-center justify-center">
            <div className="flex items-center justify-center gap-3">
              <div className="w-[48px] h-[48px] bg-[#CF7B41]"></div>
              <h4 className="text-[#CF7B41] text-[18px] md:text-[24px] font-bold capitalize">
                Elevate care outcomes
              </h4>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative w-full h-[120px] lg:h-[164px] bg-white rounded-[200px] flex items-center justify-center">
            <div className="flex items-center justify-center gap-3">
              <div className="w-[48px] h-[48px] bg-[#CF7B41]"></div>
              <h4 className="text-[#CF7B41] text-[18px] md:text-[24px] font-bold capitalize">
                Build zero touch experiences
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
