"use client";
import React from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const astronautRef = React.useRef<HTMLImageElement>(null);
  const rocketRef = React.useRef<HTMLImageElement>(null);
  const ufoRef = React.useRef<HTMLImageElement>(null);
  useGSAP(() => {
    if (!astronautRef.current || !ufoRef.current) return;

    gsap.to(ufoRef.current, {
      y: "+=20",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      duration: 3,
    });

    gsap.to(astronautRef.current, {
      y: "+=30",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      duration: 2,
    });

    gsap.fromTo(
      rocketRef.current,
      { x: "-100px", opacity: 0 },
      { x: "+=140", opacity: 1, ease: "circ.out", duration: 3 },
    );
  }, []);

  return (
    <div className={"h-[100vh] relative container mx-auto"}>
      <Image
        className={
          "absolute left-[0] xl:left-[170px] top-[-150px] w-[80vw] md:w-[50vw] xl:w-[27vw] h-auto"
        }
        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/img-nebula-home.webp`}
        alt={"Nebula"}
        width={524}
        height={465}
      />
      <Image
        className={"absolute left-[4%] top-[10%] lg:top-[30%]"}
        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/img-galaxy-blue.png`}
        alt={"Galaxy"}
        width={59}
        height={59}
      />
      <Image
        className={"absolute left-[15%] xl:left-[26%] top-[30%]"}
        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/img-planet-home-small.png`}
        alt={"Planet Home"}
        width={59}
        height={70}
      />
      <Image
        ref={ufoRef}
        className={"absolute left-[30px] bottom-[22%]"}
        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/img-space-ship-home.png`}
        alt={"Planet"}
        width={152}
        height={107}
      />
      <Image
        ref={astronautRef}
        className={"absolute right-[18%] top-[19%] w-[50vw] xl:w-[18vw] h-auto"}
        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/img-astronaut.svg`}
        alt={"Astronaut"}
        width={360}
        height={360}
      />
      <div
        className={
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 max-w-full w-[802px] px-[30px] xl:px-0"
        }
      >
        <Image
          className={"block"}
          src={process.env.NEXT_PUBLIC_BASE_PATH + "/images/img-astro-genesis-text.svg"}
          alt={"Astrogenesis"}
          width={802}
          height={77}
          priority
        />
        <Image
          ref={rocketRef}
          className={"block"}
          src={process.env.NEXT_PUBLIC_BASE_PATH + "/images/img-rocket-to-astogenesis.svg"}
          alt={"Rocket"}
          width={237}
          height={42}
          priority
        />
      </div>

      <div className="absolute bottom-[0] left-1/2 -translate-x-1/2 z-[1] pb-[145px] md:pb-[75px]">
        <Image
          className={"m-auto mb-[-30px]"}
          src={process.env.NEXT_PUBLIC_BASE_PATH + "/images/img-arrow-pointing.svg"}
          alt={"Arrow Pointing"}
          width={230}
          height={217}
        />
        <a
          href="https://example.com"
          target="_blank"
          rel="noopener noreferrer"
          className="whitespace-nowrap hover:bg-rose-gradient-hover btn-green-gradient px-[20px] lg:px-[47px] xl:px-[55px] text-center h-[56px] leading-[56px] md:h-[68px] md:leading-[68px] xl:h-[72px] xl:leading-[72px] inline-block  text-base md:text-custom-xl xl:text-2xl text-[#03300E] rounded-full relative font-extrabold"
        >
          Buy $ASTRO on AstroGenesis
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
