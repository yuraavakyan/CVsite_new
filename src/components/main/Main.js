import React, { useState } from "react";
import "./styles.scss";
import Contacts from "../contacts";

function Main() {
  const [showContacts, setShowContacts] = useState(false);

  const handleContacts = () => {
    setShowContacts(!showContacts);
  };

  const closeContacts = () => {
    setShowContacts(false)
  }

  return (
    <section className="home" id="home">
      <div className="home-content">
        <div className="main-block" data-aos="fade-left" once="false">
          <div className="upper-part">
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
            <a href="/public_html/cv.pdf" download>
              <button className="download">Download CV</button>
            </a>
            <button className="contacts-btn" onClick={handleContacts}>
              Contacts
            </button>
          </div>
        </div>
        {
          showContacts && <Contacts closeContacts={closeContacts}/>
        }
      </div>
    </section>
  );
}

export default Main;
