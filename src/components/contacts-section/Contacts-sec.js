import React, { useEffect, useRef } from "react";
import "./styles.scss";
import Title from "../section-title";
import avatar from "../../images/avatar1.png";
import phone from "../../images/icons/phone.png";
import mail from "../../images/icons/mail.png";

function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-section-wrapper">
        <Title title="CONTACTS" />
        <div className="contacts-content">
          <div className="name-card" data-aos="fade-left">
            <div className="backgr"></div>
            <div className="pic-name">
              <img src={avatar}></img>
              <div className="card-name">
                <div className="name-title">
                  <h3>Yuri Avagyan</h3>
                  <h4>Web developer | Web designer</h4>
                </div>

                <div className="cont-details">
                  <div className="phone">
                    <img src={phone}></img>
                    <p className="phone-num">+374 - 98 - 48 00 24</p>
                  </div>
                  <div className="email">
                    <img src={mail}></img>
                    <p className="mail-add">yura.avakyan372@yandex.ru</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="form-part" data-aos="fade-right">
            <form id="write">
              <input placeholder="Full name"></input>
              <input type="email" placeholder="E-mail"></input>
              <textarea
                placeholder="Message"
                style={{ resize: "none" }}
              ></textarea>
              <button type="submit" className="submit">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
