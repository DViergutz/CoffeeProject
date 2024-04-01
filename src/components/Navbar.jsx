import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import UticaBrandLogo from "../assets/img/logo_utica-removebg.png";

function Navigation() {
  return (
    <Navbar
      expand="lg"
      bg="dark"
      variant="dark"
      className="navbar-collapse main-navbar bg-light py-0 "
    >
      <Container>
        <Navbar.Brand href="/" className="m-0 p-0">
          <img
            src={UticaBrandLogo}
            alt="Utica Brand Logo"
            className="brand-logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="collapse bg-dark ps-3"
        >
          <Nav className="me-auto">
            <Nav.Link className="navLink" href="/about-this-project">
              About this Project
            </Nav.Link>
            <Nav.Link className="navLink" href="/products">
              All Products
            </Nav.Link>
            <Nav.Link className="navLink" href="/products/2">
              One Product
            </Nav.Link>
            <NavDropdown
              className="navLink z-index9999"
              title="Categories"
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
                href="/category/single Origin"
              >
                Single Origin
              </NavDropdown.Item>
              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link className="navLink" href="/checkout">
              Shopping Cart
            </Nav.Link>
            <Nav.Link className="navLink" href="/user/login">
              Login
            </Nav.Link>
            <Nav.Link className="navLink" href="/user/register">
              Register
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
