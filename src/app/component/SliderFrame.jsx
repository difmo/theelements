"use client";
import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import Image from 'next/image'; // Importing Image component from next/image
import image1 from "../assets/image1.jpg"; // Correct image import

const SliderFrame = () => {
  const [activeImage, setActiveImage] = useState(0);

  // Define the images with proper src values
  const images = [
    {
      src: image1, // Using the correct image import
      alt: 'First Image',
      caption: 'This is the first image',
    },
    {
      src: image1, // Repeating image1 for simplicity, you can add different images
      alt: 'Second Image',
      caption: 'This is the second image',
    },
    {
      src: image1, // Same here
      alt: 'Third Image',
      caption: 'This is the third image',
    },
  ];

  const handleImageClick = (index) => {
    setActiveImage(index);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full h-64 overflow-hidden">
        <Image
          src={images[activeImage].src} // Correctly use the `src` from the images array
          alt={images[activeImage].alt}
          className="object-cover w-full h-full transition-transform duration-500"
          width={600} // Specify width for Image component (next/image requires width and height)
          height={256} // Specify height
        />
        <div className="absolute bottom-0 left-0 w-full p-2 text-center text-white bg-black bg-opacity-50">
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
