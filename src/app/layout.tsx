import type { Metadata } from "next";
import "../index.css";
import { Providers } from "./providers";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Mega Construction NY Group | Engineering Excellence",
  description: "Premier Construction and Roofing services in NY. Excellence in general contracting, historic restoration, and custom home building.",
  icons: {
    icon: "/favicon.png",
    apple: [
      { url: "/apple-touch-icon.png" },
    ],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans bg-white antialiased">
        <Providers>
          <ScrollToTop />
          {children}
        </Providers>
      </body>
    </html>
  );
}
