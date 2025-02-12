"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import img from "../assets/career/career.jpg";

export default function VisionSection() {
  const categories = ["Our Purpose", "Our Vision", "Our Values"];
  const [selectedCategory, setSelectedCategory] = useState("Our Vision");

  // Dynamic Content Mapping
  const content = {
    "Our Purpose": {
      text: "Hexawarians wake up every day with a singular purpose: to create smiles through great people and technology. Our collective mission is about more than the bottom line: it’s about the impact we have in the world and the opportunity to inspire delight every day and uncover new possibilities. We believe technology should be used for more than just making something digital for digital’s sake, it should solve problems that were previously not solvable. It should encourage us to dream big and find new answers. Let’s dream together.",
      image: img,
    },
    "Our Vision": {
      text: "Our vision is to be the world’s most loved digital transformation partner. When something makes a positive impact, you tend to remember it – it occupies a special place in your heart and mind. That’s the place we aim to live. Our vision is to become your number one partner, your most trusted advisor, and a strategic resource in getting your business to a more prosperous tomorrow.",
      image: img,
    },
    "Our Values": {
      text: "Our values are more than just words on a page. They guide the decisions and behaviors that shape our culture. At Hexaware, 5 key principles guide everything we do.\n1. Put people first.\n2. Create customer value.\n3. Innovate relentlessly.\n4. Be sustainable.\n5. Come on in!",
      image: img,
    },
  };

  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-between px-4 md:px-8 lg:px-16 py-10 lg:py-20 bg-gray-100 text-gray-800">
      {/* Text Content */}
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
              onClick={() => setSelectedCategory(category)}
              className={`px-4 md:px-6 py-2 md:py-3 rounded-md text-sm md:text-base font-semibold transition ${
                selectedCategory === category
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
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

      {/* Image Section (Responsive) */}
      <motion.div
        className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="relative w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl">
          <Image
            src={content[selectedCategory].image}
            alt={selectedCategory}
            width={600}
            height={400}
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
          >
            <div className="bg-white p-3 rounded-lg shadow-md cursor-pointer">
              <svg
                className="w-10 h-10 text-blue-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
