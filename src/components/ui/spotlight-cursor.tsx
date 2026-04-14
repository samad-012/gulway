"use client";

import { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function SpotlightCursor() {
  const spotlightRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  
  // Reduced size for a refined, precise look
  const size = 100; 

  useEffect(() => {
    setMounted(true);
  }, []);

  useGSAP(() => {
    if (!mounted || !spotlightRef.current) return;

    // Snappier follow duration for a small cursor
    const xTo = gsap.quickTo(spotlightRef.current, "x", { duration: 0.15, ease: "power3.out" });
    const yTo = gsap.quickTo(spotlightRef.current, "y", { duration: 0.15, ease: "power3.out" });

    const handleMove = (e: MouseEvent) => {
      xTo(e.clientX - size / 2);
      yTo(e.clientY - size / 2);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mounted]);

  if (!mounted) return null;

  return createPortal(
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      <div
        ref={spotlightRef}
        className="absolute rounded-full border border-white/20"
        style={{
          width: size,
          height: size,
          background: "transparent",
          // Clears the blur and adds a slight contrast boost
          backdropFilter: "blur(0px) brightness(1.2) contrast(1.1)",
          // Sharp focus in center, quick fade out
          WebkitMaskImage: "radial-gradient(circle, black 30%, black 60%, transparent 100%)",
          maskImage: "radial-gradient(circle, black 30%, black 60%, transparent 100%)",
          willChange: "transform",
        }}
      />
    </div>,
    document.body
  );
}