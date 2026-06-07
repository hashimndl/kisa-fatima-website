import Link from "next/link";
import { email, navItems } from "@/lib/kisa-redesign";

export default function KisaNav() {
  return (
    <nav className="kisa-nav">
      <Link href="/" className="nav-logo">Kisa Fatima</Link>
      <ul className="nav-links">
        {navItems.map((item) => (
          <li key={item.href}><Link href={item.href}>{item.label}</Link></li>
        ))}
      </ul>
      <a href={`mailto:${email}`} className="nav-cta">Work with me</a>
    </nav>
  );
}
