import React from "react";
import visa from "../assets/img/visa-logo.svg";
import master from "../assets/img/mastercard.svg";
import oca from "../assets/img/oca.png";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

function Footer() {
  return (
    <footer className="footer text-black">
      <div className="divCointainer">
        <div className="d-flex justify-content-center social">
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

      <p className="d-flex justify-content-center mt-3 textFooter">
        Coffee Break
      </p>
    </footer>
  );
}

export default Footer;
