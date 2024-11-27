import Image from "next/image";
import img1 from "../assets/leader1.png";
import img2 from "../assets/leader2.png";
import img3 from "../assets/leader3.png";
import img4 from "../assets/leader4.png";
import img5 from "../assets/leader5.png";
import Heading from "./Heading";

const OurLeadership = () => {
  const leaders = [
    { name: "Rama Evani", image: img1 },
    { name: "Prashanth Kasturi", image: img2 },
    { name: "Matt Whitnack", image: img3 },
    { name: "Deepak Bharadwaj", image: img4 },
    { name: "Shravan Dantu", image: img5 },
  ];

  return (
    <div>
      <Heading title={"OUR LEADERSHIP"} />

      <div className="px-5 py-10 bg-gradient-to-b ">
        {/* Header */}

        <div
          className="flex flex-col items-center justify-center py-12"
          style={{
            backgroundImage: `url('bgvector.svg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex flex-row items-center justify-center gap-8">
            {leaders.slice(0, 3).map((leader, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center rounded-full pb-14 md:bg-white"
              >
                <div className="relative bg-white rounded-full md:p-2">
                  <div className="h-[70px] w-[70px] md:h-[240px] md:w-[240px] rounded-full overflow-hidden">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      layout="intrinsic"
                      objectFit="cover"
                      className="rounded-full"
                    />
                  </div>
                </div>
                <h3 className="mt-8 w-1/2 font-quattrocento font-semibold text-center text-[#CF7B41] md:text-2xl">
                  {leader.name}
                </h3>
              </div>
            ))}
          </div>

          <div className="flex flex-row items-center justify-center gap-8">
            {leaders.slice(3, 5).map((leader, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center pb-12 rounded-full md:bg-white"
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
                <h3 className="mt-8 w-1/2 font-quattrocento font-semibold  text-center text-[#CF7B41] md:text-2xl">
                  {leader.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurLeadership;
