import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ link, children }) => {
  return (
    <NavLink
      exact
      className="navlink"
      activeClassName="active-navlink"
      to={link}
    >
      {children}
    </NavLink>
  );
};

export default NavItem;
