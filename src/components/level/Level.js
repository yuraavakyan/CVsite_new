import React from "react";
import "./styles.scss";

function Level(props) {
  return (
    <div className="level">
      <div className="level-title">
        <p>{props.name}</p>
        <div className="level-icon">
          <img src={props.pic}></img>
        </div>
      </div>

      <div className="level-container">
        <div
          className={props.name}
          data-aos="slide-right"
          once="false"
          duration="1000"
        ></div>
      </div>
    </div>
  );
}

export default Level;
