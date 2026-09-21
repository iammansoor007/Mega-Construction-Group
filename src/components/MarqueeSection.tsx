"use client";

import { motion } from "framer-motion";
import { memo } from "react";

interface MarqueeSectionProps {
  text: string;
}

const MarqueeSection = memo(({ text }: MarqueeSectionProps) => {
  // Increased count for ultra-wide support
  const words = Array(20).fill(text);

  return (
    <section className="py-2.5 bg-red-600 overflow-hidden border-none select-none">
      <div className="relative flex items-center">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            duration: 120, // Premium slow speed
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex whitespace-nowrap gap-4 md:gap-8 items-center"
        >
          {words.map((word, i) => (
            <div key={i} className="flex items-center gap-4 md:gap-8">
              <h2 className="text-xs md:text-sm font-medium tracking-[0.25em] uppercase text-white hover:text-black transition-colors duration-300">
                {word}
              </h2>
              {/* Technical Separator */}
              <div className="flex items-center gap-2 opacity-50 text-white">
                <span>•</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
});

MarqueeSection.displayName = "MarqueeSection";

export default MarqueeSection;
