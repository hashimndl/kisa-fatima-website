import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/lib/site";

export const metadata: Metadata = {
  title: "Insights",
  description: "Articles and perspectives on PR, executive branding, founder visibility, media strategy and leadership."
};

export default function Insights() {
  return (
    <main>
      <section className="mx-auto max-w-6xl section-pad">
        <p className="eyebrow mb-5">Insights</p>
        <h1 className="font-serif text-5xl leading-tight tracking-[-0.04em] md:text-7xl">
          Ideas on visibility, leadership and narrative strategy.
        </h1>
        <div className="mt-16 grid gap-6">
          {posts.map((post) => (
            <Link key={post.slug} href={`/insights/${post.slug}`} className="grid gap-6 border-t border-black/10 py-8 md:grid-cols-[180px_1fr]">
              <p className="text-xs uppercase tracking-[0.18em] text-black/45">{post.date} · {post.readTime}</p>
              <div>
                <h2 className="font-serif text-3xl">{post.title}</h2>
                <p className="mt-4 max-w-2xl leading-7 text-black/65">{post.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
