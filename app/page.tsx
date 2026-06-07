import Image from "next/image";
import Link from "next/link";
import KisaNav from "@/components/KisaNav";
import KisaFooter from "@/components/KisaFooter";
import { email, experience, platforms, services, stats, writing } from "@/lib/kisa-redesign";

export default function Home() {
  return (
    <main>
      <KisaNav />

      <section className="hero">
        <div className="hero-left">
          <div className="hero-tag">Operations · Marketing · Creator Strategy</div>
          <h1 className="hero-h1">Where chaos becomes <em>a masterpiece.</em></h1>
          <p className="hero-sub">Ten years. Four hundred creators. One campaign that hit 10 million people in 15 days. I am not a job title — I&apos;m the person who makes things actually happen.</p>
          <div className="hero-btns">
            <a href={`mailto:${email}`} className="btn-white">Work with me</a>
            <Link href="#story" className="btn-outline-white">Read my story ↓</Link>
          </div>
        </div>
        <div className="hero-right">
          <Image src="/images/kisa-hero.jpg" alt="Kisa Fatima" fill priority sizes="(min-width: 900px) 48vw, 100vw" className="hero-photo" />
          <div className="hero-photo-overlay" />
          <div className="hero-stats-bar">
            {stats.map((stat) => <div className="hero-stat" key={stat.label}><div className="hero-stat-n">{stat.value}</div><div className="hero-stat-l">{stat.label}</div></div>)}
          </div>
        </div>
      </section>

      <section className="logos-band">
        <div className="logos-label">Worked with</div>
        <div className="logos-row">
          {['The Crimson PR', 'echooo.ai', 'Flint Global', 'Erasmus Mundus Association', 'AI Founder Review'].map((name) => <span className="logo-text" key={name}>{name}</span>)}
        </div>
      </section>

      <section id="story" className="story-section">
        <div className="story-left">
          <div className="story-eyebrow">My Story</div>
          <h2 className="story-h2">Started in science. Ended up <em>everywhere.</em></h2>
          <p className="story-pull">Life is too short to only learn one thing. So I decided to learn everything that matters and get really, really good at all of it.</p>
          <span className="story-tag">Pakistan · Italy · Denmark · Dubai · Remote</span>
        </div>
        <div className="story-right">
          <p className="big">Here&apos;s the honest version: <em>I was never meant to end up in marketing.</em></p>
          <p>I graduated with a degree in <strong>Environmental Management</strong>. Before that, I won a <strong>fully-funded Erasmus Mundus Joint Master Degree</strong>, one of the most competitive scholarships in the world.</p>
          <p>But while everyone around me was planning their environmental careers, I was quietly becoming something else entirely. I was writing. Communicating. <strong>Making people pay attention.</strong></p>
          <p>For eight years, I poured that energy into the <strong>Erasmus Mundus Association</strong>. I wrote newsletters, led creative outreach, and helped shape campaigns that spoke to students across continents.</p>
          <p>Then I moved into marketing not because I needed to pivot, but because I was <em>already doing it better than people trained for it.</em></p>
        </div>
      </section>

      <section className="ai-strip">
        <div>
          <h3>I run the AI. <em>The AI doesn&apos;t run me.</em></h3>
          <p>Automation is a tool, not a replacement for thinking. I use AI strategically to work faster, build smarter, and free up space for the decisions that actually require a human.</p>
          <div className="ai-tools">{['Notion','n8n','Claude Opus 4.8','AI Automation','Campaign Workflows','Agentic AI','AI Systems Building'].map((tool) => <span className="ai-tool" key={tool}>{tool}</span>)}</div>
        </div>
        <blockquote className="ai-quote">Automation handles the repetition. I handle the strategy, the story, and the soul.<span>— Kisa on working with AI</span></blockquote>
      </section>

      <section className="photo-strip">
        <div className="photo-main"><Image src="/images/kisa-working.jpg" alt="Kisa Fatima working" width={900} height={900} /></div>
        <div className="photo-text"><h3>From <em>Italy to Islamabad</em>, creative space is my ode to living on my own terms.</h3><p>This isn&apos;t a career. It&apos;s a creative practice. Every campaign, every piece of writing, every system I build is my safe space.</p></div>
        <div className="photo-accent"><div className="photo-accent-label">Countries lived & worked in</div><div className="photo-accent-big">4+</div><div className="photo-accent-sub">Italy. Denmark. Dubai. Pakistan. Same hunger, different skylines.</div></div>
      </section>

      <section className="services-section" id="services">
        <div className="eyebrow">What I Do</div>
        <h2 className="section-h2">Four things I do <em>exceptionally well.</em></h2>
        <div className="services-grid">
          {services.map((svc) => <Link href="/services" className="svc" key={svc.title}><div className="svc-accent" /><div className="svc-num">{svc.num}</div><h3 className="svc-title">{svc.title}</h3><p className="svc-desc">{svc.desc}</p><div className="svc-tags">{svc.tags.map((tag)=><span className="tag" key={tag}>{tag}</span>)}</div></Link>)}
        </div>
      </section>

      <section className="edu-banner">
        <div className="edu-logo-wrap"><div className="edu-logo-box">Erasmus</div><div className="edu-logo-box">EMA</div></div>
        <div className="edu-text"><h3>A fully-funded scholarship, a joint master degree, and <em>a world that opened up.</em></h3><p>I was awarded the prestigious Erasmus Mundus Joint Master Degree. It took me across borders, exposed me to world-class education, and gave me the perspective that still shapes how I think and work today.</p><span className="edu-badge">Erasmus Mundus Scholar · Fully Funded · Joint Master Degree</span></div>
      </section>

      <section className="exp-section" id="experience">
        <div className="eyebrow">Experience</div>
        <h2 className="section-h2">Where I&apos;ve <em>built things.</em></h2>
        <div className="exp-list">{experience.map((item)=><div className="exp-item" key={item.company}><div><div className="exp-co">{item.company}</div><div className="exp-period">{item.period}</div></div><div><h3 className="exp-role">{item.role}</h3><p className="exp-desc">{item.desc}</p>{item.badge && <span className="exp-badge">{item.badge}</span>}</div></div>)}</div>
      </section>

      <section className="creative-section">
        <div><div className="creative-eyebrow">My Creative Space</div><h2 className="creative-h2">From Italy to Islamabad <em>this is my safe space.</em></h2><p className="creative-p">I&apos;ve lived in different countries, worked across time zones, and built things from scratch more times than I can count.</p><p className="creative-p">This website, this work, this story — it&apos;s not a portfolio. It&apos;s proof that when you refuse to be boxed in, interesting things happen.</p></div>
        <div>{['The belief that drives everything|Life is too short to only learn one thing. I want to learn everything I want to learn and I’m not stopping until I do.','On AI & Automation|I run the AI. The AI doesn’t run me. Tools I use with intention, not dependency.','On building in public|I run a media company. I write. I manage campaigns. I share the process honestly because the messy middle is where the real story is.'].map((card)=><div className="creative-card" key={card}><div className="creative-card-label">{card.split('|')[0]}</div><div className="creative-card-text">{card.split('|')[1]}</div></div>)}</div>
      </section>

      <section className="creator-section" id="media">
        <div><div className="eyebrow creator-eyebrow">Creator & Media Founder</div><h2 className="creator-h2">I don&apos;t just manage creators. I <em>am one.</em></h2><p className="creator-p">I run <strong>AI Founder Review</strong>, a media publication covering the people building the future of AI. Founder spotlights, leadership stories, and what it actually takes to build in the AI space.</p><p className="creator-p">I also create across social, sharing real, unfiltered ideas on marketing, operations, and the creator economy.</p><Link href="/media" className="btn-blue">Visit media page →</Link></div>
        <div className="platform-grid">{platforms.map((p,i)=><div className={`platform-card ${i===0?'featured':''}`} key={p.name}><div className="platform-info"><div className="platform-icon-box">{p.icon}</div><div><div className="platform-name">{p.name}</div><div className="platform-handle">{p.handle}</div></div></div><span className="platform-badge">{p.badge}</span></div>)}</div>
      </section>

      <section className="writing-section" id="writing">
  <p className="eyebrow">Featured Writing</p>

  <h2 className="section-h2">
    Things I have actually <em>written.</em>
  </h2>

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
      <h3 className="wc-title">
        Kisa Fatima, Pakistan: Mediterranean Forestry and Natural Resources
        Management (MEDFOR)
      </h3>
      <p className="wc-desc">
        A personal essay on independence, womanhood, and what it means to stop
        seeking permission to exist fully. Written for the Humans of Erasmus
        Mundus series.
      </p>
      <span className="writing-link">Read full piece on EMA →</span>
    </a>

    <div className="writing-quote-card">
      <blockquote>
        A woman&apos;s life is not her own life: it is a life that has been
        established around approval from others.
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
      <h3 className="wc-title">
        The #1 source for AI founder news, leadership and entrepreneurship
      </h3>
      <p className="wc-desc">
        I founded and run this publication spotlighting the people building AI.
        Their stories, decisions, and what it really takes to lead in this
        space.
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
      <h3 className="wc-title">
        On AI, automation, and what it means for the people doing the actual
        work
      </h3>
      <p className="wc-desc">
        Published contributor covering the intersection of artificial
        intelligence, business operations, and human systems.
      </p>
      <span className="writing-link">Read AI Time Journal profile →</span>
    </a>
  </div>
</section>

      <section id="contact" className="cta-section">
        <h2>Let&apos;s build something <em>worth talking about.</em></h2>
        <p>I&apos;m open to collaborations, advisory conversations, and the right full-time opportunities. If you&apos;re building something ambitious and need someone who can actually make it happen, let&apos;s talk.</p>
        <div className="cta-row"><a className="btn-white" href={`mailto:${email}`}>Say hello</a><Link className="btn-outline-white" href="/contact">Contact details</Link></div>
      </section>

      <KisaFooter />
    </main>
  );
}
