import { groq } from "next-sanity";

export const homepageQuery = groq`
  *[_type == "homepage"][0] {
    eyebrow,
    headline,
    intro,
    primaryCta,
    secondaryCta,
    pillars,
    aboutEyebrow,
    aboutHeadline,
    aboutText,
    quote
  }
`;