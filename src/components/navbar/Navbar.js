import React, { useEffect, useRef, useState } from "react";
import "./styles.scss";
import { navbarLinks } from "./navbarData";
import NavbarItem from "./NavbarItem";

function Navbar(props) {

  const [activeLink, setActiveLink] = useState(1);

  const setActive = (id) => {
    setActiveLink(id);
  };

  return (
    <div>
      <nav className="navbar" data-aos="fade-up" once="false">
        <div className="nav-content">
          {navbarLinks.map((el) => (
              <NavbarItem
                navlinkData={el}
                isActive={activeLink === +el.id}
                id={el.id}
                onClick={setActive}
              />
          ))}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
