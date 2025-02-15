"use client";

import { useEffect, useState } from "react";
import { AiOutlineReload } from "react-icons/ai";
import { FiUpload } from "react-icons/fi";
import { sanityClient } from "@/sanity";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const generateCaptcha = () => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
  let captcha = "";
  for (let i = 0; i < 8; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    captcha += characters[randomIndex];
  }
  return captcha;
};

export default function ContactForm() {
  const [captcha, setCaptcha] = useState("");
  useEffect(() => {
    setCaptcha(generateCaptcha());
  }, []);

  const refreshCaptcha = () => {
    setCaptcha(generateCaptcha());
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "",
    phone: "",
    company: "",
    hearAbout: "",
    division: "",
    opportunity: "",
    file: "",
    captcha: "",
    termsAccepted: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required*";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required*";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format*";
    }
    if (!formData.countryCode)
      newErrors.countryCode = "Country code is required*";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required*";
    if (!formData.opportunity.trim())
      newErrors.opportunity = "This field is required*";
    if (!formData.captcha.trim()) {
      newErrors.captcha = "Captcha is required*";
    } else if (formData.captcha !== captcha) {
      newErrors.captcha = "Incorrect captcha*";
    }
    if (!formData.termsAccepted)
      newErrors.termsAccepted = "You must accept the terms*";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      let fileUrl = "";
      if (formData.file) {
        const resumeFile = formData.file;
        const fileAsset = await sanityClient.assets.upload("file", resumeFile, {
          filename: resumeFile.name,
        });
        fileUrl = fileAsset.url; // URL of the uploaded file
      }
      await sanityClient.create({
        _type: "contact",
        ...formData,
        file: fileUrl,
      });

      alert("Thank you for contacting us! We will get back to you soon.");
      setFormData({
        name: "",
        email: "",
        countryCode: "",
        phone: "",
        company: "",
        hearAbout: "",
        division: "",
        opportunity: "",
        file: "",
        captcha: "",
        termsAccepted: true,
      });
      setErrors({});
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } catch (error) {
      console.error("Error submitting contact form: ", error);
      toast.error(
        "There was an error submitting your message. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (e) => {
    const { files } = e.target;
    const file = files[0];

    // File validation
    if (file) {
      const fileSizeInMB = file.size / 1024 / 1024;
      const allowedExtensions =
        /(\.pdf|\.doc|\.docx|\.xlsx|\.xls|\.zip|\.rar)$/i;

      if (fileSizeInMB > 10) {
        setErrors((prev) => ({
          ...prev,
          file: "File size should be less than 10MB",
        }));
      } else if (!allowedExtensions.exec(file.name)) {
        setErrors((prev) => ({
          ...prev,
          file: "Invalid file type. Accepted formats: .pdf, .doc, .docx, .xlsx, .xls, .zip, .rar",
        }));
      } else {
        setErrors((prev) => ({ ...prev, file: "" }));
        setFormData((prev) => ({ ...prev, file }));
      }
    }
  };

  return (
    <div className="bg-[#E8F6FC] mx-auto px-4 md:px-10 lg:px-16 flex flex-col lg:flex-row p-10 lg:pt-24">
      <div className="text-left mb-8 lg:mb-0 lg:w-1/2">
        <p className="text-gray-600 text-lg md:text-xl px-4 py-2">Contact Us</p>
        <h2 className="text-3xl  text-gray-700 md:text-5xl lg:text-6xl px-4">
          Let’s Talk
        </h2>
        <p className="text-gray-600 text-lg md:text-xl px-4 py-2">
          Whatever your question, we'd love to hear from you.
        </p>
      </div>
      <div className="w-full lg:w-1/2 px-4 mb-24">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
          <input
            name="name"
            placeholder="Your Name*"
            required
            value={formData.name}
            onChange={handleChange}
            className="bg-white px-5 py-4 w-full"
          />
          {errors.name && <p className="text-red-500">{errors.name}</p>}

          <input
            name="email"
            placeholder="Email Address"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="bg-white px-5 py-4 w-full"
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}

          <div className="flex flex-row space-x-2">
            <select
              name="countryCode"
              required
              value={formData.countryCode}
              onChange={handleChange}
              className="bg-white px-2 md:px-5 py-4 w-[30%]"
            >
              <option value="">Select</option>
              <option value="+1">+1</option>
              <option value="+91">+91</option>
            </select>
            <input
              name="phone"
              placeholder="Phone Number"
              required
              value={formData.phone}
              onChange={handleChange}
              className="bg-white px-5 py-4 w-[70%]"
            />
          </div>
          {errors.phone && <p className="text-red-500">{errors.phone}</p>}

          <input
            name="company"
            placeholder="Company"
            value={formData.company}
            onChange={handleChange}
            className="bg-white px-5 py-4 w-full"
          />
          {errors.company && <p className="text-red-500">{errors.company}</p>}

          <select
            name="hearAbout"
            value={formData.hearAbout}
            onChange={handleChange}
            className="bg-white px-5 py-4 w-full text-gray-500"
          >
            <option className=" bg-white" value="">
              How did you hear about us?*
            </option>
            <option className="text-black" value="Analyst/Sourcing Advisory">
              Analyst/Sourcing Advisory
            </option>
            <option className="text-black" value="Search Engine">
              Search Engine
            </option>
            <option className="text-black" value="Social Media">
              Social Media
            </option>
            <option className="text-black" value="Webinar">
              Webinar
            </option>
            <option className="text-black" value="Other">
              Other
            </option>
          </select>
          {errors.hearAbout && (
            <p className="text-red-500">{errors.hearAbout}</p>
          )}

          <select
            name="division"
            value={formData.division}
            onChange={handleChange}
            className="bg-white text-gray-400 px-5 py-4 w-full"
          >
            <option className="text-whbg-white" value="">
              Which division should we connect you to?*
            </option>
            <option value="Our Services">Our Services</option>
            <option value="Analyst/Sourcing Advisory">
              Analyst/Sourcing Advisory
            </option>
            <option value="Investor Relations">Investor Relations</option>
            <option value="Media/News">Media/News</option>
          </select>
          {errors.division && <p className="text-red-500">{errors.division}</p>}

          <textarea
            name="opportunity"
            placeholder="Tell us about your opportunity"
            required
            value={formData.opportunity}
            onChange={handleChange}
            className="bg-white px-5 py-4 w-full"
          ></textarea>
          {errors.opportunity && (
            <p className="text-red-500">{errors.opportunity}</p>
          )}

          <div className="bg-white p-4 rounded-lg text-gray-600">
            <p className="text-sm">
              Upload your RFP/RFI document (maximum file size: 10 MB)
            </p>
            <div className="flex items-center  bg-white p-3 rounded mt-2">
              <p className="text-sm text-gray-500"></p>
              <label className="cursor-pointer flex  space-x-3 text-blue-600">
                <FiUpload size={20} />
                <input
                  type="file"
                  name="file"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx,.xlsx,.xls,.zip,.rar"
                  required
                />
              </label>
            </div>
            {errors.file && <p className="text-red-500">{errors.file}</p>}
          </div>

          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            <div className="bg-blue-200 px-4 py-4 text-2xl font-bold rounded-md text-center">
              {captcha}
            </div>
            <input
              name="captcha"
              placeholder="Type the characters to the left"
              required
              value={formData.captcha}
              onChange={handleChange}
              className="border p-4 rounded w-full"
            />
            {errors.captcha && <p className="text-red-500">{errors.captcha}</p>}
            <button
              type="button"
              className="text-blue-600 flex items-center"
              onClick={refreshCaptcha}
            >
              <AiOutlineReload size={24} />
            </button>
          </div>

          <label className="flex text-sm text-gray-700">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              className="mr-2"
            />
            By clicking submit, you are granting us permission to store and
            process the information provided in accordance with the terms of our
            <a href="#" className="text-blue-600 ml-1">
              Privacy Policy.
            </a>
          </label>
          {errors.termsAccepted && (
            <p className="text-red-500">{errors.termsAccepted}</p>
          )}

          <button
            type="submit"
            className={`w-full p-3 rounded text-white ${
              formData.termsAccepted
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-gray-400 cursor-not-allowed"
            }`}
            disabled={!formData.termsAccepted}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

// "use client";

// import { sanityClient } from "@/sanity";
// import React, { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const [validationErrors, setValidationErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
// //cdpovmdfvro
//   const validateField = (field, value) => {
//     let error = "";
//     switch (field) {
//       case "name":
//         if (!value.trim()) error = "Name is required.";
//         else if (!/^[a-zA-Z\s]+$/.test(value)) error = "Name can only contain letters and spaces.";
//         break;
//       case "email":
//         if (!value.trim()) error = "Email is required.";
//         else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = "Enter a valid email address.";
//         break;
//       case "phone":
//         if (value && !/^\d{10}$/.test(value)) error = "Phone number must be 10 digits.";
//         break;
//       case "message":
//         if (!value.trim()) error = "Message is required.";
//         break;
//       default:
//         break;
//     }
//     return error;
//   };

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setFormData((prev) => ({ ...prev, [id]: value }));
//     setValidationErrors((prev) => ({ ...prev, [id]: validateField(id, value) }));
//   };

//   const isFormValid = () => {
//     const errors = {};
//     Object.keys(formData).forEach((field) => {
//       errors[field] = validateField(field, formData[field]);
//     });
//     setValidationErrors(errors);
//     return !Object.values(errors).some((error) => error);
//   };

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   if (!isFormValid()) return;

//   setIsSubmitting(true);

//   try {
//     await sanityClient.create({
//       _type: "contact",
//       ...formData,
//     });
//     toast.success("Thank you for contacting us! We will get back to you soon.");
//     setFormData({ name: "", email: "", phone: "", message: "" });
//     setValidationErrors({});
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//   });
//   } catch (error) {
//     console.error("Error submitting contact form: ", error);
//     toast.error("There was an error submitting your message. Please try again.");
//   } finally {
//     setIsSubmitting(false);
//   }
// };

//   return (
//     <div
//       className="flex font-lato items-center justify-center min-h-screen py-5 bg-[#E8F6FC]"
// style={{
//   backgroundImage: `url('ring.svg')`,
//   backgroundSize: "cover",
//   backgroundPosition: "bottom",
//   backgroundSize: "1800px",
// }}
//     >
//       <div className="w-full sm:max-w-2xl p-8 transition bg-[#f0f7fa] duration-300 transform border rounded-lg">
//         <h1 className="mb-6 text-3xl font-extrabold text-center text-gray-800">Contact Us</h1>
//         <form onSubmit={handleSubmit}>
//           {[
//             { id: "name", label: "Name", type: "text", placeholder: "Your Name", required: true },
//             { id: "email", label: "Email", type: "email", placeholder: "Your Email", required: true },
//             { id: "phone", label: "Phone Number", type: "tel", placeholder: "Your Phone Number" },
//           ].map(({ id, label, type, placeholder, required }) => (
//             <div key={id} className="mb-4">
//               <label htmlFor={id} className="block text-sm font-semibold text-gray-700">
//                 {label}
//               </label>
//               <input
//                 type={type}
//                 id={id}
//                 value={formData[id]}
//                 onChange={handleChange}
//                 placeholder={placeholder}
//                 className="block w-full p-3 mt-2 transition duration-300 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
//                 required={required}
//               />
//               {validationErrors[id] && (
//                 <p className="mt-2 text-sm text-red-500">{validationErrors[id]}</p>
//               )}
//             </div>
//           ))}

//           <div className="mb-4">
//             <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
//               Message
//             </label>
//             <textarea
//               id="message"
//               value={formData.message}
//               onChange={handleChange}
//               rows="5"
//               placeholder="Your Message"
//               className="block w-full p-3 mt-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
//               required
//             ></textarea>
//             {validationErrors.message && (
//               <p className="mt-2 text-sm text-red-500">{validationErrors.message}</p>
//             )}
//           </div>

//           <button
//             type="submit"
//             className="w-full px-4 py-3 text-lg font-semibold text-white transition-opacity duration-200 rounded-lg shadow-md bg-gradient-to-r from-[#1da4df] to-[#1da4df] hover:opacity-90"
//             disabled={isSubmitting}
//           >
//             {isSubmitting ? "Submitting..." : "Submit"}
//           </button>
//         </form>
//         <ToastContainer />
//       </div>
//     </div>
//   );
// };

// export default Contact;
