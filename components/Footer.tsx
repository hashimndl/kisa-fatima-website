import Link from "next/link";
import { navItems, site } from "@/lib/site";
import NewsletterForm from "@/components/NewsletterForm";
import Icon from "@/components/Icon";

export default function Footer() {
  return (
    <footer className="bg-[#111712] text-ivory">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-14 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1fr] lg:px-10">
        <div>
          <p className="font-serif text-3xl">K/F</p>
          <p className="mt-6 max-w-xs text-sm leading-7 text-white/60">
            Strategic visibility. Meaningful impact. Stories that last.
          </p>
        </div>
        <div>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-white/40">Navigation</p>
          <div className="grid gap-3 text-sm text-white/70">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-white/40">Connect</p>
          <a href={`mailto:${site.email}`} className="text-sm text-white/70">
            {site.email}
          </a>
          <div className="mt-6 flex gap-4">
            <a
              href={site.linkedin}
              aria-label="LinkedIn"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-[11px] font-bold uppercase text-white/75 transition hover:border-white/50 hover:text-white"
            >
              in
            </a>
            <a
              href={`mailto:${site.email}`}
              aria-label="Email"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/75 transition hover:border-white/50 hover:text-white"
            >
              <Icon name="mail" size={16} />
            </a>
          </div>
        </div>
        <NewsletterForm />
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/35">
        © 2026 Kisa Fatima. All rights reserved.
      </div>
    </footer>
  );
}
