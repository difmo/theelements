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
    <div className="min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 flex items-center py-20 justify-center">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-2xl w-full transition transform   duration-300">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Contact Us
        </h1>
        <form onSubmit={handleSubmit}>
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
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required={required}
              />
              {validationErrors[id] && (
                <p className="text-red-500 text-sm mt-2">{validationErrors[id]}</p>
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
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            ></textarea>
            {validationErrors.message && (
              <p className="text-red-500 text-sm mt-2">{validationErrors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>

        {success && (
          <p className="mt-4 text-green-500 text-center font-semibold">
            Thank you for contacting us! We will get back to you soon.
          </p>
        )}
        {error && (
          <p className="mt-4 text-red-500 text-center font-semibold">
            There was an error submitting your message. Please try again.
          </p>
        )}
      </div>
    </div>
  );
};

export default Contact;
