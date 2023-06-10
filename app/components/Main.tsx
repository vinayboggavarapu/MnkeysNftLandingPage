import React from "react";
import Hero from "./Hero";
import Showcase from "./Showcase";
import Mint from "./Mint";
import Faq from "./Faq";
import ScrollTop from "./ScrollTop";
import Footer from "./Footer";
import About from "./About";
import Roadmap from "./Roadmap";

const Main = () => {
  return (
    <div id="home" className="relative">
      <Hero />
      <About />
      <Roadmap />
      <ScrollTop />
      <Mint />
      <Faq />
      <Footer />
    </div>
  );
};

export default Main;
