import { NextResponse } from "next/server";
import { site } from "@/lib/site";

const WINDOW_MS = 60_000;
const MAX_REQUESTS = 5;
const hits = new Map<string, { count: number; start: number }>();

function rateLimited(ip: string) {
  const now = Date.now();
  const item = hits.get(ip);
  if (!item || now - item.start > WINDOW_MS) {
    hits.set(ip, { count: 1, start: now });
    return false;
  }
  item.count += 1;
  return item.count > MAX_REQUESTS;
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for") || "local";
  if (rateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  const body = await request.json().catch(() => null);
  if (!body || body.website) {
    return NextResponse.json({ ok: true });
  }

  const { name, email, message } = body;
  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({
      ok: true,
      mode: "demo",
      message: `Demo mode: configure RESEND_API_KEY to deliver messages to ${site.email}.`
    });
  }

  return NextResponse.json({ ok: true });
}
