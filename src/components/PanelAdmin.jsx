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
import { Link } from "react-router-dom";

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

          <div className="">
            <Link to="/admin" className="text-decoration-none">
              <div className="navbar">
                <a>
                  <img src={home} alt="" />
                  Dashboard
                </a>
              </div>
            </Link>
            <Link to="/admin/admins" className="text-decoration-none">
              <div className="navbar">
                <a>
                  <img src={user} alt="" />
                  Admins
                </a>
              </div>
            </Link>
            <Link to="/admin/products" className="text-decoration-none">
              <div className="navbar">
                <a>
                  <img src={bag} alt="" />
                  Products
                </a>
              </div>
            </Link>
            <Link to="/admin/users" className="text-decoration-none">
              <div className="navbar">
                <a>
                  <img src={user} alt="" />
                  Users
                </a>
              </div>
            </Link>
            <Link to="/admin/orders" className="text-decoration-none">
              <div className="navbar">
                <a>
                  <img src={cart} alt="" />
                  Orders
                </a>
              </div>
            </Link>
          </div>
          <hr />
          <Link to="/" className="text-decoration-none">
            <div className="returnToWebsite">
              <a>Return to Website</a>
            </div>
          </Link>
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
              <div>
                <Link to="/admin">
                  <div className="navbar">
                    <a>
                      <img src={home} alt="" />
                      Dashboard
                    </a>
                  </div>
                </Link>
                <Link to="/admin/products">
                  <div className="navbar">
                    <a>
                      <img src={bag} alt="" />
                      Products
                    </a>
                  </div>
                </Link>
                <Link to="/admin/users">
                  <div className="navbar">
                    <a>
                      <img src={user} alt="" />
                      Users
                    </a>
                  </div>
                </Link>
                <Link to="/admin/orders">
                  <div className="navbar">
                    <a>
                      <img src={cart} alt="" />
                      Orders
                    </a>
                  </div>
                </Link>
              </div>
              <hr />
              <div className="returnToWebsite">
                <Link to="/">
                  <a>
                    {/* <img src={backHome} alt="" /> */}
                    Return to Website
                  </a>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default PanelAdmin;
