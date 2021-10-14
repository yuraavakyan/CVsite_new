import React, { useEffect } from "react";
import "./styles.scss";
import Title from "../section-title";
import { experienceDataArray } from "./experienceData";
import ExperienceItem from "./ExperienceItem";


const Experience = () => {

  return (
    <section className="experience" id="experience">
      <div className="section-container">
        <Title title="EXPERIENCE" />
        <div className="experience-content">
          {
            experienceDataArray.map((item, index) => {
              return (
                <ExperienceItem itemData={item} index={index} key={item.logoTitle}/>
              )
            })
          }
        </div>
      </div>
    </section>
  );
}

export default Experience;
