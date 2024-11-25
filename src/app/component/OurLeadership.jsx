import Image from "next/image";
import img1 from "../assets/leader1.png";
import img2 from "../assets/leader2.png";
import img3 from "../assets/leader3.png";
import img4 from "../assets/leader4.png";
import img5 from "../assets/leader5.png";

const OurLeadership = () => {
  const leaders = [
    { name: "Rama Evani", image: img1 },
    { name: "Prashanth Kasturi", image: img2 },
    { name: "Matt Whitnack", image: img3 },
    { name: "Deepak Bharadwaj", image: img4 },
    { name: "Shravan Dantu", image: img5 },
  ];

  return (
    <div className="px-5 py-10 bg-gradient-to-b from-white via-blue-100 to-blue-200">
      {/* Header */}
      <div className="flex items-center justify-center mb-8">
        <div
          className="flex justify-center items-center text-center h-[33px] px-4 py-1 gap-3 rounded-[60px] border border-opacity-0"
          style={{
            fontFamily: "Mulish",
            fontSize: "20px",
            fontWeight: 500,
            lineHeight: "25.1px",
            textAlign: "center",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
          }}
        >
          OUR LEADERSHIP
        </div>
      </div>

      {/* Leadership Section */}
      <div className="flex flex-row items-center justify-center gap-8">
        {leaders.slice(0, 3).map((leader, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center pb-24 rounded-full md:bg-white"
          >
            <div className="relative bg-white rounded-full md:p-2">
              <div className=" h-[70px] w-[70px]  md:h-[240px] md:w-[240px] rounded-full overflow-hidden">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  layout="intrinsic"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
            </div>
            <h3 className="mt-8 font-medium text-center text-gray-800 md:text-2xl">
              {leader.name}
            </h3>
          </div>
        ))}
      </div>

      <div className="flex flex-row items-center justify-center gap-8">
        {leaders.slice(3, 5).map((leader, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center pb-24 rounded-full md:bg-white"
          >
            <div className="relative bg-white rounded-full md:p-2">
            <div className=" h-[70px] w-[70px]  md:h-[240px] md:w-[240px] rounded-full overflow-hidden">
            <Image
                  src={leader.image}
                  alt={leader.name}
                  layout="intrinsic"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
            </div>
            <h3 className="mt-8 font-medium text-center text-gray-800 md:text-2xl">
              {leader.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurLeadership;
