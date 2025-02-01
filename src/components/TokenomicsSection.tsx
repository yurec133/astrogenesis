import React from "react";
import Image from "next/image";
import TokenomicsInfo from "@/components/TokenomicsInfo";
import MechanicsInfo from "@/components/MechanicsInfo";
import StatusList from "@/components/StatusList";

const TokenomicsSection = () => {
  return (
    <section
      id={"tokenomics"}
      className={
        "bg-card-soft-purple-gradient after:rounded-2xl mb-10 lg:mb-24 xl:mb-32 p-[15px] md:p-[27px] xl:p-[40px] rounded-2xl"
      }
    >
      <TokenomicsInfo />
      <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1fr] lg:gap-12">
        <div>
          <h2
            className={
              "text-blue-400 uppercase font-bold text-2xl md:text-custom-3xl mb-6 md:mb-12"
            }
          >
            Deflationary{" "}
            <span
              className={"block font-extrabold text-5xl md:text-custom-6xl"}
            >
              Mechanics
            </span>
          </h2>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-12">
            <div>
              <MechanicsInfo
                title={"50% Burn"}
                desc={"Every mission launched burns half of its $ASTRO cost."}
              />
            </div>
            <div>
              <MechanicsInfo
                title={"Unclaimed Tokens"}
                desc={
                  "Any unclaimed tokens from airdrops, testnet rewards, or game mechanics will also be burned."
                }
              />
            </div>
          </div>
          <Image
            className={"block lg:hidden m-auto mb-6 mt-[-75px]"}
            src="images/img-chart.svg"
            width={621}
            height={621}
            alt="Chart"
          />
          <StatusList />
        </div>
        <div>
          <Image
            className={"hidden lg:block"}
            src="images/img-chart.svg"
            width={621}
            height={621}
            alt="Chart"
          />
        </div>
      </div>
    </section>
  );
};

export default TokenomicsSection;
