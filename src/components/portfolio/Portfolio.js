import React from "react";
import "./styles.scss";
import yuri from "../../images/yuri.png";
import tatum from "../../images/tatum.png";
function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <h2 className="section-title">PORTFOLIO</h2>
      <div className="section-container">
        <div className="up-part">
          <div className="portfolio-item-1">
            {/* <p className="coming">COMING SOON</p> */}
            <div className="item-content">
              <p className="port-item-title">yuriavagyan.com</p>
              <div className="item-description">
                <p>
                  Pariatur incididunt fugiat aute incididunt consectetur
                  pariatur nostrud aliquip esse ut est. Dolore exercitation
                  eiusmod minim ullamco dolore aliqua dolore ipsum veniam.
                  Laborum eiusmod duis minim sint commodo nulla anim ea. Veniam
                  cupidatat non laborum duis tempor excepteur do non ipsum
                  excepteur. Anim cillum nulla do nostrud exercitation aliqua
                  sit consectetur esse magna quis elit qui culpa.
                </p>
                <div className="item-pic">
                  <img src={yuri}></img>
                </div>
              </div>
            </div>
          </div>
          <div className="portfolio-item-1">
            {/* <p className="coming">COMING SOON</p> */}
            <div className="item-content">
              <p className="port-item-title">tatum.io</p>
              <div className="item-description">
                <div className="item-pic">
                  <img src={tatum}></img>
                </div>
                <p>
                  Pariatur incididunt fugiat aute incididunt consectetur
                  pariatur nostrud aliquip esse ut est. Dolore exercitation
                  eiusmod minim ullamco dolore aliqua dolore ipsum veniam.
                  Laborum eiusmod duis minim sint commodo nulla anim ea. Veniam
                  cupidatat non laborum duis tempor excepteur do non ipsum
                  excepteur. Anim cillum nulla do nostrud exercitation aliqua
                  sit consectetur esse magna quis elit qui culpa.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="down-part">
          <div className="portfolio-item-1">
            <p className="coming">COMING SOON</p>
            <div className="item-content">
              <p className="port-item-title">yuriavagyan.com</p>
              <div className="item-description">
                <p>
                  Pariatur incididunt fugiat aute incididunt consectetur
                  pariatur nostrud aliquip esse ut est. Dolore exercitation
                  eiusmod minim ullamco dolore aliqua dolore ipsum veniam.
                  Laborum eiusmod duis minim sint commodo nulla anim ea. Veniam
                  cupidatat non laborum duis tempor excepteur do non ipsum
                  excepteur. Anim cillum nulla do nostrud exercitation aliqua
                  sit consectetur esse magna quis elit qui culpa.
                </p>
                <div className="item-pic">
                  <img src={yuri}></img>
                </div>
              </div>
            </div>
          </div>
          <div className="portfolio-item-1">
            <p className="coming">COMING SOON</p>
            <div className="item-content">
              <p className="port-item-title">yuriavagyan.com</p>
              <div className="item-description">
                <div className="item-pic">
                  <img src={yuri}></img>
                </div>
                <p>
                  Pariatur incididunt fugiat aute incididunt consectetur
                  pariatur nostrud aliquip esse ut est. Dolore exercitation
                  eiusmod minim ullamco dolore aliqua dolore ipsum veniam.
                  Laborum eiusmod duis minim sint commodo nulla anim ea. Veniam
                  cupidatat non laborum duis tempor excepteur do non ipsum
                  excepteur. Anim cillum nulla do nostrud exercitation aliqua
                  sit consectetur esse magna quis elit qui culpa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
