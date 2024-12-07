"use client";

import { sanityClient } from "@/sanity";
import React, { useState } from "react";

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
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

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
    setError(false);

    try {
      await sanityClient.create({
        _type: "career",
        ...formData,
      });
      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        position: "",
        resume: "",
        message: "",
      });
      setValidationErrors({});
    } catch (error) {
      console.error("Error submitting application: ", error);
      setError(true);
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
      <div className="w-full  sm:max-w-2xl p-8 transition bg-[#f0f7fa]  duration-300 transform border rounded-lg ">
        <h1 className="mb-6 text-3xl font-extrabold text-center text-gray-800">
          Join Our Team
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col m-2 mb-6 space-y-6 sm:flex-row sm:space-x-4 sm:space-y-0">
            {[
              {
                id: "name",
                label: "Full Name",
                type: "text",
                placeholder: "Your Name",
                required: true,
              },
              {
                id: "email",
                label: "Email Address",
                type: "email",
                placeholder: "Your Email",
                required: true,
              },
              {
                id: "phone",
                label: "Phone Number",
                type: "tel",
                placeholder: "Your Phone Number",
              },
              {
                id: "position",
                label: "Position",
                type: "text",
                placeholder: "Position You Are Applying For",
                required: true,
              },
            ].map(({ id, label, type, placeholder, required }) => (
              <div key={id} className="mb-6">
                <label
                  htmlFor={id}
                  className="block text-sm font-semibold text-gray-700"
                >
                  {label}
                </label>
                <input
                  type={type}
                  id={id}
                  value={formData[id]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  className="block w-full p-3 mt-2 transition duration-300 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required={required}
                />
                {validationErrors[id] && (
                  <p className="mt-2 text-sm text-red-500">
                    {validationErrors[id]}
                  </p>
                )}
              </div>
            ))}
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
              className="block w-full p-3 mt-2 transition duration-300 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
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
              className="block w-full p-3 mt-2 transition duration-300 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full px-4 py-3 text-lg font-semibold text-white transition-opacity duration-200 rounded-lg shadow-md bg-gradient-to-r from-blue-500 to-indigo-500 hover:opacity-90"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </button>
        </form>

        {success && (
          <p className="mt-6 font-semibold text-center text-green-600">
            Thank you for applying! We will get back to you soon.
          </p>
        )}
        {error && (
          <p className="mt-6 font-semibold text-center text-red-600">
            There was an error submitting your application. Please try again.
          </p>
        )}
      </div>
    </div>
  );
};

export default Page;
