"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/content";
import BookNow from "@/components/BookNow";

const leftNav = [
  {
    label: "About",
    href: "#",
    children: [
      { label: "What is Cryo?", href: "/what-is-cryo" },
      { label: "Before & Afters", href: "/before-and-afters" },
      { label: "Our Mission", href: "/#about" },
    ],
  },
  { label: "Location", href: "/#visit" },
  {
    label: "Shop",
    href: "#",
    children: [
      { label: "Products", href: "/products" },
      { label: "Memberships", href: "/memberships" },
      { label: "Packages", href: "/packages" },
    ],
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top utility bar */}
      <div className="border-b border-gray-100 bg-white text-xs text-ink">
        <div className="container-site section flex items-center justify-between py-2">
          <a
            href={site.instagram}
            target="_blank"
            rel="noreferrer"
            className="tracking-wide hover:opacity-70"
          >
            Follow us on INSTAGRAM @kridowellness
          </a>
          <a href={site.phoneHref} className="hover:opacity-70">
            {site.phone}
          </a>
        </div>
      </div>

      {/* Main nav — split layout with centered logo */}
      <div className="container-site section hidden items-center py-4 md:flex">
        {/* Left nav */}
        <nav className="flex flex-1 items-center gap-7 text-sm font-medium text-ink">
          {leftNav.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setDropdown(item.label)}
                onMouseLeave={() => setDropdown(null)}
              >
                <button className="flex items-center gap-1 hover:opacity-70">
                  {item.label}
                  <svg className="h-3 w-3" viewBox="0 0 12 8" fill="none">
                    <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
                {dropdown === item.label && (
                  <div className="absolute left-0 top-full z-50 mt-1 w-48 rounded-xl bg-white py-2 shadow-lg ring-1 ring-black/5">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-ink hover:bg-cream"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={item.label} href={item.href} className="hover:opacity-70">
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Centered logo */}
        <Link
          href="/"
          className="mx-8 flex flex-col items-center leading-none"
        >
          <span className="font-sans text-2xl font-bold tracking-[0.15em] text-ink">
            KRIDO
          </span>
          <span className="font-sans text-[10px] font-medium tracking-[0.3em] text-ink">
            WELLNESS
          </span>
        </Link>

        {/* Right nav */}
        <nav className="flex flex-1 items-center justify-end gap-6 text-sm font-medium text-ink">
          <Link href="/before-and-afters" className="rounded-full bg-gray-200 px-5 py-2 text-sm font-medium text-ink transition hover:bg-gray-300">
            Before &amp; Afters
          </Link>
          <BookNow className="rounded-full bg-forest px-5 py-2 text-sm font-medium text-cream transition hover:bg-forest-dark" />
        </nav>
      </div>

      {/* Mobile nav */}
      <div className="flex items-center justify-between px-5 py-4 md:hidden">
        <Link href="/" className="flex flex-col items-center leading-none">
          <span className="font-sans text-xl font-bold tracking-[0.15em] text-ink">KRIDO</span>
          <span className="font-sans text-[9px] font-medium tracking-[0.3em] text-ink">WELLNESS</span>
        </Link>
        <button
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          className="flex flex-col gap-1.5"
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
            <BookNow className="mt-1 inline-block rounded-full bg-forest px-5 py-2 text-center text-sm font-medium text-cream" />
          </div>
        </nav>
      )}
    </header>
  );
}
