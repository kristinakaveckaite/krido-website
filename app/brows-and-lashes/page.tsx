import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <main className="section py-28">
        <div className="container-site">
          <h1 className="font-display text-4xl text-forest">Brows And Lashes</h1>
          <p className="mt-4 max-w-2xl text-muted">
            This page is scaffolded and ready for content. Build it out the same
            way as the home page — reusable sections reading from lib/content.ts.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
