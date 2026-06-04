import Link from "next/link";
import type { Metadata } from "next";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "AI-Powered Influencer Matchmaking",
  description:
    "AI-powered influencer matchmaking using audience intelligence, brand fit and automation to improve campaign decision-making."
};

export default function AIInfluencerManagementService() {
  return (
    <main>
      <section className="mx-auto max-w-5xl section-pad">
        <p className="eyebrow mb-5">Service</p>
        <h1 className="font-serif text-5xl leading-tight tracking-[-0.04em] md:text-7xl">
          AI-Powered Influencer Matchmaking
        </h1>
        <p className="mt-8 max-w-3xl text-lg leading-8 text-black/70">
          The right creator is not always the one with the largest audience.
          Kisa’s approach uses AI automation, creator intelligence and strategic brand fit
          to help campaigns make smarter influencer decisions.
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {["Creator discovery signals", "Audience and brand-fit analysis", "Automated campaign coordination"].map((item) => (
            <div key={item} className="border border-black/10 bg-white/40 p-7">
              <Icon name="chart" className="mb-6 text-olive" size={34} />
              <h2 className="font-serif text-2xl">{item}</h2>
            </div>
          ))}
        </div>

        <div className="prose-brand mt-14 text-lg">
          <h2>What this solves</h2>
          <p>Follower count alone does not tell brands whether a creator is relevant, trusted or aligned with a campaign. AI-assisted workflows help reduce guesswork and improve creator selection.</p>
          <h2>How Kisa helps</h2>
          <p>Kisa helps brands identify the right creators, streamline campaign operations and build smarter systems for matching influence with actual business goals.</p>
          <h2>Ideal for</h2>
          <p>Brands that want to scale influencer campaigns without losing relevance, quality control or campaign accountability.</p>
        </div>

        <Link href="/contact" className="mt-12 inline-flex items-center gap-3 bg-forest px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white transition hover:bg-olive">
          Discuss this service →
        </Link>
      </section>
    </main>
  );
}
