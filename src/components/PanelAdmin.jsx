import React, { useState } from "react";
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
              src={`${
                import.meta.env.VITE_BUCKETS_URL
              }/fotos_varias/logo-utica-white.png`}
              alt="imgUtica"
              className="imgLogoUticaDashboard img-fluid"
            />
          </div>

          <div className="d-flex align-items-start flex-column mt-5">
            <Link to="/admin" className="text-decoration-none">
              <div className="navbar">
                <i className="bi bi-house"> Dashboard</i>
              </div>
            </Link>
            <Link to="/admin/admins" className="text-decoration-none">
              <div className="navbar">
                <i className="bi bi-people"> Admins</i>
              </div>
            </Link>
            <Link to="/admin/products" className="text-decoration-none">
              <div className="navbar">
                <i className="bi bi-backpack"> Products</i>
              </div>
            </Link>
            <Link to="/admin/users" className="text-decoration-none">
              <div className="navbar">
                <i className="bi bi-person"> Users</i>
              </div>
            </Link>
            <Link to="/admin/orders" className="text-decoration-none">
              <div className="navbar">
                <i className="bi bi-cart3"> Orders</i>
              </div>
            </Link>
          </div>
          <hr />
          <Link to="/" className="text-decoration-none">
            <div className="returnToWebsite">
              <i class="bi bi-arrow-return-left"> Return to Website</i>
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
            <div className="mobileNav w-50">
              <div className="imgDashboard">
                <img
                  src={`${
                    import.meta.env.VITE_BUCKETS_URL
                  }/fotos_varias/logo-utica-white.png`}
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
                <Link to="/admin" className="text-decoration-none">
                  <div className="navbar mt-3">
                    <i className="bi bi-house"> Dashboard</i>
                  </div>
                </Link>
                <Link to="/admin/admins" className="text-decoration-none">
                  <div className="navbar">
                    <i className="bi bi-people"> Admins</i>
                  </div>
                </Link>
                <Link to="/admin/products" className="text-decoration-none">
                  <div className="navbar">
                    <i className="bi bi-backpack"> Products</i>
                  </div>
                </Link>
                <Link to="/admin/users" className="text-decoration-none">
                  <div className="navbar">
                    <i className="bi bi-person"> Users</i>
                  </div>
                </Link>
                <Link to="/admin/orders" className="text-decoration-none">
                  <div className="navbar">
                    <i className="bi bi-cart3"> Orders</i>
                  </div>
                </Link>
              </div>
              <hr />
              <div className="returnToWebsite">
                <Link to="/" className="text-decoration-none">
                  <i class="bi bi-arrow-return-left"> Return to Website</i>
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
