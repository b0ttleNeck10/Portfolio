import React from "react";

const About: React.FC = () => {
  return (
    <section id="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <h3>From Frontend to Backend</h3>
          <p>
            I started my journey in front-end development, crafting beautiful
            and responsive user interfaces. But lately, I've discovered my true
            passion lies in back-end development.
          </p>
          <p>
            I love the challenge of building robust server-side applications,
            designing efficient databases, and creating APIs that power amazing
            user experiences.
          </p>
          <p>
            I'm always open for opportunities to learn, make connections, and
            build meaningful relationships in the tech community.
          </p>
        </div>
        <div className="about-image">👨‍💻</div>
      </div>
    </section>
  );
}

export default About;
