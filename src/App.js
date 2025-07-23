import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Team from "./components/Team";
import Blog from "./components/Blog";
import Contact from "./components/Contact";

import AOS from "aos";
import "aos/dist/aos.css"; // ✅ Import AOS styles

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <Features />
      <Pricing />
      <Team />
      <Blog />
      <Contact />
    </>
  );
}

export default App;
