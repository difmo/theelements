'use client'
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

import img2 from '../assets/ourexperties/azure.svg';
import img5 from '../assets/ourexperties/sharepoint.svg';
import img6 from '../assets/ourexperties/databricks.svg';
import img7 from '../assets/ourexperties/salesforce.svg';
import img8 from '../assets/ourexperties/qlik.svg';
import img10 from '../assets/ourexperties/purview.svg';
import img11 from '../assets/ourexperties/ms360.svg';
import img12 from '../assets/ourexperties/profisee.svg';
import img13 from '../assets/ourexperties/spark.svg';
import img14 from '../assets/ourexperties/powerbi.svg';
import Image from "next/image";
const Slider = dynamic(() => import('react-slick'), { ssr: false });

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Heading from './Heading';

const expertiseData = [
  { name: "Azure Synapse Analytics", src: img2 },
  { name: "SharePoint", src: img5 },
  { name: "Databricks", src: img6 },
  { name: "Salesforce", src: img7 },
  { name: "Qlik Sense", src: img8 },
  { name: "Purview", src: img10 },
  { name: "Microsoft 365", src: img11 },
  { name: "Profisee", src: img12 },
  { name: "PySpark", src: img13 },
  { name: "Power BI", src: img14 }
];

const OurExperties2 = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    setClients(expertiseData);  
  }, []);

  const CustomPrevButton = (props) => {
    const { onClick } = props;
    return (
      <button
        type="button"
        className="slick-arrow slick-prev p-2 rounded-full bg-blue-500 text-white"
        onClick={onClick}
      >
        Previous
      </button>
    );
  };

  const CustomNextButton = (props) => {
    const { onClick } = props;
    return (
      <button
        type="button"
        className="slick-arrow slick-next p-2 rounded-full bg-blue-500 text-white"
        onClick={onClick}
      >
        Next
      </button>
    );
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: <CustomPrevButton />,
    nextArrow: <CustomNextButton />,
    autoplay: true, 
    autoplaySpeed: 2000,
  };

  return (
    <div className=" py-16">
      <div className="container mx-auto px-4">
        <div className="title_section text-center mb-12">
          <Heading title={"Our Capabilities"}/>
        </div>
        <div className='flex justify-center items-center'>
        <div className="client-slider flex flex-col justify-center  max-w-3xl ">
          <Slider {...settings}>
            {clients.map((client, index) => (
              <div key={index} className="slick-slide  flex justify-center items-center">
                <div className="client-box px-8 border  m-1 h-[100px] flex justify-center items-center   rounded-lg">
                  <Image
                    src={client.src} 
                    alt={client.name} 
                    className="rounded-2xl"
                    layout="responsive"
              
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>

        </div>

      </div>
    </div>
  );
};

export default OurExperties2;
