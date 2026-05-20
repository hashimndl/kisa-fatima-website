"use client";

import { useState } from "react";
import Icon from "@/components/Icon";

export default function NewsletterForm() {
  const [status, setStatus] = useState("");

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("Submitting...");
    const form = new FormData(event.currentTarget);

    const res = await fetch("/api/newsletter", {
      method: "POST",
      body: JSON.stringify({
        email: form.get("email"),
        website: form.get("website")
      })
    });

    setStatus(res.ok ? "Thank you — you’re on the list." : "Something went wrong. Please try again.");
    if (res.ok) event.currentTarget.reset();
  }

  return (
    <form onSubmit={submit}>
      <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-white/40">Newsletter</p>
      <p className="text-sm leading-7 text-white/60">
        Thoughts on strategy, media and leadership. Straight to your inbox.
      </p>
      <input name="website" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <div className="mt-5 flex border border-white/20">
        <input
          name="email"
          type="email"
          required
          aria-label="Email"
          placeholder="Your email"
          className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-white/35"
        />
        <button className="bg-ivory px-4 text-[#111712]" aria-label="Submit newsletter email">
          <Icon name="arrow" size={18} />
        </button>
      </div>
      {status ? <p className="mt-3 text-xs text-white/55">{status}</p> : null}
    </form>
  );
}
