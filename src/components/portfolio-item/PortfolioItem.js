import React from "react";
import "./styles.scss";

function PortfolioItem(props) {
  return (
    <div className="portfolio-item">
      <div className="item-content">
        <p className="item-title">{props.title}</p>
        <p className="item-text">{props.text}</p>
        <div className="item-pic">{/* <img src={props.pic}></img> */}</div>
      </div>
    </div>
  );
}

export default PortfolioItem;
