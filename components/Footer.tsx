import Link from "next/link";
import { site } from "@/lib/content";
import BookNow from "@/components/BookNow";

const aboutLinks = [
  { label: "What is Cryo?", href: "/what-is-cryo" },
  { label: "Before & Afters", href: "/before-and-afters" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/#contact" },
  { label: "Blog", href: "/blog" },
];

const serviceLinks = [
  { label: "Cryo Services", href: "/cryo-services" },
  { label: "Facials", href: "/facials" },
  { label: "Brows & Lashes", href: "/brows-and-lashes" },
  { label: "Permanent Makeup", href: "/permanent-makeup" },
  { label: "Memberships", href: "/memberships" },
  { label: "Packages", href: "/packages" },
];

export default function Footer() {
  return (
    <>
      {/* Footer */}
      <footer className="section bg-forest py-16 text-cream">
        <div className="container-site grid gap-10 md:grid-cols-4">
          <div>
            <Link href="/" className="font-display text-2xl">
              KRIDO
            </Link>
            <p className="mt-4 text-sm text-cream/80">{site.hours}</p>
            <a
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-block text-sm text-cream/80 hover:opacity-80"
            >
              Instagram
            </a>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-wide text-cream/70">
              Location
            </h4>
            <address className="mt-4 space-y-1 text-sm not-italic text-cream/80">
              <p>{site.address.line1}</p>
              <p>{site.address.line2}</p>
              <p>{site.address.cityState}</p>
              <a href={site.phoneHref} className="block hover:opacity-80">
                {site.phone}
              </a>
            </address>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-wide text-cream/70">
              About Us
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-cream/80">
              {aboutLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:opacity-80">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-wide text-cream/70">
              Services
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-cream/80">
              {serviceLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:opacity-80">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="container-site mt-12 border-t border-white/10 pt-6 text-xs text-cream/60">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </div>
      </footer>
    </>
  );
}
