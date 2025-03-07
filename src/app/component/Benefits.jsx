import Image from "next/image";
import icon1 from "../../../public/career/Learning.svg";
import icon2 from "../../../public/career/Career-Track.svg";
import icon3 from "../../../public/career/Worklife-Balance.svg";
import icon4 from "../../../public/career/Event.svg";
import icon5 from "../../../public/career/Rewards.svg";
// import { Calendar, Award } from "lucide-react";gfr sdf
const benefits = [
  {
    icon: icon1,
    title: "Learning & Development",
    description:
      "We offer a wide array of programs to help you expand your skills and supercharge your career.",
  },
  {
    icon: icon2,
    title: "Career Track",
    description:
      "Discover your passion—the driving force that makes you smile and innovate, create, and make a difference every day.",
  },
  {
    icon: icon3,
    title: "Work Life Balance",
    description:
      "8th Element is all about open doors, open minds, and open opportunities. We ensure a flexible work environment that respects your work-life balance and your growth.",
  },
  {
    title: "Events & Activities",
    description:
      "We take pride in our close-knit community. Our awesome events and activities unite our diverse teams for some good times.",
    icon: icon4,
    bgColor: "bg-blue-100",
  },
  {
    title: "Awards & Recognition",
    description:
      "We don’t just welcome your voice; we celebrate it! Acknowledging your unique perspective and recognizing your individual talent is fundamental.",
    icon: icon5,
    bgColor: "bg-yellow-100",
  },
];

export default function Benefits() {
  return (
    <div
      className="bg-[#E8F6FC] py-12 px-6 sm:px-16 lg:px-18 text-left"
      // style={{
      //   backgroundImage: `url('ring.svg')`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "bottom",
      //   backgroundSize: "1800px",
      // }}
    >
      <h2 className="text-4xl  text-gray-900 my-4">
        The 8th Elemente Advantage: Your Workplace Benefits
      </h2>
      <p className="text-gray-600 my-4">
        We are interested in, and want to support, the professional and personal
        you.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
        {benefits.map((benefit, index) => (
          <div key={index} className="py-6 ">
            <Image
              src={benefit.icon}
              alt={benefit.title}
              width={90}
              height={90}
              className="mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900">
              {benefit.title}
            </h3>
            <p className="text-gray-600 mt-2">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
