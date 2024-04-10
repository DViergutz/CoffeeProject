import React from "react";
import profile from "../assets/img/profileImg.png";
import bag2 from "../assets/img/bag2.svg";
import ResetDbButton from "./ResetDbButton";

function Dashboard() {
  return (
    <>
      {/* SecondDiv */}

      <div className="infoDashboard">
        <div className="administrationPanelMain">
          <ResetDbButton />
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
              <a>View all</a>
            </div>
            <div className="dashboardCard shadow">
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
              <a>View all</a>
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
              <a>View all</a>
            </div>
          </div>

          {/* TABLE */}

          <div className="lastOrders">
            <p>Last 10 orders</p>
            <div className="administrationPanelMainDashboard">
              <div className="lastOrders">
                <table className="dashboardTable">
                  <thead className="tableHeadDashboard">
                    <tr>
                      <th>Id</th>
                      <th>User</th>
                      <th>Total Price</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody className="bodyTableProducts">
                    <tr>
                      <td className="bold">
                        2ab0efb3-4ed3-4ce3-b6f1-2d9e49920128
                      </td>
                      <td>
                        <p>
                          <span className="bold">Ma Pérez</span>{" "}
                          (maria.perez@gmail.com)
                        </p>
                      </td>
                      <td>USD 227.00</td>
                      <td>
                        <a>Edit</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="bold">
                        2ab0efb3-4ed3-4ce3-b6f1-2d9e49920128
                      </td>
                      <td>
                        <p>
                          <span className="bold">Ma Pérez</span>{" "}
                          (maria.perez@gmail.com)
                        </p>
                      </td>
                      <td>USD 227.00</td>
                      <td>
                        <a>Edit</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="bold">
                        2ab0efb3-4ed3-4ce3-b6f1-2d9e49920128
                      </td>
                      <td>
                        <p>
                          <span className="bold">Ma Pérez</span>{" "}
                          (maria.perez@gmail.com)
                        </p>
                      </td>
                      <td>USD 227.00</td>
                      <td>
                        <a>Edit</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="bold">
                        2ab0efb3-4ed3-4ce3-b6f1-2d9e49920128
                      </td>
                      <td>
                        <p>
                          <span className="bold">Ma Pérez</span>{" "}
                          (maria.perez@gmail.com)
                        </p>
                      </td>
                      <td>USD 227.00</td>
                      <td>
                        <a>Edit</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="bold">
                        2ab0efb3-4ed3-4ce3-b6f1-2d9e49920128
                      </td>
                      <td>
                        <p>
                          <span className="bold">Ma Pérez</span>{" "}
                          (maria.perez@gmail.com)
                        </p>
                      </td>
                      <td>USD 227.00</td>
                      <td>
                        <a>Edit</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
