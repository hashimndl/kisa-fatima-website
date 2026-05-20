import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-7xl gap-10 px-6 pb-16 pt-12 lg:grid-cols-[1fr_0.95fr] lg:px-10 lg:pb-24 lg:pt-16">
      <div className="flex flex-col justify-center">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.36em] text-olive">Kisa Fatima</p>
        <h1 className="max-w-3xl font-serif text-5xl leading-[0.98] tracking-[-0.04em] md:text-7xl lg:text-[82px]">
          Building High-Impact Visibility Through Strategy, Media & Meaning.
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8 text-black/70">
          I help founders, executives and innovative brands craft powerful narratives, secure credible visibility and build authority that lasts.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-3 bg-forest px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white transition hover:bg-olive"
          >
            Work With Me <Icon name="arrow" size={16} />
          </Link>
          <Link
            href="/media"
            className="inline-flex items-center justify-center border border-black/30 px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] transition hover:bg-white"
          >
            View Media Work
          </Link>
        </div>
      </div>

      <div className="relative min-h-[520px] overflow-hidden bg-[#DED7C9] shadow-2xl shadow-black/10">
        <Image
          src="/images/kisa-hero.svg"
          alt="Editorial portrait placeholder for Kisa Fatima"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-x-8 bottom-8 rounded-3xl border border-white/30 bg-white/40 p-6 backdrop-blur-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-forest">Editorial visual direction</p>
          <p className="mt-3 text-sm leading-6 text-black/65">
            Replace with Kisa’s strongest natural-light professional photo: neutral outfit, calm expression, editorial crop.
          </p>
        </div>
      </div>
    </section>
  );
}
