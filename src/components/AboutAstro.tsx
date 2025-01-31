import React from "react";

const AboutAstro: React.FC = () => {
  return (
    <div className="bg-card-light-purple-gradient uppercase rounded-3xl p-[25px] md:p-[40px] xl:p-[50px]">
      <h1 className="leading-none text-[52px] lg:text-[62px] xl:text-7xl text-yellow-300 mb-6 font-black">
        Astro
        <span className={"block leading-[0.8] text-[80px] xl:text-8xl mt-[-5px]"}>
          Genesis
        </span>
      </h1>
      <h2
        className={
          "leading-[1.1] text-blue-400 text-[44px] sm:text-5xl font-bold"
        }
      >
        Join the Fight,
      </h2>
      <h3
        className={"leading-[1.1] text-[40px] sm:text-6xl font-extrabold mb-11"}
      >
        Save Humanity!
      </h3>
      <div className="w-[57px] h-[16px] bg-red-400 mb-7 rounded-full"></div>
      <h4 className={"leading-tight text-4xl font-bold mb-5"}>
        The future of humanity hangs by a thread!
      </h4>
      <p className={"text-3xl"}>
        Aliens are attacking, and the survival of our species depends on you.
      </p>
    </div>
  );
};

export default AboutAstro;
