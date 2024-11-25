import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#073948] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Address Section */}
          <div className="w-full sm:w-1/2 lg:w-1/3 mb-6">
            <h2 className="text-lg font-bold mb-4">8th Element</h2>
            <p>
              11th Floor, Sri Harsha Icon, Nanakramguda<br />
              Service Rd, Financial District,<br />
              Hyderabad - 500032, India
            </p>
            <p className="mt-4 flex items-center">
              <span className="inline-block w-4 h-4 mr-2">&#x1F4CD;</span>
              20 Eliott Dr, Monroe, NJ 08831
            </p>
          </div>
          {/* Company Links */}
          <div className="w-1/2 sm:w-1/4 lg:w-1/6 mb-6">
            <h2 className="text-lg font-bold mb-4">Company</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Leadership Team</a></li>
              <li><a href="#" className="hover:underline">Solutions</a></li>
              <li><a href="#" className="hover:underline">Services</a></li>
            </ul>
          </div>
          {/* Contact Links */}
          <div className="w-1/2 sm:w-1/4 lg:w-1/6 mb-6">
            <h2 className="text-lg font-bold mb-4">Contact</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Contact Us</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
            </ul>
          </div>
          {/* Contact Info */}
          <div className="w-full sm:w-1/2 lg:w-1/3 mb-6">
            <h2 className="text-lg font-bold mb-4">Get in Touch</h2>
            <p className="flex items-center">
              <span className="inline-block w-4 h-4 mr-2">&#x260E;</span>
              +1 (470) 286-5319, +91 98481 26864
            </p>
            <p className="mt-4 flex items-center">
              <span className="inline-block w-4 h-4 mr-2">&#x2709;</span>
              info@8thelement.ai
            </p>
          </div>
        </div>
        <div className="border-t border-white/20 mt-8 pt-4 text-center">
          <p>© 2024 8th Element Digital Inc.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
