import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className={"h-[100vh] relative container mx-auto"}>
      <Image
        className={"absolute right-0 top-[14%] w-[50vw] xl:w-[28vw] h-auto"}
        src={"/images/img-planet-hero-section.webp"}
        alt={"Planet"}
        width={507}
        height={604}
        layout="intrinsic"
      />
      <Image
        className={"absolute left-[4%] top-[10%] lg:top-[30%]"}
        src={"/images/img-galaxy-blue.png"}
        alt={"Galaxy"}
        width={59}
        height={59}
      />
      <Image
        className={"absolute left-[15%] xl:left-[26%] top-[30%]"}
        src={"/images/img-planet-home-small.png"}
        alt={"Planet Home"}
        width={59}
        height={70}
      />
      <Image
        className={"absolute left-[30px] bottom-[22%]"}
        src={"/images/img-space-ship-home.png"}
        alt={"Planet"}
        width={152}
        height={107}
      />
      <Image
        className={"absolute right-[18%] top-[19%] w-[50vw] xl:w-[18vw] h-auto"}
        src={"/images/img-astronaut.svg"}
        alt={"Astronaut"}
        width={360}
        height={360}
        layout="intrinsic"
      />
      <div
        className={
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
        }
      >
        <Image
          src={"/images/img-astro-genesis-text.svg"}
          alt={"Astrogenesis"}
          width={802}
          height={77}
          priority
        />
        <Image
          src={"/images/img-rocket-to-astogenesis.svg"}
          alt={"Rocket"}
          width={237}
          height={42}
          priority
        />
      </div>

      <div className="absolute bottom-[50px] left-1/2 -translate-x-1/2 ">
        <Image
          className={"m-auto"}
          src={"/images/img-arrow-pointing.svg"}
          alt={"Arrow Pointing"}
          width={230}
          height={217}
        />
      </div>
    </div>
  );
};

export default Hero;
