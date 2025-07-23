import React from "react";
import "./Section.css";
import "./Home.css";

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-content" data-aos="fade-up">
        <h1>Welcome to Our Landing Page</h1>
        <p>Your success starts here — Let's build your dream together.</p>
        <a href="#services" className="cta-button">Explore Services</a>
      </div>
    </section>
  );
};

export default Home;
