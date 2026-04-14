"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";

export function BottomNav() {
  const pathname = usePathname();
  const container = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  // Refs for the individual burger lines
  const line1 = useRef(null);
  const line2 = useRef(null);
  const line3 = useRef(null);

  useGSAP(() => {
    // Entrance animation for the whole dock
    gsap.from(container.current, {
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: "expo.out",
      delay: 1.8,
    });
  }, { scope: container });

  // GSAP animation for the Hamburger-to-X transition
  useGSAP(() => {
    if (isOpen) {
      gsap.to(line1.current, { y: 6, rotate: 45, duration: 0.3, ease: "power2.inOut" });
      gsap.to(line2.current, { opacity: 0, x: -10, duration: 0.2 });
      gsap.to(line3.current, { y: -6, rotate: -45, width: "24px", duration: 0.3, ease: "power2.inOut" });
    } else {
      gsap.to(line1.current, { y: 0, rotate: 0, duration: 0.3, ease: "power2.inOut" });
      gsap.to(line2.current, { opacity: 1, x: 0, duration: 0.3 });
      gsap.to(line3.current, { y: 0, rotate: 0, width: "12px", duration: 0.3, ease: "power2.inOut" });
    }
  }, [isOpen]);

  const onHover = (el: string) => {
    gsap.to(el, { y: -2, opacity: 0.7, duration: 0.3 });
  };

  const onLeave = (el: string) => {
    gsap.to(el, { y: 0, opacity: 1, duration: 0.3 });
  };

  return (
    /* FIX: Removed 'md:hidden' so it shows on laptops.
       Adjusted 'bottom-10' to 'bottom-8' for a more modern, floating feel.
    */
    <div 
      ref={container} 
      className="fixed bottom-8 left-0 right-0 z-[100] flex justify-center px-6 pointer-events-none"
    >
      <div className="flex items-center justify-between w-full max-w-[340px] bg-zinc-950/80 backdrop-blur-3xl border border-white/10 rounded-full p-2 shadow-2xl pointer-events-auto">
        
        {/* RESERVE */}
        <Link 
          href="/reserve"
          onMouseEnter={() => onHover(".btn-reserve")}
          onMouseLeave={() => onLeave(".btn-reserve")}
          className="flex-1 text-center group"
        >
          <span className={`btn-reserve inline-block text-[10px] uppercase tracking-[0.3em] font-bold transition-colors ${pathname === '/reserve' ? 'text-emerald-500' : 'text-white group-hover:text-emerald-400'}`}>
            Reserve
          </span>
        </Link>

        {/* CENTER ACTION: ANIMATED BURGER */}
        <Sheet onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button className="relative w-14 h-14 bg-white rounded-full flex flex-col items-center justify-center overflow-hidden active:scale-95 hover:scale-105 transition-transform duration-300">
              <div ref={line1} className="w-6 h-[1.5px] bg-black mb-[4.5px]" />
              <div ref={line2} className="w-6 h-[1.5px] bg-black mb-[4.5px]" />
              <div ref={line3} className="w-3 h-[1.5px] bg-black" />
            </button>
          </SheetTrigger>
          <SheetContent side="bottom" className="bg-zinc-950 border-white/10 rounded-t-[40px] h-[85vh] px-10">
            <SheetHeader>
              <SheetTitle className="text-white font-serif text-3xl tracking-[0.5em] text-center mt-8 uppercase">GLUWAY</SheetTitle>
              {/* Accessibility Requirement */}
              <p className="sr-only">Main Navigation Menu</p>
            </SheetHeader>
            <nav className="flex flex-col gap-10 mt-16 items-center">
              <Link href="/" onClick={() => setIsOpen(false)} className="text-2xl tracking-[0.2em] text-zinc-400 hover:text-white transition-colors">HOME</Link>
              <Link href="/about" onClick={() => setIsOpen(false)} className="text-2xl tracking-[0.2em] text-zinc-400 hover:text-white transition-colors">OUR STORY</Link>
              <Link href="/menu" onClick={() => setIsOpen(false)} className="text-2xl tracking-[0.2em] text-zinc-400 hover:text-white transition-colors">MENU</Link>
              <Link href="/contact" onClick={() => setIsOpen(false)} className="text-2xl tracking-[0.2em] text-zinc-400 hover:text-white transition-colors">CONTACT</Link>
            </nav>
          </SheetContent>
        </Sheet>

        {/* MENU */}
        <Link 
          href="/menu"
          onMouseEnter={() => onHover(".btn-menu")}
          onMouseLeave={() => onLeave(".btn-menu")}
          className="flex-1 text-center group"
        >
          <span className={`btn-menu inline-block text-[10px] uppercase tracking-[0.3em] font-bold transition-colors ${pathname === '/menu' ? 'text-emerald-500' : 'text-white group-hover:text-emerald-400'}`}>
            Menu
          </span>
        </Link>

      </div>
    </div>
  );
}