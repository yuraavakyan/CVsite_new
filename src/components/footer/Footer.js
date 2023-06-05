import React from "react";
import "./styles.scss";
import insta from "../../images/icons/instagram.png";
import facebook from "../../images/icons/facebook.png";
import git from "../../images/icons/github.png";
import linked from "../../images/icons/linkedin.png";

function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="wrapper">
        <div className="footer-content">
          <div className="logo-contacts">
            <div className="footer-logo-part">
              <p className="footer-logo">YURI AVAGYAN</p>
              <p className="description">Web developer | Web designer</p>
            </div>
            <div className="contacts-part">
              <p>CONTACTS</p>
              <br />
              <p>tel: +374 - 98 - 48 00 24</p>
              <p>e-mail: yura.avakyan372@yandex.ru</p>
            </div>
          </div>
          <div className="footer-social">
            <div className="icon">
              <img src={facebook} alt="facebook"></img>
            </div>
            <div className="icon">
              <img src={insta} alt="instagram"></img>
            </div>
            <div className="icon">
              <img src={git} alt="github"></img>
            </div>
            <div className="icon">
              <img src={linked} alt="linkedin"></img>
            </div>
          </div>
          <div className="rights">Yuri Avagyan. 2020 All rights reserved</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
