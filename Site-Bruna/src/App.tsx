import Header from "./components/Header";
import Hero from "./components/Hero";
import Flight from "./components/Flight";
import ValueStrip from "./components/ValueStrip";
import About from "./components/About";
import Services from "./components/Services";
import CtaBand from "./components/CtaBand";
import ContentCards from "./components/ContentCards";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="overflow-x-clip">
      <Header />
      <main>
        <Hero />
        {/* ato cinematográfico: scroll dirige o tempo pelas 4 cenas */}
        <Flight />
        <ValueStrip />
        <About />
        <Services />
        <CtaBand />
        <ContentCards />
        <Process />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
