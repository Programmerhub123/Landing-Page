import React from "react";
import "./Section.css";
import "./Team.css";

const teamMembers = [
  {
    name: "Hamid",
    role: "Frontend Developer",
    image: "dev1.png",
  },
  {
    name: "Sara Ali",
    role: "UI/UX Designer",
    image: "dev3.png",
  },
  {
    name: "David",
    role: "Digital Marketer",
    image: "dev2.png",
  },
  {
    name: "Tamara Bellis",
    role: "Project Manager",
    image: "dev4.png",
  },
];

const Team = () => {
  return (
    <section id="team" className="section team">
      <h2>Meet Our Team</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index} data-aos="zoom-in">
            <img src={member.image} alt={member.name} className="team-image" />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
