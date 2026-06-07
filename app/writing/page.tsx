import KisaNav from "@/components/KisaNav";
import KisaFooter from "@/components/KisaFooter";

export default function WritingPage() {
  return (
    <main>
      <KisaNav />

      <section className="page-hero">
        <p className="eyebrow">Featured Writing</p>
        <h1>
          Things I have actually <em>written.</em>
        </h1>
      </section>

      <section className="writing-section">
        <div className="writing-editorial-grid">
          <a
            className="writing-feature-card"
            href="https://www.em-a.eu/post/hoem-kisa-fatima"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="wc-pub">
              Erasmus Mundus Association · Humans of Erasmus Mundus · Jun 2019
            </p>
            <h2 className="wc-title">
              Kisa Fatima, Pakistan: Mediterranean Forestry and Natural
              Resources Management (MEDFOR)
            </h2>
            <p className="wc-desc">
              A personal essay on independence, womanhood, and what it means to
              stop seeking permission to exist fully. Written for the Humans of
              Erasmus Mundus series.
            </p>
            <span className="writing-link">Read full piece on EMA →</span>
          </a>

          <div className="writing-quote-card">
            <blockquote>
              A woman&apos;s life is not her own life: it is a life that has
              been established around approval from others.
            </blockquote>
            <p>Kisa Fatima, writing for EMA</p>
          </div>

          <a
            className="writing-blue-card"
            href="https://aifounderreview.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="wc-pub">AI Founder Review · Founder & Editor</p>
            <h2 className="wc-title">
              The #1 source for AI founder news, leadership and entrepreneurship
            </h2>
            <p className="wc-desc">
              I founded and run this publication spotlighting the people
              building AI. Their stories, decisions, and what it really takes to
              lead in this space.
            </p>
            <span className="writing-link">Visit AI Founder Review →</span>
          </a>

          <a
            className="writing-feature-card"
            href="https://aitimejournal.com/profile/kisa-fatima"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="wc-pub">AI Time Journal · Published Contributor</p>
            <h2 className="wc-title">
              On AI, automation, and what it means for the people doing the
              actual work
            </h2>
            <p className="wc-desc">
              Published contributor covering the intersection of artificial
              intelligence, business operations, and human systems.
            </p>
            <span className="writing-link">Read AI Time Journal profile →</span>
          </a>
        </div>
      </section>

      <KisaFooter />
    </main>
  );
}