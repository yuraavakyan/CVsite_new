import React, { useState } from "react";
import { Link } from "react-scroll";

const NavbarItem = (props) => {
  const { title, to} = props.navlinkData
  const {id, onClick, isActive} = props

  return (
    <Link to={to} smooth={true}>
    <div className={isActive ? "nav-link nav-active" : "nav-link"} onClick={() => onClick(id)}>
      <div className="dot"></div>
        {title}
    </div>
    </Link>
  );
};

export default NavbarItem;
