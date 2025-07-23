import React from "react";
import "./Section.css";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="section contact">
      <h2>Contact Us</h2>
      <div className="contact-container">
        {/* Left Column */}
        <div className="contact-left" data-aos="fade-right">
          <div className="contact-info">
            <h3>Office Address</h3>
            <p>Gulberg III, Lahore, Pakistan</p>
            <p>Email: support@example.com</p>
            <p>Phone: +92 300 1234567</p>
          </div>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Subject" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* Right Column */}
        <div className="contact-right" data-aos="fade-left">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="/facebook.png" alt="Facebook" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="/twitter.png" alt="Twitter" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src="/linkedin.png" alt="LinkedIn" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="/instagram.png" alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
