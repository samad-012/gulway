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
    <main className="bg-[#F5F1E1] min-h-screen">
      {/* 1. Header Section */}
      <div className="pt-32 pb-10 px-6 text-center">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[#93AF84] uppercase text-[10px] tracking-[0.5em] font-bold mb-4 block"
        >
          Curated Flavors
        </motion.span>
        <h1 className="text-7xl md:text-9xl font-serif text-[#526744] tracking-tighter">
          The Menu
        </h1>
        <div className="w-16 h-[1px] bg-[#526744] mx-auto mt-8 opacity-20" />
      </div>

      {/* 2. Visual Experience Section (Ensure images in MenuScroll aren't blurred/covered) */}
      <div className="py-10">
        <MenuScroll />
      </div>

      {/* 3. Detailed Price List Section */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        {Object.entries(fullMenu).map(([category, items]) => (
          <div key={category} className="mb-24">
            <div className="flex items-center gap-4 mb-12">
               <h2 className="text-[#526744] text-[11px] tracking-[0.5em] uppercase font-bold whitespace-nowrap">
                {category}
              </h2>
              <div className="h-[1px] w-full bg-[#526744]/10" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
              {items.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex justify-between items-baseline group"
                >
                  <div className="flex flex-col gap-1 border-b border-[#526744]/10 flex-1 mr-6 pb-2">
                    <span className="text-[#526744] font-serif text-xl group-hover:text-[#93AF84] transition-colors duration-300">
                      {item.name}
                    </span>
                    <span className="text-[10px] text-[#526744]/50 uppercase tracking-widest">
                      Gluten Free · Premium
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-[#526744] font-medium text-lg">
                      {item.price}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Brand Philosophy Footer Note */}
      <div className="pb-20 text-center px-6">
        <p className="text-[#526744]/40 italic font-serif text-lg">
          "Where health meets haute cuisine."
        </p>
      </div>

      {/* Spacer for BottomNav */}
      <div className="h-32" />
    </main>
  );
}