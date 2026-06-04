import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL("https://kisafatima.com"),
  title: "Kisa Fatima",
  description:
    "Building Pakistan's next-generation influencer commerce ecosystem.",
  icons: {
    icon: "/images/favicon.png",
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
  openGraph: {
    title: "Kisa Fatima — AI-Powered Influencer Commerce",
    description:
      "Building Pakistan's next-generation influencer commerce ecosystem through AI automation, brand intelligence and creator protection.",
    url: "https://kisafatima.com",
    siteName: "Kisa Fatima",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kisa Fatima — AI-Powered Influencer Commerce",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kisa Fatima — AI-Powered Influencer Commerce",
    description:
      "Building Pakistan's next-generation influencer commerce ecosystem through AI automation, brand intelligence and creator protection.",
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
