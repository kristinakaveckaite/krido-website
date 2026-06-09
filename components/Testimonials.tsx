"use client";

import Link from "next/link";
import { useRef } from "react";
import { testimonials } from "@/lib/content";

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    trackRef.current?.scrollBy({ left: dir * 360, behavior: "smooth" });
  };

  return (
    <section className="section bg-sand py-20 md:py-28">
      <div className="container-site">
        <p className="text-sm uppercase tracking-[0.2em] text-forest">
          5-star reviews
        </p>
        <div className="mt-2 flex items-end justify-between gap-4">
          <h2 className="font-display text-3xl text-forest md:text-4xl">
            Our clients love their results
          </h2>
          <div className="hidden gap-2 md:flex">
            <button
              onClick={() => scroll(-1)}
              aria-label="Previous"
              className="h-10 w-10 rounded-full border border-forest text-forest transition hover:bg-forest hover:text-cream"
            >
              ←
            </button>
            <button
              onClick={() => scroll(1)}
              aria-label="Next"
              className="h-10 w-10 rounded-full border border-forest text-forest transition hover:bg-forest hover:text-cream"
            >
              →
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="mt-10 flex snap-x gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="w-[320px] shrink-0 snap-start rounded-2xl bg-cream p-7 shadow-sm"
            >
              <div className="mb-3 text-forest">★★★★★</div>
              <blockquote className="text-sm leading-relaxed text-ink/80">
                {t.quote}
              </blockquote>
              <figcaption className="mt-5 font-display text-forest">
                {t.name}
              </figcaption>
            </figure>
          ))}
        </div>

        <Link
          href="/before-and-afters"
          className="mt-8 inline-block rounded-full border border-forest px-7 py-3 font-medium text-forest transition hover:bg-forest hover:text-cream"
        >
          Before & After Photos
        </Link>
      </div>
    </section>
  );
}
