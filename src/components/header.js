import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { Button, Navbar, Nav, NavItem } from "react-bootstrap";

const Header = ({ siteTitle }) => (
  <Navbar bg="dark" variant="dark" expand="sm">
    <Navbar.Brand as={Link} href="/">
      {siteTitle}
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
      <NavItem href="/#features">
          <Nav.Link as={Link} activeClassName="active" to="/#features">
            Features
          </Nav.Link>
        </NavItem>

        <NavItem href="/#components">
          <Nav.Link as={Link} activeClassName="active" to="/#components">
            Components
          </Nav.Link>
        </NavItem>

        <NavItem href="/getting-started">
          <Nav.Link as={Link} activeClassName="active" to="/getting-started">
            Getting Started
          </Nav.Link>
        </NavItem>

        {/* <NavItem href="/hardware">
          <Nav.Link as={Link} activeClassName="active" to="/hardware">
            Hardware
          </Nav.Link>
        </NavItem>

        <NavItem href="/developers">
          <Nav.Link as={Link} activeClassName="active" to="/developers">
            Developers
          </Nav.Link>
        </NavItem> */}

        <NavItem href="/about">
          <Nav.Link as={Link} activeClassName="active" to="/about">
            About
          </Nav.Link>
        </NavItem>
      </Nav>

      <Nav className="ml-auto">
        <Button variant="success" href="https://forum.kegbot.org">
          Discussion Forum
        </Button>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
