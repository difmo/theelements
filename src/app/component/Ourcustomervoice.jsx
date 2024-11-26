"use client";
import React, { useState, useEffect } from "react";
import img from '../assets/prifileimg.png';
import img2 from '../assets/profileimg2.png';
import Image from 'next/image';


const testimonials = [
  {
    text: `"8th Element team showed deep healthcare expertise and delivered solutions that enhanced our data usability by over 50%."`,
    author: "- Chief Data Office, Leading East Coast Plan",
    image:img
  },
  {
    text: `"Partnering with 8th Element has seamlessly enhanced our care delivery and optimized operations with their data-driven approach and commitment to quality."`,
    author: "- CMD, Leading Hospital In Atlanta",
    image:img2

  },
];

const OurCustomerVoice = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative p-8 overflow-hidden text-white bg-[#383C44] md:p-40">
      <div className="flex items-center justify-center mt-8 mb-8">
        <div
          className="flex justify-center items-center text-center w-auto h-[33px] px-4 py-1 gap-3 rounded-[60px] border border-opacity-0"
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
         OUR CUSTOMER VOICE
        </div>
      </div>
      {activeTestimonial % 2 === 0 ? (
        <div className="absolute top-0 left-4 md:top-0 md:left-6 opacity-10">
          <svg
            width="539"
            height="331"
            viewBox="0 0 539 331"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 331V190.485C0 137.985 9.52889 89.603 28.5867 45.3382C47.6445 1.07355 79.9368 -43.7059 125.464 -89L208.047 -25.6912C174.167 8.2794 150.345 39.6765 136.581 68.5001C122.817 97.3236 115.935 128.206 115.935 161.147L66.7022 116.368H222.341V331H0ZM316.042 331V190.485C316.042 137.985 325.57 89.603 344.628 45.3382C363.686 1.07355 395.978 -43.7059 441.505 -89L524.089 -25.6912C490.209 8.2794 466.386 39.6765 452.622 68.5001C438.858 97.3236 431.976 128.206 431.976 161.147L382.744 116.368H538.382V331H316.042Z"
              fill="#fff"
            />
          </svg>
        </div>
      ) : (
        <div className="absolute bottom-0 right-0 md:bottom-0 md:right-0 opacity-10">
          <svg
            width="474"
            height="330"
            viewBox="0 0 474 330"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M524 0V140.515C524 193.015 514.727 241.397 496.18 285.662C477.634 329.926 446.208 374.706 401.902 420L321.534 356.691C354.505 322.721 377.688 291.324 391.083 262.5C404.478 233.676 411.175 202.794 411.175 169.853L459.087 214.632H307.624V0H524ZM216.437 0V140.515C216.437 193.015 207.163 241.397 188.617 285.662C170.07 329.926 138.644 374.706 94.3387 420L13.9705 356.691C46.942 322.721 70.1252 291.324 83.52 262.5C96.9147 233.676 103.612 202.794 103.612 169.853L151.524 214.632H0.0606079V0H216.437Z"
              fill="#fff"
            />
          </svg>
        </div>
      )}

<div className="flex flex-col items-center text-center md:flex-row md:items-start">
  <div className="mb-4 md:mb-0">
    <Image
      src={testimonials[activeTestimonial].image}
      alt={testimonials[activeTestimonial].author}
   
      className="mx-auto rounded-full "
    />
  </div>
  <div className="md:ml-6">
    <h2 className="text-xl font-semibold md:text-4xl">
      {testimonials[activeTestimonial].text}
    </h2>
    <p className="my-4 text-sm font-light md:text-lg">
      {testimonials[activeTestimonial].author}
    </p>
  </div>
</div>


      {/* Pagination Indicator */}
      <div className="absolute flex justify-center transform -translate-x-1/2 bottom-4 left-1/2">
        <div
          className={`w-6 h-6 flex items-center justify-center rounded-full 
      transition-colors duration-300`}
        >
          {activeTestimonial === 0 ? (
            <svg
              width="28"
              height="14"
              viewBox="0 0 28 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.8346 11.5612C10.7371 12.4636 9.31055 13.0068 7.7517 13C4.3116 12.9852 1.54004 10.3072 1.54004 6.99995C1.54004 3.68595 4.33406 0.999955 7.78041 0.999955C9.33052 0.999955 10.7483 1.54315 11.8396 2.44235C13.0881 3.47155 14.9148 3.46715 16.1646 2.43875C17.2612 1.53675 18.6865 0.993955 20.2441 0.999555C23.685 1.01235 26.4599 3.69116 26.4595 6.99955C26.4595 10.3132 23.6655 12.9996 20.2191 12.9996C18.6694 12.9996 17.252 12.4564 16.1608 11.5576C14.9115 10.5284 13.0843 10.5324 11.8342 11.5608L11.8346 11.5612Z"
                stroke="#FCF3ED"
                strokeMiterlimit="10"
              />
              <circle cx="20.5" cy="7" r="4" fill="#FCF3ED" />
            </svg>
          ) : (
            <svg
              width="28"
              height="14"
              viewBox="0 0 28 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_2322_684)">
                <path
                  d="M11.8346 11.5616C10.7371 12.464 9.31055 13.0072 7.7517 13.0004C4.3116 12.9856 1.54004 10.3076 1.54004 7.00044C1.54004 3.68644 4.33406 1.00044 7.78041 1.00044C9.33052 1.00044 10.7483 1.54364 11.8396 2.44284C13.0881 3.47204 14.9148 3.46764 16.1646 2.43924C17.2612 1.53724 18.6865 0.994443 20.2441 1.00004C23.685 1.01284 26.4599 3.69164 26.4595 7.00004C26.4595 10.3136 23.6655 13 20.2191 13C18.6694 13 17.252 12.4568 16.1608 11.558C14.9115 10.5288 13.0843 10.5328 11.8342 11.5612L11.8346 11.5616Z"
                  stroke="#FCF3ED"
                  strokeMiterlimit="10"
                />
                <circle cx="7.5" cy="7.00049" r="4" fill="#FCF3ED" />
              </g>
              <defs>
                <clipPath id="clip0_2322_684">
                  <rect
                    width="27"
                    height="14"
                    fill="white"
                    transform="translate(0.5 0.000488281)"
                  />
                </clipPath>
              </defs>
            </svg>
          )}
        </div>
      </div>
    </div>
  );
};

export default OurCustomerVoice;
