"use client";

import React, { useRef, useEffect } from "react";

interface Star {
  x: number;
  y: number;
  z: number;
  speed: number;
  size: number;
  alpha: number;
  isStatic: boolean;
}

const Stars: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const starCount = Math.round((window.innerWidth * window.innerHeight) / 800); // Більше зірок

    starsRef.current = new Array(starCount).fill(null).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      z: Math.random() * 2 + 0.3,
      speed: Math.random() * 0.03 + 0.005,
      size: Math.random() * 2 + 0.5,
      alpha: Math.random() * 0.7 + 0.3,
      isStatic: Math.random() < 0.3,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      starsRef.current.forEach((star) => {
        if (star.isStatic) {
          star.alpha += Math.random() * 0.02 - 0.01;
          if (star.alpha < 0.3) star.alpha = 0.3;
          if (star.alpha > 0.7) star.alpha = 0.7;

          ctx.globalAlpha = star.alpha;
          ctx.fillStyle = "#ffffff";
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
          ctx.fill();
        } else {
          const perspective = 100 / star.z;
          const screenX = canvas.width / 2 + (star.x - canvas.width / 2) * perspective;
          const screenY = canvas.height / 2 + (star.y - canvas.height / 2) * perspective;
          const radius = star.size * perspective * 0.03;

          ctx.globalAlpha = star.alpha;
          ctx.fillStyle = "#ffffff";
          ctx.shadowBlur = (1.5 - star.z) * 10;
          ctx.shadowColor = "#ffffff";
          ctx.beginPath();
          ctx.arc(screenX, screenY, radius, 0, Math.PI * 2);
          ctx.fill();

          star.z -= star.speed;

          if (star.z <= 0) {
            star.x = Math.random() * canvas.width;
            star.y = Math.random() * canvas.height;
            star.z = 2;
            star.alpha = Math.random() * 0.7 + 0.3;
          }
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-[-1] w-full h-full" />;
};

export default Stars;
