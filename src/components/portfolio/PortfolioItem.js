import React from "react";

const PortfolioItem = (props) => {
  const { title, pic, description } = props.portfolioData;

  return (
    <div className="portfolio-item" data-aos="fade-left" once="false">
      <div className="item-content">
        <p className="port-item-title">{title}</p>
        <div className="item-description">
          <p>{description}</p>
          <div className="item-pic">
            <img src={pic}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
