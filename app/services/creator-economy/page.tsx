import Link from "next/link";
import type { Metadata } from "next";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "Influencer Management Ecosystem",
  description:
    "Build a structured influencer management ecosystem with creator segmentation, campaign clarity and scalable brand-creator relationships."
};

export default function CreatorEconomyService() {
  return (
    <main>
      <section className="mx-auto max-w-5xl section-pad">
        <p className="eyebrow mb-5">Service</p>
        <h1 className="font-serif text-5xl leading-tight tracking-[-0.04em] md:text-7xl">
          Influencer Management Ecosystem
        </h1>
        <p className="mt-8 max-w-3xl text-lg leading-8 text-black/70">
          Influencer marketing becomes more powerful when it is managed as an ecosystem,
          not a one-off campaign. Kisa helps structure creator networks around trust,
          transparency, performance and long-term brand value.
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {["Creator network structure", "Campaign clarity and workflows", "Long-term brand-creator relationships"].map((item) => (
            <div key={item} className="border border-black/10 bg-white/40 p-7">
              <Icon name="users" className="mb-6 text-olive" size={34} />
              <h2 className="font-serif text-2xl">{item}</h2>
            </div>
          ))}
        </div>

        <div className="prose-brand mt-14 text-lg">
          <h2>What this solves</h2>
          <p>Many influencer campaigns fail because they rely on disconnected creator lists, unclear deliverables and poor campaign communication. A proper ecosystem gives brands a repeatable way to identify, brief, coordinate and retain creators.</p>
          <h2>How Kisa helps</h2>
          <p>Kisa brings together creator knowledge, campaign structure and brand intelligence to build influencer systems that can scale beyond one campaign.</p>
          <h2>Ideal for</h2>
          <p>Brands, agencies and creator-led companies that want stronger influencer operations, clearer creator relationships and more consistent campaign outcomes.</p>
        </div>

        <Link href="/contact" className="mt-12 inline-flex items-center gap-3 bg-forest px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white transition hover:bg-olive">
          Discuss this service →
        </Link>
      </section>
    </main>
  );
}
