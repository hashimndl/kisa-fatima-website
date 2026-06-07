import Link from "next/link";
import { email } from "@/lib/kisa-redesign";

export default function KisaFooter() {
  return (
    <footer className="kisa-footer">
      <Link href="/" className="footer-logo">Kisa Fatima</Link>
      <span>Operations · Marketing · Creator Strategy · Pakistan & Global</span>
      <a href={`mailto:${email}`}>© 2026 · {email}</a>
    </footer>
  );
}
