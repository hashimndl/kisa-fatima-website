import Image from "next/image";
import KisaNav from "@/components/KisaNav";
import KisaFooter from "@/components/KisaFooter";

export default function MediaPage() {
  return (
    <main>
      <KisaNav />

      <section className="page-hero blue">
        <p className="eyebrow yellow">Media</p>
        <h1>
          I don&apos;t just manage creators. <em>I am one.</em>
        </h1>
        <p>
          Kisa&apos;s work sits at the intersection of media, creator strategy,
          writing, AI, business and global conversations.
        </p>
      </section>

      <section className="creator-section">
        <div>
          <p className="eyebrow creator-eyebrow">Creator Presence</p>
          <h2 className="creator-h2">
            Building visibility through <em>real voice and proof.</em>
          </h2>
          <p className="creator-p">
            From founder interviews and published writing to LinkedIn thought
            leadership and creator ecosystem work, Kisa brings both strategy
            and lived experience to the media space.
          </p>

          <a
            className="btn-blue"
            href="https://www.linkedin.com/in/kisafatima/"
            target="_blank"
            rel="noreferrer"
          >
            View LinkedIn
          </a>
        </div>

        <div className="photo-main media-photo">
          <Image
            src="/images/kisa-speaking.jpg"
            alt="Kisa Fatima speaking"
            fill
            sizes="(min-width: 900px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="writing-section">
        <p className="eyebrow">Media Features</p>
        <h2 className="section-h2">
          Platforms, conversations and <em>public voice.</em>
        </h2>

        <div className="writing-grid">
          {[
            {
              pub: "AI Founder Review",
              title: "Founder and AI ecosystem perspective",
              desc: "Media presence around AI, innovation and entrepreneurship."
            },
            {
              pub: "LinkedIn",
              title: "Thought leadership and professional voice",
              desc: "Posts and commentary on operations, creator strategy, AI and career building."
            },
            {
              pub: "AI Time Journal",
              title: "AI and innovation writing",
              desc: "Public writing connected to technology, work and the future of business."
            },
            {
              pub: "Creator Ecosystem",
              title: "Influencer and brand strategy",
              desc: "Experience across creator management, brand partnerships and campaign execution."
            }
          ].map((item) => (
            <article className="writing-card" key={item.title}>
              <p className="wc-pub">{item.pub}</p>
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