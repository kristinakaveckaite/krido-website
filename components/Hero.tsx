import BookNow from "@/components/BookNow";
import { hero } from "@/lib/content";

export default function Hero() {
  return (
    <section className="section bg-white py-6 md:py-10">
      <div className="container-site">
        <div className="flex flex-col items-center gap-6 md:flex-row md:items-stretch md:gap-10 lg:gap-16">

          {/* LEFT — portrait video in its natural 9:16 ratio */}
          <div className="w-full max-w-[340px] self-center md:max-w-none md:w-[38%] lg:w-[36%]">
            <div className="relative overflow-hidden rounded-2xl md:rounded-3xl" style={{ aspectRatio: "9/16" }}>
              <video
                className="absolute inset-0 h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={hero.videoUrl} type="video/mp4" />
                <source src={hero.videoUrl} type="video/quicktime" />
              </video>
            </div>
          </div>

          {/* RIGHT — text content */}
          <div className="flex w-full flex-col justify-center md:w-[62%] lg:w-[64%]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              {hero.eyebrow}
            </p>

            <h1
              className="mt-3 uppercase leading-[0.88] tracking-tight text-ink"
              style={{
                fontFamily: "var(--font-sans)",
                fontVariationSettings: "'wght' 900",
                fontWeight: 900,
                fontSize: "clamp(2.6rem, 6vw, 5.5rem)",
              }}
            >
              {hero.headline.map((line) => (
                <span key={line} className="block">
                  {line.toUpperCase()}
                </span>
              ))}
            </h1>

            <p className="mt-6 max-w-md text-sm text-muted md:text-base">
              {hero.sub}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <BookNow className="rounded-full bg-forest px-8 py-3 font-semibold text-cream transition hover:bg-forest-dark" />
              <a
                href="/what-is-cryo"
                className="rounded-full border border-ink px-8 py-3 font-semibold text-ink transition hover:bg-ink hover:text-cream"
              >
                What is Cryo?
              </a>
            </div>

            <p className="mt-6 text-xs uppercase tracking-[0.15em] text-muted">
              5 ★ Reviews · Licensed staff · St. Petersburg
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
