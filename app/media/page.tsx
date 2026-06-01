import type { Metadata } from "next";
import Icon from "@/components/Icon";
import { impact, trustedNames } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impact",
  description:
    "Kisa Fatima's impact across Pakistan's influencer commerce ecosystem, including 1000+ influencer collaborations, AI automation, brand intelligence and creator protection."
};

export default function Media() {
  return (
    <main>
      <section className="mx-auto max-w-7xl section-pad">
        <p className="eyebrow mb-5">Impact</p>

        <h1 className="max-w-4xl font-serif text-5xl leading-tight tracking-[-0.04em] md:text-7xl">
          Scaling influencer commerce through automation, intelligence and trust.
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-black/70">
          Kisa is building infrastructure for Pakistan&apos;s creator economy —
          connecting brands and influencers through AI-powered matchmaking,
          automated campaign systems, legal protection and strategic brand
          intelligence.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {impact.map((item) => (
            <article
              key={item.value}
              className="border-l border-black/15 pl-7"
            >
              <Icon
                name={item.icon}
                className="mb-6 text-olive"
                size={38}
              />
              <p className="font-serif text-4xl">{item.value}</p>
              <p className="mt-4 text-sm leading-7 text-black/65">
                {item.label}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-stone">
        <div className="mx-auto max-w-7xl section-pad">
          <p className="eyebrow mb-5">Ecosystem Pillars</p>

          <div className="grid gap-6 font-serif text-3xl md:grid-cols-5">
            {trustedNames.map((name) => (
              <span key={name}>{name}</span>
            ))}
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <article className="border border-black/10 bg-white/35 p-8">
              <h2 className="font-serif text-3xl">For Brands</h2>
              <p className="mt-5 leading-8 text-black/70">
                Smarter influencer selection, campaign visibility and workflow
                automation designed to improve efficiency, relevance and
                measurable outcomes.
              </p>
            </article>

            <article className="border border-black/10 bg-white/35 p-8">
              <h2 className="font-serif text-3xl">For Creators</h2>
              <p className="mt-5 leading-8 text-black/70">
                A more transparent ecosystem where influencers can work with
                clarity, protection, contract support and long-term partnership
                opportunities.
              </p>
            </article>

            <article className="border border-black/10 bg-white/35 p-8">
              <h2 className="font-serif text-3xl">For the Market</h2>
              <p className="mt-5 leading-8 text-black/70">
                A next-generation model for influencer commerce in Pakistan,
                powered by data, automation, brand intelligence and legal
                infrastructure.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}