'use client'
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
import React, { useState, useEffect } from 'react';

const OurExperties = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [slidesPerView, setSlidesPerView] = useState(3); 

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

  // Autoplay effect
  useEffect(() => {
    const autoplayInterval = setInterval(() => {
      if (!isTransitioning) {
        goToNext();
      }
    }, 3000);

    return () => clearInterval(autoplayInterval); 
  }, [isTransitioning]);

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth <= 640) {
        setSlidesPerView(1);
      } else if (window.innerWidth <= 1024) {
        setSlidesPerView(2); 
      } else {
        setSlidesPerView(3); 
      }
    };

    updateSlidesPerView(); 
    window.addEventListener('resize', updateSlidesPerView); 

    return () => window.removeEventListener('resize', updateSlidesPerView);
  }, []);

  const goToPrevious = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? expertiseData.length - slidesPerView : prevIndex - 1
    );
  };

  const goToNext = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === expertiseData.length - slidesPerView ? 0 : prevIndex + 1
    );
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
  };

  return (
    <div>
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 ">
          <div className="flex justify-center items-center gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8 max-w-sm sm:max-w-2xl lg:max-w-full mx-auto">
            <div className="w-full flex justify-center items-center">
              <div className="swiper w-[600px] overflow-hidden relative">
                <div
                  className="swiper-wrapper flex transition-transform ease-in-out"
                  style={{
                    transform: `translateX(-${(currentIndex * 100) / slidesPerView}%)`,
                    transition: 'transform 1s ease-in-out',
                  }}
                  onTransitionEnd={handleTransitionEnd}
                >
                  {expertiseData.map((testimonial, index) => (
                    <div
                      key={index}
                      className={`swiper-slide flex-none ${slidesPerView === 1 ? 'p-4' : 'border w-[200px] p-6'}`}
                    >
                      <div className="group text-center flex justify-center align-middle   rounded-2xl transition-all duration-1000 hover:border-indigo-600">
                        <div className='w-[80px]'>
                          <Image
                            src={testimonial.src}
                            alt={testimonial.name}
                            className="rounded-2xl"
                            layout="responsive"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurExperties;
