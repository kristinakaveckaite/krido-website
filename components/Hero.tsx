import { hero } from "@/lib/content";
import BookNow from "@/components/BookNow";

export default function Hero() {
  return (
    <section className="relative flex min-h-[88vh] items-center overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster=""
      >
        <source src={hero.videoUrl} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/40" />

      <div className="container-site section relative z-10 text-cream">
        <p className="mb-4 text-sm uppercase tracking-[0.2em] text-cream/90">
          {hero.eyebrow}
        </p>
        <h1 className="max-w-3xl font-display text-4xl leading-tight sm:text-5xl md:text-6xl">
          {hero.headline.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h1>
        <p className="mt-6 max-w-xl text-lg text-cream/90">{hero.sub}</p>
        <p className="mt-2 max-w-xl text-sm uppercase tracking-wide text-cream/70">
          {hero.note}
        </p>
        <BookNow className="mt-8 inline-block rounded-full bg-cream px-8 py-3 font-medium text-forest transition hover:bg-white" />
      </div>
    </section>
  );
}
