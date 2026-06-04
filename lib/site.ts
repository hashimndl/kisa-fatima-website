export type IconName =
  | "arrow"
  | "globe"
  | "chart"
  | "megaphone"
  | "pen"
  | "handshake"
  | "trophy"
  | "users"
  | "mail";

export const site = {
  name: "Kisa Fatima",
  title: "Kisa Fatima — AI-Powered Influencer Commerce & Brand Intelligence",
  description:
    "Kisa Fatima is building Pakistan's next-generation influencer commerce ecosystem through AI automation, strategic brand intelligence, campaign management and creator protection.",
  domain: process.env.NEXT_PUBLIC_SITE_URL || "https://kisafatima.com",
  email: "kisahfatima@gmail.com",
  linkedin: "https://www.linkedin.com/in/kisafatima/",
  keywords: [
    "Kisa Fatima",
    "Influencer Management Pakistan",
    "AI Influencer Marketing",
    "Creator Economy Pakistan",
    "Influencer Commerce",
    "Campaign Automation",
    "Influencer Matchmaking",
    "Brand Intelligence",
    "Creator Protection",
    "Influencer Ecosystem"
  ]
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Media", href: "/media" },
  { label: "Insights", href: "/insights" },
  { label: "Speaking", href: "/speaking" },
  { label: "Contact", href: "/contact" }
];

export const services: Array<{ icon: IconName; title: string; text: string; href: string }> = [
  {
    icon: "users",
    title: "Influencer Management Ecosystem",
    text:
      "A structured creator network built around transparency, performance, campaign clarity and long-term creator-brand relationships.",
    href: "/services/creator-economy"
  },
  {
    icon: "chart",
    title: "AI-Powered Influencer Matchmaking",
    text:
      "Using data, audience intelligence and automation to connect brands with the right creators at scale.",
    href: "/services/ai-influencer-management"
  },
  {
    icon: "megaphone",
    title: "Campaign Automation & Execution",
    text:
      "End-to-end campaign workflows, reporting systems and creator coordination powered by technology.",
    href: "/services/brand-intelligence"
  },
  {
    icon: "handshake",
    title: "Legal Protection & Contract Management",
    text:
      "Protecting brands and creators through contracts, compliance, legal consultation and transparent engagement structures.",
    href: "/services/creator-protection"
  }
];

export const impact: Array<{ icon: IconName; value: string; label: string }> = [
  {
    icon: "users",
    value: "1000+",
    label: "Influencers collaborated with across Pakistan."
  },
  {
    icon: "chart",
    value: "AI-Driven",
    label: "Automated influencer discovery and campaign workflows."
  },
  {
    icon: "handshake",
    value: "Protected",
    label: "Creator-brand partnerships supported by contracts and legal consultation."
  },
  {
    icon: "globe",
    value: "Pakistan",
    label: "Building the country's next-generation influencer commerce ecosystem."
  }
];

export const posts = [
  {
    slug: "future-of-influencer-commerce",
    title: "The Future of Influencer Commerce in Pakistan",
    description:
      "How automation, AI and creator infrastructure will reshape influencer marketing.",
    date: "2026-05-01",
    readTime: "6 min read"
  },
  {
    slug: "why-ai-matchmaking-matters",
    title: "Why AI-Powered Influencer Matchmaking Matters",
    description:
      "Moving beyond follower counts and toward intelligent creator-brand alignment.",
    date: "2026-05-04",
    readTime: "5 min read"
  },
  {
    slug: "creator-protection-economy",
    title: "Creator Protection Is The Missing Layer",
    description:
      "Why contracts, transparency and legal support are essential for a sustainable creator economy.",
    date: "2026-05-09",
    readTime: "4 min read"
  },
  {
    slug: "brand-partnerships",
    title: "What Brands Get Wrong About Influencer Partnerships",
    description:
      "Influencer campaigns work best when brands prioritize fit, clarity, workflow and long-term trust.",
    date: "2026-05-12",
    readTime: "5 min read"
  }
];

export const trustedNames = [
  "1000+ Influencers",
  "AI Automation",
  "Brand Intelligence",
  "Campaign Management",
  "Creator Protection"
];
