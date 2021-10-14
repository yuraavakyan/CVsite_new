import React, { useState } from "react";
import { Link } from "react-scroll";

const NavbarItem = (props) => {
  const { title, to, isActive } = props.navlinkData;

  return (
    <div className={isActive ? "nav-link nav-active" : "nav-link"}>
      <div className="dot"></div>
      <Link to={to} smooth={true}>
        {title}
      </Link>
    </div>
  );
};

export default NavbarItem;
