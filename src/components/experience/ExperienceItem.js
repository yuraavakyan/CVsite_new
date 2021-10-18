import React from "react";

const ExperienceItem = (props) => {
  const { logo, logoTitle, description, years } = props.itemData;
  const { index } = props;
  return (
    <div
      className={index % 2 === 0 ? "experienceItem-reverse" : "experienceItem"}
      data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
      once="false"
    >
      <div
        className={
          index % 2 === 0
            ? "experience-item-container"
            : "experience-item-container-rev"
        }
      >
        <div className="experience-logo-part">
          <p className="experience-item-title">{logoTitle}</p>
          <div className="experience-item-logo ">
            <img src={logo}></img>
          </div>
        </div>
        <div className="experience-text-part">
          <p className="experience-text">
            <div>{years}</div>
            <div>{description}</div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;
