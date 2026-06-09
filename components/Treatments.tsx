import Link from "next/link";
import Image from "next/image";
import { treatments, treatmentsIntro } from "@/lib/content";

export default function Treatments() {
  return (
    <section id="services" className="section py-20 md:py-28">
      <div className="container-site">
        <div className="mb-12 max-w-2xl">
          <h2 className="font-display text-3xl text-forest md:text-4xl">
            {treatmentsIntro.title}
          </h2>
          <p className="mt-4 text-muted">{treatmentsIntro.body}</p>
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
                <h3 className="font-display text-xl text-forest">{t.title}</h3>
                <ul className="mt-3 flex-1 space-y-1 text-sm text-muted">
                  {t.lines.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
                <span className="mt-5 text-sm font-medium text-forest group-hover:underline">
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
