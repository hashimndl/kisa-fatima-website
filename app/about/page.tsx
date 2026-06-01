import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Kisa Fatima, creator economy strategist building Pakistan's next-generation influencer commerce ecosystem through AI automation, brand intelligence and creator protection."
};

export default function About() {
  return (
    <main>
      <section className="mx-auto max-w-5xl section-pad">
        <p className="eyebrow mb-5">About</p>

        <h1 className="font-serif text-5xl leading-tight tracking-[-0.04em] md:text-7xl">
          Building the future of influencer commerce in Pakistan.
        </h1>

        <div className="prose-brand mt-10 max-w-3xl text-lg">
          <p>
            Kisa Fatima has collaborated with more than 1000 influencers across
            Pakistan, building a next-generation influencer management ecosystem
            powered by AI automation, strategic brand intelligence and scalable
            campaign operations.
          </p>

          <p>
            Her mission is to transform the influencer industry by combining
            technology, creator management, legal protection and smart campaign
            execution into a single integrated system that benefits both brands
            and creators.
          </p>

          <p>
            From AI-powered influencer matchmaking and automated campaign
            workflows to contract management and legal consultation, Kisa helps
            organizations create transparent, efficient and measurable creator
            partnerships.
          </p>

          <p>
            Rather than simply managing influencer campaigns, she is focused on
            building infrastructure for the creator economy — where automation,
            trust, compliance and data-driven decision-making become the
            foundation of long-term growth.
          </p>

          <p>
            Her vision is clear: to position Pakistan as a leader in modern
            influencer commerce by creating systems that enable brands and
            creators to work together more intelligently, securely and at scale.
          </p>
        </div>
      </section>
    </main>
  );
}