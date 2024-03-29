import React from "react";
import logoUticaSB from "../assets/img/logoUticaSB.png";
import profile from "../assets/img/profileImg.png";
import bag from "../assets/img/bag.svg";

function Dashboard() {
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
            <a href="">Dashboard</a>
            <a href="">Products</a>
            <a href="">Users</a>
            <a href="">Orders</a>
          </div>
          <hr />
          <div className="returnToWebsite">
            <a href="">Return to Website</a>
          </div>
        </div>

        {/* SecondDiv */}

        <div className="secondSectionDashboard">
          <div className="administrationPanel">
            <p>Administration Panel</p>
            <div className="profileImg">
              <img src={profile} alt="" />
            </div>
          </div>
          <div className="administrationPanelMain">
            <h5>Dashboard</h5>
            <p>Last 30 days</p>

            <div className="cardContainer">
              <div className="dashboardCard">
                <div>
                  <div className="dashboardIconContainer">
                    <img src={bag} alt="bag-icon" className="dashboardIcon" />
                  </div>
                  <div className="cardDetails">
                    <p>Montly Sales (USD)</p>

                    <p className="numberDashboard">
                      450.980 <span>12%</span>
                    </p>
                  </div>
                </div>
                <p>View all</p>
              </div>
              <div className="dashboardCard">
                <div>
                  <div className="dashboardIconContainer">
                    <img src={bag} alt="bag-icon" className="dashboardIcon" />
                  </div>
                  <div className="cardDetails">
                    <p>Montly Sales (USD)</p>

                    <p className="numberDashboard">
                      450.980 <span>12%</span>
                    </p>
                  </div>
                </div>
                <p>View all</p>
              </div>
              <div className="dashboardCard">
                <div>
                  <div className="dashboardIconContainer">
                    <img src={bag} alt="bag-icon" className="dashboardIcon" />
                  </div>
                  <div className="cardDetails">
                    <p>Montly Sales (USD)</p>

                    <p className="numberDashboard">
                      450.980 <span>12%</span>
                    </p>
                  </div>
                </div>
                <p>View all</p>
              </div>
            </div>
            <div className="lastOrders">
              <p>Last 10 orders</p>
              <div className="dashboardTable">
                <div className="tableHeader">
                  <p>Id</p>
                  <p>User</p>
                  <p>Total Price</p>
                </div>
                <div className="tableHeader">
                  <p>2ab0efb3-4ed3-4ce3-b6f1-2d9e49920128</p>
                  <p>
                    <span className="bold">Ma Pérez</span>{" "}
                    (maria.perez@gmail.com)
                  </p>
                  <p> USD 227.00</p>
                  <a>View</a>
                </div>
                <div className="tableHeader">
                  <p>2ab0efb3-4ed3-4ce3-b6f1-2d9e49920128</p>
                  <p>
                    <span className="bold">Ma Pérez</span>{" "}
                    (maria.perez@gmail.com)
                  </p>
                  <p> USD 227.00</p>
                  <a>View</a>
                </div>
                <div className="tableHeader">
                  <p>2ab0efb3-4ed3-4ce3-b6f1-2d9e49920128</p>
                  <p>
                    <span className="bold">Ma Pérez</span>{" "}
                    (maria.perez@gmail.com)
                  </p>
                  <p> USD 227.00</p>
                  <a>View</a>
                </div>
                <div className="tableHeader">
                  <p>2ab0efb3-4ed3-4ce3-b6f1-2d9e49920128</p>
                  <p>
                    <span className="bold">Ma Pérez</span>{" "}
                    (maria.perez@gmail.com)
                  </p>
                  <p> USD 227.00</p>
                  <a>View</a>
                </div>
                <div className="tableHeader">
                  <p>2ab0efb3-4ed3-4ce3-b6f1-2d9e49920128</p>
                  <p>
                    <span className="bold">Ma Pérez</span>{" "}
                    (maria.perez@gmail.com)
                  </p>
                  <p> USD 227.00</p>
                  <a>View</a>
                </div>
                <div className="tableHeader">
                  <p>2ab0efb3-4ed3-4ce3-b6f1-2d9e49920128</p>
                  <p>
                    <span className="bold">Ma Pérez</span>{" "}
                    (maria.perez@gmail.com)
                  </p>
                  <p> USD 227.00</p>
                  <a>View</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
