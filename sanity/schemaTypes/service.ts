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
