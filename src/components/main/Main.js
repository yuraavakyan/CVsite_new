import React from "react";
import "./styles.scss";
import insta from "../../images/icons/instagram.png";
import facebook from "../../images/icons/facebook.png";
import git from "../../images/icons/github.png";
import linked from "../../images/icons/linkedin.png";

function Main() {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <div className="main-block">
          <div className="upper-part">
            <div className="social">
              <div className="icon">
                <img src={facebook} alt=""></img>
              </div>
              <div className="icon">
                <img src={insta}></img>
              </div>
              <div className="icon">
                <img src={git}></img>
              </div>
              <div className="icon">
                <img src={linked}></img>
              </div>
            </div>
            <div className="greeting">
              <div className="name">
                Hello, I'm <br /> Yuri Avagyan
              </div>
              <div className="professions">
                Web design | Software development
              </div>
            </div>
          </div>
          <div className="buttons">
            <button className="download">Download CV</button>
            <button className="contacts">Contacts</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
