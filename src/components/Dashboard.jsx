import React from "react";
import logoUticaSB from "../assets/img/logoUticaSB.png";
import profile from "../assets/img/profileImg.png";
import bag2 from "../assets/img/bag2.svg";

function Dashboard() {
  return (
    <>
      {/* SecondDiv */}

      <div className="infoDashboard">
        <div className="administrationPanelMain">
          <h5>Dashboard</h5>
          <p>Last 30 days</p>

          <div className="cardContainer">
            <div className="dashboardCard">
              <div>
                <div className="dashboardIconContainer">
                  <img src={bag2} alt="bag-icon" className="dashboardIcon" />
                </div>
                <div className="cardDetails">
                  <p>Montly Sales (USD)</p>

                  <p className="numberDashboard">
                    450.980 <span>12%</span>
                  </p>
                </div>
              </div>
              <a href="">View all</a>
            </div>
            <div className="dashboardCard">
              <div>
                <div className="dashboardIconContainer">
                  <img src={bag2} alt="bag-icon" className="dashboardIcon" />
                </div>
                <div className="cardDetails">
                  <p>Montly Sales (USD)</p>

                  <p className="numberDashboard">
                    450.980 <span>12%</span>
                  </p>
                </div>
              </div>
              <a href="">View all</a>
            </div>
            <div className="dashboardCard">
              <div>
                <div className="dashboardIconContainer">
                  <img src={bag2} alt="bag-icon" className="dashboardIcon" />
                </div>
                <div className="cardDetails">
                  <p>Montly Sales (USD)</p>

                  <p className="numberDashboard">
                    450.980 <span>12%</span>
                  </p>
                </div>
              </div>
              <a href="">View all</a>
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
                  <span className="bold">Ma Pérez</span> (maria.perez@gmail.com)
                </p>
                <p> USD 227.00</p>
                <a>View</a>
              </div>
              <div className="tableHeader">
                <p>2ab0efb3-4ed3-4ce3-b6f1-2d9e49920128</p>
                <p>
                  <span className="bold">Ma Pérez</span> (maria.perez@gmail.com)
                </p>
                <p> USD 227.00</p>
                <a>View</a>
              </div>
              <div className="tableHeader">
                <p>2ab0efb3-4ed3-4ce3-b6f1-2d9e49920128</p>
                <p>
                  <span className="bold">Ma Pérez</span> (maria.perez@gmail.com)
                </p>
                <p> USD 227.00</p>
                <a>View</a>
              </div>
              <div className="tableHeader">
                <p>2ab0efb3-4ed3-4ce3-b6f1-2d9e49920128</p>
                <p>
                  <span className="bold">Ma Pérez</span> (maria.perez@gmail.com)
                </p>
                <p> USD 227.00</p>
                <a>View</a>
              </div>
              <div className="tableHeader">
                <p>2ab0efb3-4ed3-4ce3-b6f1-2d9e49920128</p>
                <p>
                  <span className="bold">Ma Pérez</span> (maria.perez@gmail.com)
                </p>
                <p> USD 227.00</p>
                <a>View</a>
              </div>
              <div className="tableHeader">
                <p>2ab0efb3-4ed3-4ce3-b6f1-2d9e49920128</p>
                <p>
                  <span className="bold">Ma Pérez</span> (maria.perez@gmail.com)
                </p>
                <p> USD 227.00</p>
                <a>View</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
