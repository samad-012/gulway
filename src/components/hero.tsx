"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Button } from "@/components/ui/button";

const dishImages = [
  "Braised Angus Beef Cheek.png",
  "Angus stack beef burger.png",
  "Angus bologanese panini petite .png",
  "Angus Gourmet Crepe With Sour Cream.png",
  "Angus Gourmet Crepe With Sour Cream1.png",
  "chicken and cheese qusadilla .png",
  "beef stragonoff.png",
  "aussie benedict.png",
  "Almond butter rice porradge.png",
  "avocado toast.png",
];

export function Hero() {
  const [index, setIndex] = useState(0);
  const container = useRef(null);

  useEffect(() => {
    if (dishImages.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % dishImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 1.2 });

    tl.from(".hero-title", {
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
      skewY: 7
    })
    .from(".hero-subtext", {
      opacity: 0,
      y: 20,
      duration: 0.8,
    }, "-=0.6")
    .from(".hero-cta", {
      opacity: 0,
      y: 20,
      duration: 0.8,
    }, "-=0.4");
  }, { scope: container });

  return (
    <section 
      ref={container} 
      className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black antialiased"
    >
      {/* 1. Background Slideshow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.4, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 2.5, ease: [0.19, 1, 0.22, 1] }}
            className="absolute inset-0"
          >
            <img
              src={`/Gluway Menu photoshoot/${dishImages[index]}`}
              alt="Gluway Specialties"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 2. Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80 z-10 pointer-events-none" />
      <div className="absolute inset-0 backdrop-blur-[2px] z-5 pointer-events-none" />

      {/* 3. Main Content Wrapper */}
      <div className="relative z-20 text-center px-6 max-w-5xl flex flex-col items-center justify-center">
        {/* Pointer-events-none on the text only so the cursor works */}
        <div className="pointer-events-none">
          <motion.span 
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            animate={{ opacity: 1, letterSpacing: "0.4em" }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="text-emerald-500 uppercase text-[10px] md:text-xs mb-8 block font-semibold tracking-[0.4em]"
          >
            Abu Dhabi&apos;s Premium Dining
          </motion.span>
          
          <h1 className="hero-title text-7xl md:text-[140px] font-serif text-white tracking-tighter leading-[0.85] mb-4">
            GLUWAY
          </h1>

          <p className="hero-subtext mt-6 text-zinc-400 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto italic">
            &quot;Where health meets haute cuisine.&quot;
          </p>
        </div>

        {/* 4. Buttons Container - MUST NOT have pointer-events-none */}
        <div className="hero-cta mt-12 flex flex-row gap-6 items-center justify-center relative z-30">
          <Button 
            variant="outline" 
            className="bg-transparent border-emerald-500/50 text-emerald-500 hover:bg-emerald-500 hover:text-black transition-all duration-500 rounded-none px-8 py-6 text-[10px] tracking-[0.3em] uppercase"
          >
            Explore Menu
          </Button>
          <Button 
            variant="outline" 
            className="bg-transparent border-white/20 text-white hover:bg-white hover:text-black transition-all duration-500 rounded-none px-8 py-6 text-[10px] tracking-[0.3em] uppercase"
          >
            Our Story
          </Button>
        </div>
      </div>

      {/* 5. Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 w-px h-24 bg-gradient-to-b from-transparent via-emerald-500 to-transparent opacity-30 pointer-events-none" />
      
      <div className="absolute left-10 top-1/2 -rotate-90 origin-left hidden lg:block z-20 pointer-events-none">
        <span className="text-[10px] tracking-[0.5em] text-zinc-600 uppercase">Est. 2024 — Abu Dhabi</span>
      </div>
    </section>
  );
}