import React from "react";
import "./styles.scss";
import avatar from "../../images/avatar1.png";
import Fade from "react-reveal";
import Title from "../section-title";

function About() {
  return (
    <section className="about" id="about">
      <Title title="ABOUT" />
      <div className="about-content">
        <div className="avatar-section">
          <div className="avatar">
            <img src={avatar} alt=""></img>
          </div>
        </div>
        <div className="about-text">
          “ Hi, I am Yuri, and I create responsive web sites using modern
          technologies such as React.js Node.js SCSS and other commonly used
          ones. I’m also fine working with databases with such tools as Mongo
          DB, MySQL and other database managing frameworks. I have experience as
          a freelance developer and can manage my time effeciently. I am a
          strong team player, who believes that a team can do more rather than
          an individual. ” Scroll down to see more...
        </div>
      </div>
    </section>
  );
}

export default About;
