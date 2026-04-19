import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "../index.css";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

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
      <body className={`${inter.variable} ${outfit.variable} font-sans bg-white antialiased`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
