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
    <div className="relative w-full max-w-[1440px] mt-14 mx-auto">
      {/* Section Header */}
      <div className="flex justify-center items-center mb-8">
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

      {/* Payers Section */}
      <div className="relative z-10 flex flex-col items-center px-4 sm:px-8 lg:px-16">
        {rows.map((row, index) => (
          <div key={index} className="relative mx-auto flex justify-between w-full border-b-2 pb-5 border-gray-300 mb-12">
            {/* Title Section */}
            <div
              className="text-[24px] font-[Quattrocento] font-bold leading-[26.59px] text-left text-[#CF7B41] w-[20%] h-[266px] mb-4"
              style={{
                textUnderlinePosition: 'from-font',
                textDecorationSkipInk: 'none',
              }}
            >
              {row.title}
            </div>

            {/* Image Container */}
            <div className="relative w-[30%] h-[266px] mb-4">
              <Image
                src={row.image} // Dynamic card image
                alt="image" // Dynamic alt text
                layout="fill"
                objectFit="cover"
                className="transition-transform rounded-[40px] duration-500 ease-in-out group-hover:scale-105"
              />
            </div>

            {/* List Section */}
            <div className="w-[50%] px-5">
              <ul className="list-none pl-5 space-y-2">
                {row.listItems.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <MdNorthEast className="mr-2" />
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
