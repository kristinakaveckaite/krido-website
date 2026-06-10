"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import { testimonials } from "@/lib/content";

const GoogleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const avatarColors = ["bg-forest","bg-gray-700","bg-stone-600","bg-teal-700","bg-slate-600","bg-emerald-800","bg-zinc-600","bg-neutral-700"];
const initials = (name: string) => name.split(" ").map(n => n[0]).join("").slice(0,2).toUpperCase();

export default function Testimonials() {
  const [page, setPage] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const PER_PAGE = 4;
  const totalPages = Math.ceil(testimonials.length / PER_PAGE);

  function goTo(p: number) {
    const next = Math.max(0, Math.min(p, totalPages - 1));
    setPage(next);
    trackRef.current?.scrollTo({ left: next * trackRef.current.clientWidth, behavior: "smooth" });
  }

  return (
    <section className="section py-16 md:py-24">
      <div className="container-site">
        <div className="relative overflow-hidden rounded-3xl bg-gray-50">
          {/* Corner texture blocks — ice top-left, leaf bottom-right */}
          <div className="pointer-events-none absolute left-0 top-0 h-40 w-44 overflow-hidden md:h-56 md:w-64">
            <img src="https://framerusercontent.com/images/HMmZxAZOrlq5Nc5mnb4URVayPK4.webp?width=500"
              alt="" className="h-full w-full object-cover opacity-70" />
          </div>
          <div className="pointer-events-none absolute bottom-0 right-0 h-44 w-48 overflow-hidden md:h-64 md:w-72">
            <img src="https://framerusercontent.com/images/zNb0aHedfOuL7qrQ8e5rokatl0.webp?width=500"
              alt="" className="h-full w-full object-cover opacity-60" />
          </div>

          <div className="relative px-6 py-12 md:px-14 md:py-16">
            {/* Heading */}
            <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-muted">
              5 Star Reviews
            </p>
            <h2 className="mt-3 text-center font-sans text-2xl font-bold uppercase tracking-wide text-ink md:text-4xl">
              Our Clients Love Their Results
            </h2>
            <div className="mx-auto mt-3 h-0.5 w-20 bg-ink" />

            {/* Cards */}
            <div ref={trackRef} className="mt-12 flex overflow-x-hidden">
              {Array.from({ length: totalPages }).map((_, pi) => (
                <div key={pi} className="flex w-full shrink-0 gap-5">
                  {testimonials.slice(pi * PER_PAGE, pi * PER_PAGE + PER_PAGE).map((t, i) => (
                    <div key={t.name}
                      className="flex min-w-0 flex-1 flex-col rounded-2xl bg-white p-5 shadow-md">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white ${avatarColors[i % avatarColors.length]}`}>
                            {initials(t.name)}
                          </div>
                          <span className="font-sans text-base font-semibold text-ink">{t.name}</span>
                        </div>
                        <GoogleIcon />
                      </div>
                      <div className="mt-3 flex gap-0.5">
                        {[...Array(5)].map((_, si) => (
                          <svg key={si} className="h-4 w-4 fill-yellow-400" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                          </svg>
                        ))}
                      </div>
                      <p className="mt-4 text-sm leading-relaxed text-muted line-clamp-5">
                        &ldquo;{t.quote}&rdquo;
                      </p>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Dots */}
            <div className="mt-10 flex justify-center gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button key={i} onClick={() => goTo(i)} aria-label={`Page ${i+1}`}
                  className={`h-2 rounded-full transition-all ${i === page ? "w-6 bg-forest" : "w-2 bg-gray-300"}`} />
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8 text-center">
              <Link href="/before-and-afters"
                className="inline-block rounded-full bg-forest px-10 py-3.5 font-sans text-sm font-semibold uppercase tracking-widest text-cream transition hover:bg-forest-dark">
                Before &amp; After Photos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
