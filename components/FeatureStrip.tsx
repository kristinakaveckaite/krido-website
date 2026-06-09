import Image from "next/image";
import { features } from "@/lib/content";

export default function FeatureStrip() {
  return (
    <section className="section bg-forest py-16 text-cream">
      <div className="container-site grid gap-4 sm:grid-cols-3">
        {features.map((f) => (
          <div
            key={f.label}
            className="relative aspect-square overflow-hidden rounded-2xl"
          >
            <Image
              src={f.image}
              alt={f.label}
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
            <span className="absolute bottom-5 left-5 font-display text-xl text-cream">
              {f.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
