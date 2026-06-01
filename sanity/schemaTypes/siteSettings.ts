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
