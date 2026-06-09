import { hero } from "@/lib/content";

export default function Hero() {
  return (
    /* Outer section has horizontal padding so the video sits inset with rounded corners */
    <section className="bg-white px-4 pb-6 pt-4 md:px-6">
      <div className="relative h-[58vh] min-h-[400px] overflow-hidden rounded-2xl md:h-[68vh] md:rounded-3xl">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={hero.videoUrl} type="video/mp4" />
        </video>
        {/* Gradient stronger on right so white text stays readable */}
        <div className="absolute inset-0 bg-gradient-to-l from-black/65 via-black/25 to-transparent" />

        {/* Text — right side, ALL CAPS, matching original */}
        <div className="absolute inset-0 flex items-center justify-end px-8 md:px-14">
          <div className="max-w-lg text-right text-white">
            <h1 className="font-sans text-4xl font-black uppercase leading-none tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              {hero.headline.map((line) => (
                <span key={line} className="block">
                  {line.toUpperCase()}
                </span>
              ))}
            </h1>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
              {hero.eyebrow}
            </p>
            <p className="mt-1 text-xs font-medium uppercase tracking-[0.15em] text-white/75">
              {hero.sub}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
