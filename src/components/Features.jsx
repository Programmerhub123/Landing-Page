import React from "react";
import "./Section.css";
import "./Features.css";

const Features = () => {
  return (
    <section id="features" className="section features">
      <div className="features-container">
        <div className="features-text" data-aos="fade-right">
          <h2>Why Choose Us?</h2>
          <p>
            We offer cutting-edge solutions with modern design, user-friendly interfaces, and performance-driven results.
            Our experienced team is committed to delivering high-quality services that scale with your business.
          </p>
          <ul>
            <li>✔ High-Quality Development</li>
            <li>✔ Responsive & Mobile-Friendly Design</li>
            <li>✔ Fast Loading Performance</li>
            <li>✔ SEO Optimized Structures</li>
          </ul>
        </div>

        <div className="features-image" data-aos="fade-left">
          <img src="Bulb.png" alt="Features" />
        </div>
      </div>
    </section>
  );
};

export default Features;
