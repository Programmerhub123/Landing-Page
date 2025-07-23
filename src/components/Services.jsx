import React from "react";
import "./Section.css";
import "./Services.css";

const services = [
  {
    title: "Web Development",
    description: "Building modern and responsive websites.",
    image: "web development.jpg",
  },
  {
    title: "UI/UX Design",
    description: "Crafting intuitive and beautiful user interfaces.",
    image: "ux design.avif",
  },
  {
    title: "Digital Marketing",
    description: "Promoting your business through digital channels.",
    image: "Digital marketing.avif",
  },
  {
    title: "Facebook Ads",
    description: "Promoting your business through digital channels.",
    image: "fb ads.avif",
  },
  {
    title: "Block Chain",
    description: "Promoting your business through digital channels.",
    image: "block chain.avif",
  },
  {
    title: "SEO",
    description: "Promoting your business through digital channels.",
    image: "seo.avif",
  },
  {
    title: "Google Ads",
    description: "Promoting your business through digital channels.",
    image: "google ads.avif",
  },
  {
    title: "YouTube Automation",
    description: "Promoting your business through digital channels.",
    image: "youtube automation.avif",
  },
];

const Services = () => {
  return (
    <section id="services" className="section services">
      <h2>Our Services</h2>
      <div className="service-boxes">
        {services.map((service, index) => (
          <div
            className="service-box"
            key={index}
            data-aos="fade-up" // ✅ animation on scroll
          >
            <img
              src={service.image}
              alt={service.title}
              className="service-image"
            />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
