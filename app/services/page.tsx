import type { Metadata } from "next";
import Icon from "@/components/Icon";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description: "PR strategy, executive positioning, thought leadership and strategic partnerships for founders, executives and innovative brands."
};

export default function Services() {
  return (
    <main>
      <section className="mx-auto max-w-7xl section-pad">
        <p className="eyebrow mb-5">Services</p>
        <h1 className="max-w-4xl font-serif text-5xl leading-tight tracking-[-0.04em] md:text-7xl">
          Strategic visibility for leaders who want authority, not noise.
        </h1>
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.title} className="border border-black/10 bg-white/35 p-8">
              <Icon name={service.icon} className="mb-8 text-olive" size={40} />
              <h2 className="font-serif text-3xl">{service.title}</h2>
              <p className="mt-5 leading-8 text-black/70">{service.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
