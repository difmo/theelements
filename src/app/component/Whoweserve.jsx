import React from 'react';
import weserve from "../assets/weserve.jpg";
import weserve2 from "../assets/weserve2.jpg";
import weserve3 from "../assets/weserve3.jpg";
import Image from 'next/image';
import { MdNorthEast } from 'react-icons/md';

const Whoweserve = () => {
  const rows = [
    {
      title: 'Payers',
      image: weserve,
      listItems: [
        '⁠Boost HEDIS & Star ratings with real-time insights.',
        '⁠⁠Enhance Medicare & Medicaid outcomes using SDOH.',
        'Drive engagement with a 360° member view.'
      ]
    },
    {
      title: 'Providers',
      image: weserve2,
      listItems: [
        'Tools for value-based care and clinical interventions.',
        'Predictive models for care and risk management.',
        'Boost engagement with personalized care.'
      ]
    },
    {
      title: 'Patients',
      image: weserve3,
      listItems: [
        'Enhance insights with AI in existing solutions.',
        'Platform modernization with next Gen tools',
        'Seamless Integration with Health-Tech ecosystem'
      ]
    }
  ];

  return (
    <div className="relative w-full max-w-[1440px] mt-14 mx-auto px-4 sm:px-8 lg:px-16">
      {/* Section Header */}
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
          WHO WE SERVE
        </div>
      </div>

      {/* Payers, Providers, and Patients Sections */}
      <div className="relative z-10 flex flex-col items-center">
        {rows.map((row, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center justify-between w-full pb-5 mb-12 border-b-2 border-gray-300 sm:flex-row sm:items-start"
          >
            {/* Title Section */}
            <div
              className="text-[24px] sm:text-[28px] font-[Quattrocento] font-bold leading-[26.59px] text-left text-[#CF7B41] sm:w-[20%] w-full mb-4 sm:mb-0"
              style={{
                textUnderlinePosition: 'from-font',
                textDecorationSkipInk: 'none',
              }}
            >
              {row.title}
            </div>

            {/* Image Section */}
            <div className="relative sm:w-[30%] w-full h-[266px] sm:h-[300px] mb-4 sm:mb-0">
              <Image
                src={row.image}
                alt={row.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform rounded-[40px] duration-500 ease-in-out group-hover:scale-105"
              />
            </div>

            {/* List Section */}
            <div className="w-full sm:w-[50%] px-5 sm:px-0">
              <ul className="pl-5 space-y-2 list-none">
                {row.listItems.map((item, i) => (
                  <li key={i} className="flex items-start text-sm sm:text-base">
                    <MdNorthEast className="mr-2 text-[#CF7B41]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Whoweserve;
