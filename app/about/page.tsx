import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About Kisa Fatima, a global strategist working across PR, media strategy, executive positioning, partnerships and thought leadership."
};

export default function About() {
  return (
    <main>
      <section className="mx-auto max-w-5xl section-pad">
        <p className="eyebrow mb-5">About</p>
        <h1 className="font-serif text-5xl leading-tight tracking-[-0.04em] md:text-7xl">
          A strategist and storyteller building visibility with substance.
        </h1>
        <div className="prose-brand mt-10 max-w-3xl text-lg">
          <p>
            Kisa Fatima works at the intersection of media, technology and human impact. Her work focuses on shaping brands through narrative intelligence, strategic visibility and meaningful partnerships.
          </p>
          <p>
            She helps founders, executives and high-growth teams translate complex expertise into clear stories that build credibility across industries and borders.
          </p>
          <p>
            Her approach prioritizes substance over noise and outcomes over optics — aligning communication with long-term goals instead of momentary attention.
          </p>
        </div>
      </section>
    </main>
  );
}
