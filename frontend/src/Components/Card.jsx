import react from 'react'

function Card({heading, text, index}) {
  const animationClasses = [
    'animate-fade-up',
    'animate-fade-up-200',
    'animate-fade-up-400',
    'animate-fade-up-600',
  ];

  const rotationClasses = [
    'hover:rotate-2',
    'hover:-rotate-2',
    'hover:rotate-1',
    'hover:-rotate-1',
  ];

  return (
    <div 
      className={`
        bg-[#eccece] p-6 rounded shadow-xl
        hover:shadow-red-500 transition-all duration-300 ease-in-out
        border border-red-200 text-gray-900
        transform ${rotationClasses[index % 4]} 
        hover:scale-105 ${animationClasses[index % 4]}
        cursor-pointer
      `}
    >
      <div className="h-1 w-20 bg-red-400 mb-4 rounded-full transform transition-all duration-300 group-hover:w-full"></div>
      <h3 className="text-xl font-semibold mb-2 text-red-500">{heading}</h3>
      <p className="text-sm">{text}</p>
    </div>
  )
}
export default Card