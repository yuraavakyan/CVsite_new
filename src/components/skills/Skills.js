import React from "react";
import "./styles.scss";
import Level from "../level";
import html from "../../images/icons/html.png";
import css from "../../images/icons/css.png";
import js from "../../images/icons/js.png";
import react from "../../images/icons/react.png";
import node from "../../images/icons/node.png";
import mysql from "../../images/icons/mysql.png";
import mongo from "../../images/icons/mongo.png";
import loyal from "../../images/icons/loyal.png";
import comm from "../../images/icons/comm.png";
import team from "../../images/icons/team.png";
import problem from "../../images/icons/problem.png";
import learning from "../../images/icons/learning.png";
import china from "../../images/icons/china.png";
import rus from "../../images/icons/rus.png";
import en from "../../images/icons/en.png";

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="section-container">
        <h2 className="section-title">SKILLS</h2>
        <div className="skills-content">
          <div className="first-part">
            <div className="hard">
              <h3 className="hard-title">HARD SKILLS</h3>
              <div className="hard-chart">
                <Level name="JS" pic={js} />
                <Level name="html" pic={html} />
                <Level name="css" pic={css} />
                <Level name="ReactJS" pic={react} />
                <Level name="NodeJS" pic={node} />
                <Level name="SQL" pic={mysql} />
                <Level name="MongoDB" pic={mongo} />
              </div>
            </div>

            <div className="hard">
              <h3 className="hard-title">SOFT SKILLS</h3>
              <div className="hard-chart">
                <Level name="Communications" pic={comm} />

                <Level name="Problem solving" pic={problem} />
                <Level name="Fast learner" pic={learning} />
                <Level name="Team player" pic={team} />
                <Level name="Loyal" pic={loyal} />
              </div>
            </div>
          </div>
          <div className="hard">
            <h3 className="hard-title">LANGUAGES</h3>
            <div className="hard-chart">
              <Level name="English" pic={en} />
              <Level name="Russian" pic={rus} />
              <Level name="Chinese" pic={china} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
