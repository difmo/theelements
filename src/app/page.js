import React from "react";
import MainFrame from "./component/MainFrame";
import OurSolutions from "./component/OurSolutions";
import Ourcustomervoice from "./component/Ourcustomervoice";
import WhyPartners from "./component/WhyPartners";
import OurSuccessStory from "./component/OurSuccessStory";
import OurServices from "./component/OurServices";
import Whoweserve2 from "./component/Whoweserve2";
import OurExperties2 from "./component/OurExperties";
import TechSolutions from "./component/TechSolutions";
import SliderFrame from "./component/SliderFrame";
import AboutUs from "./component/AboutUs";

const page = () => {
  return (
    <div className="bg-[#E8F6FC] font-lato">
      <MainFrame className="font-lato" />
      <OurSuccessStory className="font-lato" />
      <OurSolutions title={"OUR SOLUTIONS"} className="font-lato" />
      <OurSolutions title={"Technical Solutions"} className="font-lato" />
      {/* <TechSolutions/> */}
      <div className="flex justify-center items-center">
        <OurServices className="font-lato" />
      </div>
      <Whoweserve2 className="font-lato" />
      <Ourcustomervoice className="font-lato" />
      <WhyPartners className="font-lato" />
      <AboutUs/>
      <OurExperties2 />
    </div>
  );
};

export default page;
