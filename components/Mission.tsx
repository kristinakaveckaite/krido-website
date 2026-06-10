import Image from "next/image";
import { mission, owner } from "@/lib/content";

export default function Mission() {
  return (
    <section id="about" className="section py-16 md:py-24">
      <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

        {/* LEFT — mission text */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted">
            {mission.eyebrow}
          </p>
          <h2 className="mt-2 font-sans text-3xl font-bold uppercase tracking-wide text-ink md:text-4xl">
            {mission.title}
          </h2>
          <div className="mt-2 h-0.5 w-16 bg-ink" />
          <div className="mt-6 space-y-4 text-muted">
            {mission.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>

        {/* RIGHT — owner photo with decorative corner element */}
        <div className="relative">
          {/* Decorative small nature image, top-left corner */}
          <div className="absolute -left-4 -top-4 z-10 h-24 w-24 overflow-hidden rounded-xl shadow-md md:h-32 md:w-32">
            <Image
              src="https://framerusercontent.com/images/zNb0aHedfOuL7qrQ8e5rokatl0.webp?width=400"
              alt=""
              fill
              sizes="128px"
              className="object-cover"
            />
          </div>
          {/* Main owner photo */}
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src={owner.image}
              alt={owner.name}
              width={600}
              height={800}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="w-full object-cover"
            />
          </div>
          {/* Owner label below photo */}
          <div className="mt-4">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted">
              {owner.eyebrow}
            </p>
            <h3 className="mt-1 font-sans text-2xl font-bold uppercase tracking-wide text-ink">
              {owner.name}
            </h3>
          </div>
        </div>

      </div>
    </section>
  );
}
