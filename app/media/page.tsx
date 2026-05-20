import type { Metadata } from "next";
import Icon from "@/components/Icon";
import { impact, trustedNames } from "@/lib/site";

export const metadata: Metadata = {
  title: "Media & Impact",
  description: "Campaign metrics, collaborations and visibility outcomes from Kisa Fatima’s work across PR, media strategy and global partnerships."
};

export default function Media() {
  return (
    <main>
      <section className="mx-auto max-w-7xl section-pad">
        <p className="eyebrow mb-5">Media & Impact</p>
        <h1 className="max-w-4xl font-serif text-5xl leading-tight tracking-[-0.04em] md:text-7xl">
          Measurable visibility, strategic growth and global credibility.
        </h1>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {impact.map((item) => (
            <article key={item.value} className="border-l border-black/15 pl-7">
              <Icon name={item.icon} className="mb-6 text-olive" size={38} />
              <p className="font-serif text-4xl">{item.value}</p>
              <p className="mt-4 text-sm leading-7 text-black/65">{item.label}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-stone">
        <div className="mx-auto max-w-7xl section-pad">
          <p className="eyebrow mb-5">Worked with</p>
          <div className="grid gap-6 font-serif text-3xl md:grid-cols-5">
            {trustedNames.map((name) => (
              <span key={name}>{name}</span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
