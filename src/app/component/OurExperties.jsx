
import React from "react";
import img1 from '../assets/ourexperties/python.svg';
import img2 from '../assets/ourexperties/azure.svg';
import img3 from '../assets/ourexperties/informatica.svg';
import img4 from '../assets/ourexperties/oracle.svg';
import img5 from '../assets/ourexperties/sharepoint.svg';
import img6 from '../assets/ourexperties/databricks.svg';
import img7 from '../assets/ourexperties/salesforce.svg';
import img8 from '../assets/ourexperties/qlik.svg';
import img9 from '../assets/ourexperties/azure.svg';
import img10 from '../assets/ourexperties/purview.svg';
import img11 from '../assets/ourexperties/ms360.svg';
import img12 from '../assets/ourexperties/profisee.svg';
import img13 from '../assets/ourexperties/spark.svg';
import img14 from '../assets/ourexperties/powerbi.svg';
import Image from "next/image";
import Heading2 from "./Headding2";

const expertiseData = [
  { name: "Python", src: img1 },
  { name: "Azure Synapse Analytics", src: img2 },
  { name: "Informatica", src: img3 },
  { name: "Oracle", src: img4 },
  { name: "SharePoint", src: img5 },
  { name: "Databricks", src: img6 },
  { name: "Salesforce", src: img7 },
  { name: "Qlik Sense", src: img8 },
  // { name: "Microsoft Azure", src: img9 },
  { name: "Purview", src: img10 },
  { name: "Microsoft 365", src: img11 },
  { name: "Profisee", src: img12 },
  { name: "PySpark", src: img13 },
  { name: "Power BI", src: img14 }
];

const ExpertiseSection = () => {
  return (
    <div className="flex items-center justify-center pb-12 bg-white ">
      <section className="text-center w-full max-w-7xl px-4 sm:px-6 pt-28 lg:px-8">
        <Heading2 title="Our Expertise" />
        <div className="mt-8 bg-white py-10 sm:py-20 px-4 sm:px-6 lg:px-28 rounded-lg  flex justify-center w-full">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 gap-6">
            {expertiseData.map((partner, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-28 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                  <Image
                    src={partner.src}
                    alt={partner.name}
                    width={60}
                    height={60}
                    className="bg-cover cursor-pointer"
                  />
                </div>
                <p className="mt-2 font-mulish text-gray-700 text-sm sm:text-base">{partner.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExpertiseSection;
