import BookNow from "@/components/BookNow";
import { hero } from "@/lib/content";

export default function Hero() {
  return (
    <section className="section bg-white py-4 md:py-5">
      <div className="container-site">
        <div className="flex flex-col items-center gap-5 md:flex-row md:items-stretch md:gap-8"
             style={{ maxHeight: "calc(80vh - 80px)" }}>

          {/* LEFT — portrait video, fills its column height */}
          <div className="w-full shrink-0 overflow-hidden rounded-2xl md:w-[32%] md:rounded-3xl"
               style={{ aspectRatio: "9/16", maxHeight: "calc(80vh - 80px)" }}>
            <video
              className="h-full w-full object-cover object-top"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={hero.videoUrl} type="video/mp4" />
              <source src={hero.videoUrl} type="video/quicktime" />
            </video>
          </div>

          {/* RIGHT — text */}
          <div className="flex w-full flex-col justify-center md:flex-1">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              {hero.eyebrow}
            </p>

            <h1
              className="mt-2 uppercase leading-[0.88] tracking-tight text-ink"
              style={{
                fontFamily: "var(--font-sans)",
                fontVariationSettings: "'wght' 900",
                fontWeight: 900,
                fontSize: "clamp(1.6rem, 3.2vw, 3rem)",
              }}
            >
              {hero.headline.map((line) => (
                <span key={line} className="block">
                  {line.toUpperCase()}
                </span>
              ))}
            </h1>

            <p className="mt-4 max-w-sm text-sm text-muted">
              {hero.sub}
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <BookNow className="rounded-full bg-forest px-6 py-2.5 text-sm font-semibold text-cream transition hover:bg-forest-dark" />
              <a
                href="/what-is-cryo"
                className="rounded-full border border-ink px-6 py-2.5 text-sm font-semibold text-ink transition hover:bg-ink hover:text-cream"
              >
                What is Cryo?
              </a>
            </div>

            <p className="mt-4 text-xs uppercase tracking-[0.15em] text-muted">
              5 ★ Reviews · Licensed staff · St. Petersburg
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
