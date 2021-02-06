import React from "react";
import "./styles.scss";
import PortfolioItem from "../portfolio-item";

function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <h2 className="section-title">PORTFOLIO</h2>
      <div className="section-container">
        <div className="up-part">
          <div className="portfolio-item-1">
            <p className="coming">COMING SOON</p>
            <div className="item-content">
              <p className="item-title">yuriavagyan.com</p>
              <p className="item-text"></p>
              <div className="item-pic">
                {/* <img src={props.pic}></img> */}
              </div>
            </div>
          </div>
          <div className="portfolio-item-2">
            <p className="coming">COMING SOON</p>
            <div className="item-content">
              <p className="item-title">yuriavagyan.com</p>
              <p className="item-text"></p>
              <div className="item-pic">
                {/* <img src={props.pic}></img> */}
              </div>
            </div>
          </div>
        </div>
        <div className="down-part">
          <div className="portfolio-item-3">
            <p className="coming">COMING SOON</p>
            <div className="item-content">
              <div className="item-pic">
                {/* <img src={props.pic}></img> */}
              </div>
              <p className="item-title">yuriavagyan.com</p>
              <p className="item-text"></p>
            </div>
          </div>
          <div className="portfolio-item-4">
            <p className="coming">COMING SOON</p>
            <div className="item-content">
              <div className="item-pic">
                {/* <img src={props.pic}></img> */}
              </div>
              <p className="item-title">yuriavagyan.com</p>
              <p className="item-text"></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
