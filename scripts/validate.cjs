const fs = require("fs");
const path = require("path");

const required = [
  "package.json",
  "next.config.mjs",
  "postcss.config.mjs",
  "tsconfig.json",
  "eslint.config.mjs",
  "app/layout.tsx",
  "app/page.tsx",
  "app/about/page.tsx",
  "app/services/page.tsx",
  "app/media/page.tsx",
  "app/insights/page.tsx",
  "app/speaking/page.tsx",
  "app/contact/page.tsx",
  "app/api/contact/route.ts",
  "app/api/newsletter/route.ts",
  "components/Header.tsx",
  "components/Footer.tsx",
  "components/Hero.tsx",
  "components/Icon.tsx",
  "components/ContactForm.tsx",
  "components/NewsletterForm.tsx",
  "components/Analytics.tsx",
  "lib/site.ts",
  "public/og-image.svg",
  "public/images/kisa-hero.svg",
  "public/images/kisa-speaking.svg"
];

const missing = required.filter((file) => !fs.existsSync(path.join(process.cwd(), file)));

if (missing.length) {
  console.error("Missing required files:");
  for (const file of missing) console.error(`- ${file}`);
  process.exit(1);
}

console.log("Validation passed. All required project files exist.");
