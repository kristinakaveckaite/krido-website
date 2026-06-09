import { hero } from "@/lib/content";
import BookNow from "@/components/BookNow";

export default function Hero() {
  return (
    <section className="relative h-[60vh] min-h-[420px] overflow-hidden md:h-[70vh]">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={hero.videoUrl} type="video/mp4" />
      </video>
      {/* Gradient: subtle on left, stronger on right to keep text readable */}
      <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-black/20 to-black/10" />

      {/* Text block — right-aligned, matching original */}
      <div className="absolute inset-0 flex items-center justify-end">
        <div className="section container-site flex justify-end">
          <div className="max-w-lg text-right text-cream">
            <h1 className="font-sans text-4xl font-black uppercase leading-none tracking-tight sm:text-5xl md:text-6xl">
              {hero.headline.map((line) => (
                <span key={line} className="block">
                  {line.toUpperCase()}
                </span>
              ))}
            </h1>
            <p className="mt-4 text-sm uppercase tracking-[0.15em] text-cream/90">
              {hero.eyebrow}
            </p>
            <p className="mt-1 text-sm uppercase tracking-[0.1em] text-cream/80">
              {hero.sub}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
