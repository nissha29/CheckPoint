import React from 'react';

const Card = ({ heading, text, index }) => {
  const animationClasses = [
    "animate-fade-up",
    "animate-fade-up-200",
    "animate-fade-up-400",
    "animate-fade-up-600",
  ];

  const gradientPairs = [
    {
      hover: "group-hover:from-blue-600/15 group-hover:to-indigo-600/15",
      accent: "bg-blue-500"
    },
    {
      hover: "group-hover:from-violet-600/15 group-hover:to-purple-600/15",
      accent: "bg-violet-500"
    },
    {
      hover: "group-hover:from-fuchsia-600/15 group-hover:to-pink-600/15",
      accent: "bg-fuchsia-500"
    },
    {
      hover: "group-hover:from-teal-600/15 group-hover:to-emerald-600/15",
      accent: "bg-teal-500"
    }
  ];

  const currentGradient = gradientPairs[index % 4];

  return (
    <div
      className={`
        rounded-[3rem]
        relative group
        overflow-hidden 
        bg-gradient-to-r from-[#252c69] to-[#3d4775]
        backdrop-blur-md p-6
        transition-all duration-300
        hover:scale-[1.02]
        ${animationClasses[index % 4]}
        hover:border-white/30
        bg-opacity-40
        hover:shadow-[0_0_0_10px_rgba(100,100,150,0.40)]
      `}
    >
    
      <div className={`
        absolute inset-0 opacity-0 transition-opacity duration-300
        bg-gradient-to-br ${currentGradient.hover}
        group-hover:opacity-100
      `} />

      
      <div className="relative z-10">
    
        <div className={`
          h-0.5 w-8 mb-4 rounded-full
          ${currentGradient.accent} opacity-60
          group-hover:w-12 
          transition-all duration-300
        `} />

    
        <h3 className="text-lg font-semibold text-white mb-2">
          {heading}
        </h3>

      
        <p className="text-white/80 text-sm leading-relaxed">
          {text}
        </p>
      </div>
    </div>
  );
};

export default Card;