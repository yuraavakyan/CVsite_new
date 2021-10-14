import React from "react";
import "./styles.scss";

function Contacts() {
  return (
    <div className="contacts-wrapper">
      <h2>CONTACTS</h2>
      <div className="info">
        <div className="tel-part">
          <span className="title-con">Tel:</span>
          <span className="tel">+374 - 98 - 48 00 24</span>
        </div>
        <div className="mail-part">
          <span className="title-con">e-mail:</span>
          <span className="tel">yura.avakyan372@yandex.ru</span>
        </div>
      </div>
      <button className="contacts-btn">Write to me</button>
    </div>
  );
}

export default Contacts;