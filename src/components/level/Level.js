import React from "react";
import "./styles.scss";
import Fade from "react-reveal";

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
        <Fade left>
          <div className={props.name}></div>
        </Fade>
      </div>
    </div>
  );
}

export default Level;
