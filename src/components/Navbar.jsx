import React from "react";
import { Navbar, Nav, NavDropdown, Container, Badge } from "react-bootstrap";
import UticaBrandLogo from "../assets/img/logo-utica-white.png";

function Navigation() {
  return (
    <Navbar expand="lg" className="navbar-collapse main-navbar">
      <Container>
        <Navbar.Brand href="/" className="m-0 p-0 brand-logo-no-hover">
          <img
            src={UticaBrandLogo}
            alt="Utica Brand Logo"
            className="brand-logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="text-orange bg-light"
        />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="collapse ps-3 bg-dark-grey"
        >
          <Nav className="me-auto">
            <Nav.Link className="navLink" href="/about-this-project">
              ABOUT THIS PROJECT
            </Nav.Link>
            <Nav.Link className="navLink" href="/products">
              PRODUCTS
            </Nav.Link>
            <NavDropdown
              className="navLink  navDropdown"
              title="CATEGORIES"
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item className="" href="/category/flavored">
                Flavored
              </NavDropdown.Item>
              <NavDropdown.Item className="" href="/category/blends">
                Blends
              </NavDropdown.Item>
              <NavDropdown.Item className="" href="/category/Single Origin">
                Single Origin
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="d-flex align-items-start align-items-center ">
            <NavDropdown
              className="navLink  navDropdown"
              title={<i className="bi bi-person-fill fs-5 "></i>}
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item className="" href="/user/login">
                Login
              </NavDropdown.Item>
              <NavDropdown.Item className="" href="/user/register">
                Register
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="navLink" href="/checkout">
              <i className="bi bi-cart2 fs-5 text-orange ms-2"></i>{" "}
              <Badge pill bg="primary" style={{ marginLeft: "10px" }}>
                1
              </Badge>
            </Nav.Link>
            <Nav.Link className="navLink" href="/admin/login">
              ADMIN
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
