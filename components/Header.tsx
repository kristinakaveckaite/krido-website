"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/content";

const leftNav = [
  {
    label: "ABOUT",
    children: [
      { label: "What is Cryo?", href: "/what-is-cryo" },
      { label: "Before & Afters", href: "/before-and-afters" },
      { label: "Our Mission", href: "/#about" },
    ],
  },
  { label: "LOCATION", href: "/#visit" },
  {
    label: "SHOP",
    children: [
      { label: "Products", href: "/products" },
      { label: "Memberships", href: "/memberships" },
      { label: "Packages", href: "/packages" },
    ],
  },
];

const PhoneIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
  </svg>
);

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top utility bar — light grey, green text */}
      <div className="bg-gray-100">
        <div className="relative flex items-center justify-center px-5 py-2.5">
          <a
            href={site.instagram}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-forest hover:opacity-80"
          >
            Follow us on INSTAGRAM @kridowellness
          </a>
          <a
            href={site.phoneHref}
            className="absolute right-5 flex items-center gap-2 text-sm font-medium text-forest hover:opacity-80 md:right-10"
          >
            <PhoneIcon />
            {site.phone}
          </a>
        </div>
      </div>

      {/* Desktop nav */}
      <div className="hidden items-center px-10 py-5 md:flex">
        {/* Left nav — ALL CAPS with tracking */}
        <nav className="flex flex-1 items-center gap-8">
          {leftNav.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setDropdown(item.label)}
                onMouseLeave={() => setDropdown(null)}
              >
                <button className="flex items-center gap-1.5 text-sm font-semibold uppercase tracking-[0.15em] text-ink hover:opacity-70">
                  {item.label}
                  <svg className="h-3 w-3" viewBox="0 0 12 8" fill="none">
                    <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </button>
                {dropdown === item.label && (
                  <div className="absolute left-0 top-full z-50 mt-1 w-52 rounded-xl bg-white py-2 shadow-lg ring-1 ring-black/5">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-ink hover:bg-cream"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href!}
                className="text-sm font-semibold uppercase tracking-[0.15em] text-ink hover:opacity-70"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Centered logo — larger */}
        <Link href="/" className="mx-10 shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.svg" alt="KRIDO Wellness" className="h-16 w-auto" />
        </Link>

        {/* Right nav — ALL CAPS pill buttons */}
        <nav className="flex flex-1 items-center justify-end gap-4">
          <Link
            href="/before-and-afters"
            className="rounded-full bg-gray-100 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.15em] text-ink transition hover:bg-gray-200"
          >
            Before &amp; Afters
          </Link>
          <a
            href={site.bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-forest px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.15em] text-cream transition hover:bg-forest-dark"
          >
            Book Now
          </a>
        </nav>
      </div>

      {/* Mobile nav */}
      <div className="flex items-center justify-between px-5 py-3 md:hidden">
        <Link href="/">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.svg" alt="KRIDO Wellness" className="h-10 w-auto" />
        </Link>
        <button
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          className="flex flex-col gap-1.5 p-1"
        >
          <span className="block h-0.5 w-6 bg-ink" />
          <span className="block h-0.5 w-6 bg-ink" />
          <span className="block h-0.5 w-6 bg-ink" />
        </button>
      </div>

      {mobileOpen && (
        <nav className="border-t border-gray-100 bg-white px-5 pb-4 md:hidden">
          <div className="flex flex-col gap-3 pt-3 text-sm font-medium text-ink">
            <Link href="/what-is-cryo" onClick={() => setMobileOpen(false)}>What is Cryo?</Link>
            <Link href="/#visit" onClick={() => setMobileOpen(false)}>Location</Link>
            <Link href="/products" onClick={() => setMobileOpen(false)}>Products</Link>
            <Link href="/memberships" onClick={() => setMobileOpen(false)}>Memberships</Link>
            <Link href="/packages" onClick={() => setMobileOpen(false)}>Packages</Link>
            <Link href="/before-and-afters" onClick={() => setMobileOpen(false)}>Before &amp; Afters</Link>
            <Link href="/blog" onClick={() => setMobileOpen(false)}>Blog</Link>
            <a href={site.bookingUrl} target="_blank" rel="noreferrer"
              className="mt-2 inline-block rounded-full bg-forest px-5 py-2.5 text-center text-sm font-semibold uppercase tracking-widest text-cream">
              Book Now
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
