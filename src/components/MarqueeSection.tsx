"use client";

import { motion } from "framer-motion";
import { memo } from "react";

interface MarqueeSectionProps {
  text: string;
}

const MarqueeSection = memo(({ text }: MarqueeSectionProps) => {
  // Increased count for ultra-wide 4K/8K support
  const words = Array(20).fill(text);

  return (
    <section className="py-20 md:py-32 bg-white overflow-hidden border-y border-gray-50 select-none">
      <div className="relative flex items-center">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            duration: 900, // Slower, more premium feel
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex whitespace-nowrap gap-16 md:gap-32"
        >
          {/* Loop Set 1 */}
          {words.map((word, i) => (
            <div
              key={`first-${i}`}
              className="text-[10vw] md:text-[12vmax] font-black font-heading uppercase tracking-tighter leading-[0.8] transition-all duration-700 cursor-default opacity-20 hover:opacity-100"
              style={{
                WebkitTextStroke: "2px #dc2626",
                color: "transparent",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#dc2626";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "transparent";
              }}
            >
              {word}
            </div>
          ))}
          {/* Loop Set 2 */}
          {words.map((word, i) => (
            <div
              key={`second-${i}`}
              className="text-[10vw] md:text-[12vmax] font-black font-heading uppercase tracking-tighter leading-[0.8] transition-all duration-700 cursor-default opacity-20 hover:opacity-100"
              style={{
                WebkitTextStroke: "2px #dc2626",
                color: "transparent",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#dc2626";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "transparent";
              }}
            >
              {word}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
});

MarqueeSection.displayName = "MarqueeSection";

export default MarqueeSection;
