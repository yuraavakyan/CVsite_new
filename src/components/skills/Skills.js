import React from "react";
import "./styles.scss";
import Title from "../section-title";
import SkillsSet from "./SkillsSet.js";
import { hardSkills, softSkills, languages } from "./skillsData";

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="section-container">
        <Title title="SKILLS" />
        <div className="skills-content">
          <div className="first-part">
            <SkillsSet
              skillSet={{ title: "Hard skills", skillsArray: hardSkills }}
            />
            <SkillsSet
              skillSet={{ title: "Soft skills", skillsArray: softSkills }}
            />
          </div>
          <div className="hard">
            <SkillsSet
              skillSet={{ title: "Languages", skillsArray: languages }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
