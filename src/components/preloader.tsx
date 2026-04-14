"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const container = useRef(null);
  const logo = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => onComplete(),
    });

    // Premium reveal animation
    tl.fromTo(logo.current, 
      { opacity: 0, y: 20, letterSpacing: "0.2em" }, 
      { opacity: 1, y: 0, letterSpacing: "0.5em", duration: 1, ease: "power4.out" }
    )
    .to(container.current, {
      yPercent: -100,
      duration: 0.8,
      ease: "expo.inOut",
      delay: 0.2
    });
  }, { scope: container });

  return (
    <div ref={container} className="fixed inset-0 z-[999] bg-black flex items-center justify-center overflow-hidden">
      <h1 ref={logo} className="text-white text-4xl md:text-6xl font-serif tracking-widest">
        GLUWAY
      </h1>
      {/* Decorative lines for luxury feel */}
      <div className="absolute w-full h-[1px] bg-white/10 top-1/2 -translate-y-1/2" />
    </div>
  );
}