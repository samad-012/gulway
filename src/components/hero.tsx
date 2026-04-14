"use client";
import { motion } from "motion/react";
import React from "react";
import { ImagesSlider } from "@/components/ui/images-slider";
import Link from "next/link";

const dishImages = [
  "/Gluway Menu photoshoot/Braised Angus Beef Cheek.png",
  "/Gluway Menu photoshoot/salmon verthe.png",
  "/Gluway Menu photoshoot/aussie benedict.png",
  "/Gluway Menu photoshoot/avocado toast.png",
  "/Gluway Menu photoshoot/Angus stack beef burger.png",
  "/Gluway Menu photoshoot/chicken and cheese qusadilla .png",
];

export function Hero() {
  return (
    <ImagesSlider 
      className="h-screen w-full" 
      images={dishImages} 
      autoplay={true} 
      overlayAlpha={0}
    >
      {/* This container now controls the absolute positioning */}
      <div className="flex flex-col justify-between h-full w-full px-8 pt-12 pb-24">
        
        {/* TOP: Brand Logo positioned like a Nav Bar */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col"
        >
          <Link href="/" className="inline-block">
            <h1 className="text-[#526744] text-4xl md:text-5xl font-serif tracking-tighter leading-none">
              Gluway
            </h1>
            <div className="flex items-center gap-2 mt-2">
              <div className="h-[1px] w-4 bg-[#93AF84]" />
              <span className="text-[#93AF84] uppercase text-[9px] font-bold tracking-[0.4em]">
                Abu Dhabi
              </span>
            </div>
          </Link>
        </motion.div>

        {/* BOTTOM: Just above the sticky bottom nav */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-col items-center"
        >
          <div className="bg-[#F5F1E1]/40 backdrop-blur-md px-6 py-2 rounded-full mb-4">
            <p className="text-[#526744] text-xs font-medium italic">
              "All taste. No gluten. No limits."
            </p>
          </div>
          
          <p className="text-[#526744]/40 uppercase text-[8px] tracking-[0.6em] font-bold animate-pulse">
            Scroll to Explore
          </p>
        </motion.div>

      </div>
    </ImagesSlider>
  );
}