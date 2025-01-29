import React from "react";
import BuyCard from "@/components/BuyCard";

const GetAstro = () => {
  return (
    <div className={"card-light-purple-gradient"}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h3
            className={
              "text-yellow-300 uppercase font-black text-5xl md:text-6xl mb-5"
            }
          >
            How to Get $ASTRO
          </h3>
          <p className={"font-bold text-lg mb-7"}>
            $ASTRO is the lifeblood of the AstroNFT universe, powering missions,
            rewards, and the entire gaming ecosystem.
          </p>
          <p className={"font-bold text-lg mb-14"}>
            While the game is still under development, you can already secure
            $ASTRO tokens and support the journey.
          </p>
          <h4
            className={"font-bold text-custom-lg mb-2 uppercase text-red-400"}
          >
            Important Note:
          </h4>
          <p className={"mb-7 text-purple-200"}>
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
          <div className="items-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-rows-2 lg:grid-cols-1 gap-6">
            <div>
              <BuyCard
                title={"Where to Buy"}
                desc={"DEX and Liquidity Pool"}
                btnName={"Buy On AstroGenesis"}
              />
            </div>
            <div>
              <BuyCard
                title={"$ASTRO Contract Address"}
                desc={"0xYourTokenContractHere"}
                btnName={"Join Liquidity Pool"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetAstro;
