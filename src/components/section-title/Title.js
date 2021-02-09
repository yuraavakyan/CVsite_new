import React from "react";
import "./styles.scss";
import Fade from "react-reveal";

function Title(props) {
  return (
    <Fade top>
      <h2 className="section-title">{props.title}</h2>
    </Fade>
  );
}

export default Title;
