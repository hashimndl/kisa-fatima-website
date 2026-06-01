@'
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemaTypes";

export default defineConfig({
  name: "kisa_fatima_cms",
  title: "Kisa Fatima CMS",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "h63ehwon",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  basePath: "/studio",
  plugins: [structureTool(), visionTool()],
  schema: { types: schemaTypes }
});
'@ | Set-Content sanity.config.ts

@'
import { homepage } from "./homepage";
import { service } from "./service";
import { impactMetric } from "./impactMetric";
import { post } from "./post";
import { speakingPage } from "./speakingPage";
import { siteSettings } from "./siteSettings";

export const schemaTypes = [
  siteSettings,
  homepage,
  service,
  impactMetric,
  post,
  speakingPage
];
'@ | Set-Content sanity\schemaTypes\index.ts

@'
import { defineField, defineType } from "sanity";

export const homepage = defineType({
  name: "homepage",
  title: "Homepage",
  type: "document",
  fields: [
    defineField({ name: "eyebrow", title: "Hero Eyebrow", type: "string" }),
    defineField({ name: "headline", title: "Hero Headline", type: "text" }),
    defineField({ name: "intro", title: "Hero Intro", type: "text" }),
    defineField({ name: "primaryCta", title: "Primary CTA", type: "string" }),
    defineField({ name: "secondaryCta", title: "Secondary CTA", type: "string" }),
    defineField({ name: "pillars", title: "Ecosystem Pillars", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "aboutEyebrow", title: "About Eyebrow", type: "string" }),
    defineField({ name: "aboutHeadline", title: "About Headline", type: "text" }),
    defineField({ name: "aboutText", title: "About Text", type: "text" }),
    defineField({ name: "quote", title: "Feature Quote", type: "text" })
  ]
});
'@ | Set-Content sanity\schemaTypes\homepage.ts

@'
import { defineField, defineType } from "sanity";

export const service = defineType({
  name: "service",
  title: "Services",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "text", title: "Description", type: "text" }),
    defineField({
      name: "icon",
      title: "Icon",
      type: "string",
      options: {
        list: ["users", "chart", "megaphone", "handshake", "globe", "pen", "trophy"]
      }
    }),
    defineField({ name: "order", title: "Order", type: "number" })
  ]
});
'@ | Set-Content sanity\schemaTypes\service.ts

@'
import { defineField, defineType } from "sanity";

export const impactMetric = defineType({
  name: "impactMetric",
  title: "Impact Metrics",
  type: "document",
  fields: [
    defineField({ name: "value", title: "Value", type: "string" }),
    defineField({ name: "label", title: "Label", type: "text" }),
    defineField({
      name: "icon",
      title: "Icon",
      type: "string",
      options: {
        list: ["users", "chart", "handshake", "globe", "megaphone", "trophy"]
      }
    }),
    defineField({ name: "order", title: "Order", type: "number" })
  ]
});
'@ | Set-Content sanity\schemaTypes\impactMetric.ts

@'
import { defineField, defineType } from "sanity";

export const post = defineType({
  name: "post",
  title: "Insights",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 }
    }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({ name: "date", title: "Publish Date", type: "date" }),
    defineField({ name: "readTime", title: "Read Time", type: "string" }),
    defineField({
      name: "body",
      title: "Article Body",
      type: "array",
      of: [{ type: "block" }]
    })
  ]
});
'@ | Set-Content sanity\schemaTypes\post.ts

@'
import { defineField, defineType } from "sanity";

export const speakingPage = defineType({
  name: "speakingPage",
  title: "Speaking Page",
  type: "document",
  fields: [
    defineField({ name: "headline", title: "Headline", type: "text" }),
    defineField({ name: "intro", title: "Intro", type: "text" }),
    defineField({ name: "cta", title: "CTA Text", type: "string" })
  ]
});
'@ | Set-Content sanity\schemaTypes\speakingPage.ts

@'
import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "title", title: "SEO Title", type: "string" }),
    defineField({ name: "description", title: "SEO Description", type: "text" }),
    defineField({ name: "email", title: "Contact Email", type: "string" }),
    defineField({ name: "linkedin", title: "LinkedIn URL", type: "url" }),
    defineField({ name: "keywords", title: "SEO Keywords", type: "array", of: [{ type: "string" }] })
  ]
});
'@ | Set-Content sanity\schemaTypes\siteSettings.ts

@'
"use client";

import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config";

export const dynamic = "force-static";

export default function StudioPage() {
  return <NextStudio config={config} />;
}
'@ | Set-Content "app\studio\[[...tool]]\page.tsx"