"use client";

import Link from "next/link";
import { useState } from "react";
import { nav, site } from "@/lib/content";
import BookNow from "@/components/BookNow";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-forest text-cream">
      {/* Top utility bar */}
      <div className="border-b border-white/10 text-xs">
        <div className="container-site section flex items-center justify-between py-2">
          <a
            href={site.instagram}
            className="tracking-wide hover:opacity-80"
            target="_blank"
            rel="noreferrer"
          >
            Follow us on Instagram @kridowellness
          </a>
          <a href={site.phoneHref} className="hover:opacity-80">
            {site.phone}
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="container-site section flex items-center justify-between py-4">
        <Link href="/" className="font-display text-2xl tracking-tight">
          KRIDO
        </Link>

        <nav className="hidden items-center gap-7 text-sm md:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:opacity-80">
              {item.label}
            </Link>
          ))}
          <BookNow className="rounded-full bg-cream px-5 py-2 font-medium text-forest transition hover:bg-white" />
        </nav>

        <button
          className="md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-0.5 w-6 bg-cream" />
          <span className="mt-1.5 block h-0.5 w-6 bg-cream" />
          <span className="mt-1.5 block h-0.5 w-6 bg-cream" />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-white/10 md:hidden">
          <div className="container-site section flex flex-col gap-1 py-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-2"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <BookNow className="mt-2 rounded-full bg-cream px-5 py-2 text-center font-medium text-forest" />
          </div>
        </nav>
      )}
    </header>
  );
}
