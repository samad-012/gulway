"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";

const menuContent = [
  {
    title: "Avocado Toast",
    description: "A signature start featuring creamy avocado and a perfectly runny yolk. 100% Gluten-free.",
    content: (
      <div className="h-full w-full flex items-center justify-center bg-[#F5F1E1]">
        <Image
          src="/Gluway Menu photoshoot/avocado toast.png"
          width={600}
          height={600}
          className="h-full w-full object-cover rounded-2xl shadow-2xl"
          alt="Avocado Toast"
        />
      </div>
    ),
  },
  {
    title: "Aussie Egg Benedict",
    description: "Classic favorite with a premium twist, served with high-quality protein and signature hollandaise.",
    content: (
      <div className="h-full w-full flex items-center justify-center bg-[#F5F1E1]">
        <Image
          src="/Gluway Menu photoshoot/aussie benedict.png"
          width={600}
          height={600}
          className="h-full w-full object-cover rounded-2xl shadow-2xl"
          alt="Aussie Benedict"
        />
      </div>
    ),
  },
  {
    title: "Braised Beef Cheek Duo",
    description: "48-hour slow-cooked Angus beef cheek, a cornerstone of our Main Course selection.",
    content: (
      <div className="h-full w-full flex items-center justify-center bg-[#F5F1E1]">
        <Image
          src="/Gluway Menu photoshoot/Braised Angus Beef Cheek.png"
          width={600}
          height={600}
          className="h-full w-full object-cover rounded-2xl shadow-2xl"
          alt="Braised Beef Cheek"
        />
      </div>
    ),
  },
  {
    title: "Salmon Verde",
    description: "Fresh salmon prepared with vibrant green herbs. Taste the glow of Mediterranean freshness.",
    content: (
      <div className="h-full w-full flex items-center justify-center bg-[#F5F1E1]">
        <Image
          src="/Gluway Menu photoshoot/salmon verthe.png"
          width={600}
          height={600}
          className="h-full w-full object-cover rounded-2xl shadow-2xl"
          alt="Salmon Verde"
        />
      </div>
    ),
  }
];

export function MenuScroll() {
  return (
    <div className="w-full bg-[#F5F1E1]">
      <StickyScroll content={menuContent} contentClassName="bg-[#F5F1E1]" />
    </div>
  );
}