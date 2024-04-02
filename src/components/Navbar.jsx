import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import UticaBrandLogo from "../assets/img/logo-utica-white.png";

function Navigation() {
  return (
    <Navbar expand="lg" className="navbar-collapse main-navbar">
      <Container>
        <Navbar.Brand href="/" className="m-0 p-0">
          <img
            src={UticaBrandLogo}
            alt="Utica Brand Logo"
            className="brand-logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="collapse ps-3">
          <Nav className="me-auto">
            <Nav.Link className="navLink" href="/about-this-project">
              ABOUT THIS PROJECT
            </Nav.Link>
            <Nav.Link className="navLink" href="/products">
              ALL PRODUCTS
            </Nav.Link>
            <NavDropdown
              className="navLink z-index9999"
              title="CATEGORIES"
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item
                className="z-index9999"
                href="/category/flavored"
              >
                Flavored
              </NavDropdown.Item>
              <NavDropdown.Item className="z-index9999" href="/category/blends">
                Blends
              </NavDropdown.Item>
              <NavDropdown.Item
                className="z-index9999"
                href="/category/single-origin"
              >
                Single Origin
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link className="navLink" href="/checkout">
              Shopping Cart
            </Nav.Link>
            <Nav.Link className="navLink" href="/user/login">
              LOGIN
            </Nav.Link>
            <Nav.Link className="navLink" href="/user/register">
              REGISTER
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
