

"use client";

import { sanityClient } from "@/sanity";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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
        else if (!/^[a-zA-Z\s]+$/.test(value)) error = "Name can only contain letters and spaces.";
        break;
      case "email":
        if (!value.trim()) error = "Email is required.";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = "Enter a valid email address.";
        break;
      case "phone":
        if (value && !/^\d{10}$/.test(value)) error = "Phone number must be 10 digits.";
        break;
      case "message":
        if (!value.trim()) error = "Message is required.";
        break;
      default:
        break;
    }
    return error;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    setValidationErrors((prev) => ({ ...prev, [id]: validateField(id, value) }));
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
        _type: "contact",
        ...formData,
      });
      setSuccess(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
      setValidationErrors({});
    } catch (error) {
      console.error("Error submitting contact form: ", error);
      setError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen py-5 bg-[#E8F6FC]"
    style={{
      backgroundImage: `url('ring.svg')`,
      backgroundSize: "cover",
      backgroundPosition: "bottom",
      backgroundSize: "1800px",
    }}>
      <div className="w-full  sm:max-w-2xl p-8 transition bg-[#f0f7fa]  duration-300 transform border rounded-lg ">
      <h1 className="mb-6 text-3xl font-extrabold text-center text-gray-800">
      Contact Us
        </h1>
        <form onSubmit={handleSubmit}>
        {/* jfhe */}
          {[
            { id: "name", label: "Name", type: "text", placeholder: "Your Name", required: true },
            { id: "email", label: "Email", type: "email", placeholder: "Your Email", required: true },
            { id: "phone", label: "Phone Number", type: "tel", placeholder: "Your Phone Number" },
          ].map(({ id, label, type, placeholder, required }) => (
            <div key={id} className="mb-4">
              <label htmlFor={id} className="block text-sm font-medium text-gray-700">
                {label}
              </label>
              <input
                type={type}
                id={id}
                value={formData[id]}
                onChange={handleChange}
                placeholder={placeholder}
                className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required={required}
              />
              {validationErrors[id] && (
                <p className="mt-2 text-sm text-red-500">{validationErrors[id]}</p>
              )}
            </div>
          ))}

          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Your Message"
              className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            ></textarea>
            {validationErrors.message && (
              <p className="mt-2 text-sm text-red-500">{validationErrors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 text-white transition duration-200 bg-blue-500 rounded-md hover:bg-blue-600"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>

        {success && (
          <p className="mt-4 font-semibold text-center text-green-500">
            Thank you for contacting us! We will get back to you soon.
          </p>
        )}
        {error && (
          <p className="mt-4 font-semibold text-center text-red-500">
            There was an error submitting your message. Please try again.
          </p>
        )}
      </div>
    </div>
  );
};

export default Contact;
