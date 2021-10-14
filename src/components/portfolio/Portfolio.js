import React from "react";
import "./styles.scss";
import Title from "../section-title";
import { portfoliosArray } from "./PortfolioData";
import PortfolioItem from "./PortfolioItem";

function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <Title title="PORTFOLIO" />
      <div className="portfolio-container">
        {portfoliosArray.map((el) => (
          <PortfolioItem portfolioData={el} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
