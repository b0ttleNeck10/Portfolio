import React from "react";

interface Skill {
  icon: string;
  name: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const frontendSkills: Skill[] = [
  { icon: "H", name: "HTML" },
  { icon: "C", name: "CSS" },
  { icon: "T", name: "TailwindCSS" },
  { icon: "R", name: "ReactJS" },
];

const backendSkills: Skill[] = [
  { icon: "P", name: "PHP" },
  { icon: "C#", name: "C#.NET" },
  { icon: "N", name: "NestJS" },
];

const Skills: React.FC = () => {
  const renderSkillCategory = (category: SkillCategory) => (
    <div className="skill-category" key={category.title}>
      <h3>{category.title}</h3>
      <div className="skill-items">
        {category.skills.map((skill) => (
          <div className="skill-item" key={skill.name}>
            <div className="skill-icon">{skill.icon}</div>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills">
      <h2 className="section-title">Skills & Technologies</h2>
      <div className="skills-grid">
        {renderSkillCategory({ title: "Frontend Development", skills: frontendSkills })}
        {renderSkillCategory({ title: "Backend Development", skills: backendSkills })}
      </div>
    </section>
  );
};

export default Skills;
