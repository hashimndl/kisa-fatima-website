import KisaNav from "@/components/KisaNav";
import KisaFooter from "@/components/KisaFooter";
import { experience } from "@/lib/kisa-redesign";

export default function ExperiencePage() {
  return (
    <main>
      <KisaNav />

      <section className="page-hero dark experience-hero">
        <p className="eyebrow">Experience</p>
        <h1>
          Where I&apos;ve built, operated and <em>made things happen.</em>
        </h1>
        <p>
          A career across operations, marketing, creator strategy, AI systems
          and global project environments.
        </p>
      </section>

      <section className="experience-page-section">
        <div className="experience-page-list">
          {experience.map((item) => (
            <article className="experience-page-item" key={item.company}>
              <div className="experience-company">
                <p>{item.company}</p>
                <span>{item.period}</span>
              </div>

              <div className="experience-content">
                <h2>{item.role}</h2>
                <p>{item.desc}</p>
                {item.badge && <span className="exp-badge">{item.badge}</span>}
              </div>
            </article>
          ))}
        </div>
      </section>

      <KisaFooter />
    </main>
  );
}