import Image from "next/image";
import { location } from "@/lib/content";

export default function Location() {
  return (
    <section id="visit" className="section bg-forest py-20 text-cream md:py-28">
      <div className="container-site grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-cream/80">
            {location.eyebrow}
          </p>
          <h2 className="mt-2 font-display text-3xl md:text-4xl">
            {location.title}
          </h2>
          <div className="mt-6 space-y-4 text-cream/90">
            {location.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
          <Image
            src={location.image}
            alt="KRIDO Wellness location"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
