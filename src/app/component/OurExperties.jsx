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
  { name: "Microsoft Azure", src: img9 },
  { name: "Purview", src: img10 },
  { name: "Microsoft 365", src: img11 },
  { name: "Profisee", src: img12 },
  { name: "PySpark", src: img13 },
  { name: "Power BI", src: img14 }
];

const ExpertiseSection = () => {
  return (
    <div className="bg-primary-900 py-20">
      <div className="max-w-4xl mx-auto p-6">
        <Heading2 title="Our Expertise" />
        <div className="border border-gray-300 py-11 mt-6 rounded-md shadow-md">
          <div className="flex flex-wrap justify-center gap-8">
            {expertiseData.map((item, index) => (
              <div key={index} className="flex flex-col items-center space-y-2">
                <Image
                  src={item.src}
                  alt={item.name}
                  width={50} // Adjusted image width
                  height={50} // Adjusted image height
                  className="shadow-lg bg-cover cursor-pointer"
                />
                <p className="text-white text-center">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertiseSection;
