import Image from "next/image";
import img1 from "../assets/leader1.png";
import img2 from "../assets/leader2.png";
import img3 from "../assets/leader3.png";
import img4 from "../assets/leader4.png";
import img5 from "../assets/leader5.png";
import Heading from "./Heading";

const OurLeadership = () => {
  const leaders = [
    { name: "Rama Evani", image: img3 },
    { name: "Prashanth Kasturi", image: img1 },
    { name: "Matt Whitnack", image: img2 },
    // { name: "Matt Whitnack", image: img3 },
    { name: "Deepak Bharadwaj", image: img5 },
    { name: "Shravan Dantu", image: img4 },
  ];
  // Navigating Healthcare complexity
  // with clear & innovative solutions
  // We provide end-to-end healthcare data solutions, enabling clients
  // to fully harness their data for impactful and measureable improvements.
  // Contact Us
  // Our Success Stories
  // Improved Patient Outcomes with Predictive Analytics
  // Using predictive analytics, leading hospital in Virginia reduced hospital readmissions by 25%.
  // Our Solutions
  // 01
  // 02
  // 03
  // Prospective HEDIS Analysis
  // 360° View of your Customer Data
  // Social Determinant of Health (SDOH)
  // Boost your HEDIS performance with forward-looking analytics that identify improvement areas and drive higher scores.
  // Gain a comprehensive, unified view of your customer data to better understand patient needs and improve engagement.
  // Address health disparities by integrating SDOH insights to create more personalized and effective care strategies.
  // Learn More
  // Learn More
  // Learn More
  // OUR SERVICES
  // Unleash full potential
  // Unlock opportunities from healthcare data with advanced analytics 
  // Quality Check
  // Dashboards
  // Leverage advanced analytics to unlock new opportunities for improved care delivery, streamline processes, and drive innovation.
  // HEDIS
  // Score Cards
  // Elevate care outcomes
  // Learn More
  // Predictive
  // Insights
  // Retrospective
  // Reporting
  // Build Zero Touch
  // Experiences
  // who we serve
  // Payers
  // ⁠Boost HEDIS & Star ratings with real-time insights.
  // ⁠⁠Enhance Medicare & Medicaid outcomes using SDOH.
  // Drive engagement with a 360° member view.
  // Providers
  // Tools for value-based care and clinical interventions.
  // Predictive models for care and risk management.
  // Boost engagement with personalized care.
  // Health-Tech
  // Enhance insights with AI in existing solutions.
  // Platform modernization with next Gen tools
  // Seamless Integration with Health-Tech ecosystem
  // our customer  voice
  // “8thE team showed deep healthcare expertise
  // and delivered solutions that enhanced our
  // data usability by over 50%”.
  // - Chief data office, Leading East Coast Plan
  // Why partner with us
  // Healthcare-Only Focus
  // Customer Centric Approach
  // Our exclusive focus on healthcare ensures deep expertise and solutions that address unique challenges.
  // We deliver maximum value with our 90-days framework, ensuring impactful results.
  // Problem- Solving Expertise
  // Top Talent & Excellence
  // We excel at solving complex healthcare challenges, proving tailored and effective solutions.
  // We bring together the best talent to deliver precise and high-quality services.
  // Our leadership
  // Rama
  // Evani
  // Prashanth
  // Kasturi
  // Matt
  // Whitnack
  // Deepak
  // Bharadwaj
  // Shravan
  // Dantu
  // Company
  // Contact
  // About Us
  // Contact Us
  // 11th Floor, Sri Harsha Icon, Nanakramguda
  // Service Rd, Financial District,
  // Hyderabad - 500032, India
  // Leadership Team
  // Careers
  // Solutions
  // Services
  // 20 Eliott Dr, Monroe, NJ  08831
  // +1 (470) 286-5319, +91 98481 26864
  // info@8thelement.ai
  // © 2024 8th Element Digital Inc.

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
