import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Kisa Fatima for influencer partnerships, creator economy consulting, AI-powered campaign management, brand collaborations and speaking opportunities."
};

export default function Contact() {
  return (
    <main>
      <section className="mx-auto grid max-w-7xl gap-12 section-pad lg:grid-cols-[0.8fr_1fr]">
        <div>
          <p className="eyebrow mb-5">Contact</p>

          <h1 className="font-serif text-5xl leading-tight tracking-[-0.04em] md:text-7xl">
            Let's build the future of influencer commerce.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-black/70">
            Whether you're a brand looking to scale influencer campaigns, a
            creator seeking strategic partnerships, or an organization
            interested in AI-powered creator economy solutions, we'd love to
            hear from you.
          </p>

          <div className="mt-8 space-y-4 text-black/70">
            <p>• Influencer Partnerships</p>
            <p>• Creator Economy Consulting</p>
            <p>• Campaign Automation Solutions</p>
            <p>• Brand Intelligence & Strategy</p>
            <p>• Speaking & Industry Events</p>
            <p>• Strategic Collaborations</p>
          </div>

          <a
            href={`mailto:${site.email}`}
            className="mt-8 inline-block text-olive font-medium"
          >
            {site.email}
          </a>
        </div>

        <ContactForm />
      </section>
    </main>
  );
}