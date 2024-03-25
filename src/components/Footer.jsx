import React from "react";
import visa from "../assets/img/visa-logo.svg";
import master from "../assets/img/mastercard.svg";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

function Footer() {
  return (
    <footer className="footer text-black">
      <div className="divCointainer">
        <div className="d-flex justify-content-center social">
          <a
            href={"https://api.whatsapp.com/send?phone=59893766817"}
            target="_blank"
          >
            <WhatsAppIcon className="social-icon" fontSize="large" />
          </a>
          <a
            href={"https://api.whatsapp.com/send?phone=59893766817"}
            target="_blank"
          >
            <InstagramIcon className="social-icon" fontSize="large" />
          </a>

          <a
            href={"https://www.facebook.com/profile.php?id=61557587070054"}
            target="_blank"
          >
            <FacebookIcon className="social-icon" fontSize="large" />
          </a>
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
        </div>
      </div>

      <p className="d-flex justify-content-center mt-3 textFooter">
        Coffee Break
      </p>
    </footer>
  );
}

export default Footer;
