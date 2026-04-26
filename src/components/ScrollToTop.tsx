"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Force scroll to top on path change
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Use instant to ensure it doesn't fight with any smooth scroll CSS
    });
  }, [pathname]);

  return null;
}
