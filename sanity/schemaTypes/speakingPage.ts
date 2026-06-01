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
