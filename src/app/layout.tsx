import { BottomNav } from "@/components/BottomNav";
import "./globals.css";
import SpotlightCursor from "@/components/ui/spotlight-cursor";

export const metadata = {
  title: "GLUWAY | Taste Feel Glow",
  description: "Abu Dhabi's Premium Dining Experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: 'dark' }}>
      {/* 1. h-screen + overflow-hidden: Locks the page to your MacBook screen size.
          2. flex-col: Allows us to stack the content and the nav.
      */}
      <body className="bg-black text-white antialiased h-screen overflow-hidden flex flex-col selection:bg-emerald-500/30">
        
        {/* 3. overflow-y-auto: Only this area scrolls. 
            The Hero and other sections live here.
        */}
        <main className="flex-1 relative z-0 overflow-y-auto overflow-x-hidden scroll-smooth custom-scrollbar">
          {children}
        </main>

        {/* 4. BottomNav is now outside the scroll area, 
            meaning it is physically impossible for it to be pushed off-screen.
        */}
        <BottomNav />

        <SpotlightCursor />
      </body>
    </html>
  );
}