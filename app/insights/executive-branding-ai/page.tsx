import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/lib/site";

const post = posts.find((item) => item.slug === "executive-branding-ai");

export const metadata: Metadata = {
  title: post?.title || "The Future of Executive Branding in the AI Era",
  description: post?.description
};

export default function InsightArticle() {
  return (
    <main>
      <article className="mx-auto max-w-3xl section-pad">
        <Link href="/insights" className="text-sm font-semibold text-olive">← Back to insights</Link>
        <p className="eyebrow mt-10 mb-5">Insight</p>
        <h1 className="font-serif text-5xl leading-tight tracking-[-0.04em] md:text-6xl">The Future of Executive Branding in the AI Era</h1>
        <p className="mt-5 text-sm uppercase tracking-[0.18em] text-black/45">{post?.date} · {post?.readTime}</p>
        <div className="prose-brand mt-10 text-lg">
          <p>{post?.description}</p>
          <h2>The central idea</h2>
          <p>
            Strong visibility is not simply about being seen. It is about being understood, remembered and trusted by the right audience.
          </p>
          <p>
            For founders and leaders, this means connecting expertise to proof, values, timing and distribution. A clear narrative makes every media placement, speaking invitation and social post work harder.
          </p>
          <h2>What leaders should do next</h2>
          <p>
            Clarify the category you want to own, define the audience you need to reach, document your proof points and build a consistent publishing rhythm.
          </p>
        </div>
      </article>
    </main>
  );
}
