import React from "react";
import { AiOutlineFundProjectionScreen } from "react-icons/ai"; // Example Icon
import { MdOutlineScore } from "react-icons/md"; // Example Icon
import { FaAd, FaHandHoldingMedical, FaRobot } from "react-icons/fa"; // Example Icon

const OurServices2 = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-2 p-8 lg:flex-row bg-gradient-to-r from-blue-100 via-white to-blue-50">
      <div className="relative  w-full p-8 bg-white rounded-[60px]  ">
        <div className="absolute inset-0 z- 0 opacity-10">
          <svg
            width="913"
            height="540"
            viewBox="0 0 913 540"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.4"
              d="M371.531 294.499C376.225 354.727 401.704 413.635 448.019 459.532C550.224 560.826 714.602 560.398 816.365 458.635C918.338 356.662 918.347 191.374 816.413 89.4402C770.565 43.5922 711.915 18.3714 651.971 13.7643C583.375 8.50599 529.48 -45.6602 524.16 -114.268C519.479 -174.459 494.025 -233.317 447.783 -279.214C345.615 -380.594 181.114 -380.241 79.3265 -278.428C-22.6337 -176.468 -22.6551 -11.1674 79.2787 90.7664C125.114 136.602 183.752 161.81 243.684 166.43C312.304 171.713 366.224 225.879 371.556 294.499L371.531 294.499Z"
              stroke="#E8F6FC"
              strokeWidth="40"
              stroke-miterlimit="10"
            />
          </svg>
        </div>
        <div className="z-10 flex flex-col gap-2 md:flex">
          <div className="">
            <h2 className="text-2xl font-bold text-orange-600">
              Unlock Opportunities From Healthcare Data With Advanced Analytics
            </h2>
            <p className="mt-4 text-gray-700">
              Leverage advanced analytics to unlock new opportunities for
              improved care delivery, streamline processes, and drive
              innovation.
            </p>
            <button className="flex items-center px-6 py-2 mt-6 space-x-2 text-white bg-orange-500 rounded-md hover:bg-orange-600">
              <span>Learn More</span>
              <AiOutlineFundProjectionScreen size={20} />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="flex flex-col gap-3 mt-8">
              <div className="flex flex-col items-center  justify-center space-x-4 bg-blue-100 rounded-[40px] w-180px] h-[180px]">
                <MdOutlineScore size={36} className="text-blue-500" />
                <span className="text-sm font-semibold text-gray-800 text">
                  HEDIS Score Cards
                </span>
              </div>
              <div className="flex flex-col items-center justify-center space-x-4 bg-blue-100 rounded-[40px] w-180px] h-[180px]">
                {" "}
                <FaAd size={36} className="text-blue-500" />
                <span className="text-sm font-semibold text-gray-800 text">
                  Predictive Insights
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-3 ">
              <div className="flex flex-col items-center justify-center space-x-4 bg-blue-100 rounded-[40px] w-180px] h-[180px]">
                {" "}
                <FaRobot size={36} className="text-blue-500" />
                <span className="text-sm font-semibold text-gray-800 text">
                  Quality Check Dashboards
                </span>
              </div>
              <div className="flex flex-col items-center justify-center space-x-4 bg-blue-100 rounded-[40px] w-180px] h-[180px]">
                {" "}
                <FaHandHoldingMedical size={36} className="text-blue-500" />
                <span className="text-sm font-semibold text-gray-800 text">
                  Retrospective Reporting
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Right Container */}
      {/* sdfsdlfkj */}
      <div className="flex flex-col items-center w-full gap-2 lg:w-1/3 ">
        <div className="flex items-center justify-center w-[380px] h-[164px] space-x-4 bg-white rounded-full">
          <FaRobot size={36} className="text-orange-500" />
          <span className="text-lg font-bold text-orange-500">
            Unleash Full Potential
          </span>
        </div>

        <div className="flex items-center justify-center w-[380px] h-[164px] space-x-4 bg-white rounded-full">
          {" "}
          <FaHandHoldingMedical size={36} className="text-orange-500" />
          <span className="text-lg font-bold text-orange-500">
            Elevate Care Outcomes
          </span>
        </div>
        <div className="flex items-center justify-center w-[380px] h-[164px] space-x-4 bg-white rounded-full">
          {" "}
          <FaRobot size={36} className="text-orange-500" />
          <span className="text-lg font-bold text-orange-500">
            Build Zero Touch Experiences
          </span>
        </div>
      </div>
    </div>
  );
};

export default OurServices2;
