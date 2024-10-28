import React from "react";

const Button = ({ text, className }) => {
  return (
    <button
      className={`bg-[#fff] text-slate-700 px-3 py-1 text-[1.2rem] rounded-3xl hover:bg-slate-100 transition-colors ${
        className || ""
      }`}
    >
      {text}
    </button>
  );
};

export default Button;
