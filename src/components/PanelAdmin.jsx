import React, { useState } from "react";
import logoUticaSB from "../assets/img/logoUticaSB.png";
import profile from "../assets/img/profileImg.png";
import bag from "../assets/img/bag.svg";
import home from "../assets/img/home.svg";
import user from "../assets/img/user.svg";
import cart from "../assets/img/cart.svg";
import burger from "../assets/img/burger.svg";
import close from "../assets/img/close.svg";
import backHome from "../assets/img/return.svg";

function PanelAdmin() {
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <>
      <div className="mainAdmin">
        <div className="firstSectionDashboard">
          <div className="imgDashboard">
            <img
              src={logoUticaSB}
              alt="imgUtica"
              className="imgLogoUticaDashboard"
            />
          </div>

          <div className="navbar">
            <a href="/admin">
              <img src={home} alt="" />
              Dashboard
            </a>
            <a href="/admin/products">
              <img src={bag} alt="" />
              Products
            </a>
            <a href="/admin/users">
              <img src={user} alt="" />
              Users
            </a>
            <a href="/admin/orders">
              <img src={cart} alt="" />
              Orders
            </a>
          </div>
          <hr />
          <div className="returnToWebsite">
            <a href="/">Return to Website</a>
          </div>
        </div>

        {/* SecondDiv */}

        <div className="secondSectionDashboard">
          <div className="administrationPanel">
            <img src={burger} alt="" onClick={() => setMobileNav(true)} />
            <p className="titlePanel">Administration Panel</p>
            <div className="profileImg">
              <img src={profile} alt="" />
            </div>
          </div>

          {mobileNav && (
            <div className="mobileNav">
              <div className="imgDashboard">
                <img
                  src={logoUticaSB}
                  alt="imgUtica"
                  className="imgLogoUticaDashboard"
                />
              </div>
              <img
                src={close}
                alt=""
                className="close"
                onClick={() => setMobileNav(false)}
              />
              <div className="navbar">
                <a href="/admin">
                  <img src={home} alt="" />
                  Dashboard
                </a>
                <a href="/admin/products">
                  <img src={bag} alt="" />
                  Products
                </a>
                <a href="/admin/users">
                  <img src={user} alt="" />
                  Users
                </a>
                <a href="/admin/orders">
                  <img src={cart} alt="" />
                  Orders
                </a>
              </div>
              <hr />
              <div className="returnToWebsite">
                <a href="/">
                  {/* <img src={backHome} alt="" /> */}
                  Return to Website
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default PanelAdmin;
