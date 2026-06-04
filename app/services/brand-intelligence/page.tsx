import Link from "next/link";
import type { Metadata } from "next";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "Campaign Automation & Brand Intelligence",
  description:
    "Campaign automation, influencer workflow systems and brand intelligence for smarter creator partnerships."
};

export default function BrandIntelligenceService() {
  return (
    <main>
      <section className="mx-auto max-w-5xl section-pad">
        <p className="eyebrow mb-5">Service</p>
        <h1 className="font-serif text-5xl leading-tight tracking-[-0.04em] md:text-7xl">
          Campaign Automation & Brand Intelligence
        </h1>
        <p className="mt-8 max-w-3xl text-lg leading-8 text-black/70">
          Strong influencer campaigns need more than reach. They need the right story,
          workflow, creator alignment and data-backed campaign direction.
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {["Campaign workflow systems", "Creator communication structure", "Brand narrative and intelligence"].map((item) => (
            <div key={item} className="border border-black/10 bg-white/40 p-7">
              <Icon name="megaphone" className="mb-6 text-olive" size={34} />
              <h2 className="font-serif text-2xl">{item}</h2>
            </div>
          ))}
        </div>

        <div className="prose-brand mt-14 text-lg">
          <h2>What this solves</h2>
          <p>Campaigns often break down because brands lack clear workflows, creator briefs, approval processes and reporting structures. Automation helps reduce delays, confusion and missed expectations.</p>
          <h2>How Kisa helps</h2>
          <p>Kisa helps design campaign systems that connect creators, brands and objectives into a more efficient operating model.</p>
          <h2>Ideal for</h2>
          <p>Teams that want smoother campaign execution, better creator coordination and stronger strategic clarity.</p>
        </div>

        <Link href="/contact" className="mt-12 inline-flex items-center gap-3 bg-forest px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white transition hover:bg-olive">
          Discuss this service →
        </Link>
      </section>
    </main>
  );
}
