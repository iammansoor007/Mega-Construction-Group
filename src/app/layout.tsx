import type { Metadata } from "next";
import "../index.css";
import { Providers } from "./providers";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.megacontractingnyc.com"),
  title: {
    default: "General Contractor NYC | Mega Contracting NY Group",
    template: "%s | Mega Contracting NY Group",
  },
  description: "Mega Contracting NY Group is NYC's #1 licensed general contractor. Roofing, facade restoration, brick pointing, DOB/DOT violation removal, sidewalk repair, waterproofing & more across all 5 boroughs. Free estimates.",
  keywords: [
    "General Contractor NYC",
    "General Contractor New York",
    "Facade Restoration NYC",
    "Roof Leak Repair NYC",
    "Flat Roofing NYC",
    "Chimney Repair NYC",
    "Fire Escape Painting NYC",
    "Parapet Wall Repair NYC",
    "Stucco Repair NYC",
    "EIFS Contractor NYC",
    "DOB Violation Removal NYC",
    "DOT Violation Removal NYC",
    "Sidewalk Repair NYC",
    "Building Safety Assessment NYC",
    "Brick Pointing NYC",
    "Foundation Repair NYC",
    "Waterproofing Contractor NYC",
    "Mega Construction NYC",
    "Construction Services NYC",
    "Roofing Contractor Brooklyn",
    "Commercial Remodeling Manhattan",
    "DOT Sidewalk Violation Removal",
  ],
  openGraph: {
    siteName: "Mega Construction NYC",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@megacontractingny",
    creator: "@megacontractingny",
  },
  icons: {
    icon: "/favicon.png",
    apple: [{ url: "/apple-touch-icon.png" }],
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
