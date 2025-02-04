"use client";

import React, { useRef, useMemo } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface StarConfig {
  depth: number;
  xPos: number;
  yPos: number;
  alpha: number;
  size: number;
  blur: number;
  lifetime: number;
}

const Stars: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const initialStarCount = useMemo(() => {
    if (typeof window !== "undefined") {
      const canvasSize = window.innerWidth * window.innerHeight;
      return Math.round(canvasSize / 1000);
    }
    return 100;
  }, []);

  const random = (min: number, max: number) =>
    min + Math.random() * (max - min);

  const createStarConfig = (): StarConfig => ({
    depth: random(0.5, 2),
    xPos: random(0, 100),
    yPos: random(0, 100),
    alpha: random(0.2, 0.7),
    size: random(0.5, 2),
    blur: 0,
    lifetime: random(6, 15) * 1000,
  });

  const createStar = () => {
    if (!containerRef.current) return;

    const { depth, xPos, yPos, alpha, size, lifetime } = createStarConfig();

    const star = document.createElement("div");
    star.classList.add("star");

    Object.assign(star.style, {
      position: "fixed",
      left: `${xPos}%`,
      top: `${yPos}%`,
      opacity: `${alpha}`,
      width: `${size}px`,
      height: `${size}px`,
      backgroundColor: "#ffffff",
      borderRadius: "50%",
      filter: `blur(${(2 - depth) * 1.5}px)`,
    });

    containerRef.current.appendChild(star);

    const tl = gsap.timeline();

    tl.from(star, {
      duration: 1.5 * depth,
      opacity: 0,
      y: 5 * depth,
      scale: 2 - depth,
      rotate: 180,
    });

    tl.to(star, {
      duration: 1.5,
      opacity: 0,
      delay: lifetime / 1000,
      onComplete: () => {
        star.remove();
        setTimeout(createStar, random(1000, 3000));
      },
    });
  };

  useGSAP(() => {
    if (typeof window === "undefined") return;

    for (let i = 0; i < initialStarCount; i++) {
      setTimeout(createStar, random(0, 4000));
    }

    const handleResize = () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
        for (let i = 0; i < initialStarCount; i++) {
          setTimeout(createStar, random(0, 4000));
        }
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [initialStarCount]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-[-1]"
    ></div>
  );
};

export default Stars;
