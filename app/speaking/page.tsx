
import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import KisaNav from "@/components/KisaNav";
import KisaFooter from "@/components/KisaFooter";

export const metadata: Metadata = {
  title: "Speaking",
  description:
    "Invite Kisa Fatima for conferences, podcasts, panels and industry conversations on creator economy, AI systems, operations, marketing and media."
};

export default function SpeakingPage() {
  return (
    <main>
      <KisaNav />

      <section className="page-hero blue">
        <p className="eyebrow yellow">Speaking</p>

        <h1>
          Conversations on creators, AI, operations and <em>building things that last.</em>
        </h1>

        <p>
          Kisa speaks about creator ecosystems, AI-powered workflows,
          operational excellence, marketing systems, founder visibility,
          media-building and what it actually takes to execute ideas at scale.
        </p>
      </section>

      <section className="creator-section">
        <div>
          <p className="eyebrow creator-eyebrow">Topics</p>

          <h2 className="creator-h2">
            Talks, panels and conversations that <em>go beyond theory.</em>
          </h2>

          <p className="creator-p">
            Every talk is grounded in real-world experience across creator
            management, campaign execution, AI systems, media and global
            collaboration.
          </p>

          <div className="talk-topics">
            <span className="talk-topic">Creator Economy</span>
            <span className="talk-topic">AI & Automation</span>
            <span className="talk-topic">Marketing Operations</span>
            <span className="talk-topic">Influencer Ecosystems</span>
            <span className="talk-topic">Founder Visibility</span>
            <span className="talk-topic">Media Building</span>
          </div>

          <Link href="/contact" className="btn-blue">
            Invite Kisa →
          </Link>
        </div>

        <div className="photo-main media-photo">
          <Image
            src="/images/kisa-speaking.jpg"
            alt="Kisa Fatima speaking"
            fill
            priority
            sizes="(min-width: 900px) 50vw, 100vw"
            className="hero-photo"
          />
        </div>
      </section>

      <section className="writing-section">
        <p className="eyebrow">Popular Discussion Areas</p>

        <h2 className="section-h2">
          What audiences usually want to <em>talk about.</em>
        </h2>

        <div className="writing-grid">
          {[
            {
              title: "The Future of Creator Economies",
              desc: "How creator ecosystems are evolving beyond brand deals."
            },
            {
              title: "AI That Actually Helps People Work",
              desc: "Practical applications of AI, automation and operational systems."
            },
            {
              title: "Building Media in the AI Era",
              desc: "Lessons from launching and growing AI Founder Review."
            },
            {
              title: "Marketing Operations at Scale",
              desc: "The systems behind high-performing campaigns and teams."
            }
          ].map((item) => (
            <article className="writing-card" key={item.title}>
              <h3 className="wc-title">{item.title}</h3>
              <p className="wc-desc">{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <KisaFooter />
    </main>
  );
}