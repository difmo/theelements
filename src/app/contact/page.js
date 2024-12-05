"use client";

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
    setValidationErrors((prev) => ({
      ...prev,
      [id]: validateField(id, value),
    }));
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
      // Simulating form submission (you can replace this with your own logic)
      console.log("Form submitted successfully", formData);

      // Reset form on success
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
    <div
      className="flex items-center justify-center min-h-screen bg-[#E8F6FC]"
      style={{
        backgroundImage: `url('ring.svg')`,
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        backgroundSize: "1300px",
      }}
    >
      <div className="container flex flex-col space-y-8 bg-[#f0f7fa]  md:p-6 md:flex-row md:space-y-0 md:space-x-8">
        {/* Left Section */}
        <section className="p-6 rounded-lg md:w-1/2">
          <div className="flex flex-col space-y-4">
            <h1 className="text-3xl font-semibold text-gray-700 font-quattrocento">
              Contact Us
            </h1>
            <p className="text-base text-gray-700 md:text-xl font-lato">
              Welcome to our contact page
            </p>
            <p className="text-base text-gray-700 font-lato">
              11th Floor, Sri Harsha Icon, Nanakramguda Service Rd, Financial
              District, Hyderabad - 500032, India
            </p>
            <div className="space-y-2">
              <h2 className="text-xl font-semibold font-quattrocento">
                Submit Form or Call
              </h2>
              
              <span className="text-gray-700 font-lato">+1 (470) 286-5319</span>
              <span className="text-gray-700 font-lato ">+91 98481 26864</span>
            </div>
          </div>
        </section>

        {/* Right Section - Form */}
        <div className="p-8 transition duration-300 transform border border-blue-100 rounded-lg md:w-1/2">
          <form onSubmit={handleSubmit}>
            {/* Form Fields */}
            {[
              {
                id: "name",
                label: "Name",
                type: "text",
                placeholder: "Your Name",
                required: true,
              },
              {
                id: "email",
                label: "Email",
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
            ].map(({ id, label, type, placeholder, required }) => (
              <div key={id} className="mb-2">
                <label
                  htmlFor={id}
                  className="block text-sm font-medium text-gray-700"
                >
                  {label}
                </label>
                <input
                  type={type}
                  id={id}
                  value={formData[id]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  className="block w-full p-2 mt-1 border border-white rounded-md focus:outline-none focus:border-blue-500"
                  required={required}
                />
                {validationErrors[id] && (
                  <p className="text-sm text-red-500 ">
                    {validationErrors[id]}
                  </p>
                )}
              </div>
            ))}

            {/* Message Field */}
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Your Message"
                className="block w-full p-3 mt-1 border border-white rounded-md focus:outline-none focus:border-blue-500"
                required
              ></textarea>
              {validationErrors.message && (
                <p className="mt-1 text-sm text-red-500">
                  {validationErrors.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 text-black transition duration-200 bg-blue-200 rounded-md hover:bg-blue-200 focus:outline-none focus:ring-2 "
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>

          {/* Success/Error Messages */}
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
    </div>
  );
};

export default Contact;
