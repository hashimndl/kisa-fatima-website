import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kisafatima.com"),
  title: {
    default: "Kisa Fatima",
    template: "%s | Kisa Fatima",
  },
  description:
    "Kisa Fatima is an operations, marketing and creator strategy professional building across AI systems, media, influencer ecosystems and global project environments.",
  keywords: [
    "Kisa Fatima",
    "creator strategy",
    "operations",
    "marketing strategy",
    "AI automation",
    "AI Founder Review",
    "influencer management",
    "creator economy",
    "Pakistan",
  ],
  authors: [{ name: "Kisa Fatima" }],
  creator: "Kisa Fatima",
  publisher: "Kisa Fatima",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kisafatima.com",
    siteName: "Kisa Fatima",
    title: "Kisa Fatima",
    description:
      "Operations, marketing, creator strategy, AI systems and media.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kisa Fatima",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kisa Fatima",
    description:
      "Operations, marketing, creator strategy, AI systems and media.",
    images: ["/images/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/images/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.svg",
    apple: "/images/favicon.png",
  },
  alternates: {
    canonical: "https://kisafatima.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${dmSans.variable} ${playfair.variable}`}>
        {children}
      </body>
    </html>
  );
}