"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import img from "../../../public/career/our-purpose.jpg";
import img2 from "../../../public/career/our-vision.jpg";
import img3 from "../../../public/career/our-values.jpg";

export default function VisionSection() {
  const categories = ["Our Purpose", "Our Vision", "Our Values"];
  const [selectedCategory, setSelectedCategory] = useState("Our Vision");
  const [showVideo, setShowVideo] = useState(false);

  // Dynamic Content Mapping
  const content = {
    "Our Purpose": {
      text: "8th Element wake up every day with a singular purpose: to create smiles through great people and technology. Our collective mission is about more than the bottom line: it’s about the impact we have in the world and the opportunity to inspire delight every day and uncover new possibilities. We believe technology should be used for more than just making something digital for digital’s sake, it should solve problems that were previously not solvable. It should encourage us to dream big and find new answers. Let’s dream together.",
      image: img,
      video: "https://www.youtube.com/embed/MnKsxnP2IVk?si=zWuxodcQ8ie3UU_U",
    },
    "Our Vision": {
      text: "Our vision is to be the world’s most loved digital transformation partner. When something makes a positive impact, you tend to remember it – it occupies a special place in your heart and mind. That’s the place we aim to live. Our vision is to become your number one partner, your most trusted advisor, and a strategic resource in getting your business to a more prosperous tomorrow.",
      image: img2,
      video: "https://www.youtube.com/embed/MnKsxnP2IVk?si=zWuxodcQ8ie3UU_U",
    },
    "Our Values": {
      text: "Our values are more than just words on a page. They guide the decisions and behaviors that shape our culture. At 8th Element, 5 key principles guide everything we do.\n1. Put people first.\n2. Create customer value.\n3. Innovate relentlessly.\n4. Be sustainable.\n5. Come on in!",
      image: img3,
      video: "https://www.youtube.com/embed/MnKsxnP2IVk?si=zWuxodcQ8ie3UU_U",
    },
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setShowVideo(false);
  };

  return (
    <section className="relative flex flex-col  lg:flex-row  justify-between px-4 md:px-14 lg:px-14 py-10 lg:py-36 bg-primarybg text-gray-800">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
      <motion.div
        className="w-full lg:w-1/2 space-y-6"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Filter Buttons */}
        <div className="relative flex flex-wrap top-0 justify-center lg:justify-start gap-3 md:gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 md:px-6 py-2 md:py-3 rounded-md text-sm md:text-base font-semibold transition ${
                selectedCategory === category
                  ? " text-gray-700"
                  : " text-gray-400"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Dynamic Text Content */}
        <p className="text-base md:text-lg text-gray-600 leading-relaxed text-center lg:text-left py-10">
          {content[selectedCategory].text}
        </p>
      </motion.div>

      {/* Image or Video Section */}
      <motion.div
        className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="relative w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl ">
          {showVideo ? (
            <iframe
              src={content[selectedCategory].video}
              title={selectedCategory}
              className="rounded-lg shadow-lg w-full h-64 md:h-80"
              width={800}
              height={600}
              allowFullScreen
            ></iframe>
          ) : (
            <Image
              src={content[selectedCategory].image}
              alt={selectedCategory}
              width={800}
              height={600}
              className=" shadow-lg w-full  bg-cover cursor-pointer"
              onClick={() => setShowVideo(true)}
            />
          )}
        </div>
      </motion.div>
      </div>
      {/* Text Content */}
     
    </section>
  );
}
