"use client";

import React, { useRef, useEffect } from "react";

const Particles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<
    {
      x: number;
      y: number;
      size: number;
      alpha: number;
      velocityX: number;
      velocityY: number;
    }[]
  >([]);

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

    const createParticles = () => {
      const numParticles = Math.floor(Math.random() * 4) + 2;
      for (let i = 0; i < numParticles; i++) {
        const isSmall = Math.random() < 0.5;
        const size = isSmall ? Math.random() * 2 + 1 : Math.random() * 5 + 4;
        const alpha = isSmall
          ? Math.random() * 0.3 + 0.2
          : Math.random() * 0.5 + 0.3;
        const x = Math.random() * canvas.width;
        const y = canvas.height;
        const velocityX = (Math.random() - 0.5) * 0.5;
        const velocityY = -(
          Math.random() *
          (isSmall ? 0.2 : 0.4) *
          canvas.height
        );

        particlesRef.current.push({ x, y, size, alpha, velocityX, velocityY });
      }
    };

    const updateParticles = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle, index) => {
        particle.x += particle.velocityX;
        particle.y += particle.velocityY;
        particle.alpha -= 0.005; // Повільніше зникають

        if (particle.alpha <= 0) {
          particlesRef.current.splice(index, 1);
        }
      });

      particlesRef.current.forEach((particle) => {
        ctx.globalAlpha = particle.alpha;
        ctx.fillStyle = "rgba(200, 200, 200, 0.8)";
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(updateParticles);
    };

    const handleScroll = () => {
      createParticles();
    };

    window.addEventListener("scroll", handleScroll);
    requestAnimationFrame(updateParticles);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[-1] w-full h-full"
    ></canvas>
  );
};

export default Particles;
