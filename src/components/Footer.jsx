import React from "react";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

function Footer() {
  return (
    <footer>
      <div className="main-section-footer">
        <div className="container">
          <div className="row d-flex justify-content-between">
            <div className="col-md-2 mb-md-5 mb-4">
              <div className="logo-footer"></div>
            </div>
            <div className="col-md-4 mb-md-5 mb-4 footer-align">
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
            <div className="col-md-4 mb-md-5 mb-4 footer-align">
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
            &copy; {new Date().getFullYear()} Utica Ecommerce Project. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
