"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { bestSellers, site } from "@/lib/content";

export default function BestSellers() {
  const [activeIdx, setActiveIdx] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const VISIBLE = 3; // cards visible at once on desktop
  const total = bestSellers.length;
  const maxIdx = total - VISIBLE;

  function goTo(idx: number) {
    const clamped = Math.max(0, Math.min(idx, maxIdx));
    setActiveIdx(clamped);
    trackRef.current?.scrollTo({
      left: clamped * (trackRef.current.scrollWidth / total),
      behavior: "smooth",
    });
  }

  return (
    <section className="section py-16 md:py-24">
      <div className="container-site">
        {/* Heading */}
        <div className="mb-10 text-center">
          <h2 className="inline-block border-b-2 border-ink pb-2 font-sans text-2xl font-bold uppercase tracking-widest text-ink md:text-3xl">
            KRIDO Best Sellers
          </h2>
        </div>

        {/* Carousel track */}
        <div
          ref={trackRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {bestSellers.map((product) => (
            <a
              key={product.name}
              href={product.href}
              target="_blank"
              rel="noreferrer"
              className="group w-[70vw] max-w-[280px] shrink-0 snap-start sm:w-[45vw] md:w-[calc(33.333%-11px)]"
            >
              {/* Product image */}
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-50">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 70vw, (max-width: 768px) 45vw, 280px"
                  className="object-contain p-6 transition duration-500 group-hover:scale-105"
                />
              </div>
              {/* Product name */}
              <p className="mt-3 text-center font-sans text-xs font-semibold uppercase tracking-widest text-ink">
                {product.name}
              </p>
            </a>
          ))}
        </div>

        {/* Dots + arrow */}
        <div className="mt-6 flex items-center justify-center gap-3">
          {Array.from({ length: maxIdx + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === activeIdx ? "w-5 bg-forest" : "w-2 bg-gray-300"
              }`}
            />
          ))}
          <button
            onClick={() => goTo(activeIdx + 1)}
            disabled={activeIdx >= maxIdx}
            aria-label="Next"
            className="ml-2 flex h-8 w-8 items-center justify-center rounded-full border border-ink text-sm font-bold text-ink transition hover:bg-ink hover:text-cream disabled:opacity-30"
          >
            ›
          </button>
        </div>

        {/* View All button */}
        <div className="mt-8 text-center">
          <a
            href={site.shopUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-block rounded-full bg-forest px-10 py-3 font-sans text-sm font-semibold uppercase tracking-widest text-cream transition hover:bg-forest-dark"
          >
            View All
          </a>
        </div>
      </div>
    </section>
  );
}
