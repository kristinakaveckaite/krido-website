"use client";

import { useState } from "react";
import { site } from "@/lib/content";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const data = Object.fromEntries(new FormData(e.currentTarget).entries());

    try {
      // TODO: connect a real backend. Easiest options:
      //  1) Formspree — replace the URL below with your form endpoint.
      //  2) A Next.js route handler at app/api/contact/route.ts.
      //  3) Resend / your email provider.
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section py-20 md:py-28">
      <div className="container-site grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-forest">
            Have questions?
          </p>
          <h2 className="mt-2 font-display text-3xl text-forest md:text-4xl">
            We&apos;d love to hear from you.
          </h2>
          <p className="mt-6 text-muted">
            Give us a call at{" "}
            <a href={site.phoneHref} className="text-forest underline">
              {site.phone}
            </a>{" "}
            or fill out the form and a member of our team will get back to you as
            soon as we can.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            required
            placeholder="Name"
            className="w-full rounded-xl border border-sand bg-white px-4 py-3 outline-none focus:border-forest"
          />
          <input
            name="email"
            type="email"
            required
            placeholder="Email"
            className="w-full rounded-xl border border-sand bg-white px-4 py-3 outline-none focus:border-forest"
          />
          <textarea
            name="message"
            required
            rows={5}
            placeholder="Message"
            className="w-full rounded-xl border border-sand bg-white px-4 py-3 outline-none focus:border-forest"
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className="rounded-full bg-forest px-8 py-3 font-medium text-cream transition hover:bg-forest-dark disabled:opacity-60"
          >
            {status === "sending" ? "Sending…" : "Send Message"}
          </button>
          {status === "sent" && (
            <p className="text-sm text-forest">Thanks — we&apos;ll be in touch soon.</p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-600">
              Something went wrong. Please call us at {site.phone}.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
