import React from "react";
import { Link } from "react-scroll";

const NavbarItem = (props) => {
  const { title, to } = props.navlinkData;

  return (
    <Link activeClass="active" to={to} smooth={true} spy={true}>
      <div className={"nav-link"}>
        <div className="dot"></div>
        {title}
      </div>
    </Link>
  );
};

export default NavbarItem;
