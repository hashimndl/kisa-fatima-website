import KisaNav from "@/components/KisaNav";
import KisaFooter from "@/components/KisaFooter";
import { email } from "@/lib/kisa-redesign";

export default function ContactPage() {
  return (
    <main>
      <KisaNav />

      <section className="page-hero contact-hero">
        <p className="eyebrow">Contact</p>
        <h1>
          Let&apos;s build something <em>that actually works.</em>
        </h1>
        <p>
          For collaborations, strategy work, speaking, media, or project
          partnerships, reach out directly.
        </p>
      </section>

      <section className="contact-section">
        <div className="contact-card">
          <p className="eyebrow">Email</p>

          <h2>Work with Kisa</h2>

          <p>
            Send a short note about what you&apos;re building, where you need
            help, and what kind of collaboration you have in mind.
          </p>

          <a href={`mailto:${email}`} className="contact-email">
            {email}
          </a>
        </div>

        <div className="contact-card contact-card-blue">
          <p className="eyebrow creator-eyebrow">Best for</p>

          <ul>
            <li>Creator and influencer campaign strategy</li>
            <li>AI automation and operational systems</li>
            <li>Media, writing and founder visibility</li>
            <li>Brand partnerships and collaborations</li>
          </ul>
        </div>
      </section>

      <KisaFooter />
    </main>
  );
}