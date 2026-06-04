import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "Speaking",
  description:
    "Invite Kisa Fatima for conferences, panels, podcasts and industry discussions on AI-powered influencer commerce, creator economy innovation, campaign automation and brand intelligence."
};

export default function Speaking() {
  return (
    <main>
      <section className="mx-auto grid max-w-7xl gap-12 section-pad lg:grid-cols-[1fr_0.8fr]">
        <div>
          <p className="eyebrow mb-5">Speaking & Collaborations</p>

          <h1 className="font-serif text-5xl leading-tight tracking-[-0.04em] md:text-7xl">
            Conversations on AI, creators, commerce and the future of influence.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-black/70">
            Kisa is available for conferences, panels, podcasts, industry
            events and strategic collaborations focused on influencer commerce,
            creator economy innovation, AI-powered marketing systems, campaign
            automation, creator protection and brand intelligence.
          </p>

          <div className="mt-10 space-y-4 text-black/70">
            <p>• The Future of Influencer Commerce</p>
            <p>• AI-Powered Influencer Matchmaking</p>
            <p>• Building Creator Economy Infrastructure</p>
            <p>• Campaign Automation & Marketing Technology</p>
            <p>• Creator Protection, Contracts & Trust</p>
            <p>• Brand Intelligence & Growth Systems</p>
          </div>

          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-3 bg-forest px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white transition hover:bg-olive"
          >
            Invite Kisa <Icon name="arrow" size={16} />
          </Link>
        </div>

        <div className="relative min-h-[560px] overflow-hidden bg-[#DED7C9]">
  <Image
  src="/images/kisa-speaking.jpg"
  alt="Kisa Fatima speaking"
  fill
  priority
  sizes="(min-width: 1024px) 40vw, 100vw"
  className="object-cover object-[42%_center]"
/>
</div>
      </section>
    </main>
  );
}