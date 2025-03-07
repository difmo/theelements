"use client";
import Formcontect from "./OurContactForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import FAQSection from "./FAQSection";
import Heading2 from "./Headding2";

const OurContact = () => {
  return (
    <div className="w-full px-2 sm:px-6 lg:px-16 py-4">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:py-16">
        {/* Left section with contact info */}
        <div className="w-full">
          <div className="rounded-lg  border-gray-500 py-6 md:p-8">
            <h2 className="font-extrabold text-2xl md:text-3xl text-black mb-6">
              Get in Touch
            </h2>
            {/* Phone Number */}
            <div className="mb-4">
              <div className="flex items-center text-black">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="w-5 h-5 mr-2 text-primary-orange"
                />
                <span className="font-semibold">Phone Number</span>
              </div>
              <a
                href="tel:+919455791624"
                className="block px-8 text-black hover:text-primary-orange hover:underline mt-1"
              >
                +91 945-579-1624
              </a>
              <a
                href="tel:+918172848306"
                className="block px-8 text-black hover:text-primary-orange hover:underline mt-1"
              >
                +91 817-284-8306
              </a>
            </div>
            {/* Email Address */}
            <div className="mb-4">
              <div className="flex items-center text-black">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="w-5 h-5 mr-2 text-primary-orange"
                />
                <span className="font-semibold">Email Address</span>
              </div>
              <a
                href="mailto:info@difmo.com"
                className="block px-8 text-black hover:text-primary-orange hover:underline mt-1"
              >
                info@difmo.com
              </a>
              <a
                href="mailto:difmotech@gmail.com"
                className="block px-8 text-black hover:text-primary-orange hover:underline mt-1"
              >
                difmotech@gmail.com
              </a>
            </div>
            {/* Address */}
            <div className=" border-gray-200 ">
              <div className="flex items-center text-black">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="w-5 h-5 mr-2 text-primary-orange"
                />
                <span className="font-semibold">Address</span>
              </div>
              <p className="text-black px-8">
                4/37 Vibhav Khand, Gomtinagar, Lucknow, Uttar Pradesh, 226010
              </p>
            </div>
            {/* Business Hours */}
          </div>
          <div className="mt-6 rounded-xl text-black  md:p-4">
            <h2 className="text-xl font-semibold mb-4">Business Hours</h2>
            <div className="space-y-2">
              <div className="flex justify-between border-b pb-2">
                <span>Monday - Friday</span>
                <span className="font-medium">10:00 AM - 7:00 PM</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span>Saturday</span>
                <span className="font-medium">10:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span className="font-medium">Closed</span>
              </div>
            </div>
          </div>
        </div>
        {/* Right section with contact form */}
        <div className="w-full">
          <Formcontect />
        </div>
      </div>
      {/* Map Section */}
      <div className="w-full mt-10 text-center">
        <Heading2 title="Our Location" />
 
        <p className="max-w-3xl py-6 md:mx-auto text-lg text-gray-700 mb-6">
          Visit us at our office to see how we innovate and bring your ideas to
          life. Explore the map below to find our exact location.
        </p>
        <div className="w-full h-[300px] md:h-[500px] lg:h-[550px] overflow-hidden   transition-transform transform hover:scale-105">
        <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7118.9080435365395!2d78.3524095!3d17.4158875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb952200059677%3A0xac28e1d107bc3e57!2sAVK%20SRI%20Harsha%20Icon!5e0!3m2!1sen!2sin!4v1732274230223"
  width="100%"
  height="100%"
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  className="w-full h-full"
></iframe>



        </div>
      </div>
      {/* FAQ Section */}
      <FAQSection />
    </div>
  );
};

export default OurContact;
