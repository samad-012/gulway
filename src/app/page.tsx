"use client";
import { useState } from "react";
import { Hero } from "@/components/hero";
import { Preloader } from "@/components/preloader";
import { SignatureDishes } from "@/components/sections/signature-dishes";
import { BrandStory } from "@/components/sections/brand-story";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <main className="bg-black">
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      
      <div className={loading ? "invisible" : "visible"}>
        <Hero />
        
        {/* New sections to replace the empty placeholder */}
        <SignatureDishes />
        <BrandStory />
        
        {/* Footer spacer */}
        <div className="h-[20vh] bg-black" />
      </div>
    </main>
  );
}