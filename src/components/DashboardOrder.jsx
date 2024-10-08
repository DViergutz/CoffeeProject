import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import moment from "moment";
import { useSelector } from "react-redux";

function DashboardOrder() {
  const [orders, setOrders] = useState();
  const navigate = useNavigate();
  const token = useSelector((state) => state.user.token);
  useEffect(() => {
    const fetchAllOrders = async () => {
      try {
        const response = await axios({
          method: "GET",
          url: `${import.meta.env.VITE_API_URL}/orders`,

          headers: { Authorization: "Bearer " + token },
        });
        setOrders(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchAllOrders();
  }, []);

  const handleStatusChange = async (id, newStatus) => {
    const newOrderStatus = newStatus;
    setOrders(
      orders.map((order) =>
        order.id === id ? { ...order, status: newStatus } : order
      )
    );
    try {
      const response = await axios.patch(
        `${import.meta.env.VITE_API_URL}/orders/${id}`,
        {
          headers: { Authorization: "Bearer " + token },
        },
        {
          status: newStatus,
        }
      );
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
          await axios.delete(`${import.meta.env.VITE_API_URL}/orders/${id}`, {
            headers: { Authorization: "Bearer " + token },
          });
          // Fetch admins again after deletion
          const response = await axios.get(
            `${import.meta.env.VITE_API_URL}/orders`,
            {
              headers: { Authorization: "Bearer " + token },
            }
          );
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
    <div className="infoDashboard">
      <div className="administrationPanelMain">
        <div className="row dashboardHeight60 align-items-center mb-4">
          <div className="col">
            <h4 className="text-dark fs-4 mb-0">Orders</h4>
          </div>
        </div>

        <div className="lastOrders">
          <table className="dashboardTable">
            <thead className="tableHeadDashboard">
              <tr className="text-light">
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
                            <p className="text-dark">
                              {item.productName} - Quantity: {item.quantity}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td className="w-15">$ {order.totalPrice}</td>
                    <td>{order.method}</td>
                    <td className="w-15">
                      <select
                        className={`form-select ${
                          order.status === "Pending"
                            ? "status-pending"
                            : order.status === "Processing"
                            ? "status-processing"
                            : "status-delivered"
                        }`}
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
  );
}

export default DashboardOrder;
