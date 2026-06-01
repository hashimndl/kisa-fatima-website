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
