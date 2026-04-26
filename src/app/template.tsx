"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: [0.33, 1, 0.68, 1] // Buttery smooth ease-out-expo
      }}
    >
      {children}
    </motion.div>
  );
}
