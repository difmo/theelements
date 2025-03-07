import React from "react";

const CustomButton = ({ className, fname }) => {
  return (
    <div>
      <button className={className}>{fname || "Submit"}</button>
    </div>
  );
};

export default CustomButton;
