"use client";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import React, { useEffect, useState } from "react";

export const ImagesSlider = ({
  images,
  children,
  className,
  autoplay = true,
  overlayAlpha = 0, // Default to 0 as per your preference
}: {
  images: string[];
  children: React.ReactNode;
  className?: string;
  autoplay?: boolean;
  overlayAlpha?: number;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<string[]>([]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1 === images.length ? 0 : prev + 1));
  };

  useEffect(() => {
    const loadPromises = images.map((image) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = image;
        img.onload = () => resolve(image);
      });
    });
    Promise.all(loadPromises).then((results) => setLoadedImages(results as string[]));
  }, [images]);

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const areImagesLoaded = loadedImages.length > 0;

  return (
    // REMOVED: items-center justify-center
    <div className={cn("overflow-hidden h-full w-full relative flex bg-[#F5F1E1]", className)}>
      {areImagesLoaded && (
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={loadedImages[currentIndex]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>
      )}
      
      <div 
        className="absolute inset-0 z-10 transition-colors duration-500" 
        style={{ backgroundColor: `rgba(0, 0, 0, ${overlayAlpha})` }}
      />
      
      {/* ADDED: absolute inset-0 to allow internal positioning */}
      {areImagesLoaded && (
        <div className="z-50 relative w-full h-full">
          {children}
        </div>
      )}
    </div>
  );
};