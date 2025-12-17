import React from "react";

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Dexter Lauron</h1>
        <div className="subtitle">Aspiring Back-End Developer</div>
        <p>
          I'm passionate about building clean, efficient, and functional web
          applications. Currently studying BS Information Technology at
          University of Cebu – Main Campus, continuously learning new
          technologies and improving my skills.
        </p>
        <a href="#contact" className="cta-button">Let's Connect</a>
      </div>
    </section>
  );
}

export default Hero;
