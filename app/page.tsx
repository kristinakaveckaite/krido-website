import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Treatments from "@/components/Treatments";
import BestSellers from "@/components/BestSellers";
import Testimonials from "@/components/Testimonials";
import Mission from "@/components/Mission";
import Location from "@/components/Location";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Treatments />
        <BestSellers />
        <Testimonials />
        <Mission />
        <Location />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
