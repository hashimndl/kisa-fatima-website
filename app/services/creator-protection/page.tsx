import Link from "next/link";
import type { Metadata } from "next";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "Legal Protection & Contract Management",
  description:
    "Creator protection, contract clarity, legal consultation and transparent influencer partnership systems."
};

export default function CreatorProtectionService() {
  return (
    <main>
      <section className="mx-auto max-w-5xl section-pad">
        <p className="eyebrow mb-5">Service</p>
        <h1 className="font-serif text-5xl leading-tight tracking-[-0.04em] md:text-7xl">
          Legal Protection & Contract Management
        </h1>
        <p className="mt-8 max-w-3xl text-lg leading-8 text-black/70">
          A sustainable influencer industry needs trust. That means clear expectations,
          written agreements, legal awareness and transparent creator-brand structures.
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {["Contract clarity", "Creator-brand protection", "Transparent collaboration standards"].map((item) => (
            <div key={item} className="border border-black/10 bg-white/40 p-7">
              <Icon name="handshake" className="mb-6 text-olive" size={34} />
              <h2 className="font-serif text-2xl">{item}</h2>
            </div>
          ))}
        </div>

        <div className="prose-brand mt-14 text-lg">
          <h2>What this solves</h2>
          <p>Without clear agreements, creators and brands face payment confusion, unclear deliverables, usage-rights issues and damaged relationships.</p>
          <h2>How Kisa helps</h2>
          <p>Kisa supports a more professional influencer ecosystem by helping structure clearer agreements, collaboration standards and legal consultation pathways.</p>
          <h2>Ideal for</h2>
          <p>Creators, brands and agencies that want safer, clearer and more sustainable influencer partnerships.</p>
        </div>

        <Link href="/contact" className="mt-12 inline-flex items-center gap-3 bg-forest px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white transition hover:bg-olive">
          Discuss this service →
        </Link>
      </section>
    </main>
  );
}
