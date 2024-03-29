import React from "react";
import "./styles.scss";

function Title(props) {
  return (
    <h2 className="section-title" data-aos="fade-up" once="false">
      {props.title}{" "}
    </h2>
  );
}

export default Title;
