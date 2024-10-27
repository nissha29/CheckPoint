function Card({ heading, text, index }) {
  const animationClasses = [
    "animate-fade-up",
    "animate-fade-up-200",
    "animate-fade-up-400",
    "animate-fade-up-600",
  ];

  const rotationClasses = [
    "hover:rotate-2",
    "hover:-rotate-2",
    "hover:rotate-1",
    "hover:-rotate-1",
  ];

  return (
    <div
      className={`
        relative overflow-hidden
        bg-white/10 backdrop-blur-sm p-6 rounded
        hover:shadow-xl hover:shadow-slate-500/20 
        transition-all duration-300 ease-in-out
        border border-white/20
        transform ${rotationClasses[index % 4]} 
        hover:scale-105 ${animationClasses[index % 4]}
        hover:bg-white/20
        cursor-pointer
      `}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent pointer-events-none" />
      <div className="relative z-10">
        <div className="h-1 w-20 bg-white/80 mb-4 rounded-full transform transition-all duration-300 group-hover:w-full"></div>
        <h3 className="text-xl font-semibold mb-2 text-white">{heading}</h3>
        <p className="text-sm text-white/90">{text}</p>
      </div>
    </div>
  );
}

export default Card;
