import React from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Hamid</div>
      <ul className="nav-links">
        {["Home", "Services", "Features", "Pricing", "Team", "Blog", "Contact"].map((section) => (
          <li key={section}>
            <Link
              to={section.toLowerCase()}
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
              className="nav-link"
            >
              {section}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;