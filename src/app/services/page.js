"use client";

import { sanityClient } from "@/sanity"; // Ensure this points to your Sanity client configuration
import React, { useEffect, useState } from "react";
import OurServices2 from "../component/OurServices";

const Page = () => {
  const [services, setServices] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const result = await sanityClient.fetch(
          `*[_type == "service"]{
            _id,
            title,
            slug,
            icon,
            description,
            category,
            price
          }`
        );
        setServices(result);
      } catch (err) {
        console.error("Failed to fetch services:", err);
        setError("Failed to load data. Please try again later.");
      }
    };

    fetchServices();
  }, []);

  if (error) {
    return <div className="text-red-500">{error}</div>; // Display error message
  }

  console.log(services);

  return (
    <div className='bg-[#E8F6FC] font-lato'>
    <div className=""> 

    {/* <MainFrame  className="font-lato"/>
    <OurSuccessStory  className="font-lato"/>
    <OurSolutions  className="font-lato"/> */}
    <OurServices2  className="font-lato "/>
    {/* <Whoweserve  className="font-lato"/>
    <Ourcustomervoice  className="font-lato"/>
    <WhyPartners  className="font-lato"/>
    <OurLeadership  className="font-lato"/> */}
    </div>

     
  </div>
  );
};

export default Page;



// import React from 'react'
// import MainFrame from '../component/MainFrame'
// import OurSuccessStory from '../component/OurSuccessStory'
// import OurSolutions from '../component/OurSolutions'
// import OurServices2 from '../component/OurServices'
// import Whoweserve from '../component/Whoweserve'
// import OurCustomerVoice from '../component/Ourcustomervoice'
// import WhyPartners from '../component/WhyPartners'
// import OurLeadership from '../component/OurLeadership'


// // efosijdfkla
// const page = () => {
//   return (
//     <div className='bg-[#E8F6FC] font-lato'>
//       <div className=""> 

//       <MainFrame  className="font-lato"/>
//       <OurSuccessStory  className="font-lato"/>
//       <OurSolutions  className="font-lato"/>
//       <OurServices2  className="font-lato"/>
//       <Whoweserve  className="font-lato"/>
//       <OurCustomerVoice  className="font-lato"/>
//       <WhyPartners  className="font-lato"/>
//       <OurLeadership  className="font-lato"/>
//       </div>

       
//     </div>
//   )
// }

// export default page