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
    <section className="py-20 md:py-32 bg-white overflow-hidden border-y border-gray-50 select-none">
      <div className="relative flex items-center">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            duration: 150, // Slower, more premium feel
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex whitespace-nowrap gap-8 md:gap-16 items-center"
        >
          {words.map((word, i) => (
            <div key={i} className="flex items-center gap-8 md:gap-16">
              <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-black font-heading uppercase tracking-tighter transition-all duration-700
                text-red-600 lg:text-transparent lg:[-webkit-text-stroke:1px_rgba(220,38,38,0.3)] lg:hover:text-red-600 lg:hover:[-webkit-text-stroke:1px_transparent]">
                {word}
              </h2>
              {/* Technical Separator */}
              <div className="flex items-center gap-4 opacity-20">
                <div className="w-8 md:w-16 h-[1px] bg-red-600" />
                <div className="w-2 h-2 border border-red-600 rotate-45" />
                <div className="w-8 md:w-16 h-[1px] bg-red-600" />
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
