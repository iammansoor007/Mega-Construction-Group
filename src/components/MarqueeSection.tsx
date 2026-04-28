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
    <section className="py-12 md:py-32 bg-white overflow-hidden border-y border-gray-50 select-none">
      <div className="relative flex items-center">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex whitespace-nowrap items-center"
        >
          {/* Loop Set 1 */}
          {words.map((word, i) => (
            <div key={`first-${i}`} className="flex items-center">
              <div
                className="text-6xl xs:text-7xl md:text-[12vmax] font-black font-heading uppercase tracking-tighter leading-[0.8] transition-all duration-700 cursor-default lg:text-transparent lg:opacity-20 lg:hover:opacity-100 lg:hover:text-red-600 text-red-600 opacity-100"
                style={{
                  WebkitTextStroke: "1px #dc2626",
                }}
              >
                {word}
              </div>
              {/* Decorative Separator */}
              <div className="mx-6 md:mx-16 w-3 h-3 md:w-8 md:h-8 bg-red-600 rotate-45 opacity-20" />
            </div>
          ))}
          {/* Loop Set 2 */}
          {words.map((word, i) => (
            <div key={`second-${i}`} className="flex items-center">
              <div
                className="text-6xl xs:text-7xl md:text-[12vmax] font-black font-heading uppercase tracking-tighter leading-[0.8] transition-all duration-700 cursor-default lg:text-transparent lg:opacity-20 lg:hover:opacity-100 lg:hover:text-red-600 text-red-600 opacity-100"
                style={{
                  WebkitTextStroke: "1px #dc2626",
                }}
              >
                {word}
              </div>
              {/* Decorative Separator */}
              <div className="mx-6 md:mx-16 w-3 h-3 md:w-8 md:h-8 bg-red-600 rotate-45 opacity-20" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
});

MarqueeSection.displayName = "MarqueeSection";

export default MarqueeSection;
