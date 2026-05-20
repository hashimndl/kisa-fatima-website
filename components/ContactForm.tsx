"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("Sending...");
    const form = new FormData(event.currentTarget);

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: form.get("name"),
        email: form.get("email"),
        message: form.get("message"),
        website: form.get("website")
      })
    });

    setStatus(res.ok ? "Message sent. Kisa will get back to you soon." : "Something went wrong. Please try again.");
    if (res.ok) event.currentTarget.reset();
  }

  return (
    <form onSubmit={submit} className="mt-10 grid gap-5">
      <input name="website" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <label className="grid gap-2 text-sm font-semibold">
        Name
        <input name="name" required className="border border-black/15 bg-white/60 px-4 py-3 font-normal outline-none focus:border-olive" />
      </label>
      <label className="grid gap-2 text-sm font-semibold">
        Email
        <input name="email" type="email" required className="border border-black/15 bg-white/60 px-4 py-3 font-normal outline-none focus:border-olive" />
      </label>
      <label className="grid gap-2 text-sm font-semibold">
        Message
        <textarea name="message" required rows={7} className="border border-black/15 bg-white/60 px-4 py-3 font-normal outline-none focus:border-olive" />
      </label>
      <button className="bg-forest px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white transition hover:bg-olive">
        Send Message
      </button>
      {status ? <p className="text-sm text-black/60">{status}</p> : null}
    </form>
  );
}
