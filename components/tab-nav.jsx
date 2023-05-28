import React from "react";
import { Nav, Navbar, NavItem, NavLink } from "reactstrap";
const TabNav = ({ active, goto }) => {
  return (
    <Nav className="mainNav">
      <Navbar className="navbar" tabs="true">
        <NavItem className={active === "form" ? "navLink" : ""}>
          <NavLink
            className="navLinkText"
            onClick={() => goto("form")}
          >
            Add Details
          </NavLink>
        </NavItem>
        <NavItem className={active === "feed" ? "navLink" : ""}>
          <NavLink className="navLinkText" onClick={() => goto("feed")}>
            View Submissions
          </NavLink>
        </NavItem>
      </Navbar>
    </Nav>
  );
};

export default TabNav;
