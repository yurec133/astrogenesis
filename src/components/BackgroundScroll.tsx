"use client";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BackgroundScroll() {
  useGSAP(() => {
    gsap.to("body", {
      backgroundPosition:
        "0% 97%, 78% 87%, 88% 86%, 100% 50%, 30% 31%, 19% 20%, 100% 15%, 100% 1%",
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        start: "top bottom",
        end: "bottom top",
        scrub: 0.5,
        immediateRender: true,
      },
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return null;
}
