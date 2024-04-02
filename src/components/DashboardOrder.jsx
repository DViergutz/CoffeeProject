import React from "react";

function DashboardOrder() {
  return (
    <div className="infoDashboard">
      <div className="administrationPanelMainDashboard">
        <div className="lastOrders">
          <table className="dashboardTable">
            <thead className="tableHeadDashboard">
              <tr>
                <th>Id</th>
                <th>User</th>
                <th>Total Price</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="bodyTableProducts">
              <tr>
                <td className="bold">2ab0efb3-4ed3-4ce3-b6f1-2d9e49920128</td>
                <td>
                  <p>
                    <span className="bold">Ma Pérez</span>{" "}
                    (maria.perez@gmail.com)
                  </p>
                </td>
                <td>USD 227.00</td>
                <td>Processing</td>
                <td>
                  <a href="">Edit</a>
                </td>
              </tr>
              <tr>
                <td className="bold">2ab0efb3-4ed3-4ce3-b6f1-2d9e49920128</td>
                <td>
                  <p>
                    <span className="bold">Ma Pérez</span>{" "}
                    (maria.perez@gmail.com)
                  </p>
                </td>
                <td>USD 227.00</td>
                <td>Processing</td>
                <td>
                  <a href="">Edit</a>
                </td>
              </tr>
              <tr>
                <td className="bold">2ab0efb3-4ed3-4ce3-b6f1-2d9e49920128</td>
                <td>
                  <p>
                    <span className="bold">Ma Pérez</span>{" "}
                    (maria.perez@gmail.com)
                  </p>
                </td>
                <td>USD 227.00</td>
                <td>Processing</td>
                <td>
                  <a href="">Edit</a>
                </td>
              </tr>
              <tr>
                <td className="bold">2ab0efb3-4ed3-4ce3-b6f1-2d9e49920128</td>
                <td>
                  <p>
                    <span className="bold">Ma Pérez</span>{" "}
                    (maria.perez@gmail.com)
                  </p>
                </td>
                <td>USD 227.00</td>
                <td>Processing</td>
                <td>
                  <a href="">Edit</a>
                </td>
              </tr>
              <tr>
                <td className="bold">2ab0efb3-4ed3-4ce3-b6f1-2d9e49920128</td>
                <td>
                  <p>
                    <span className="bold">Ma Pérez</span>{" "}
                    (maria.perez@gmail.com)
                  </p>
                </td>
                <td>USD 227.00</td>
                <td>Processing</td>
                <td>
                  <a href="">Edit</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DashboardOrder;
