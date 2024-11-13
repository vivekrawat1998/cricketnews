import React from "react";
const Button = ({ label }) => {
  return (
    <div className="grid place-items-center">
      <button
        className=""
        onClick={() => window.open("https://wa.link/ggnow", "_blank")}
      >
       {label}
      </button>
    </div>
  );
};

export default Button;
