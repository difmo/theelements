import Image from "next/image";
import impactfulproject from "../../../public/career/impactfulproject.svg";
import careertrack from "../../../public/career/Career-Track.svg"; //
import worklifeblance from "../../../public/career/Worklife-Balance.svg";//
import event from "../../../public/career/Event.svg";
import rewards from "../../../public/career/Rewards.svg";
import team from "../../../public/career/team.svg";
import carrer from "../../../public/career/carrerbg.svg";
import Heading from "./Heading";


const benefits = [
  {
    icon: impactfulproject,
    title: "Be part of Impactful Projects ",
    description:
      "Be part of projects that improve patient care and deliver smarter solutions for payers and providers, creating real change in healthcare.",
  },
  {
    icon: careertrack,
    title: "Grow Your Career",
    description:
      "We offer opportunities to learn, tackle challenges, and advance your skills through mentorship, certifications, and hands-on work.",
  },
  {
    icon: team,
    title: "Inclusive Team Culture",
    description:
      "We value diverse ideas and foster a collaborative, supportive environment where everyone contributes.",
  },
  {
    title: "Innovate with the Best Tools",
    description:
      "Work with cutting-edge technologies like AI, automation, and data analytics to solve real-world healthcare challenges.",
    icon: event,
    bgColor: "bg-blue-100",
  },
  {
    title: "Flexible Work Environment",
    description:
      "Enjoy work-life balance with flexible policies, remote options, and a focus on your well-being.",
    icon: worklifeblance,
    bgColor: "bg-yellow-100",
  },
];

export default function Benefits() {
  return (
    <div className="relative">

      <div className=" py-20   text-center">
        <Heading title="Why Join 8th Element?" />
        <div className=" container mx-auto px-4 ">
          <p className="text-gray-600 font-mulish my-4 text-lg ">
            We are interested in, and want to support, the professional and personal you.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-16">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="py-6 px-4  rounded-lg transition-shadow duration-300 ease-in-out"
              >
                <div className="mb-4 flex justify-center">
                  <Image
                    src={benefit.icon}
                    alt={benefit.title}
                    width={50}
                    height={50}
                    className="text-red-500"
                  />
                </div>
                <h3 className="text-xl font-quattrocento text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600 px-12 font-mulish mt-2">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 -z-10 right-0">
        <Image
          src={carrer}
          alt="hello"

        /></div>

    </div>
  );
}
