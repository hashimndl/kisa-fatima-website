import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "Speaking",
  description: "Invite Kisa Fatima for panels, podcasts, keynotes and strategic conversations on leadership, media, AI, visibility and growth."
};

export default function Speaking() {
  return (
    <main>
      <section className="mx-auto grid max-w-7xl gap-12 section-pad lg:grid-cols-[1fr_0.8fr]">
        <div>
          <p className="eyebrow mb-5">Speaking & Collaborations</p>
          <h1 className="font-serif text-5xl leading-tight tracking-[-0.04em] md:text-7xl">
            Conversations on media, influence, leadership and the future of visibility.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-black/70">
            Kisa is available for panels, podcasts, summits, boardrooms and strategic collaborations around PR, founder visibility, executive positioning, AI narratives and global growth.
          </p>
          <Link href="/contact" className="mt-10 inline-flex items-center gap-3 bg-forest px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white transition hover:bg-olive">
            Invite Kisa <Icon name="arrow" size={16} />
          </Link>
        </div>
        <div className="relative min-h-[460px] overflow-hidden">
          <Image
            src="/images/kisa-speaking.svg"
            alt="Speaking placeholder"
            fill
            className="object-cover"
          />
        </div>
      </section>
    </main>
  );
}
