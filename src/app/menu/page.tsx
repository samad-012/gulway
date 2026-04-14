"use client";
import React from "react";
import { MenuScroll } from "@/components/sections/MenuScroll";
import { motion } from "motion/react";

// Data from your Breakfast.pdf
const fullMenu = {
  Breakfast: [
    { name: "Avocado Toast with Poached egg", price: 60 },
    { name: "Crepes with meat and sour cream", price: 41 },
    { name: "Aussie egg benedict", price: 44 },
    { name: "Mini pancake with fresh berries", price: 35 },
    { name: "Almond butter rice porriadge", price: 29 },
  ],
  "Main Course": [
    { name: "Classical beef stroganoff", price: 47 },
    { name: "Golden kiev style", price: 34 },
    { name: "Salmon verde", price: 78 },
    { name: "Braised Beef cheek duo", price: 50 },
    { name: "Gluway Signature beef burger", price: 55 },
  ],
  Appetizer: [
    { name: "Mushroom cappuccino Soup", price: 36 },
    { name: "Fire roasted bel-pepper bruschetta", price: 19 },
    { name: "Tomato tartar", price: 35 },
  ]
};

export default function MenuPage() {
  return (
    <main className="bg-black min-h-screen">
      {/* 1. Header Section */}
      <div className="pt-32 pb-10 px-6 text-center">
        <h1 className="text-6xl md:text-8xl font-serif text-white tracking-tighter">The Menu</h1>
        <div className="w-12 h-px bg-emerald-500 mx-auto mt-8 opacity-50" />
      </div>

      {/* 2. Visual Experience Section */}
      <MenuScroll />

      {/* 3. Detailed Price List Section */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        {Object.entries(fullMenu).map(([category, items]) => (
          <div key={category} className="mb-24">
            <h2 className="text-emerald-500 text-[10px] tracking-[0.4em] uppercase mb-12 border-b border-white/5 pb-4">
              {category}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10">
              {items.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex justify-between items-end group"
                >
                  <div className="border-b border-white/5 flex-1 mr-4 pb-1">
                    <span className="text-zinc-300 font-serif text-lg group-hover:text-white transition-colors">
                      {item.name}
                    </span>
                  </div>
                  <span className="text-zinc-500 italic text-sm font-light">
                    {item.price} <span className="text-[10px] not-italic ml-1">AED</span>
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Spacer for BottomNav */}
      <div className="h-32" />
    </main>
  );
}