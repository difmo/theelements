import {
  FaBookOpen,
  FaChartLine,
  FaBalanceScale,
  FaCalendar,
  FaAward,
} from "react-icons/fa";
// import { Calendar, Award } from "lucide-react";
const benefits = [
  {
    icon: <FaBookOpen className="text-yellow-500 text-4xl" />,
    title: "Learning & Development",
    description:
      "We offer a wide array of programs to help you expand your skills and supercharge your career.",
  },
  {
    icon: <FaChartLine className="text-blue-500 text-4xl" />,
    title: "Career Track",
    description:
      "Discover your passion—the driving force that makes you smile and innovate, create, and make a difference every day.",
  },
  {
    icon: <FaBalanceScale className="text-yellow-500 text-4xl" />,
    title: "Work Life Balance",
    description:
      "Hexaware is all about open doors, open minds, and open opportunities. We ensure a flexible work environment that respects your work-life balance and your growth.",
  },
  {
    title: "Events & Activities",
    description:
      "We take pride in our close-knit community. Our awesome events and activities unite our diverse teams for some good times.",
    icon: <FaCalendar className="w-12 h-12 text-blue-600" />,
    bgColor: "bg-blue-100",
  },
  {
    title: "Awards & Recognition",
    description:
      "We don’t just welcome your voice; we celebrate it! Acknowledging your unique perspective and recognizing your individual talent is fundamental.",
    icon: <FaAward className="w-12 h-12 text-yellow-600" />,
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
        The Hexaware Advantage: Your Workplace Benefits
      </h2>
      <p className="text-gray-600 my-4">
        We are interested in, and want to support, the professional and personal
        you.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
        {benefits.map((benefit, index) => (
          <div key={index} className="py-6 ">
            <div className="flex  mb-4">{benefit.icon}</div>
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
