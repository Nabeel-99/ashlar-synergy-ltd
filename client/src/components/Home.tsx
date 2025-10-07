import React from "react";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import About from "./sections/About";
import Faqs from "./sections/Faqs";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <Services />
      <About />
      <Faqs />
    </div>
  );
};

export default Home;
