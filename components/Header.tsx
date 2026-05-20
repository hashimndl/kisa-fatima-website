import Link from "next/link";
import { navItems, site } from "@/lib/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-ivory/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <Link href="/" className="font-serif text-2xl tracking-tight">
          K/F
        </Link>
        <nav className="hidden items-center gap-8 text-[11px] font-semibold uppercase tracking-[0.18em] lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-olive">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href={`mailto:${site.email}`}
          className="hidden rounded-full border border-black/20 px-5 py-2 text-xs font-semibold uppercase tracking-[0.16em] transition hover:bg-ink hover:text-white md:flex"
        >
          Work With Me
        </Link>
      </div>
    </header>
  );
}
