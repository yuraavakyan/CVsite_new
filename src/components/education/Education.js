import React from "react";
import "./styles.scss";
import { educationDataArray } from "./educationData";
import EducationItem from "./EducationItem";
import Title from "../section-title/Title";

function Education() {
  return (
    <section className="education" id="education">
      <Title title="EDUCATION" />
      <div className="education-content">
        {
          educationDataArray.map((el, index) => {
            return <EducationItem educationData={el} index={index} key={index + el.logoTitle}/>
          })
        }
      </div>
    </section>
  );
}

export default Education;
