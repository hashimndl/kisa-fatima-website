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
