import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Heading from "./Heading";

export default function FAQSection() {
  return (
    <div className="px-2 md:max-w-screen-2xl mx-auto text-gray-700  py-20">
      <Heading title="Frequently Asked Questions" />
  
      <div className="grid md:grid-cols-2 gap-8 md:gap-16 py-20">
        <div className="px-16 py-7   bg-white rounded-full hover:rounded-none transition-all duration-1000">
          <h3 className="font-semibold">What are your response times?</h3>
          <p className="text-gray-600 text-sm mt-2 py-2">
            We typically respond to all inquiries within 24 hours during
            business days. For urgent matters, please call our support line.
          </p>
        </div>
        <div className="px-16 py-7   bg-white rounded-full hover:rounded-none transition-all duration-1000">
          <h3 className="font-semibold">Do you offer emergency support?</h3>
          <p className="text-gray-600 text-sm mt-2 py-2">
            Yes, we provide 24/7 emergency support for critical issues. Please
            call our emergency hotline at +91 945-579-1624.
          </p>
        </div>
        <div className="px-16 py-7   bg-white rounded-full hover:rounded-none transition-all duration-1000">
          <h3 className="font-semibold">
            Can I schedule an in-person meeting?
          </h3>
          <p className="text-gray-600 text-sm mt-2 py-2 ">
            Yes, you can schedule an in-person meeting at our office. Please
            contact us via email or phone to arrange an appointment.
          </p>
        </div>
        <div className="px-16 py-7   bg-white rounded-full hover:rounded-none transition-all duration-1000">
          <h3 className="font-semibold">What’s your refund policy?</h3>
          <p className="text-gray-600 text-sm mt-2 py-2">
            We offer a 30-day money-back guarantee on all our services. Please
            refer to our terms and conditions for detailed information.
          </p>
        </div>
      </div>
      {/* Social Media Links */}
      <div className="pt-14  ">
        <Heading title="Contact With Our Social Media's" />
    
        <div className="flex py-8 space-x-6 justify-center">
          <a
            // href="https://www.facebook.com/difmotech"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook
              size={32}
              className="text-gray-400 cursor-pointer hover:cursor-pointer transition-all duration-300 hover:text-primary-orange"
            />
          </a>
          <a
            // href="https://x.com/difmotech"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter
              size={32}
              className="text-gray-400 cursor-pointer transition-all duration-300 hover:text-primary-orange"
            />
          </a>
          <a
            // href="https://in.linkedin.com/company/difmo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin
              size={32}
              className="text-gray-400 cursor-pointer transition-all duration-300 hover:text-primary-orange"
            />
          </a>
          <a
            // href="https://www.instagram.com/thedifmo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram
              size={32}
              className="text-gray-400 cursor-pointer transition-all duration-300 hover:text-primary-orange"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
