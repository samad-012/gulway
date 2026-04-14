"use client";
import { motion } from "motion/react";

const signatures = [
  {
    name: "Braised Angus Beef Cheek",
    category: "Main Course",
    image: "/Gluway Menu photoshoot/Braised Angus Beef Cheek.png",
  },
  {
    name: "Avocado Toast",
    category: "Breakfast",
    image: "/Gluway Menu photoshoot/avocado toast.png",
  },
  {
    name: "Angus Stack Burger",
    category: "Signature",
    image: "/Gluway Menu photoshoot/Angus stack beef burger.png",
  }
];

export function SignatureDishes() {
  return (
    <section className="py-32 px-6 md:px-20 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <span className="text-emerald-500 text-xs tracking-[0.3em] uppercase mb-4 block">Selection</span>
            <h2 className="text-5xl md:text-7xl font-serif text-white">Signature Plates</h2>
          </div>
          <p className="text-zinc-500 max-w-sm italic">
            A curated glimpse into our kitchen&apos;s most celebrated creations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {signatures.map((dish, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group cursor-none"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm mb-6 bg-zinc-900">
                <img 
                  src={dish.image} 
                  alt={dish.name}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <h3 className="text-white text-xl font-serif tracking-tight">{dish.name}</h3>
              <p className="text-emerald-500/60 text-xs uppercase tracking-widest mt-2">{dish.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}