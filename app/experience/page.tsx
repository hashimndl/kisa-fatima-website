import KisaNav from "@/components/KisaNav";
import KisaFooter from "@/components/KisaFooter";

export default function ExperiencePage() {
  return (
    <main>
      <KisaNav />

      <section className="page-hero dark">
        <p className="eyebrow yellow">Experience</p>
        <h1>
          Where I&apos;ve built, operated and <em>made things happen.</em>
        </h1>
        <p>
          A career across operations, marketing, creator strategy, AI systems
          and global project environments.
        </p>
      </section>

      <section className="exp-section">
        <div className="exp-list">
          {[
            {
              company: "The Crimson PR",
              role: "Operations, Marketing & Creator Strategy",
              period: "Pakistan",
              desc: "Worked across creator management, campaign coordination, brand communication and influencer operations."
            },
            {
              company: "Echooo.ai",
              role: "AI, Growth & Systems",
              period: "AI / Creator Economy",
              desc: "Supported AI-led workflows, growth strategy and creator-brand ecosystem development."
            },
            {
              company: "Flint Global",
              role: "Operations & Project Coordination",
              period: "Global Business",
              desc: "Worked across structured execution, stakeholder coordination and project delivery."
            },
            {
              company: "Erasmus Mundus Association",
              role: "Writer & Global Community Voice",
              period: "Europe / Global",
              desc: "Built international exposure through writing, storytelling, education and cross-cultural community work."
            }
          ].map((item) => (
            <article className="exp-item" key={item.company}>
              <div className="exp-meta">
                <p className="exp-co">{item.company}</p>
                <p className="exp-period">{item.period}</p>
              </div>
              <div>
                <h2 className="exp-role">{item.role}</h2>
                <p className="exp-desc">{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <KisaFooter />
    </main>
  );
}