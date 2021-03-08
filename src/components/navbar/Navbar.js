import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import "./styles.scss";

function Navbar(props) {
  const [state, setState] = useState(true);
  const nav = useRef(null);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY < 900) {
        let links = nav.current.childNodes;
        links.forEach((element) => {
          element.classList.remove("nav-active");
        });
        links[0].classList.add("nav-active");
      }
      if (window.scrollY > 900 && window.scrollY < 1750) {
        let links = nav.current.childNodes;
        links.forEach((element) => {
          element.classList.remove("nav-active");
        });
        links[1].classList.add("nav-active");
      }
      if (window.scrollY > 1750 && window.scrollY < 3000) {
        let links = nav.current.childNodes;
        links.forEach((element) => {
          element.classList.remove("nav-active");
        });
        links[2].classList.add("nav-active");
      }
      if (window.scrollY > 3000 && window.scrollY < 4300) {
        let links = nav.current.childNodes;
        links.forEach((element) => {
          element.classList.remove("nav-active");
        });
        links[3].classList.add("nav-active");
      }
      if (window.scrollY > 4300 && window.scrollY < 5500) {
        let links = nav.current.childNodes;
        links.forEach((element) => {
          element.classList.remove("nav-active");
        });
        links[4].classList.add("nav-active");
      }
      if (window.scrollY > 5500) {
        let links = nav.current.childNodes;
        links.forEach((element) => {
          element.classList.remove("nav-active");
        });
        links[5].classList.add("nav-active");
      }
    });
  });

  const handleActive = (event) => {
    let links = nav.current.childNodes;
    links.forEach((element) => {
      element.classList.remove("nav-active");
    });
    event.target.parentNode.classList.add("nav-active");
  };

  return (
    <div>
      <nav className="navbar" data-aos="fade-up" once="false">
        <div className="nav-content" ref={nav}>
          <div className="nav-link nav-active">
            <div className="dot"></div>
            <Link to="home" smooth={true} onClick={handleActive}>
              Home
            </Link>
          </div>
          <div className="nav-link">
            <div className="dot"></div>
            <Link to="about" smooth={true} onClick={handleActive}>
              About me
            </Link>
          </div>
          <div className="nav-link">
            <div className="dot"></div>
            <Link to="education" smooth={true} onClick={handleActive}>
              Education
            </Link>
          </div>
          <div className="nav-link">
            <div className="dot"></div>
            <Link to="experience" smooth={true} onClick={handleActive}>
              Experience
            </Link>
          </div>
          <div className="nav-link">
            <div className="dot"></div>
            <Link to="skills" smooth={true} onClick={handleActive}>
              Skills
            </Link>
          </div>
          <div className="nav-link">
            <div className="dot"></div>
            <Link to="portfolio" smooth={true} onClick={handleActive}>
              Portfolio
            </Link>
          </div>
          <div className="nav-link">
            <div className="dot"></div>
            <Link to="contact" smooth={true} onClick={handleActive}>
              Contacts
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
