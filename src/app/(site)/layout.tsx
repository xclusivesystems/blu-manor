import type { Metadata } from "next";
import { Libre_Baskerville, Source_Sans_3 } from "next/font/google";
import "../globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileCtaBar from "@/components/layout/MobileCtaBar";

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
  metadataBase: new URL("https://blumanor.org"),
  title: "Blu Manor | Second Chance Transitional Housing",
  description:
    "Blu Manor provides safe, felon-friendly transitional housing in the Tampa Bay area. We help individuals reenter the community with dignity through stable housing, employment support, and supervision compliance.",
  alternates: {
    canonical: "/",
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
        <Header />
        <main className="min-h-screen pt-[72px] pb-20 md:pb-0">{children}</main>
        <Footer />
        <MobileCtaBar />
      </body>
    </html>
  );
}
