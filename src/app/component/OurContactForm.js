import React, { useState } from "react";
import CustomInput from "./CustomInput";
import CustomButton from "./Buttons/CustomButton";

function Formcontect() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    number: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [id]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full name is required.";
    if (!formData.email) newErrors.email = "Email address is required.";
    if (!formData.number) newErrors.number = "Number is required.";
    if (!formData.message) newErrors.message = "Message is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitMessage("Message sent successfully!");

    setFormData({
      fullName: "",
      email: "",
      number: "",
      message: "",
    });
  };

  return (
    <div className=" px-10  md:px-20 md:py-5 rounded-3xl  bg-white border-primary-200/40 ">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-secondary-600 py-6">Reach Us</h2>
      <p className="text-center text-gray-500 mb-6">
        Please complete the form below <br></br> to request a quote, and we’ll be in
        touch.
      </p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <CustomInput
          id="fullName"
          label="Full Name"
          type="text"
          value={formData.fullName}
          onChange={handleChange}
          error={errors.fullName}
        />
        <CustomInput
          id="email"
          label="Email Address"
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />
        <CustomInput
          id="number"
          label="Mobile Number"
          type="text"
          value={formData.number}
          onChange={handleChange}
          error={errors.number}
        />
        <CustomInput
          id="number"
          label="Company Name"
          type="text"
          value={formData.number}
          onChange={handleChange}
          error={errors.number}
        />
        <CustomInput
          id="message"
          label="Message"
          type="textarea"
          value={formData.message}
          onChange={handleChange}
          error={errors.message}
        />
        <CustomButton
          type="submit"
          label="Submit"
          className="px-4 py-3 my-4  w-full text-sm  transition-all duration-300 rounded-full hover:cursor-pointer bg-newprimary/80 hover:border-secondary-600 text-white hover:bg-secondary-600 "
        />
        {submitMessage && (
          <div className="mt-4 text-center text-lg">
            <p
              className={
                submitMessage.includes("Error")
                  ? "text-red-500"
                  : "text-green-500"
              }
            >
              {submitMessage}
            </p>
          </div>
        )}
      </form>
    </div>
  );
}

export default Formcontect;
