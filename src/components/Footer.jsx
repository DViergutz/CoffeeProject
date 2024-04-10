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
                <i className="bi bi-geo-alt-fill text-orange me-2"></i>
                <a
                  href="https://www.google.com/maps/place/Utica+Coffee+Roasting+Company/@43.1034997,-75.2301864,17z/data=!3m1!4b1!4m6!3m5!1s0x89d9472300fe4943:0x8b9f0b82b03f9611!8m2!3d43.1034958!4d-75.2276115!16s%2Fg%2F1tg51dz2?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-light"
                >
                  92 Genesee St, Utica, NY 13502, U.S.
                </a>{" "}
              </p>
              <p>
                <i className="bi bi-envelope-fill text-orange me-1"></i>{" "}
                <a
                  href="mailto:info@example.com"
                  className="text-decoration-none text-light"
                >
                  {" "}
                  info@example.com
                </a>
              </p>
              <p className="mb-4">
                <i className="bi bi-telephone-fill text-orange me-1"></i>{" "}
                <a
                  href="tel:+1234567890"
                  className="text-decoration-none text-light"
                >
                  +1234567890
                </a>
              </p>
            </div>
            <div className="col-md-4 mb-md-5 mb-4 footer-align-contact">
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
