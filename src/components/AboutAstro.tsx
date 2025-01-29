import React from "react";


const AboutAstro: React.FC = () => {
  return (
      <div className="card-light-purple-gradient uppercase">
        <h1 className="leading-none text-[52px] lg:text-7xl md:text-[62px] text-yellow-300 mb-5 font-black">
          Astro <span className={"leading-[0.8] text-[80px] lg:text-8xl"}>Genesis</span>
        </h1>
        <h2 className={"leading-[1.1] text-blue-400 text-[44px] sm:text-5xl font-bold"}>
          Join the Fight,
        </h2>
        <h3 className={"leading-[1.1] text-[40px] sm:text-6xl font-extrabold mb-10"}>
          Save Humanity!
        </h3>
        <div className="w-[57px] h-[16px] bg-red-400 mb-6 rounded-full"></div>
        <h4 className={"leading-tight text-4xl font-bold mb-4"}>
          The future of humanity hangs by a thread!
        </h4>
        <p className={"text-3xl"}>Aliens are attacking, and the survival of our species depends on you.</p>
      </div>
  );
};

export default AboutAstro;
