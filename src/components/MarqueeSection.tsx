"use client";

import { motion } from "framer-motion";
import { memo } from "react";

interface MarqueeSectionProps {
  text: string;
}

const MarqueeSection = memo(({ text }: MarqueeSectionProps) => {
  const words = Array(10).fill(text);

  return (
    <section className="py-10 bg-white overflow-hidden border-y border-gray-50 select-none">
      <div className="flex whitespace-nowrap overflow-hidden">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-12 md:gap-20 pr-12 md:pr-20"
        >
          {words.map((word, i) => (
            <div
              key={i}
              className="text-6xl md:text-[10rem] font-bold font-heading uppercase tracking-tighter transition-all duration-700 cursor-default"
              style={{
                WebkitTextStroke: "1px #dc2626",
                color: "transparent",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#dc2626";
                (e.currentTarget.style as any).webkitTextStroke = "1px #dc2626";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "transparent";
                (e.currentTarget.style as any).webkitTextStroke = "1px #dc2626";
              }}
            >
              {word}
            </div>
          ))}
        </motion.div>
        
        {/* Duplicate for seamless loop */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-12 md:gap-20 pr-12 md:pr-20"
          aria-hidden="true"
        >
          {words.map((word, i) => (
            <div
              key={i}
              className="text-6xl md:text-[10rem] font-bold font-heading uppercase tracking-tighter transition-all duration-700 cursor-default"
              style={{
                WebkitTextStroke: "1px #dc2626",
                color: "transparent",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#dc2626";
                (e.currentTarget.style as any).webkitTextStroke = "1px #dc2626";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "transparent";
                (e.currentTarget.style as any).webkitTextStroke = "1px #dc2626";
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
