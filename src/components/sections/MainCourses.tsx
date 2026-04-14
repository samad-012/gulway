import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

const content = [
  {
    title: "Braised Angus Beef Cheek",
    description: "48-hour slow-cooked beef cheek, served with root vegetable purée. High protein, gluten-free, and designed for recovery.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <img src="/Gluway Menu photoshoot/Braised Angus Beef Cheek.png" className="h-full w-full object-cover" />
      </div>
    ),
  },
  {
    title: "Angus Stack Burger",
    description: "Premium grass-fed Angus beef, artisanal gluten-free bun, and organic greens. Luxury that fits your macros.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <img src="/Gluway Menu photoshoot/Angus stack beef burger.png" className="h-full w-full object-cover" />
      </div>
    ),
  },
];

export function MainCourses() {
  return (
    <div className="bg-black">
      <StickyScroll content={content} />
    </div>
  );
}