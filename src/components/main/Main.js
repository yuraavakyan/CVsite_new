import React, { useState } from "react";
import "./styles.scss";
import Link from "react-scroll";
import Contacts from "../contacts";

function Main() {
  const [state, setState] = useState(false);

  const handleContacts = () => {
    if (state == false) {
      setState(true);
    } else setState(false);
  };

  return (
    <section className="home" id="home">
      <div className="home-content">
        <div className="main-block" data-aos="fade-left" once="false">
          <div className="upper-part">
            {/* <div className="social">
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
            </div> */}
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
            <a href="/public_html/cv.pdf" download><button className="download">Download CV</button></a>
            <button className="contacts-btn" onClick={handleContacts}>
              Contacts
            </button>
          </div>
        </div>
        <div className={state ? "contacts" : "invisible"}>
          <Contacts />
        </div>
      </div>
    </section>
  );
}

export default Main;
