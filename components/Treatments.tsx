import Link from "next/link";
import Image from "next/image";
import { treatments, treatmentsIntro } from "@/lib/content";

export default function Treatments() {
  return (
    <section id="services" className="section py-16 md:py-24">
      <div className="container-site">
        {/* Heading: centered, all-caps, underline — matching original */}
        <div className="mb-10 text-center">
          <h2 className="inline-block border-b-2 border-ink pb-2 font-sans text-2xl font-bold uppercase tracking-widest text-ink md:text-3xl">
            {treatmentsIntro.title}
          </h2>
          <p className="mt-5 text-sm text-muted md:text-base">{treatmentsIntro.body}</p>
        </div>

        {/* Cards: image tiles with title overlaid at the bottom — matching original */}
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {treatments.map((t) => (
            <Link
              key={t.title}
              href={t.href}
              className="group relative aspect-square overflow-hidden rounded-xl md:rounded-2xl"
            >
              <Image
                src={t.image}
                alt={t.title}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 33vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              {/* Dark gradient at bottom for text legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              {/* Title overlaid at bottom-left */}
              <div className="absolute bottom-0 left-0 p-4 md:p-5">
                <h3 className="font-sans text-sm font-bold uppercase tracking-wide text-white md:text-base lg:text-lg">
                  {t.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
