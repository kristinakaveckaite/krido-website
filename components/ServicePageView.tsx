import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import FaqAccordion from "@/components/FaqAccordion";
import BeforeAfterGallery from "@/components/BeforeAfterGallery";
import BookNow from "@/components/BookNow";
import type { ServicePage } from "@/lib/services";

export default function ServicePageView({ data }: { data: ServicePage }) {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative flex min-h-[70vh] items-center overflow-hidden">
          <Image
            src={data.heroImage}
            alt={data.heroTitle}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/45" />
          <div className="container-site section relative z-10 text-cream">
            <h1 className="max-w-3xl font-display text-4xl leading-tight sm:text-5xl md:text-6xl">
              {data.heroTitle}
            </h1>
            <p className="mt-5 max-w-xl text-lg text-cream/90">{data.heroSub}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <BookNow className="rounded-full bg-cream px-8 py-3 font-medium text-forest transition hover:bg-white" />
              <a
                href="/what-is-cryo"
                className="rounded-full border border-cream px-8 py-3 font-medium text-cream transition hover:bg-cream hover:text-forest"
              >
                What is Cryo?
              </a>
            </div>
            <p className="mt-6 text-sm uppercase tracking-wide text-cream/70">
              {data.badges}
            </p>
          </div>
        </section>

        {/* 3-step explainer */}
        <section className="section py-20 md:py-28">
          <div className="container-site">
            <h2 className="mb-12 max-w-2xl font-display text-3xl text-forest md:text-4xl">
              {data.sectionTitle}
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {data.steps.map((step) => (
                <div key={step.title} className="overflow-hidden rounded-2xl bg-white shadow-sm">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl text-forest">{step.title}</h3>
                    <p className="mt-2 text-muted">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Treatments */}
        <section id="services" className="section bg-sand py-20 md:py-28">
          <div className="container-site">
            <p className="text-sm uppercase tracking-[0.2em] text-forest">
              Choose your goal
            </p>
            <h2 className="mt-2 font-display text-3xl text-forest md:text-4xl">
              Body Fat Reduction & Skin Tightening
            </h2>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {data.treatments.map((t) => (
                <div
                  key={t.name}
                  className="flex flex-col rounded-2xl bg-cream p-7 shadow-sm"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-2xl text-forest">{t.name}</h3>
                    <span className="shrink-0 font-display text-xl text-forest">
                      {t.price}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-muted">{t.description}</p>
                  <p className="mt-4 text-sm">
                    <span className="font-medium text-ink">Expectation: </span>
                    <span className="text-muted">{t.expectation}</span>
                  </p>
                  <p className="mt-1 text-sm">
                    <span className="font-medium text-ink">Protocol: </span>
                    <span className="text-muted">{data.protocolNote}</span>
                  </p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <a
                      href={t.bookUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full bg-forest px-6 py-2.5 text-sm font-medium text-cream transition hover:bg-forest-dark"
                    >
                      Book Now
                    </a>
                    {t.payLaterUrl && (
                      <a
                        href={t.payLaterUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-forest px-6 py-2.5 text-sm font-medium text-forest transition hover:bg-forest hover:text-cream"
                      >
                        Buy Now, Pay Later
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Before & afters */}
        {data.beforeAfter.length > 0 && (
          <section className="section py-20 md:py-28">
            <div className="container-site">
              <h2 className="mb-10 font-display text-3xl text-forest md:text-4xl">
                Before & Afters
              </h2>
              <BeforeAfterGallery images={data.beforeAfter} />
            </div>
          </section>
        )}

        <Testimonials />

        {/* FAQ */}
        {data.faqs.length > 0 && (
          <section className="section py-20 md:py-28">
            <div className="container-site">
              <h2 className="mb-10 text-center font-display text-3xl text-forest md:text-4xl">
                Frequently Asked Questions
              </h2>
              <FaqAccordion faqs={data.faqs} />
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
