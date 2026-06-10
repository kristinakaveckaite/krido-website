import Link from "next/link";
import Image from "next/image";
import { treatments, treatmentsIntro } from "@/lib/content";

export default function Treatments() {
  return (
    <section id="services" className="section py-16 md:py-24">
      <div className="container-site">
        <div className="mb-10 text-center">
          <h2 className="inline-block border-b-2 border-ink pb-2 font-sans text-2xl font-bold uppercase tracking-widest text-ink md:text-3xl">
            {treatmentsIntro.title}
          </h2>
          <p className="mt-5 text-sm text-muted md:text-base">{treatmentsIntro.body}</p>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {treatments.map((t) => (
            <Link key={t.title} href={t.href}
              className="group relative aspect-square overflow-hidden rounded-xl md:rounded-2xl">
              <Image src={t.image} alt={t.title} fill
                sizes="(max-width: 640px) 50vw, 33vw"
                className="object-cover transition duration-500 group-hover:scale-105 group-hover:blur-[2px]" />

              {/* DEFAULT: gradient + title at bottom */}
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/65 via-black/10 to-transparent p-4 transition-opacity duration-300 group-hover:opacity-0 md:p-5">
                <h3 className="font-sans text-sm font-semibold uppercase tracking-widest text-white md:text-base lg:text-lg">
                  {t.title}
                </h3>
                <div className="mt-1.5 h-px w-full bg-white/40" />
              </div>

              {/* HOVER: frosted overlay with list */}
              <div className="absolute inset-0 flex flex-col justify-between bg-black/55 p-4 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100 md:p-6">
                <div>
                  <h3 className="font-sans text-sm font-semibold uppercase tracking-widest text-white md:text-base lg:text-lg">
                    {t.title}
                  </h3>
                  <div className="mt-2 h-px w-full bg-white/40" />
                  <ul className="mt-3 space-y-1.5">
                    {t.lines.map((line) => (
                      <li key={line} className="text-sm text-white/90 md:text-base">{line}</li>
                    ))}
                  </ul>
                </div>
                <span className="font-sans text-sm font-semibold uppercase tracking-widest text-cream md:text-base">
                  Learn More →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
