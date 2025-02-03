"use client";

import React, { useRef, useCallback, useMemo } from "react";
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

  // Memoize random function to prevent recreation on each render
  const random = useCallback((min: number, max: number) => {
    return min + Math.random() * (max - min);
  }, []);

  // Adjusted star creation configuration to increase density of small stars
  const createStarConfig = useCallback(
      (): StarConfig => ({
        depth: random(0.5, 2),
        xPos: random(0, 100),
        yPos: random(0, 100),
        alpha: random(0.2, 0.7), // Lowered opacity for more subtle small stars
        size: random(0.5, 2), // Reduced size range for more tiny stars
        blur: 0,
        lifetime: random(6, 15) * 1000, // Slightly shorter lifetime
      }),
      [random],
  );

  const createStar = useCallback(() => {
    if (!containerRef.current) return;

    const { depth, xPos, yPos, alpha, size, lifetime } = createStarConfig();

    const star = document.createElement("div");
    star.classList.add("star");

    // Use Object.assign for more performant style setting
    Object.assign(star.style, {
      position: "fixed",
      left: `${xPos}%`,
      top: `${yPos}%`,
      opacity: `${alpha}`,
      width: `${size}px`,
      height: `${size}px`,
      backgroundColor: "#ffffff",
      borderRadius: "50%",
      filter: `blur(${(2 - depth) * 1.5}px)`, // Slightly less blur
    });

    containerRef.current.appendChild(star);

    // Use GSAP timeline for more efficient animations
    const tl = gsap.timeline();

    // Entrance animation with more subtle movement
    tl.from(star, {
      duration: 1.5 * depth,
      opacity: 0,
      y: 5 * depth,
      scale: 2 - depth,
      rotate: 180,
    });

    // Exit animation
    tl.to(star, {
      duration: 1.5,
      opacity: 0,
      delay: lifetime / 1000,
      onComplete: () => {
        star.remove();
        setTimeout(createStar, random(1000, 3000)); // More frequent star creation
      },
    });
  }, [createStarConfig, random]);

  // Calculate initial number of stars - significantly increased
  const initialStarCount = useMemo(() => {
    const canvasSize = window.innerWidth * window.innerHeight;
    return Math.round(canvasSize / 1000); // More stars per unit area
  }, []);

  useGSAP(() => {
    // Initial star creation with more staggered and frequent timing
    for (let i = 0; i < initialStarCount; i++) {
      setTimeout(createStar, random(0, 4000));
    }

    // Optional: Handle window resize to adjust stars
    const handleResize = () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = ""; // Clear existing stars
        for (let i = 0; i < initialStarCount; i++) {
          setTimeout(createStar, random(0, 4000));
        }
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [createStar, initialStarCount, random]);

  return (
      <div
          ref={containerRef}
          className="fixed inset-0 pointer-events-none z-[-1]"
      ></div>
  );
};

export default React.memo(Stars);