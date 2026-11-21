import type { Metadata } from "next";
import Script from "next/script";
import "../index.css";
import { Providers } from "./providers";
import ScrollToTop from "@/components/ScrollToTop";
import MobileStickyBar from "@/components/MobileStickyBar";
import { AnalyticsListener } from "@/lib/analytics";
import { localBusinessSchema } from "@/lib/schema";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.megacontractingnyc.com"),
  title: {
    default: "General Contractor NYC | Mega Contracting NY Group",
    template: "%s | Mega Contracting NY Group",
  },
  description: "Mega Contracting NY Group is NYC's licensed general contractor. Roofing, facade restoration, brick pointing, DOB/DOT violation removal, sidewalk repair, waterproofing & more across all 5 boroughs. Free estimates.",

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
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="font-sans bg-white antialiased">
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        )}
        <AnalyticsListener />
        <Providers>
          <ScrollToTop />
          {children}
          <MobileStickyBar />
        </Providers>
      </body>
    </html>
  );
}
