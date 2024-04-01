import React from "react";

function DashboardProduct() {
  return (
    <div className="infoDashboard">
      <div className="administrationPanelMain">
        <h5>Products</h5>

        <div className="lastOrders">
          <table className="dashboardTable">
            <thead className="tableHeadProduct">
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Stock</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="bodyTableProducts">
              <tr>
                <td className="bold">Cafe 1</td>
                <td>
                  <span>USD 227.00</span>
                </td>
                <td>22</td>
                <td>
                  <a href="">Edit</a>
                </td>
              </tr>
              <tr>
                <td className="bold">Cafe 2</td>
                <td>
                  <span>USD 227.00</span>
                </td>
                <td>22</td>
                <td>
                  <a href="">Edit</a>
                </td>
              </tr>
              <tr>
                <td className="bold">Cafe 3</td>
                <td>
                  <span>USD 227.00</span>
                </td>
                <td>22</td>
                <td>
                  <a href="">Edit</a>
                </td>
              </tr>
              <tr>
                <td className="bold">Cafe 4</td>
                <td>
                  <span>USD 227.00</span>
                </td>
                <td>22</td>
                <td>
                  <a href="">Edit</a>
                </td>
              </tr>
              <tr>
                <td className="bold">Cafe 5</td>
                <td>
                  <span>USD 227.00</span>
                </td>
                <td>22</td>
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

export default DashboardProduct;
