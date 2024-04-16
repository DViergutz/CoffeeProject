import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/UserSlice.jsx";
import { setIsCartOpen } from "../redux/CartSlice.jsx";

function Navigation() {
  const isLogged = useSelector((state) => state.user.isLogged);
  const dispatch = useDispatch();
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);

  return (
    <Navbar expand="lg" className="navbar-collapse main-navbar">
      <div className="container">
        <Link to="/" onClick={() => window.scrollTo(0, 0)}>
          <Navbar.Brand className="m-0 p-0 brand-logo-no-hover">
            <img
              src={`${
                import.meta.env.VITE_BUCKETS_URL
              }/fotos_varias/logo-utica-white.png`}
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
          className="collapse ps-3 py-3 bg-dark-grey"
        >
          <Nav className="me-auto">
            <Nav.Link
              as={Link}
              to="/about-this-project"
              className="navLink"
              onClick={() => window.scrollTo(0, 0)}
            >
              ABOUT THIS PROJECT
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/products"
              className="navLink"
              onClick={() => window.scrollTo(0, 0)}
            >
              PRODUCTS
            </Nav.Link>
            <NavDropdown
              className="navLink  navDropdown"
              title="CATEGORIES"
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item
                as={Link}
                to="/category/Flavored"
                className=""
                onClick={() => window.scrollTo(0, 0)}
              >
                FLAVORED
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/category/Blends"
                className=""
                onClick={() => window.scrollTo(0, 0)}
              >
                BLENDS
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/category/Single Origin"
                className=""
                onClick={() => window.scrollTo(0, 0)}
              >
                SINGLE ORIGIN
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Nav className="">
            <Nav.Link
              as={Link}
              to="/admin/login"
              className="navLink"
              onClick={() => window.scrollTo(0, 0)}
            >
              ADMIN
            </Nav.Link>
            <div className="d-flex align-items-center ms-3 text-light cart-wrapper">
              <div className="cart-badge"></div>
              <i
                className="bi bi-cart2 fs-5 navLink"
                onClick={() => dispatch(setIsCartOpen())}
              ></i>
            </div>
            {isLogged ? (
              <></>
            ) : (
              <NavDropdown
                className="navLink navDropdown"
                title={<i className="bi bi-person-fill fs-5"></i>}
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item
                  as={Link}
                  to="/user/login"
                  className=""
                  onClick={() => window.scrollTo(0, 0)}
                >
                  LOGIN
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/user/register"
                  className=""
                  onClick={() => window.scrollTo(0, 0)}
                >
                  REGISTER
                </NavDropdown.Item>
              </NavDropdown>
            )}
            {isLogged ? (
              <Nav.Link
                as={Link}
                to="/"
                className="navLink "
                onClick={() => window.scrollTo(0, 0)}
              >
                <button
                  className="btn btn-view-product-logout height65 w-80"
                  onClick={() => dispatch(logout())}
                >
                  LOGOUT
                </button>
              </Nav.Link>
            ) : (
              <></>
            )}
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default Navigation;
