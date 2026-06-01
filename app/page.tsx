import Link from "next/link";
import Hero from "@/components/Hero";
import Icon from "@/components/Icon";
import { impact, posts, services, trustedNames } from "@/lib/site";

export default function Home() {
  return (
    <main>
      <Hero />

      <section className="border-y border-black/10 bg-[#FBFAF7]">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-8 lg:grid-cols-[0.8fr_4fr] lg:px-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/50">
            Ecosystem pillars
          </p>
          <div className="grid grid-cols-2 gap-7 font-serif text-2xl text-black/80 md:grid-cols-5">
            {trustedNames.map((name) => (
              <span key={name}>{name}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest text-ivory">
        <div className="mx-auto grid max-w-7xl gap-10 section-pad lg:grid-cols-[0.9fr_1fr]">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.34em] text-[#B9C6A8]">
              About Kisa
            </p>
            <h2 className="font-serif text-4xl leading-tight tracking-[-0.03em] md:text-6xl">
              Creator Economy Strategist. AI Systems Builder. Brand Intelligence Partner.
            </h2>
            <p className="mt-7 max-w-xl text-base leading-8 text-white/75">
              Kisa has collaborated with 1000+ influencers across Pakistan,
              building a next-generation influencer management ecosystem powered
              by AI automation, strategic brand intelligence, campaign workflows
              and creator protection.
            </p>
            <Link
              href="/about"
              className="mt-9 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#D8E0C9]"
            >
              Read More <Icon name="arrow" size={16} />
            </Link>
          </div>

          <div className="min-h-[420px] bg-[#DAD2C2] p-8 text-ink shadow-2xl shadow-black/20">
            <div className="flex h-full flex-col justify-end border border-black/10 p-8">
              <p className="font-serif text-3xl leading-tight">
                “We are not just managing influencers — we are shaping the
                future of influencer commerce in Pakistan through automation,
                data and innovation.”
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl section-pad">
        <div className="text-center">
          <p className="eyebrow mb-4">What I Do</p>
          <h2 className="font-serif text-4xl tracking-[-0.03em] md:text-6xl">
            A Smarter System for Brands and Creators
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div key={service.title} className="border-l border-black/15 pl-7">
              <Icon
                name={service.icon}
                className="mb-8 text-olive"
                size={36}
                strokeWidth={1.4}
              />
              <h3 className="font-serif text-2xl">{service.title}</h3>
              <p className="mt-4 text-sm leading-7 text-black/65">
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#111712] text-ivory">
        <div className="mx-auto max-w-7xl section-pad">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.34em] text-[#B9C6A8]">
                Featured Impact
              </p>
              <h2 className="font-serif text-4xl tracking-[-0.03em] md:text-6xl">
                Building Infrastructure for Influencer Commerce
              </h2>
            </div>
            <p className="max-w-lg text-base leading-8 text-white/75">
              From AI-powered influencer matchmaking and campaign automation to
              legal protection and creator partnerships, Kisa is building the
              infrastructure for Pakistan&apos;s next generation creator economy.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {impact.map((item) => (
              <div key={item.value} className="border-l border-white/15 px-7 py-3">
                <Icon
                  name={item.icon}
                  className="mb-6 text-[#B9C6A8]"
                  size={36}
                  strokeWidth={1.4}
                />
                <p className="font-serif text-4xl">{item.value}</p>
                <p className="mt-3 text-sm leading-6 text-white/70">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl section-pad">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow mb-4">Insights</p>
            <h2 className="font-serif text-4xl tracking-[-0.03em] md:text-5xl">
              Ideas on AI, Creators & Brand Growth
            </h2>
          </div>
          <Link
            href="/insights"
            className="hidden text-xs font-bold uppercase tracking-[0.18em] md:block"
          >
            View all insights →
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/insights/${post.slug}`}
              className="border border-black/10 bg-white/35 p-6 transition hover:bg-white/70"
            >
              <p className="text-xs uppercase tracking-[0.18em] text-black/45">
                {post.readTime}
              </p>
              <h3 className="mt-4 font-serif text-2xl">{post.title}</h3>
              <p className="mt-4 text-sm leading-7 text-black/65">
                {post.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}