"use client";
import { useEffect, useState } from "react";

export default function IdeasSection() {
  const [count, setCount] = useState(0);
  const targetCount = 5181;

  useEffect(() => {
    let start = 0;
    const duration = 2000; // Animation time in ms
    const increment = Math.ceil(targetCount / (duration / 50));

    const counter = setInterval(() => {
      start += increment;
      if (start >= targetCount) {
        start = targetCount;
        clearInterval(counter);
      }
      setCount(start);
    }, 50);

    return () => clearInterval(counter);
  }, []);

  return (
    <section className="bg-[#E8F6FC] px-6 md:px-14 lg:px-14 py-12 ">
      <div className=" mx-auto flex flex-col md:flex-row items-center container justify-between">
        {/* Left Content */}
        <div className="max-w-xl">
          <h2 className="text-2xl md:text-4xl  text-gray-900 py-10">
            Bring Your Ideas With You
          </h2>
          <p className="my-3 leading-10 text-gray-600 text-lg">
            Our Brainbox program incentivizes Hexawarians to contribute ideas
            that add value to our customers’ IT landscape. We’re excited to hear
            your ideas.
          </p>
        </div>

        {/* Right Counter */}
        <div className="mt-8 md:mt-0 flex flex-col ">
          <span className="text-xl md:text-6xl font-bold text-blue-900">
            {count.toLocaleString()}
          </span>
          <span className="text-lg text-gray-600">Ideas Implemented</span>
        </div>
      </div>
    </section>
  );
}
