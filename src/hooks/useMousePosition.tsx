import React, { createContext, useContext, useEffect } from "react";
import { useMotionValue, useSpring, MotionValue } from "framer-motion";

interface MouseContextType {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  springX: MotionValue<number>;
  springY: MotionValue<number>;
}

const MouseContext = createContext<MouseContextType | null>(null);

export const MouseProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <MouseContext.Provider value={{ mouseX, mouseY, springX, springY }}>
      {children}
    </MouseContext.Provider>
  );
};

export const useMousePosition = () => {
  const context = useContext(MouseContext);
  if (!context) {
    throw new Error("useMousePosition must be used within a MouseProvider");
  }
  return context;
};
