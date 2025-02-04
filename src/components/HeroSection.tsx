"use client";
import React from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const astronautRef = React.useRef<HTMLImageElement>(null);
  const planetRef = React.useRef<HTMLImageElement>(null);
  const rocketRef = React.useRef<HTMLImageElement>(null);
  const ufoRef = React.useRef<HTMLImageElement>(null);

  useGSAP(() => {
    if (!astronautRef.current || !planetRef.current || !ufoRef.current) return;

    const ufoAnimation = gsap.to(ufoRef.current, {
      y: "+=20",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      duration: 3,
    });

    const astronautAnimation = gsap.to(astronautRef.current, {
      y: "+=30",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      duration: 2,
    });

    const rocketAnimation = gsap.fromTo(
      rocketRef.current,
      { x: "-100px", opacity: 0 },
      { x: "+=140", opacity: 1, ease: "circ.out", duration: 3 },
    );

    gsap.to(planetRef.current, {
      y: "+=200",
      x: "+=700",
      ease: "none",
      scrollTrigger: {
        trigger: planetRef.current,
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1,
        onEnter: () => {
          ufoAnimation.play();
          astronautAnimation.play();
          rocketAnimation.play();
        },
        onLeave: () => {
          ufoAnimation.pause();
          astronautAnimation.pause();
          rocketAnimation.pause();
        },
        onEnterBack: () => {
          ufoAnimation.play();
          astronautAnimation.play();
          rocketAnimation.play();
        },
        onLeaveBack: () => {
          ufoAnimation.pause();
          astronautAnimation.pause();
          rocketAnimation.pause();
        },
      },
    });
  }, []);

  return (
    <div className={"h-[100vh] relative container mx-auto"}>
      <Image
        className={
          "absolute left-[0] xl:left-[170px] top-[-150px] w-[80vw] md:w-[50vw] xl:w-[27vw] h-auto"
        }
        src={"/images/img-nebula-home.webp"}
        alt={"Nebula"}
        width={524}
        height={465}
        layout="intrinsic"
      />
      <Image
        ref={planetRef}
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
        ref={ufoRef}
        className={"absolute left-[30px] bottom-[22%]"}
        src={"/images/img-space-ship-home.png"}
        alt={"Planet"}
        width={152}
        height={107}
      />
      <Image
        ref={astronautRef}
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
          className={"block"}
          src={"/images/img-astro-genesis-text.svg"}
          alt={"Astrogenesis"}
          width={802}
          height={77}
          priority
          layout="intrinsic"
        />
        <Image
          ref={rocketRef}
          className={"block"}
          src={"/images/img-rocket-to-astogenesis.svg"}
          alt={"Rocket"}
          width={237}
          height={42}
          priority
          layout="intrinsic"
        />
      </div>

      <div className="absolute bottom-[0] left-1/2 -translate-x-1/2 z-[1] pb-[145px] md:pb-[75px]">
        <Image
          className={"m-auto mb-[-30px]"}
          src={"/images/img-arrow-pointing.svg"}
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
