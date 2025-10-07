import React from "react";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import About from "./sections/About";
import Faqs from "./sections/Faqs";
import Contact from "./sections/Contact";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <Services />
      <About />
      <Faqs />
      <Contact />
    </div>
  );
};

export default Home;
