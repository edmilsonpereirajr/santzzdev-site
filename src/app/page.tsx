
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Portfolio from "@/components/sections/Portfolio";
import Certifications from "@/components/sections/Certifications";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Technologies from "@/components/sections/Technologies";
import Process from "@/components/sections/Process";
import Quote from "@/components/sections/Quote";
import Faq from "@/components/sections/Faq";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Portfolio />
      <Certifications />
      <Services />
      <About />
      <Technologies />
      <Process />
      <Quote />
      <Faq />
      <Contact />
      <Footer />
    </main>
  );
}
