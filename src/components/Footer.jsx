import React from "react";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="logo-footer"></div>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p className="mt-3">
              <i className="bi bi-geo-alt-fill text-orange"></i> 123 Main
              Street, City, Country
            </p>
            <p>
              <i className="bi bi-envelope-fill text-orange me-1"></i>{" "}
              info@example.com
            </p>
            <p className="mb-4">
              <i className="bi bi-telephone-fill text-orange me-1"></i>{" "}
              +1234567890
            </p>
          </div>
          <div className="col-md-4">
            <h5 className="mb-3">Follow Us</h5>
            <a
              href="https://www.facebook.com/uticacoffeeroastingcompany"
              target="_blank"
              rel="noopener noreferrer"
              className="me-3 text-orange"
            >
              <FaFacebookSquare size={30} />
            </a>
            <a
              href="https://www.instagram.com/uticacoffee/"
              target="_blank"
              rel="noopener noreferrer"
              className="me-3 text-orange"
            >
              <AiFillInstagram size={30} />
            </a>
            <a
              href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A5276659&keywords=utica%20coffee%20roasting%20co.&origin=RICH_QUERY_TYPEAHEAD_HISTORY&position=0&searchId=9f54acc1-ea39-487e-9c44-6f7740c78a85&sid=z(*&spellCorrectionEnabled=true"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange"
            >
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center p-3">
        <p>
          &copy; {new Date().getFullYear()} Utica Ecommerce Project. All rights
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
