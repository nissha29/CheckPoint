function Features({ text1, text2, text3, text4, image }) {
  return (
    <div className="mt-20 flex items-center justify-center px-5">
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-24 max-w-7xl mx-auto">
        <div className="flex-1 space-y-6 md:space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0957ff] leading-tight">
            {text1}
            <span className="block text-slate-300">{text2}</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-xl">
            {text3}
          </p>

          <div className="relative">
            <p className="text-slate-50 leading-relaxed font-thin text-[1.03rem]">{text4}</p>
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-slate-500"></div>
          </div>
        </div>

        <div className="flex-1 relative">
          <div className="absolute inset-0 bg-[#98b2ff] rounded-2xl transform rotate-3 scale-105 opacity-30"></div>
          <img
            src={image}
            alt="CheckPoint Interface"
            className="relative rounded-2xl shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500"
          />
        </div>
      </div>
    </div>
  );
}

export function Features2({ image, text1, text2, text3, text4 }) {
  return (
    <div className="mt-20 flex items-center justify-center px-5">
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-24 max-w-7xl mx-auto">
        <div className="flex-1 relative">
          <div className="absolute inset-0 bg-[#98b2ff] rounded-2xl transform rotate-3 scale-105 opacity-30"></div>
          <img
            src={image}
            alt="CheckPoint Interface"
            className="relative rounded-2xl shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500"
          />
        </div>
        <div className="flex-1 space-y-6 md:space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0957ff] leading-tight">
            {text1}
            <span className="block text-slate-300">{text2}</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-50 leading-relaxed max-w-xl">
            {text3}
          </p>

          <div className="relative">
            <p className="text-slate-50 leading-relaxed font-thin">{text4}</p>
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-slate-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
