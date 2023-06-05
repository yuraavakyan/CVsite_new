import React from "react";

const SkillItem = (props) => {
  const { title, logo, level } = props.skillData;
  return (
    <div className="level">
      <div className="level-title">
        <div className="level-icon">
          <img src={logo} alt="logo"></img>
        </div>
      </div>
      <div className="level-container">
        <div
          className={`l${level}`}
          data-aos="slide-right"
          once="false"
          duration="1000"
        ></div>
        <div className={"skill-title"}>
          {title}
        </div>
      </div>
    </div>
  );
};

export default SkillItem;
