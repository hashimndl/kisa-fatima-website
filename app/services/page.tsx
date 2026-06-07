import KisaNav from "@/components/KisaNav";
import KisaFooter from "@/components/KisaFooter";

export default function ServicesPage() {
  return (
    <main>
      <KisaNav />

      <section className="page-hero">
        <p className="eyebrow">Services</p>
        <h1>
          Four things I do <em>exceptionally well.</em>
        </h1>
        <p>
          Strategy and execution across operations, creator ecosystems,
          marketing systems and content.
        </p>
      </section>

      <section className="services-section">
        <div className="services-grid">
          {[
            {
              n: "01",
              title: "Operations & Project Management",
              desc: "Turning moving parts, teams, timelines and uncertainty into structured execution.",
              tags: ["Systems", "Execution", "Delivery"]
            },
            {
              n: "02",
              title: "Influencer & Creator Management",
              desc: "Managing creators, campaigns and brand relationships with clarity, structure and accountability.",
              tags: ["Creators", "Campaigns", "Partnerships"]
            },
            {
              n: "03",
              title: "Marketing Strategy & Sales",
              desc: "Building positioning, growth workflows and communication systems that support commercial outcomes.",
              tags: ["Growth", "Sales", "Brand"]
            },
            {
              n: "04",
              title: "Content & Strategic Writing",
              desc: "Translating complex ideas into sharp narratives, articles, founder stories and public-facing content.",
              tags: ["Writing", "Story", "Voice"]
            }
          ].map((service) => (
            <article className="svc" key={service.title}>
              <div className="svc-accent" />
              <p className="svc-num">{service.n}</p>
              <h2 className="svc-title">{service.title}</h2>
              <p className="svc-desc">{service.desc}</p>
              <div className="svc-tags">
                {service.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <KisaFooter />
    </main>
  );
}