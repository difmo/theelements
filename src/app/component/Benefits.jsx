import Image from "next/image";
import icon1 from "../../../public/career/Learning.svg";
import icon2 from "../../../public/career/Career-Track.svg";
import icon3 from "../../../public/career/Worklife-Balance.svg";
import icon4 from "../../../public/career/Event.svg";
import icon5 from "../../../public/career/Rewards.svg";
import { Heading2 } from "lucide-react";
import Heading from "./Heading";

const benefits = [
  {
    icon: icon1,
    title: "Be part of Impactful Projects ",
    description:
      "Be part of projects that improve patient care and deliver smarter solutions for payers and providers, creating real change in healthcare.",
  },
  {
    icon: icon2,
    title: "Grow Your Career",
    description:
      "We offer opportunities to learn, tackle challenges, and advance your skills through mentorship, certifications, and hands-on work.",
  },
  {
    icon: icon3,
    title: "Inclusive Team Culture",
    description:
      "We value diverse ideas and foster a collaborative, supportive environment where everyone contributes.",
  },
  {
    title: "Innovate with the Best Tools",
    description:
      "Work with cutting-edge technologies like AI, automation, and data analytics to solve real-world healthcare challenges.",
    icon: icon4,
    bgColor: "bg-blue-100",
  },
  {
    title: "Flexible Work Environment",
    description:
      "Enjoy work-life balance with flexible policies, remote options, and a focus on your well-being.",
    icon: icon5,
    bgColor: "bg-yellow-100",
  },
];

export default function Benefits() {
  return (
    <div>

      <div className="bg-[#E8F6FC] py-24 px-6 sm:px-16 lg:px-18 text-center">
        <Heading title="Why Join 8th Element?" />
        <div className="container mx-auto px-4">
          <p className="text-gray-600 my-4 text-lg pb-10">
            We are interested in, and want to support, the professional and personal you.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="py-6 px-4 bg-white rounded-lg    transition-shadow duration-300 ease-in-out"
              >
                <div className="mb-4 flex justify-center">
                  <Image
                    src={benefit.icon}
                    alt={benefit.title}
                    width={90}
                    height={90}
                    className="text-red-500"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600 mt-2">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
