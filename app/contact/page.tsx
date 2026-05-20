import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Kisa Fatima for PR strategy, executive positioning, speaking, partnerships and thought leadership collaborations."
};

export default function Contact() {
  return (
    <main>
      <section className="mx-auto grid max-w-7xl gap-12 section-pad lg:grid-cols-[0.8fr_1fr]">
        <div>
          <p className="eyebrow mb-5">Contact</p>
          <h1 className="font-serif text-5xl leading-tight tracking-[-0.04em] md:text-7xl">
            Let’s build visibility with substance.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-black/70">
            For advisory, PR strategy, speaking, partnerships or media collaborations, use the form or email directly.
          </p>
          <a href={`mailto:${site.email}`} className="mt-8 inline-block text-olive">
            {site.email}
          </a>
        </div>
        <ContactForm />
      </section>
    </main>
  );
}
