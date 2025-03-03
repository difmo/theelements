import React from "react";
import MainFrame from "./component/MainFrame";
import OurSolutions from "./component/OurSolutions";
import Whoweserve from "./component/Whoweserve";
import Ourcustomervoice from "./component/Ourcustomervoice";
import WhyPartners from "./component/WhyPartners";
import OurSuccessStory from "./component/OurSuccessStory";
import OurServices from "./component/OurServices";
import OurLeadership from "./component/OurLeadership";
import Whoweserve2 from "./component/Whoweserve2";
import OurLeadership2 from "./component/OurLeadership2";
// import ContactCareer fro

const page = () => {
  return (
    <div className="bg-[#E8F6FC] font-lato">
      <div className="">
        <MainFrame className="font-lato" />
        {/* <div className="flex justify-center items-center"></div> */}
        <OurSuccessStory className="font-lato" />
        <OurSolutions className="font-lato" />
        <div className="flex justify-center items-center">     <OurServices className="font-lato" /></div>
   
        {/* <Whoweserve  className="font-lato"/> */}
        <Whoweserve2 className="font-lato" />
        <Ourcustomervoice className="font-lato" />
        <WhyPartners className="font-lato" />
        {/* <OurLeadership  className="font-lato"/> */}
        <OurLeadership2 className="font-lato" />
        {/* <ContactCareer className="font-lato" /> */}
      </div>

      {/* <ContactCareer /> */} 
    </div>
  );
};

export default page;
