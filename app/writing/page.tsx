import KisaNav from "@/components/KisaNav";
import KisaFooter from "@/components/KisaFooter";

export default function WritingPage() {
  return (
    <main>
      <KisaNav />

      <section className="page-hero">
        <p className="eyebrow">Writing</p>
        <h1>
          Things I have actually <em>written, built and thought about.</em>
        </h1>
        <p>
          Essays and articles across AI, career, creator ecosystems, leadership,
          education and global opportunity.
        </p>
      </section>

      <section className="writing-section">
        <div className="writing-grid">
          {[
            {
              pub: "Erasmus Mundus Association",
              title: "Global education, ambition and opportunity",
              desc: "Writing connected to international mobility, education and cross-cultural career growth."
            },
            {
              pub: "AI Founder Review",
              title: "AI, founders and the future of work",
              desc: "Perspectives on how AI changes business, operations and visibility."
            },
            {
              pub: "AI Time Journal",
              title: "Technology, systems and innovation",
              desc: "Thoughts on AI, automation and how intelligent systems shape modern work."
            },
            {
              pub: "LinkedIn",
              title: "Career, operations and creator strategy",
              desc: "Short-form thinking on building, marketing and making things happen."
            }
          ].map((item, index) => (
            <article
              className={`writing-card ${index === 1 ? "wc-featured" : ""}`}
              key={item.title}
            >
              <p className="wc-pub">{item.pub}</p>
              <h2 className="wc-title">{item.title}</h2>
              <p className="wc-desc">{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <KisaFooter />
    </main>
  );
}