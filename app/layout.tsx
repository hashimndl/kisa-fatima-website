import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: site.title,
    template: "%s | Kisa Fatima"
  },
  description: site.description,
  keywords: site.keywords,
  authors: [{ name: "Kisa Fatima" }],
  creator: "Kisa Fatima",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.domain,
    siteName: "Kisa Fatima",
    title: site.title,
    description: site.description,
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "Kisa Fatima" }]
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: ["/og-image.svg"]
  }
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
