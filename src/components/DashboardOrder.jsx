import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function DashboardOrder() {
  const [orders, setOrders] = useState();

  useEffect(() => {
    const fetchAllOrders = async () => {
      try {
        const response = await axios({
          method: "GET",
          url: `http://localhost:3000/orders`,
        });
        setOrders(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchAllOrders();
  }, []);
  return (
    <div className="infoDashboard">
      <div className="administrationPanelMain">
        <div className="row ">
          <div className="col">
            <h5>Orders</h5>
          </div>
        </div>
        <div className="lastOrders">
          <table className="dashboardTable">
            <thead className="tableHeadDashboard">
              <tr>
                <th>Order Id</th>
                <th>User</th>
                <th>Products</th>
                <th>Total Price</th>
                <th>Payment method</th>
                <th>Status</th>
                <th>Created at</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="bodyTableProducts">
              {orders ? (
                orders.map((order) => (
                  <tr key={order.id}>
                    <td className="bold">{order.id}</td>
                    {/* <td>{order.products}</td> */}
                    <td>{order.userId}</td>
                    <td className="w-25">
                      <ul>
                        {order.products.map((item) => (
                          <li key={item.productName}>
                            <p>
                              {item.productName} - {item.quantity}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td>{order.totalPrice}</td>
                    <td>{order.method}</td>
                    <td>{order.status}</td>
                    <td>{order.createdAt}</td>
                    <td>
                      <Link to={`/order/orders/edit/${order.id}`} className="">
                        <button className="btn btn-outline-warning mb-2">
                          <i className="bi bi-pen text-dark"></i>
                        </button>
                      </Link>
                      <br />
                      <button className="btn btn-outline-danger">
                        <i className="bi bi-trash3 text-dark"></i>
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td>Loading...</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DashboardOrder;
