'use client'
import React, { useState } from 'react';
import weserve from "../assets/weserve.jpg";
import weserve2 from "../assets/weserve2.jpg";
import weserve3 from "../assets/weserve3.jpg";
import Image from 'next/image';
import { MdNorthEast, MdSouthEast } from 'react-icons/md';
import Heading from './Heading';

const Whoweserve = () => {
  const [activeTab, setActiveTab] = useState('Payers'); // Default active tab is 'Payers'

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
      title: 'Help Tech',
      image: weserve3,
      listItems: [
        'Enhance insights with AI in existing solutions.',
        'Platform modernization with next Gen tools',
        'Seamless Integration with Health-Tech ecosystem'
      ]
    }
  ];

  return (
    <>
      <Heading title={"WHO WE SERVE"} />

      <div className="relative w-full max-w-[1440px] mt-14 mx-auto px-4 sm:px-8 lg:px-16">

        {/* Tabs for Mobile View */}
        <div className="flex justify-center w-full mb-8 sm:hidden">
          <div className="flex space-x-4">
            {rows.map((row) => (
              <div
                key={row.title}
                className={`cursor-pointer text-lg ${activeTab === row.title ? 'text-[#fff] px-4 py-2 bg-blue-600 rounded-full' : 'text-black py-2 border px-4 rounded-full border-black'}`}
                onClick={() => setActiveTab(row.title)}
              >
                {row.title}
              </div>
            ))}
          </div>
        </div>

        {/* Content Display for Mobile View */}
        <div className="block sm:hidden">
          {rows.filter((row) => row.title === activeTab).map((row, index) => (
            <div key={index} className="flex flex-col items-center justify-between w-full pb-5 mb-12 border-b-2 border-gray-300 sm:flex-row sm:items-start">
              <div className="text-[24px] font-[Quattrocento] text-[#CF7B41] sm:w-[20%] w-full mb-4 sm:mb-0">
                {row.title}
              </div>

              <div className="relative sm:w-[30%] w-full h-[266px] sm:h-[300px] mb-4 sm:mb-0">
                <Image
                  src={row.image}
                  alt={row.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform rounded-[40px] duration-500 ease-in-out group-hover:scale-105"
                />
              </div>

              <div className="w-full sm:w-[50%] px-5 sm:px-0">
                <ul className="pl-5 space-y-2 list-none">
                  {row.listItems.map((item, i) => (
                    <li key={i} className="flex items-start text-sm sm:text-base">
                      <MdNorthEast className="mr-2 text-[#000]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Content Display for Desktop View */}
        <div className="relative flex flex-wrap hidden sm:flex justify-between space-x-8">
  {rows.map((row, index) => (
    <div
      key={index}
      className="relative flex flex-col items-center w-full sm:w-[30%] pb-5 mb-12 border-b border-gray-400 sm:flex-col sm:items-center"
    >
      {/* Title Section */}
      <div
        className="text-[24px] sm:text-[28px] font-[Quattrocento] leading-[26.59px] text-left text-[#CF7B41] sm:w-full w-full mb-4 sm:mb-4"
        style={{
          textUnderlinePosition: 'from-font',
          textDecorationSkipInk: 'none',
        }}
      >
        {row.title}
      </div>

      {/* Image Section */}
      <div className="relative sm:w-full w-full h-[266px] sm:h-[300px] mb-4 sm:mb-4">
        <Image
          src={row.image}
          alt={row.title}
          layout="fill"
          objectFit="cover"
          className="transition-transform rounded-[40px] duration-500 ease-in-out group-hover:scale-105"
        />
      </div>

      {/* List Section */}
      <div className="w-full sm:w-full px-5 sm:px-0">
        <ul className=" space-y-2 list-none">
          {row.listItems.map((item, i) => (
            <li key={i} className="flex items-start text-sm sm:text-base">
              <MdSouthEast className="mr-2 text-[#000]" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  ))}
</div>

      </div>
    </>
  );
};

export default Whoweserve;
