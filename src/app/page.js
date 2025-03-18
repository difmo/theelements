import React from "react";
import MainFrame from "./component/MainFrame";
import OurSolutions from "./component/OurSolutions";
import Ourcustomervoice from "./component/Ourcustomervoice";
import WhyPartners from "./component/WhyPartners";
import OurSuccessStory from "./component/OurSuccessStory";
import OurServices from "./component/OurServices";
import Whoweserve2 from "./component/Whoweserve2";
import OurExperties2 from "./component/OurExperties2";

const page = () => {
  return (
    <div className="bg-[#E8F6FC] font-lato">
      <MainFrame className="font-lato" />
      <OurSuccessStory className="font-lato" />
      <OurSolutions className="font-lato" />
      <div className="flex justify-center items-center">
        <OurServices className="font-lato" />
      </div>
      <Whoweserve2 className="font-lato" />
      <Ourcustomervoice className="font-lato" />
      <WhyPartners className="font-lato" />
      <OurExperties2 />
    </div>
  );
};

export default page;
