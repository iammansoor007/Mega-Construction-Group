"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

export const trackEvent = (eventName: string, params: Record<string, any> = {}) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
};

export const trackGenerateLead = (service: string, borough: string, urgency: string) => {
  trackEvent("generate_lead", {
    service: service || "General",
    borough: borough || "NYC",
    urgency: urgency || "Standard",
  });
};

export const trackPhoneClick = () => {
  trackEvent("phone_click");
};

export const trackEmailClick = () => {
  trackEvent("email_click");
};

export const trackEmergencyClick = () => {
  trackEvent("emergency_click");
};

/**
 * Client listener component to automatically attach event delegation listeners
 * for phone clicks, email clicks, and emergency clicks across all pages.
 */
export function AnalyticsListener() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest("a");
      if (!target) return;
      const href = target.getAttribute("href") || "";
      const text = (target.textContent || "").toLowerCase();
      const label = (target.getAttribute("aria-label") || "").toLowerCase();

      if (href.startsWith("tel:")) {
        trackPhoneClick();
        if (text.includes("emergency") || label.includes("emergency")) {
          trackEmergencyClick();
        }
      } else if (href.startsWith("mailto:")) {
        trackEmailClick();
      } else if (href.includes("emergency") || text.includes("emergency") || label.includes("emergency")) {
        trackEmergencyClick();
      }
    };

    document.addEventListener("click", handleClick, { capture: true });
    return () => document.removeEventListener("click", handleClick, { capture: true });
  }, []);

  return null;
}
