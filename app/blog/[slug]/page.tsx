import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookNow from "@/components/BookNow";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) return { title: "Not found" };
  return {
    title: `${post.title} — KRIDO Wellness`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.coverImage ? [post.coverImage] : undefined,
    },
  };
}

function formatDate(d: string) {
  if (!d) return "";
  return new Date(d).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <>
      <Header />
      <main className="section py-16 md:py-24">
        <article className="container-site max-w-3xl">
          <Link href="/blog" className="text-sm text-forest hover:underline">
            &larr; Back to blog
          </Link>
          <time className="mt-6 block text-xs uppercase tracking-wide text-muted">
            {formatDate(post.date)}
          </time>
          <h1 className="mt-2 font-display text-4xl text-forest md:text-5xl">
            {post.title}
          </h1>

          {post.coverImage && (
            <div className="relative mt-8 aspect-[3/2] overflow-hidden rounded-2xl">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
                priority
              />
            </div>
          )}

          <div
            className="prose prose-neutral mt-10 max-w-none prose-headings:font-display prose-headings:text-forest prose-a:text-forest"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />

          <div className="mt-12 rounded-2xl bg-sand p-8 text-center">
            <h3 className="font-display text-2xl text-forest">
              Ready to book?
            </h3>
            <BookNow
              label="Book on Vagaro"
              className="mt-4 inline-block rounded-full bg-forest px-8 py-3 font-medium text-cream transition hover:bg-forest-dark"
            />
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
