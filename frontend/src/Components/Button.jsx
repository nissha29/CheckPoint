import React from "react";

const Button = ({ text, className }) => {
  return (
    <button
      className={`bg-white text-black px-3 py-1 text-[1.5rem] font-semibold rounded-md hover:bg-slate-100 transition-colors ${
        className || ""
      }`}
    >
      {text}
    </button>
  );
};

export default Button;
