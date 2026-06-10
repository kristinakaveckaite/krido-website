"use client";
import { useState } from "react";
import { site } from "@/lib/content";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle"|"sending"|"sent"|"error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch { setStatus("error"); }
  }

  return (
    <>
      {/* Contact section */}
      <section id="contact" className="section py-16 md:py-24">
        <div className="container-site grid items-start gap-12 lg:grid-cols-2 lg:gap-20">

          {/* LEFT */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted">
              Have Questions?
            </p>
            <h2 className="mt-2 font-sans text-3xl font-bold uppercase leading-tight tracking-wide text-ink md:text-4xl lg:text-5xl">
              We Would Love To Hear From You.
            </h2>
            <div className="mt-3 h-0.5 w-16 bg-ink" />
            <p className="mt-6 text-muted">
              Give us a call at{" "}
              <a href={site.phoneHref} className="font-semibold text-forest hover:underline">
                {site.phone}
              </a>{" "}
              or fill out the form and a member of our team will get back to you as soon as we can.
            </p>
            {/* Decorative image */}
            <div className="mt-8 w-48 overflow-hidden rounded-xl opacity-90 md:w-56">
              <img
                src="https://framerusercontent.com/images/kDJDHqG7tuJRGRgjSxfLWohOG4c.png?width=600"
                alt=""
                className="w-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT — form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-ink">
                Name
              </label>
              <input name="name" required placeholder="Name"
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-forest" />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-ink">
                Email
              </label>
              <input name="email" type="email" required placeholder="Email"
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-forest" />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-ink">
                Message
              </label>
              <textarea name="message" required rows={5} placeholder="Message"
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-forest" />
            </div>
            <div className="flex justify-end">
              <button type="submit" disabled={status === "sending"}
                className="rounded-full bg-forest px-8 py-3 text-sm font-semibold uppercase tracking-widest text-cream transition hover:bg-forest-dark disabled:opacity-60">
                {status === "sending" ? "Sending…" : "Send Message"}
              </button>
            </div>
            {status === "sent" && <p className="text-sm text-forest">Thanks — we'll be in touch soon.</p>}
            {status === "error" && <p className="text-sm text-red-600">Something went wrong. Please call {site.phone}.</p>}
          </form>

        </div>
      </section>

      {/* CTA band — "Start Your Transformation" */}
      <section className="section py-0">
        <div className="container-site">
          <div className="relative overflow-hidden rounded-2xl md:rounded-3xl">
            {/* Background water droplet image */}
            <img
              src="https://framerusercontent.com/images/zNb0aHedfOuL7qrQ8e5rokatl0.webp?width=1200"
              alt="" aria-hidden
              className="absolute inset-0 h-full w-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/40" />
            {/* Content */}
            <div className="relative flex flex-col items-center px-8 py-16 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted">
                Visible Results. Zero Downtime.
              </p>
              <h2 className="mt-3 font-sans text-3xl font-bold uppercase tracking-widest text-ink md:text-4xl">
                Start Your Transformation
              </h2>
              <a href={site.bookingUrl} target="_blank" rel="noreferrer"
                className="mt-8 inline-block rounded-full bg-forest px-10 py-3 text-sm font-semibold uppercase tracking-widest text-cream transition hover:bg-forest-dark">
                Book Today
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
