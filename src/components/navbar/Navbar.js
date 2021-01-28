import React from "react";
import { Link } from "react-scroll";
import "./styles.scss";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-content">
        <div className="nav-link nav-active">
          <div className="dot"></div>
          <Link>Home</Link>
        </div>
        <div className="nav-link">
          <div className="dot"></div>
          <Link>About me</Link>
        </div>
        <div className="nav-link">
          <div className="dot"></div>
          <Link>Education</Link>
        </div>
        <div className="nav-link">
          <div className="dot"></div>
          <Link>Experience</Link>
        </div>
        <div className="nav-link">
          <div className="dot"></div>
          <Link>Skills</Link>
        </div>
        <div className="nav-link">
          <div className="dot"></div>
          <Link>Portfolio</Link>
        </div>
        <div className="nav-link">
          <div className="dot"></div>
          <Link>Contacts</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
