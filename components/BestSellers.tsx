import { bestSellers, site } from "@/lib/content";

export default function BestSellers() {
  return (
    <section className="section py-20 md:py-28">
      <div className="container-site">
        <div className="mb-10 flex items-end justify-between gap-4">
          <h2 className="font-display text-3xl text-forest md:text-4xl">
            KRIDO Best Sellers
          </h2>
          <a
            href={site.shopUrl}
            target="_blank"
            rel="noreferrer"
            className="shrink-0 text-sm font-medium text-forest hover:underline"
          >
            View all &rarr;
          </a>
        </div>

        <ul className="divide-y divide-sand border-y border-sand">
          {bestSellers.map((p, i) => (
            <li key={p.name}>
              {/* Products are sold on Vagaro — link out to the shop.
                  Want each product to deep-link to its exact Vagaro page?
                  Send me the per-product URLs and I'll wire them in. */}
              <a
                href={site.shopUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-6 py-5 transition hover:text-forest"
              >
                <span className="font-display text-lg text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-lg">{p.name}</span>
                <span className="ml-auto text-forest">&rarr;</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
