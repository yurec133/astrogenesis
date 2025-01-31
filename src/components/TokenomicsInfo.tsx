import React from "react";

const TokenomicsInfo = () => {
  return (
    <div
      className={
        "bg-card-light-purple-gradient rounded-2xl md:rounded-3xl mb-8 md:mb-16 p-[25px] md:p-[35px] xl:p-[50px]"
      }
    >
      <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1fr] xl:grid-cols-[0.78fr_1fr] gap-10">
        <div>
          <h2
            className={
              "text-yellow-300 uppercase font-black text-5xl md:text-6xl xl:text-custom-6xl mb-4"
            }
          >
            Tokenomics
          </h2>
          <h3 className={"text-red-400 font-bold uppercase text-3xl mb-3"}>
            Welcome to the
            <span
              className={
                "block font-extrabold text-custom-3x xl:text-custom-3xl"
              }
            >
              heart of AstroNFT!
            </span>
          </h3>
          <div className="w-[57px] h-[8px] bg-red-400 rounded-full"></div>
        </div>
        <div>
          <h3 className={"text-custom-xl xl:text-2xl font-bold mb-5"}>
            The $ASTRO token is deflationary by design, featuring an aggressive
            burn mechanism that ensures long-term value.
          </h3>
          <p className={"text-custom-xl"}>
            Our distribution focuses heavily on empowering the community while
            rewarding early adopters and contributors.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TokenomicsInfo;
