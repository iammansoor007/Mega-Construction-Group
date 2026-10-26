import type { Metadata } from "next";
import "../index.css";
import { Providers } from "./providers";
import ScrollToTop from "@/components/ScrollToTop";
import { localBusinessSchema } from "@/lib/schema";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.megacontractingnyc.com"),
  title: {
    default: "General Contractor NYC | Licensed Construction Company",
    template: "%s | Mega Contracting NY Group",
  },
  description: "Mega Contracting NY Group is NYC's #1 licensed general contractor. Roofing, facade restoration, brick pointing, DOB/DOT violation removal, sidewalk repair, waterproofing & more across all 5 boroughs. Free estimates.",

  openGraph: {
    siteName: "Mega Contracting NY Group",
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="font-sans bg-white antialiased">
        <Providers>
          <ScrollToTop />
          {children}
        </Providers>
      </body>
    </html>
  );
}
