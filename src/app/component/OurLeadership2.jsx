import Image from "next/image";
import img1 from "../assets/leader1.png";
import img2 from "../assets/leader2.png";
import img3 from "../assets/leader3.png";
import img4 from "../assets/leader4.png";
import img5 from "../assets/leader5.png";
import Heading from "./Heading";
import { FaLinkedin } from "react-icons/fa";  // Make sure to install react-icons

const OurLeadership2 = () => {
  const leaders = [
    { name: "Rama Evani", image: img3, linkedin: "https://www.linkedin.com/in/ramaevani" },
    { name: "Prashanth Kasturi", image: img1, linkedin: "https://www.linkedin.com/in/prashanthkasturi" },
    { name: "Matt Whitnack", image: img2, linkedin: "https://www.linkedin.com/in/mattwhitnack" },
    // Uncomment if you have more leaders:
    // { name: "Matt Whitnack", image: img3, linkedin: "linkedin_url" },
    // { name: "Deepak Bharadwaj", image: img5, linkedin: "linkedin_url" },
    // { name: "Shravan Dantu", image: img4, linkedin: "linkedin_url" },
  ];

  return (
    <div>
      <Heading title={"OUR LEADERSHIP"} />

      <div className="px-5 py-5 bg-gradient-to-b">
        {/* Header */}
        <div
          className="sm:flex sm:flex-col items-center  justify-center sm:py-12"
          style={{
            backgroundImage: `url('bgvector.svg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {leaders.map((leader, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-lg"
              >
                <div className="relative bg-white p-2">
                  <div className="h-[160px] w-[160px] sm:h-[160px] sm:w-[160px] md:h-[240px] md:w-[240px] bg-gray-200 overflow-hidden rounded-full">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      layout="intrinsic"
             
                      className="rounded-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-center text-[#CF7B41]">{leader.name}</h3>

                <a
                  href={leader.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 text-[#0077B5] hover:text-[#004C8C] transition duration-300"
                >
                  <FaLinkedin className="w-6 h-6" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurLeadership2;
