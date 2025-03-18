"use client";
import img from "../assets/images/careerheader.jpg";
import img2 from "../assets/career/a1.png";
import Image from "next/image";
import Benefits from "../component/Benefits";
import Heading2 from "../component/Headding2";
import JobApplicationForm from "../component/JobApplicationForm";
import SwiperGallary from "../component/SwiperGallary";

export default function page() {
  return (
    <>
      <section className="relative px-8 md:px-14 md:h-screen flex justify-center  text-white  bg-primarybg overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={img}
            fill
            alt="Element Image"
            className="brightness-75 object-cover md:bg-cover"
          />
        </div>

        <div className="relative z-10  text-left">
          <p className="text-sm md:text-lg font-light flex mt-3 md:mt-20">
            Join 8th Element
          </p>
          <h1 className="text-2xl md:text-5xl lg:text-7xl md:font-bold mt-32 md:mt-56">
            Build the future of healthcare tech with us!
          </h1>
          <p className="mt-14 text-lg md:text-xl font-light  leading-relaxed pb-6">
            Be part of our journey to revolutionize healthcare with advanced technology, enhancing patient care and making a lasting impact.
          </p>
        </div>
      </section>
      <Benefits />
      <JobApplicationForm />
      <div className="bg-[#383C44]  text-white py-16 px-6 sm:px-10 md:px-14 flex flex-col items-center">
        <div className="w-full md:w-1/2 mt-8 md:mt-0 text-left">
          <Heading2 title="Life at 8th Element" />
          <p className="text-lg pb-10 text-gray-300 mt-4 leading-relaxed text-center">
            Explore how we&apos;re working to build a more inclusive future that
            reflects the richness of human diversity and ensures equal
            opportunities for all.
          </p>
        </div>
        <SwiperGallary />
      </div>
    </>
  );
}
