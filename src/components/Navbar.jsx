import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <Navbar expand="lg" className="navbar-collapse main-navbar">
      <Container>
        <Link to="/">
          <Navbar.Brand className="m-0 p-0 brand-logo-no-hover">
            <img
              src={
                "https://abtomsvdwctapkbvozbb.supabase.co/storage/v1/object/public/fotos_varias/logo-utica-white.png"
              }
              alt="Utica Brand Logo"
              className="brand-logo"
            />
          </Navbar.Brand>
        </Link>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="text-orange bg-light"
        />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="collapse ps-3 bg-dark-grey"
        >
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/about-this-project" className="navLink">
              ABOUT THIS PROJECT
            </Nav.Link>
            <Nav.Link as={Link} to="/products" className="navLink">
              PRODUCTS
            </Nav.Link>
            <NavDropdown
              className="navLink  navDropdown"
              title="CATEGORIES"
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item as={Link} to="/category/flavored" className="">
                Flavored
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/blends" className="">
                Blends
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/category/Single Origin"
                className=""
              >
                Single Origin
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Nav className="d-flex align-items-start align-items-center ">
            <NavDropdown
              className="navLink navDropdown"
              title={<i className="bi bi-person-fill fs-5 "></i>}
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item as={Link} to="/user/login" className="">
                Login
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/user/register" className="">
                Register
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/checkout" className="navLink ">
              <i className="bi bi-cart2 fs-5 text-orange ms-2"></i>{" "}
            </Nav.Link>
            <Nav.Link as={Link} to="/user/login" className="navLink">
              ADMIN
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
