import type { Metadata } from "next";
import Icon from "@/components/Icon";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI-powered influencer management, campaign automation, creator partnerships, legal protection and brand intelligence solutions."
};

export default function Services() {
  return (
    <main>
      <section className="mx-auto max-w-7xl section-pad">
        <p className="eyebrow mb-5">Services</p>

        <h1 className="max-w-4xl font-serif text-5xl leading-tight tracking-[-0.04em] md:text-7xl">
          Building smarter systems for brands, creators and the future of influence.
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-black/70">
          Kisa combines AI automation, creator intelligence, campaign management
          and legal protection to help brands and influencers work together more
          efficiently, transparently and at scale.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="border border-black/10 bg-white/35 p-8"
            >
              <Icon
                name={service.icon}
                className="mb-8 text-olive"
                size={40}
              />

              <h2 className="font-serif text-3xl">{service.title}</h2>

              <p className="mt-5 leading-8 text-black/70">
                {service.text}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-20 rounded-3xl bg-forest p-10 text-white">
          <h2 className="font-serif text-4xl">
            The Next Generation Influencer Ecosystem
          </h2>

          <p className="mt-6 max-w-3xl leading-8 text-white/80">
            Our mission is to revolutionize the influencer industry by
            integrating AI-powered creator discovery, automated campaign
            workflows, contract management and legal consultation into one
            seamless ecosystem.
          </p>

          <p className="mt-4 max-w-3xl leading-8 text-white/80">
            We are not just managing influencers — we are building the
            infrastructure that will define the future of influencer commerce in
            Pakistan.
          </p>
        </div>
      </section>
    </main>
  );
}