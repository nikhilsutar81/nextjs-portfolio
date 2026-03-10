"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

interface ScrollFadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  className?: string;
}

export const ScrollFadeIn = ({
  children,
  delay = 0,
  duration = 1,
  direction = "up",
  distance = 50,
  className = "",
}: ScrollFadeInProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!elementRef.current) return;

      let x = 0;
      let y = 0;

      if (direction === "up") y = distance;
      if (direction === "down") y = -distance;
      if (direction === "left") x = distance;
      if (direction === "right") x = -distance;

      gsap.fromTo(
        elementRef.current,
        {
          opacity: 0,
          x: x,
          y: y,
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: duration,
          delay: delay,
          ease: "power2.out",
          scrollTrigger: {
            trigger: elementRef.current,
            start: "top 85%", // Animation starts when top of element reaches 85% of viewport height
            toggleActions: "play none none none", // Only play once
          },
        }
      );
    },
    { scope: elementRef }
  );

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};
