"use client";
import { motion } from "motion/react";

export function BrandStory() {
  return (
    <section className="py-40 bg-zinc-950 relative overflow-hidden">
      {/* Subtle background glow to match the cursor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-white text-3xl md:text-5xl font-serif leading-tight mb-12"
        >
          &quot;We believe that true luxury is the harmony of 
          <span className="text-emerald-500 italic"> flavor </span> 
          and 
          <span className="text-emerald-500 italic"> wellbeing</span>.&quot;
        </motion.h2>
        <div className="mt-16 flex justify-center gap-12 text-[10px] tracking-[0.4em] text-zinc-600 uppercase">
          <span>Ethical Sourcing</span>
          <span>Celiac Safe</span>
          <span>Organic Roots</span>
        </div>
      </div>
    </section>
  );
}