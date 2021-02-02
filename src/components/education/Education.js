import React from "react";
import "./styles.scss";
import rau from "../../images/icons/rau.png";
import confucius from "../../images/icons/confucius.png";
import fcc from "../../images/icons/fcc.png";
import pluralsight from "../../images/icons/pluralsight.png";
import coursera from "../../images/icons/coursera.png";

function Education() {
  return (
    <section className="education" id="education">
      <h2 className="section-title">EDUCATION</h2>
      <div className="education-content">
        <div className="educationItem">
          <div className="item-container">
            <div className="logo-part">
              <p className="item-title">Russian-Armenian University</p>
              <div className="item-logo ">
                <img src={rau}></img>
              </div>
            </div>
            <div className="text-part">
              <p className="text">
                2010 - 2014 <br />
                Bachelor’s degree at Applied Mathematics and Informatics
              </p>
            </div>
          </div>
        </div>
        <div className="educationItem-reverse">
          <div className="item-container-rev">
            <div className="logo-part">
              <div className="reverse">
                <p className="item-title">Confucius Institute at YSLU</p>
                <div className="item-logo ">
                  <img src={confucius}></img>
                </div>
              </div>
            </div>
            <div className="text-part">
              <p className="text">
                2017 - 2018 <br />
                Chinese language and culture studies
              </p>
            </div>
          </div>
        </div>
        <div className="educationItem">
          <div className="item-container">
            <div className="logo-part">
              <p className="item-title">Online learning platforms</p>
              <div className="item-logo ">
                <img src={pluralsight}></img>
                <img src={coursera}></img>
                <img src={fcc}></img>
              </div>
            </div>
            <div className="text-part">
              <p className="text">
                2019 - 2020
                <br /> usage of JavaScript with Node.js, React.js, HTML, CSS,
                Bootstrap, Databases and more...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
