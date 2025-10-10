import gsap from "gsap";

import Navbar from "./components/Navbar";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/routes/Home";
import Services from "./components/routes/Services";
import About from "./components/routes/About";
import Contact from "./components/routes/Contact";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import ReactLenis, { type LenisRef } from "lenis/react";

gsap.registerPlugin(ScrollTrigger);
function App() {
  const lenisRef = useRef<LenisRef | null>(null);
  useEffect(() => {
    const update = (time: number) => {
      lenisRef.current?.lenis?.raf(time * 1000);
    };
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);
    return () => {
      gsap.ticker.remove(update);
    };
  }, []);
  return (
    <Router>
      <ReactLenis
        root
        options={{
          autoRaf: false,
          duration: 1.5,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
          syncTouch: false,
        }}
        ref={lenisRef}
      >
        <main className="flex flex-col w-full h-full">
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>

          <Footer />
        </main>
      </ReactLenis>
    </Router>
  );
}

export default App;

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};
