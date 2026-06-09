import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAllPosts } from "@/lib/blog";

export const metadata = {
  title: "Blog — KRIDO Wellness",
  description:
    "Tips, treatments, and updates from KRIDO Wellness in St. Petersburg, FL.",
};

function formatDate(d: string) {
  if (!d) return "";
  return new Date(d).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <>
      <Header />
      <main className="section py-20 md:py-28">
        <div className="container-site">
          <h1 className="font-display text-4xl text-forest md:text-5xl">Blog</h1>
          <p className="mt-3 max-w-xl text-muted">
            Tips, treatments, and updates from the studio.
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-md"
              >
                {post.coverImage && (
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="flex flex-1 flex-col p-6">
                  <time className="text-xs uppercase tracking-wide text-muted">
                    {formatDate(post.date)}
                  </time>
                  <h2 className="mt-2 font-display text-xl text-forest">
                    {post.title}
                  </h2>
                  <p className="mt-2 flex-1 text-sm text-muted">{post.excerpt}</p>
                  <span className="mt-4 text-sm font-medium text-forest group-hover:underline">
                    Read more &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
