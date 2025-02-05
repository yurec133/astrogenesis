"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

const SolarSystemSection = () => {
  const plutoRef = useRef<HTMLImageElement>(null);
  const uranusRef = useRef<HTMLImageElement>(null);
  const neptuneRef = useRef<HTMLImageElement>(null);
  const saturnRef = useRef<HTMLImageElement>(null);
  const jupiterRef = useRef<HTMLImageElement>(null);
  const marsRef = useRef<HTMLImageElement>(null);
  const earthRef = useRef<HTMLImageElement>(null);
  const venusRef = useRef<HTMLImageElement>(null);
  const mercuryRef = useRef<HTMLImageElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      setScale(window.innerWidth / 1920); // Масштабування відносно макета 1920px
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  const animatePlanet = (
    planetRef: React.RefObject<HTMLImageElement>,
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
    });
  };

  useEffect(() => {
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
      (1270 / 2) * scale, // Зменшена велика піввісь
      (525 / 2) * scale, // Зменшена мала піввісь
      780 * scale, // Можна також трохи змістити центр
      -525 * scale,
      150,
    );
    animatePlanet(
      neptuneRef,
      (1270 / 2) * scale, // Зменшена велика піввісь
      (520 / 2) * scale, // Зменшена мала піввісь
      780 * scale, // Можна також трохи змістити центр
      -525 * scale,
      130,
    );
    animatePlanet(
      saturnRef,
      (720 / 2) * scale, // Велика піввісь
      (380 / 2) * scale, // Мала піввісь
      650 * scale, // Центр ближче до центру системи
      -580 * scale, // Коригуємо зміщення по Y
      80, // Початковий кут
    );
    animatePlanet(
      jupiterRef,
      (540 / 2) * scale, // Велика піввісь
      (290 / 2) * scale, // Мала піввісь
      770 * scale, // Центр ближче до центру системи
      -530 * scale, // Коригуємо зміщення по Y
      60, // Початковий кут
    );
    animatePlanet(
      marsRef,
      (380 / 2) * scale, // Велика піввісь
      (200 / 2) * scale, // Мала піввісь
      775 * scale, // Центр ближче до центру системи
      -514 * scale, // Коригуємо зміщення по Y
      50, // Початковий кут
    );
    animatePlanet(
      earthRef,
      (227 / 2) * scale, // Велика піввісь
      (115 / 2) * scale, // Мала піввісь
      790 * scale, // Центр ближче до центру системи
      -501 * scale, // Коригуємо зміщення по Y
      40, // Початковий кут
    );
    animatePlanet(
      venusRef,
      (227 / 2) * scale, // Велика піввісь
      (105 / 2) * scale, // Мала піввісь
      790 * scale, // Центр ближче до центру системи
      -495 * scale, // Коригуємо зміщення по Y
      30, // Початковий кут
    );
    animatePlanet(
        mercuryRef,
        (97 / 2) * scale, // Велика піввісь
        (60 / 2) * scale, // Мала піввісь
        800 * scale, // Центр ближче до центру системи
        -490 * scale, // Коригуємо зміщення по Y
        10, // Початковий кут
    );
  }, [scale]);

  return (
    <div className="h-[100vh] relative z-10">
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ width: `${1629 * scale}px`, height: `${874 * scale}px` }}
      >
        <Image
          src="/images/bg-solar-system.svg"
          alt="Solar System"
          width={1629}
          height={874}
          layout="intrinsic"
        />
        {/* Pluto */}
        <Image
          ref={plutoRef}
          className="absolute"
          src="/images/img-pluto.webp"
          alt="Pluto"
          width={62 * scale}
          height={62 * scale}
          layout="intrinsic"
        />
        {/* Uranus */}
        <Image
          ref={uranusRef}
          className="absolute"
          src="/images/img-uranus.webp"
          alt="Uranus"
          width={82 * scale}
          height={82 * scale}
          layout="intrinsic"
        />
        {/*Neptune*/}
        <Image
          ref={neptuneRef}
          className="absolute"
          src="/images/img-neptune.webp"
          alt="Neptune"
          width={73 * scale}
          height={73 * scale}
          layout="intrinsic"
        />
        {/* Saturn */}
        <Image
          ref={saturnRef}
          className="absolute"
          src="/images/img-satrun-large.webp"
          alt="Saturn"
          width={328 * scale}
          height={187 * scale}
          layout="intrinsic"
        />

        {/* Jupiter */}
        <Image
          ref={jupiterRef}
          className="absolute"
          src="/images/img-jupiter.webp"
          alt="Jupiter"
          width={115 * scale}
          height={115 * scale}
          layout="intrinsic"
        />
        {/* Mars */}
        <Image
          ref={marsRef}
          className="absolute"
          src="/images/img-mars.webp"
          alt="Mars"
          width={76 * scale}
          height={76 * scale}
          layout="intrinsic"
        />
        {/* Earth */}
        <Image
          ref={earthRef}
          className="absolute"
          src="/images/img-earth.webp"
          alt="Earth"
          width={58 * scale}
          height={58 * scale}
          layout="intrinsic"
        />
        {/* Venus */}
        <Image
          ref={venusRef}
          className="absolute"
          src="/images/img-venus.webp"
          alt="Venus"
          width={43 * scale}
          height={43 * scale}
          layout="intrinsic"
        />
        {/* Mercury */}
        <Image
          ref={mercuryRef}
          className="absolute"
          src="/images/img-mercury.webp"
          alt="Mercury"
          width={32 * scale}
          height={32 * scale}
          layout="intrinsic"
        />
      </div>
      <Image
        className="absolute left-1/2 -translate-x-1/2 bottom-[25%] md:bottom-[1%] z-[1] ml-[-5%] w-[35vw] xl:w-[18vw] h-auto"
        src="/images/img-rocket-universe.svg"
        alt="Rocket"
        width={353}
        height={420}
        layout="intrinsic"
      />
    </div>
  );
};

export default SolarSystemSection;
