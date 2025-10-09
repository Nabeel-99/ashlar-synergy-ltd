import gsap from "gsap";

import Navbar from "./components/Navbar";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/routes/Home";
import Services from "./components/routes/Services";
import About from "./components/routes/About";
import Contact from "./components/routes/Contact";
gsap.registerPlugin(ScrollTrigger);
function App() {
  return (
    <Router>
      <main className="flex flex-col w-full h-full">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </main>
    </Router>
  );
}

export default App;
