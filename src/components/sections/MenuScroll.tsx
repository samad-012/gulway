"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";

const menuContent = [
  // --- BREAKFAST SECTION ---
  {
    title: "Avocado Toast with Poached Egg",
    description: "A signature start featuring creamy avocado and a perfectly runny yolk. (60 AED)",
    content: (
      <div className="h-full w-full flex items-center justify-center bg-zinc-900">
        <Image
          src="/Gluway Menu photoshoot/avocado toast.png"
          width={600}
          height={600}
          className="h-full w-full object-cover"
          alt="Avocado Toast"
        />
      </div>
    ),
  },
  {
    title: "Aussie Egg Benedict",
    description: "Classic favorite with a premium twist, served with high-quality protein. (44 AED)",
    content: (
      <div className="h-full w-full flex items-center justify-center bg-zinc-900">
        <Image
          src="/Gluway Menu photoshoot/aussie benedict.png"
          width={600}
          height={600}
          className="h-full w-full object-cover"
          alt="Aussie Benedict"
        />
      </div>
    ),
  },
  {
    title: "French Toast",
    description: "Served with caramelized pear and fresh berries for a sweet, refined morning. (61 AED)",
    content: (
      <div className="h-full w-full flex items-center justify-center bg-zinc-900">
        <Image
          src="/Gluway Menu photoshoot/french toast with caralmlized pear and berries .png"
          width={600}
          height={600}
          className="h-full w-full object-cover"
          alt="French Toast"
        />
      </div>
    ),
  },
  // --- MAIN COURSE SECTION ---
  {
    title: "Braised Beef Cheek Duo",
    description: "48-hour slow-cooked beef cheek, a cornerstone of our Main Course selection. (50 AED)",
    content: (
      <div className="h-full w-full flex items-center justify-center bg-zinc-900">
        <Image
          src="/Gluway Menu photoshoot/Braised Angus Beef Cheek.png"
          width={600}
          height={600}
          className="h-full w-full object-cover"
          alt="Braised Beef Cheek"
        />
      </div>
    ),
  },
  {
    title: "Salmon Verde",
    description: "Fresh salmon prepared with vibrant green herbs and signature seasoning. (78 AED)",
    content: (
      <div className="h-full w-full flex items-center justify-center bg-zinc-900">
        <Image
          src="/Gluway Menu photoshoot/salmon verthe.png"
          width={600}
          height={600}
          className="h-full w-full object-cover"
          alt="Salmon Verde"
        />
      </div>
    ),
  },
  {
    title: "Beef Stroganoff",
    description: "Classical beef stroganoff, a hearty and luxurious comfort dish. (47 AED)",
    content: (
      <div className="h-full w-full flex items-center justify-center bg-zinc-900">
        <Image
          src="/Gluway Menu photoshoot/beef stragonoff.png"
          width={600}
          height={600}
          className="h-full w-full object-cover"
          alt="Beef Stroganoff"
        />
      </div>
    ),
  }
];

export function MenuScroll() {
  return (
    <div className="w-full">
      <StickyScroll content={menuContent} />
    </div>
  );
}