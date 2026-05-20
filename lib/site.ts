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
  title: "Kisa Fatima — Strategic Visibility, PR & Executive Positioning",
  description:
    "Kisa Fatima helps founders, executives and innovative brands build authority through PR strategy, media narratives, thought leadership and strategic visibility.",
  domain: process.env.NEXT_PUBLIC_SITE_URL || "https://kisafatima.com",
  email: "kisahfatima@gmail.com",
  linkedin: "https://www.linkedin.com/in/kisafatima/",
  keywords: [
    "Kisa Fatima",
    "PR strategist",
    "executive positioning",
    "thought leadership",
    "personal branding",
    "founder visibility",
    "media strategy",
    "strategic communications",
    "global partnerships"
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

export const services: Array<{ icon: IconName; title: string; text: string }> = [
  {
    icon: "megaphone",
    title: "PR & Media Strategy",
    text:
      "Strategic media placements, founder-led narratives and expert commentary designed to build credibility, not noise."
  },
  {
    icon: "users",
    title: "Executive Positioning",
    text:
      "Positioning founders and leaders as trusted voices across business, AI, technology, sustainability and innovation."
  },
  {
    icon: "pen",
    title: "Thought Leadership",
    text:
      "Transforming complex expertise into sharp, resonant narratives that travel across industries and borders."
  },
  {
    icon: "handshake",
    title: "Partnerships & Growth",
    text:
      "Building strategic relationships that open new markets, strengthen authority and create measurable commercial impact."
  }
];

export const impact: Array<{ icon: IconName; value: string; label: string }> = [
  {
    icon: "globe",
    value: "10M+",
    label: "Campaign reach delivered in 15 days through executive and stakeholder coordination."
  },
  {
    icon: "chart",
    value: "$40K+",
    label: "Revenue generated in Q4 2025 through consolidated global sales strategy."
  },
  {
    icon: "trophy",
    value: "O-1 / EB-1",
    label: "Experience supporting evidence-backed extraordinary ability PR profiles."
  },
  {
    icon: "users",
    value: "50+",
    label: "High-profile business owners onboarded with strong client satisfaction."
  }
];

export const posts = [
  {
    slug: "visibility-without-narrative",
    title: "Why Visibility Without Narrative Fails",
    description:
      "Visibility is easy to chase. Authority requires a clear narrative, credible proof and consistent positioning.",
    date: "2026-05-01",
    readTime: "6 min read"
  },
  {
    slug: "executive-branding-ai",
    title: "The Future of Executive Branding in the AI Era",
    description:
      "How leaders can build trust and relevance as AI changes the way audiences evaluate expertise.",
    date: "2026-05-04",
    readTime: "5 min read"
  },
  {
    slug: "pr-is-no-longer-about-press",
    title: "PR Is No Longer About Press",
    description:
      "Modern PR is reputation architecture: a system of media, story, proof, distribution and long-term trust.",
    date: "2026-05-09",
    readTime: "4 min read"
  }
];

export const trustedNames = [
  "The Crimson PR",
  "echooo.ai",
  "Flint Global",
  "Google",
  "Bloomberg"
];
