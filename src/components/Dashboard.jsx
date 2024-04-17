import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

import profile from "../assets/img/profileImg.png";
import bag2 from "../assets/img/bag2.svg";
import ResetDbButton from "./ResetDbButton";

function Dashboard() {
  const [orders, setOrders] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLastOrders = async () => {
      try {
        const response = await axios({
          method: "GET",
          url: `http://localhost:3000/orders/last`,
        });
        setOrders(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchLastOrders();
  }, []);

  const handleStatusChange = async (id, newStatus) => {
    const newOrderStatus = newStatus;
    setOrders(
      orders.map((order) =>
        order.id === id ? { ...order, status: newStatus } : order
      )
    );
    try {
      const response = await axios.patch(`http://localhost:3000/orders/${id}`, {
        status: newStatus,
      });
      console.log(response.data);
      // navigate(0);
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const deleteOrder = async (id) => {
    Swal.fire({
      title: "Do you really want to delete this order?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`http://localhost:3000/orders/${id}`);
          // Fetch admins again after deletion
          const response = await axios.get("http://localhost:3000/orders/last");
          setOrders(response.data);
        } catch (error) {
          console.error("Error:", error);
        }

        Swal.fire({
          title: "Deleted!",
          text: "Order has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <>
      {/* SecondDiv */}

      <div className="infoDashboard">
        <div className="administrationPanelMain">
          <div className="d-flex align-items-center flex-column">
            <p className="fst-italic fw-light">
              If the page doesn't display products below or the page seems to be
              broken we please you to reset the tables to their initial state by
              clicking this button.
            </p>
            <ResetDbButton />
          </div>
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
                        <ul className="ps-0" style={{ listStyleType: "none" }}>
                          {order.products.map((item) => (
                            <li key={item.productName}>
                              <p>
                                {item.productName} - Quantity: {item.quantity}
                              </p>
                            </li>
                          ))}
                        </ul>
                      </td>
                      <td className="w-15">$ {order.totalPrice}</td>
                      <td>{order.method}</td>
                      <td className="w-25">
                        <select
                          className="form-select"
                          aria-label="order"
                          name="status"
                          value={order.status}
                          onChange={(e) =>
                            handleStatusChange(order.id, e.target.value)
                          }
                          required
                        >
                          <option value="Pending" style={{ color: "red" }}>
                            Pending
                          </option>
                          <option value="Processing" style={{ color: "blue" }}>
                            Processing
                          </option>
                          <option value="Delivered" style={{ color: "green" }}>
                            Delivered
                          </option>
                        </select>
                      </td>
                      <td>{moment(new Date(order.createdAt)).fromNow()}</td>
                      <td>
                        <button
                          className="btn btn-outline-danger"
                          onClick={() => deleteOrder(order.id)}
                        >
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
    </>
  );
}

export default Dashboard;
