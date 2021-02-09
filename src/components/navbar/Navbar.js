import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import "./styles.scss";
import Fade from "react-reveal";

function Navbar() {
  const [state, setState] = useState(true);
  const nav = useRef();

  const handleActive = (event) => {
    let links = nav.current.childNodes;
    links.forEach((element) => {
      element.classList.remove("nav-active");
    });
    event.target.parentNode.classList.add("nav-active");
  };
  return (
    <div>
      <Fade top>
        <nav className="navbar">
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
              <Link to="contacts" smooth={true} onClick={handleActive}>
                Contacts
              </Link>
            </div>
          </div>
        </nav>
      </Fade>
    </div>
  );
}

export default Navbar;
