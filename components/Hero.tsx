import BookNow from "@/components/BookNow";
import { hero } from "@/lib/content";

export default function Hero() {
  return (
    <section className="section bg-white py-4 md:py-6">
      <div className="container-site">
        <div className="flex flex-col gap-5 md:flex-row md:items-stretch md:gap-10">

          {/* LEFT — portrait video */}
          <div className="mx-auto w-full max-w-[300px] shrink-0 overflow-hidden rounded-2xl md:mx-0 md:w-[30%] md:max-w-none md:rounded-3xl"
               style={{ aspectRatio: "9/16" }}>
            <video className="h-full w-full object-cover object-top"
              autoPlay muted loop playsInline>
              <source src={hero.videoUrl} type="video/mp4" />
              <source src={hero.videoUrl} type="video/quicktime" />
            </video>
          </div>

          {/* RIGHT — full height flex column, space-between */}
          <div className="flex w-full flex-col justify-between py-2 md:flex-1">
            {/* Top badge */}
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted">
              {hero.eyebrow}
            </p>

            {/* Centre — main headline */}
            <div>
              <h1 className="uppercase leading-[0.88] tracking-tight text-ink"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontVariationSettings: "'wght' 900",
                  fontWeight: 900,
                  fontSize: "clamp(2rem, 4vw, 4rem)",
                }}>
                {hero.headline.map((line) => (
                  <span key={line} className="block">{line.toUpperCase()}</span>
                ))}
              </h1>
              <p className="mt-5 max-w-sm text-sm text-muted md:text-base">
                {hero.sub}
              </p>
            </div>

            {/* Bottom — CTAs + trust line */}
            <div>
              <div className="flex flex-wrap gap-3">
                <BookNow className="rounded-full bg-forest px-7 py-3 text-sm font-semibold text-cream transition hover:bg-forest-dark" />
                <a href="/what-is-cryo"
                  className="rounded-full border border-ink px-7 py-3 text-sm font-semibold text-ink transition hover:bg-ink hover:text-cream">
                  What is Cryo?
                </a>
              </div>
              <p className="mt-5 text-xs uppercase tracking-[0.15em] text-muted">
                5 ★ Reviews · Licensed Staff · St. Petersburg
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
