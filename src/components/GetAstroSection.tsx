import React from "react";
import BuyCard from "@/components/BuyCard";

const GetAstroSection = () => {
  return (
    <section
      id={"astro"}
      className={
        "bg-card-light-purple-gradient mb-16 rounded-2xl p-[20px] lg:p-[45px] xl:p-[60px]"
      }
    >
      <div className="grid grid-cols-1 xl:grid-cols-[1fr_0.9fr] gap-10 xl:gap-20">
        <div>
          <h3
            className={
              "text-yellow-300 uppercase font-black text-5xl md:text-6xl mb-4"
            }
          >
            How to Get $ASTRO
          </h3>
          <p className={"font-bold text-lg mb-3 lg:mb-6"}>
            $ASTRO is the lifeblood of the AstroNFT universe, powering missions,
            rewards, and the entire gaming ecosystem.
          </p>
          <p className={"font-bold text-lg mb-5 lg:mb-10"}>
            While the game is still under development, you can already secure
            $ASTRO tokens and support the journey.
          </p>
          <h4
            className={"font-bold text-custom-lg mb-1 uppercase text-red-400"}
          >
            Important Note:
          </h4>
          <p className={"mb-3 lg:mb-6 text-purple-200"}>
            $ASTRO is not an investment vehicle, and there are no guarantees
            that the token will increase in value.
          </p>
          <p className={"text-purple-200"}>
            By purchasing $ASTRO, you actively support the development of
            AstroNFT and help the team deliver the game faster.
          </p>
          <p className={"text-purple-200"}>
            Only invest what you are ready to lose.
          </p>
        </div>
        <div>
          <div className="items-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-1 gap-6">
            <div>
              <BuyCard
                title={"Where to Buy"}
                desc={"DEX and Liquidity Pool"}
                btnName={"Buy On AstroGenesis"}
                href={"test.com"}
              />
            </div>
            <div>
              <BuyCard
                title={"$ASTRO Contract Address"}
                desc={"0xYourTokenContractHere"}
                btnName={"Join Liquidity Pool"}
                href={"test.com"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetAstroSection;
