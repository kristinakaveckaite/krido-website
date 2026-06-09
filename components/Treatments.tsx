import Link from "next/link";
import Image from "next/image";
import { treatments, treatmentsIntro } from "@/lib/content";

export default function Treatments() {
  return (
    <section id="services" className="section py-20 md:py-28">
      <div className="container-site">
        {/* Heading matches original: centered, all-caps, with underline */}
        <div className="mb-12 text-center">
          <h2 className="inline-block border-b-2 border-ink pb-2 font-sans text-2xl font-bold uppercase tracking-widest text-ink md:text-3xl">
            {treatmentsIntro.title}
          </h2>
          <p className="mt-5 text-muted">{treatmentsIntro.body}</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {treatments.map((t) => (
            <Link
              key={t.title}
              href={t.href}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-md"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={t.image}
                  alt={t.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-sans text-xl font-bold text-forest">{t.title}</h3>
                <ul className="mt-3 flex-1 space-y-1 text-sm text-muted">
                  {t.lines.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
                <span className="mt-5 text-sm font-semibold text-forest group-hover:underline">
                  Learn more →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
