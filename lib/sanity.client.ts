import { createClient } from "next-sanity";

export const sanityClient = createClient({
  projectId: "h63ehwon",
  dataset: "production",
  apiVersion: "2025-01-01",
  useCdn: true
});