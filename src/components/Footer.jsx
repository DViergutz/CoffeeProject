import React from "react";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img
              src="./src/assets/img/logoUtica.png"
              alt="Logo"
              className="img-fluid mb-3"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              lobortis mattis eros, et interdum lectus.
            </p>
            <div>
              {/* Social Media Links */}
              <a
                href="https://www.facebook.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                className="me-3"
              >
                <FaFacebookSquare size={30} />
              </a>
              <a
                href="https://www.instagram.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={30} />
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/products">Products</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p>123 Main Street, City, Country</p>
            <p>Email: info@example.com</p>
            <p>Phone: +1234567890</p>
          </div>
        </div>
      </div>
      <div className="text-center p-3">
        <p>
          &copy; {new Date().getFullYear()} Your Ecommerce Store. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

/* <footer className="footer text-black">
  <div className="divCointainer">
    <div>
      <img src={logoUtica} alt="" className="logoUticaFooter" />
    </div>

    <div className="d-flex justify-content-center social">
      <h6 className="HeadingsFooter">Get in touch</h6>
      <a href={""} target="_blank">
        <WhatsAppIcon className="social-icon" fontSize="large" />
      </a>
      <a href={"https://www.instagram.com/uticacoffee/"} target="_blank">
        <InstagramIcon className="social-icon" fontSize="large" />
      </a>

      <a href={"https://www.facebook.com/UCRUtica"} target="_blank">
        <FacebookIcon className="social-icon" fontSize="large" />
      </a>
      <div className="textRoutesFooter d-block">
        <a href="/about-this-project" className="d-block">
          About us
        </a>
        <a href="/products" className="d-block">
          Products
        </a>
        <a href="/admin/login" className="d-block">
          Admin
        </a>
        <a href="/user/login" className="d-block">
          Login
        </a>
      </div>
    </div>

    <div className="d-flex ">
      <img
        src={visa}
        alt=""
        className="mx-2 imgPagos"
        width="40"
        height="40"
      />
      <img
        src={master}
        alt=""
        className="mx-2 imgPagos"
        width="40"
        height="40"
      />
      <img
        src={oca}
        alt=""
        className="mx-2 imgPagos"
        width="40"
        height="40"
      />
    </div>
  </div>
</footer> */
