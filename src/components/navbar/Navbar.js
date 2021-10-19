import React, { useEffect, useRef, useState } from "react";
import "./styles.scss";
import { navbarLinks } from "./navbarData";
import NavbarItem from "./NavbarItem";

function Navbar(props) {
  return (
    <div>
      <nav className="navbar" data-aos="fade-up" once="false">
        <div className="nav-content">
          {navbarLinks.map((el) => (
            <NavbarItem navlinkData={el} />
          ))}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
