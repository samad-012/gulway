import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Coffee, Utensils, Leaf, Flame } from "lucide-react";

const breakfastItems = [
  {
    title: "Almond Butter Porridge",
    description: "Slow-cooked oats with house-made almond butter and organic honey.",
    header: <img src="/Gluway Menu photoshoot/Almond butter rice porradge.png" className="h-full w-full object-cover rounded-xl" />,
    icon: <Leaf className="h-4 w-4 text-emerald-500" />,
  },
  {
    title: "Aussie Benedict",
    description: "A premium twist on the classic breakfast favorite.",
    header: <img src="/Gluway Menu photoshoot/aussie benedict.png" className="h-full w-full object-cover rounded-xl" />,
    icon: <Flame className="h-4 w-4 text-emerald-500" />,
  },
  // Add more items here...
];

export function MenuGrid() {
  return (
    <section className="py-20 px-6 bg-black">
      <h2 className="text-4xl font-serif text-white mb-12 text-center tracking-widest">BREAKFAST SELECTION</h2>
      <BentoGrid className="max-w-6xl mx-auto">
        {breakfastItems.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </section>
  );
}