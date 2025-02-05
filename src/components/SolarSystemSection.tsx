"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RocketSvg from "@/components/RocketSvg";

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

const SolarSystemSection = () => {
  const plutoRef = useRef<HTMLImageElement | null>(null);
  const uranusRef = useRef<HTMLImageElement | null>(null);
  const neptuneRef = useRef<HTMLImageElement | null>(null);
  const saturnRef = useRef<HTMLImageElement | null>(null);
  const jupiterRef = useRef<HTMLImageElement | null>(null);
  const marsRef = useRef<HTMLImageElement | null>(null);
  const earthRef = useRef<HTMLImageElement | null>(null);
  const venusRef = useRef<HTMLImageElement | null>(null);
  const mercuryRef = useRef<HTMLImageElement | null>(null);
  const [scale, setScale] = useState(1);
  const scrollToProgress = (progress: number) => {
    gsap.globalTimeline.progress(progress);
  };

  useEffect(() => {
    const updateScale = () => {
      setScale(window.innerWidth / 1920);
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  const animatePlanet = (
    planetRef: React.RefObject<HTMLImageElement | null>,
    a: number,
    b: number,
    offsetX: number,
    offsetY: number,
    duration: number,
  ) => {
    if (!planetRef.current) return;

    const angle = 7;

    const createEllipsePath = (segments = 100) => {
      const points = [];
      for (let i = 0; i <= segments; i++) {
        const theta = (i / segments) * Math.PI * 2;
        const x = a * Math.cos(theta);
        const y = b * Math.sin(theta);

        const rotatedX =
          offsetX +
          x * Math.cos(angle * (Math.PI / 180)) -
          y * Math.sin(angle * (Math.PI / 180));
        const rotatedY =
          offsetY +
          x * Math.sin(angle * (Math.PI / 180)) +
          y * Math.cos(angle * (Math.PI / 180));

        points.push({ x: rotatedX, y: rotatedY });
      }
      return points;
    };

    const startX =
      offsetX +
      a * Math.cos(0) * Math.cos(angle * (Math.PI / 180)) -
      b * Math.sin(0) * Math.sin(angle * (Math.PI / 180));
    const startY =
      offsetY +
      (a * Math.cos(0) * Math.sin(angle * (Math.PI / 180)) +
        b * Math.sin(0) * Math.cos(angle * (Math.PI / 180)));

    gsap.set(planetRef.current, { x: startX, y: startY, scale });
    gsap.killTweensOf(planetRef.current);

    gsap.to(planetRef.current, {
      duration,
      repeat: -1,
      motionPath: {
        path: createEllipsePath(),
        curviness: 1.2,
        autoRotate: true,
      },
      ease: "linear",
      paused: true,
      scrollTrigger: {
        trigger: planetRef.current,
        start: "top 125%",
        end: "bottom",
        toggleActions: "play pause play pause",
        markers: false,
        onEnter: () => {
          scrollToProgress(0.3);
        },
      },
    });

    gsap.fromTo(
      "#fire1",
      { opacity: 0.5, scaleY: 0.8 },
      {
        opacity: 1,
        scaleY: 1.2,
        repeat: -1,
        yoyo: true,
        duration: 1,
        ease: "power1.inOut",
      },
    );
    gsap.fromTo(
      "#fire-group, #fire-group2",
      { scaleY: 0.8 },
      {
        scaleY: 1.2,
        repeat: -1,
        yoyo: true,
        duration: 1,
        ease: "power1.inOut",
      },
    );
  };

  useGSAP(() => {
    animatePlanet(
      plutoRef,
      (1631 / 2) * scale,
      (725 / 2) * scale,
      795 * scale,
      -510 * scale,
      170,
    );
    animatePlanet(
      uranusRef,
      (1270 / 2) * scale,
      (525 / 2) * scale,
      780 * scale,
      -525 * scale,
      150,
    );
    animatePlanet(
      neptuneRef,
      (1270 / 2) * scale,
      (520 / 2) * scale,
      780 * scale,
      -525 * scale,
      130,
    );
    animatePlanet(
      saturnRef,
      (720 / 2) * scale,
      (380 / 2) * scale,
      650 * scale,
      -580 * scale,
      80,
    );
    animatePlanet(
      jupiterRef,
      (540 / 2) * scale,
      (290 / 2) * scale,
      770 * scale,
      -530 * scale,
      60,
    );
    animatePlanet(
      marsRef,
      (380 / 2) * scale,
      (200 / 2) * scale,
      775 * scale,
      -514 * scale,
      50,
    );
    animatePlanet(
      earthRef,
      (227 / 2) * scale,
      (115 / 2) * scale,
      790 * scale,
      -501 * scale,
      40,
    );
    animatePlanet(
      venusRef,
      (227 / 2) * scale,
      (105 / 2) * scale,
      790 * scale,
      -495 * scale,
      30,
    );
    animatePlanet(
      mercuryRef,
      (97 / 2) * scale,
      (60 / 2) * scale,
      800 * scale,
      -490 * scale,
      10,
    );
  }, [scale]);

  return (
    <div className="h-[30vh] md:h-[50vh] xl:h-[100vh] relative z-10">
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ width: `${1629 * scale}px`, height: `${874 * scale}px` }}
      >
        <Image
          src="/images/bg-solar-system.svg"
          alt="Solar System"
          width={1629}
          height={874}
        />
        {/* Planets */}
        <Image
          ref={plutoRef}
          className="absolute"
          src="/images/img-pluto.webp"
          alt="Pluto"
          width={62 * scale}
          height={62 * scale}
        />
        <Image
          ref={uranusRef}
          className="absolute"
          src="/images/img-uranus.webp"
          alt="Uranus"
          width={82 * scale}
          height={82 * scale}
        />
        <Image
          ref={neptuneRef}
          className="absolute"
          src="/images/img-neptune.webp"
          alt="Neptune"
          width={73 * scale}
          height={73 * scale}
        />
        <Image
          ref={saturnRef}
          className="absolute"
          src="/images/img-saturn.webp"
          alt="Saturn"
          width={328 * scale}
          height={187 * scale}
        />
        <Image
          ref={jupiterRef}
          className="absolute"
          src="/images/img-jupiter.webp"
          alt="Jupiter"
          width={115 * scale}
          height={115 * scale}
        />
        <Image
          ref={marsRef}
          className="absolute"
          src="/images/img-mars.webp"
          alt="Mars"
          width={76 * scale}
          height={76 * scale}
        />
        <Image
          ref={earthRef}
          className="absolute"
          src="/images/img-earth.webp"
          alt="Earth"
          width={58 * scale}
          height={58 * scale}
        />
        <Image
          ref={venusRef}
          className="absolute"
          src="/images/img-venus.webp"
          alt="Venus"
          width={43 * scale}
          height={43 * scale}
        />
        <Image
          ref={mercuryRef}
          className="absolute"
          src="/images/img-mercury.webp"
          alt="Mercury"
          width={32 * scale}
          height={32 * scale}
        />
      </div>

      <RocketSvg
        className={
          "absolute left-1/2 -translate-x-1/2 bottom-[-25%] md:bottom-[-7%] z-[10] ml-[-5%] w-[25vw] xl:w-[18vw] h-auto"
        }
      />
    </div>
  );
};

export default SolarSystemSection;
