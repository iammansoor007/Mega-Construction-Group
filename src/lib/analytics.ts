"use client";

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
    service,
    borough,
    urgency,
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
