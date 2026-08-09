import type { Metadata } from "next";
import { Libre_Baskerville, Source_Sans_3 } from "next/font/google";
import "../globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileCtaBar from "@/components/layout/MobileCtaBar";
import JsonLd from "@/components/seo/JsonLd";
import Analytics from "@/components/seo/Analytics";

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const sourceSans3 = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.blumanor.org"),
  title: "Blu Manor | Second Chance Transitional Housing",
  description:
    "Blu Manor provides safe, felon-friendly transitional housing in the Tampa Bay area. We help individuals reenter the community with dignity through stable housing, employment support, and supervision compliance.",
  alternates: {
    canonical: "https://www.blumanor.org/",
  },
  // The rebuild shipped with no OG tags at all, so every share of this site —
  // including the referral links partners and supervision officers pass around
  // — rendered as a bare URL with no card. Paths are relative so metadataBase
  // resolves them against the www canonical.
  openGraph: {
    type: "website",
    siteName: "Blu Manor",
    title: "Blu Manor | Second Chance Transitional Housing",
    description:
      "Safe, structured, felon-friendly transitional housing in the Tampa Bay area. Move-in ready rooms, all utilities included.",
    url: "https://www.blumanor.org/",
    images: [
      {
        url: "/img/og-image.png",
        width: 1200,
        height: 630,
        alt: "Blu Manor — Second Chance Transitional Housing, Tampa Bay, FL",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blu Manor | Second Chance Transitional Housing",
    description:
      "Safe, structured, felon-friendly transitional housing in the Tampa Bay area.",
    images: ["/img/og-image.png"],
  },
};

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${libreBaskerville.variable} ${sourceSans3.variable} antialiased`}
      >
        <JsonLd />
        <Analytics />
        <Header />
        <main className="min-h-screen pt-[72px] pb-20 md:pb-0">{children}</main>
        <Footer />
        <MobileCtaBar />
      </body>
    </html>
  );
}
