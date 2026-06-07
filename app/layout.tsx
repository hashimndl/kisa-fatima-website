import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", weight: ["700", "900"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://kisafatima.com"),
  title: "Kisa Fatima — Operations, Marketing & Creator Strategy",
  description: "Kisa Fatima turns chaos into strategy across operations, marketing, AI, creator management, and strategic writing.",
  icons: { icon: "/images/favicon.png", shortcut: "/images/favicon.png", apple: "/images/favicon.png" },
  openGraph: {
    title: "Kisa Fatima — Operations, Marketing & Creator Strategy",
    description: "Where chaos becomes a masterpiece.",
    url: "https://kisafatima.com",
    siteName: "Kisa Fatima",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Kisa Fatima" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", images: ["/images/og-image.png"] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" data-scroll-behavior="smooth"><body className={`${dmSans.variable} ${playfair.variable}`}>{children}</body></html>;
}
