import Image from "next/image";
import { mission, owner } from "@/lib/content";

export default function Mission() {
  return (
    <section id="about" className="section py-20 md:py-28">
      <div className="container-site grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-forest">
            {mission.eyebrow}
          </p>
          <h2 className="mt-2 font-display text-3xl text-forest md:text-4xl">
            {mission.title}
          </h2>
          <div className="mt-6 space-y-4 text-muted">
            {mission.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
          <Image
            src={mission.image}
            alt="KRIDO Wellness treatment"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>

      <div className="container-site mt-20 grid items-center gap-12 lg:grid-cols-2">
        <div className="relative order-2 aspect-[3/4] overflow-hidden rounded-2xl lg:order-1">
          <Image
            src={owner.image}
            alt={owner.name}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="order-1 lg:order-2">
          <p className="text-sm uppercase tracking-[0.2em] text-forest">
            {owner.eyebrow}
          </p>
          <h3 className="mt-2 font-display text-3xl text-forest md:text-4xl">
            {owner.name}
          </h3>
        </div>
      </div>
    </section>
  );
}
