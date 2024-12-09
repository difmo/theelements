"use client";

import { sanityClient } from "@/sanity";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    resume: "",
    message: "",
  });

  const [validationErrors, setValidationErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const positions = [
    ...new Set([
      "Tester",
      "Data Engineer",
      "IT Analyst",
      "Scrum Master",
      "Software Engineer",
      "Software Developer",
      "Testing Engineer",
      "QA Project Manager",
      "Product Owner",
      "IT Technical Support Specialist",
      "Infrastructure Engineer",
      "Database Administrator",
      "Project Manager",
      "Enterprise Architect",
      "Data Analyst",
      "QA",
      "Architect",
      "MSBI Developer",
      "Python Developer",
    ]),
  ];

  const validateField = (field, value) => {
    let error = "";
    switch (field) {
      case "name":
        if (!value.trim()) error = "Name is required.";
        else if (!/^[a-zA-Z\s]+$/.test(value))
          error = "Name can only contain letters and spaces.";
        break;
      case "email":
        if (!value.trim()) error = "Email is required.";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          error = "Enter a valid email address.";
        break;
      case "phone":
        if (value && !/^\d{10}$/.test(value))
          error = "Phone number must be 10 digits.";
        break;
      case "position":
        if (!value.trim()) error = "Position is required.";
        break;
      case "resume":
        if (!value) error = "Resume is required.";
        else if (
          ![
            "application/pdf",
            "application/msword",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          ].includes(value.type)
        )
          error = "Resume must be a PDF or Word document.";
        break;
      default:
        break;
    }
    return error;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    setValidationErrors((prev) => ({
      ...prev,
      [id]: validateField(id, value),
    }));
  };

  const handleFileChange = (e) => {
    const { id, files } = e.target;
    const file = files[0];
    setFormData((prev) => ({ ...prev, [id]: file }));
    setValidationErrors((prev) => ({ ...prev, [id]: validateField(id, file) }));
  };

  const isFormValid = () => {
    const errors = {};
    Object.keys(formData).forEach((field) => {
      errors[field] = validateField(field, formData[field]);
    });
    setValidationErrors(errors);
    return !Object.values(errors).some((error) => error);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid()) return;

    setIsSubmitting(true);

    try {
      await sanityClient.create({
        _type: "career",
        ...formData,
      });
      toast.success("Thank you for applying! We will get back to you soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        position: "",
        resume: "",
        message: "",
      });
      setValidationErrors({});
      window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
    } catch (error) {
      console.error("Error submitting application: ", error);
      toast.error("There was an error submitting your application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen py-5 bg-[#E8F6FC]"
      style={{
        backgroundImage: `url('ring.svg')`,
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        backgroundSize: "1800px",
      }}
    >
      <div className="w-full sm:max-w-2xl p-8 transition bg-[#f0f7fa] duration-300 transform border rounded-lg">
        <h1 className="mb-6 text-3xl font-extrabold text-center text-gray-800">
          Join Our Team
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="block w-full p-3 mt-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
            {validationErrors.name && (
              <p className="mt-2 text-sm text-red-500">
                {validationErrors.name}
              </p>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="block w-full p-3 mt-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
            {validationErrors.email && (
              <p className="mt-2 text-sm text-red-500">
                {validationErrors.email}
              </p>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="phone"
              className="block text-sm font-semibold text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone Number"
              className="block w-full p-3 mt-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
            {validationErrors.phone && (
              <p className="mt-2 text-sm text-red-500">
                {validationErrors.phone}
              </p>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="position"
              className="block text-sm font-semibold text-gray-700"
            >
              Position
            </label>
            <select
              id="position"
              value={formData.position}
              onChange={handleChange}
              className="block w-full p-3 mt-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="">Select a position</option>
              {positions.map((pos) => (
                <option key={pos} value={pos}>
                  {pos}
                </option>
              ))}
            </select>
            {validationErrors.position && (
              <p className="mt-2 text-sm text-red-500">
                {validationErrors.position}
              </p>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="resume"
              className="block text-sm font-semibold text-gray-700"
            >
              Upload Resume (PDF, DOC, etc.)
            </label>
            <input
              type="file"
              id="resume"
              onChange={handleFileChange}
              className="block w-full p-3 mt-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              accept=".pdf,.doc,.docx"
              required
            />
            {validationErrors.resume && (
              <p className="mt-2 text-sm text-red-500">
                {validationErrors.resume}
              </p>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-gray-700"
            >
              Cover Letter / Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Tell us why you're the best fit for this position"
              className="block w-full p-3 mt-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-3 text-lg font-semibold text-white transition-opacity duration-200 rounded-lg shadow-md bg-gradient-to-r from-[#1da4df] to-[#1da4df] hover:opacity-90"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Page;




// "use client";

// import { sanityClient } from "@/sanity";
// import React, { useState } from "react";

// const Page = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     position: "",
//     resume: "",
//     message: "",
//   });

//   const [validationErrors, setValidationErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [success, setSuccess] = useState(false);
//   const [error, setError] = useState(false);

//   const positions = [
//     ...new Set([
//       "Tester",
//       "Data Engineer",
//       "IT Analyst",
//       "Scrum Master",
//       "Software Engineer",
//       "Software Developer",
//       "Testing Engineer",
//       "QA Project Manager",
//       "Product Owner",
//       "IT Technical Support Specialist",
//       "Infrastructure Engineer",
//       "Database Administrator",
//       "Project Manager",
//       "Enterprise Architect",
//       "Data Engineer", // Duplicate
//       "Data Analyst",
//       "QA",
//       "Architect",
//       "MSBI Developer",
//       "Python Developer",
//     ]),
//   ];
  

//   const validateField = (field, value) => {
//     let error = "";
//     switch (field) {
//       case "name":
//         if (!value.trim()) error = "Name is required.";
//         else if (!/^[a-zA-Z\s]+$/.test(value))
//           error = "Name can only contain letters and spaces.";
//         break;
//       case "email":
//         if (!value.trim()) error = "Email is required.";
//         else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
//           error = "Enter a valid email address.";
//         break;
//       case "phone":
//         if (value && !/^\d{10}$/.test(value))
//           error = "Phone number must be 10 digits.";
//         break;
//       case "position":
//         if (!value.trim()) error = "Position is required.";
//         break;
//       case "resume":
//         if (!value) error = "Resume is required.";
//         else if (
//           ![
//             "application/pdf",
//             "application/msword",
//             "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
//           ].includes(value.type)
//         )
//           error = "Resume must be a PDF or Word document.";
//         break;
//       default:
//         break;
//     }
//     return error;
//   };

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setFormData((prev) => ({ ...prev, [id]: value }));
//     setValidationErrors((prev) => ({
//       ...prev,
//       [id]: validateField(id, value),
//     }));
//   };

//   const handleFileChange = (e) => {
//     const { id, files } = e.target;
//     const file = files[0];
//     setFormData((prev) => ({ ...prev, [id]: file }));
//     setValidationErrors((prev) => ({ ...prev, [id]: validateField(id, file) }));
//   };

//   const isFormValid = () => {
//     const errors = {};
//     Object.keys(formData).forEach((field) => {
//       errors[field] = validateField(field, formData[field]);
//     });
//     setValidationErrors(errors);
//     return !Object.values(errors).some((error) => error);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!isFormValid()) return;

//     setIsSubmitting(true);
//     setError(false);

//     try {
//       await sanityClient.create({
//         _type: "career",
//         ...formData,
//       });
//       setSuccess(true);
//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         position: "",
//         resume: "",
//         message: "",
//       });
//       setValidationErrors({});
//     } catch (error) {
//       console.error("Error submitting application: ", error);
//       setError(true);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div
//       className="flex items-center justify-center min-h-screen py-5 bg-[#E8F6FC]"
//       style={{
//         backgroundImage: `url('ring.svg')`,
//         backgroundSize: "cover",
//         backgroundPosition: "bottom",
//         backgroundSize: "1800px",
//       }}
//     >
//       <div className="w-full sm:max-w-2xl p-8 transition bg-[#f0f7fa] duration-300 transform border rounded-lg">
//         <h1 className="mb-6 text-3xl font-extrabold text-center text-gray-800">
//           Join Our Team
//         </h1>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-6">
//             <label
//               htmlFor="name"
//               className="block text-sm font-semibold text-gray-700"
//             >
//               Full Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="Your Name"
//               className="block w-full p-3 mt-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
//               required
//             />
//             {validationErrors.name && (
//               <p className="mt-2 text-sm text-red-500">
//                 {validationErrors.name}
//               </p>
//             )}
//           </div>
//           <div className="mb-6">
//             <label
//               htmlFor="email"
//               className="block text-sm font-semibold text-gray-700"
//             >
//               Email Address
//             </label>
//             <input
//               type="email"
//               id="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Your Email"
//               className="block w-full p-3 mt-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
//               required
//             />
//             {validationErrors.email && (
//               <p className="mt-2 text-sm text-red-500">
//                 {validationErrors.email}
//               </p>
//             )}
//           </div>
//           <div className="mb-6">
//             <label
//               htmlFor="phone"
//               className="block text-sm font-semibold text-gray-700"
//             >
//               Phone Number
//             </label>
//             <input
//               type="tel"
//               id="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               placeholder="Your Phone Number"
//               className="block w-full p-3 mt-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
//             />
//             {validationErrors.phone && (
//               <p className="mt-2 text-sm text-red-500">
//                 {validationErrors.phone}
//               </p>
//             )}
//           </div>
//           <div className="mb-6">
//             <label
//               htmlFor="position"
//               className="block text-sm font-semibold text-gray-700"
//             >
//               Position
//             </label>
//             <select
//               id="position"
//               value={formData.position}
//               onChange={handleChange}
//               className="block w-full p-3 mt-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
//               required
//             >
//               <option value="">Select a position</option>
//               {positions.map((pos) => (
//                 <option key={pos} value={pos}>
//                   {pos}
//                 </option>
//               ))}
//             </select>
//             {validationErrors.position && (
//               <p className="mt-2 text-sm text-red-500">
//                 {validationErrors.position}
//               </p>
//             )}
//           </div>
//           <div className="mb-6">
//             <label
//               htmlFor="resume"
//               className="block text-sm font-semibold text-gray-700"
//             >
//               Upload Resume (PDF, DOC, etc.)
//             </label>
//             <input
//               type="file"
//               id="resume"
//               onChange={handleFileChange}
//               className="block w-full p-3 mt-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
//               accept=".pdf,.doc,.docx"
//               required
//             />
//             {validationErrors.resume && (
//               <p className="mt-2 text-sm text-red-500">
//                 {validationErrors.resume}
//               </p>
//             )}
//           </div>
//           <div className="mb-6">
//             <label
//               htmlFor="message"
//               className="block text-sm font-semibold text-gray-700"
//             >
//               Cover Letter / Message
//             </label>
//             <textarea
//               id="message"
//               value={formData.message}
//               onChange={handleChange}
//               rows="5"
//               placeholder="Tell us why you're the best fit for this position"
//               className="block w-full p-3 mt-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
//             ></textarea>
//           </div>
//           <button
//             type="submit"
//             className="w-full px-4 py-3 text-lg font-semibold text-white transition-opacity duration-200 rounded-lg shadow-md bg-gradient-to-r from-[#1da4df] to-[#1da4df] hover:opacity-90"
//             disabled={isSubmitting}
//           >
//             {isSubmitting ? "Submitting..." : "Submit Application"}
//           </button>
//         </form>
//         {success && (
//           <p className="mt-6 font-semibold text-center text-green-600">
//             Thank you for applying! We will get back to you soon.
//           </p>
//         )}
//         {error && (
//           <p className="mt-6 font-semibold text-center text-red-600">
//             There was an error submitting your application. Please try again.
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Page;
