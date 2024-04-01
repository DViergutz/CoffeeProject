import React from "react";

function DashboardUser() {
  return (
    <div className="infoDashboard">
      <div className="administrationPanelMain">
        <h5>Users</h5>

        <div className="lastOrders">
          <table className="dashboardTable">
            <thead className="tableHeadProduct">
              <tr>
                <th>Id</th>
                <th>Full name</th>
                <th>Email</th>
                <th>Administrator</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="bodyTableProducts">
              <tr>
                <td className="bold">12</td>
                <td>
                  <span>Roberto Carlos</span>
                </td>
                <td>Roberto.carlos@utica</td>
                <td>No</td>
                <td>
                  <a href="">Edit</a>
                </td>
              </tr>
              <tr>
                <td className="bold">12</td>
                <td>
                  <span>Roberto Carlos</span>
                </td>
                <td>Roberto.carlos@utica</td>
                <td>No</td>
                <td>
                  <a href="">Edit</a>
                </td>
              </tr>
              <tr>
                <td className="bold">12</td>
                <td>
                  <span>Roberto Carlos</span>
                </td>
                <td>Roberto.carlos@utica</td>
                <td>No</td>
                <td>
                  <a href="">Edit</a>
                </td>
              </tr>
              <tr>
                <td className="bold">12</td>
                <td>
                  <span>Roberto Carlos</span>
                </td>
                <td>Roberto.carlos@utica</td>
                <td>No</td>
                <td>
                  <a href="">Edit</a>
                </td>
              </tr>
              <tr>
                <td className="bold">12</td>
                <td>
                  <span>Roberto Carlos</span>
                </td>
                <td>Roberto.carlos@utica</td>
                <td>Yes</td>
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

export default DashboardUser;
