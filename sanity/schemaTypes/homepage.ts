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
