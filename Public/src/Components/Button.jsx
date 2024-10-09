import React from 'react';

const Button = ({ text, className}) => {
  return (
    <button 
      className={`bg-red-500 text-white px-3 py-1 text-[1.5rem] font-semibold rounded-md hover:bg-red-700 transition-colors ${className || ''}`}
    >
      {text}
    </button>
  );
};

export default Button;