import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import UticaBrandLogo from "../assets/img/logo_utica-removebg.png"; // Adjust the path as needed

function Navigation() {
  return (
    <Navbar
      expand="lg"
      bg="secondary"
      variant="dark"
      className="navbar-collapse main-navbar "
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
        <Navbar.Collapse id="responsive-navbar-nav" className="collapse">
          <Nav className="me-auto">
            <Nav.Link href="/about-this-project">About this Project</Nav.Link>
            <Nav.Link href="/products">All Products</Nav.Link>
            <Nav.Link href="/products/2">One Product</Nav.Link>
            <NavDropdown title="Categories" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/category/flavored">
                Flavored
              </NavDropdown.Item>
              <NavDropdown.Item href="/category/blends">
                Blends
              </NavDropdown.Item>
              <NavDropdown.Item href="/category/singleOrigin">
                Single Origin
              </NavDropdown.Item>
              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/checkout">Shopping Cart</Nav.Link>
            <Nav.Link href="/user/login">Login</Nav.Link>
            <Nav.Link href="/user/register">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
