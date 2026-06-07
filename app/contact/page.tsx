import KisaNav from "@/components/KisaNav";
import KisaFooter from "@/components/KisaFooter";

export default function ContactPage() {
  return (
    <main>
      <KisaNav />

      <section className="page-hero red">
        <p className="eyebrow yellow">Contact</p>
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
            Send a short note about what you are building, where you need help,
            and what kind of collaboration you have in mind.
          </p>

          <a className="btn-white" href="mailto:kisahfatima@gmail.com">
            kisahfatima@gmail.com
          </a>
        </div>
      </section>

      <KisaFooter />
    </main>
  );
}