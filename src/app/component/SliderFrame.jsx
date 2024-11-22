"use client"
import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import imagees from "../assets/image1.jpg"
const SliderFrame = () => {
  const [activeImage, setActiveImage] = useState(0);
  const images = [
    {
      src: {imagees},
      alt: 'First Image',
      caption: 'This is the first image',
    },
    {
      src: {imagees},
      alt: 'Second Image',
      caption: 'This is the second image',
    },
    {
      src: {imagees},
      alt: 'Second Image',
      caption: 'This is the second image',
    }, 
  ];

  const handleImageClick = (index) => {
    setActiveImage(index);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-full h-64 overflow-hidden relative">
        <img
          src={images[activeImage].src}
          alt={images[activeImage].alt}
          className="w-full h-full object-cover transition-transform duration-500"
        />
        <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2 w-full text-center">
          {images[activeImage].caption}
        </div>
      </div>
      <div className="flex mt-4 space-x-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => handleImageClick(index)}
            className={`w-4 h-4 rounded-full ${activeImage === index ? 'bg-blue-500' : 'bg-gray-300'}`}
            aria-label={image.alt}
          />
        ))}
      </div>
    </div>
  );
};

export default SliderFrame;
