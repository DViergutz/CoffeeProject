import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import bag2 from "../assets/img/bag2.svg";

import { Chart as ChartJS } from "chart.js/auto";
import { Doughnut, Bar } from "react-chartjs-2";

function Dashboard() {
  const [orders, setOrders] = useState([]);
  const [monthlySales, setMonthlySales] = useState(0);
  const [highestTotalPriceOrder, setHighestTotalPriceOrder] = useState(null);
  const [mostSoldItem, setMostSoldItem] = useState([]);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch products
        const productsResponse = await axios.get(
          "http://localhost:3000/products"
        );
        setProducts(productsResponse.data);

        // Fetch last orders
        const ordersResponse = await axios.get(
          "http://localhost:3000/orders/last"
        );
        setOrders(ordersResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  /*  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const response = await axios({
          method: "GET",
          url: `http://localhost:3000/products`,
        });
        setProducts(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchAllProducts();
    setProducts(products);
  }, []);

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
  }, []); */

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
      // navigate(0);
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  //////////////////////////////////// TOTAL SALES//////////////////////

  useEffect(() => {
    const totalSales = orders.reduce(
      (acc, order) => acc + parseFloat(order.totalPrice),
      0
    );
    setMonthlySales(totalSales);
  }, [orders]);

  //////////////////////////// HIGHEST ORDER ////////////////////
  useEffect(() => {
    if (orders.length > 0) {
      const highestTotalPrice = orders.reduce((prevOrder, currentOrder) => {
        return parseFloat(prevOrder.totalPrice) >
          parseFloat(currentOrder.totalPrice)
          ? prevOrder
          : currentOrder;
      });
      setHighestTotalPriceOrder(highestTotalPrice);
    }
  }, [orders]);

  ////////////////// MOST SOLD ITEM///////////////////
  useEffect(() => {
    if (orders.length > 0) {
      const productQuantityMap = new Map();
      orders.forEach((order) => {
        order.products.forEach((product) => {
          const quantitySold = productQuantityMap.get(product.id) || 0;
          productQuantityMap.set(product.id, quantitySold + product.quantity);
        });
      });

      let mostSoldProductId;
      let highestQuantitySold = 0;
      productQuantityMap.forEach((quantitySold, productId) => {
        if (quantitySold > highestQuantitySold) {
          mostSoldProductId = productId;
          highestQuantitySold = quantitySold;
        }
      });
      const mostSoldItem = orders.reduce((mostSoldItem, order) => {
        const product = order.products.find(
          (product) => product.id === mostSoldProductId
        );
        if (
          product &&
          (!mostSoldItem || product.quantity > mostSoldItem.quantity)
        ) {
          return product;
        }
        return mostSoldItem;
      }, null);
      const totalQuantitySold = productQuantityMap.get(mostSoldProductId);
      setMostSoldItem({ ...mostSoldItem, totalQuantitySold });
    }
  }, [orders]);

  ///////////////////PIE CHART///////////////
  const calculateStatusPercentages = (orders) => {
    const statusCounts = orders.reduce((counts, order) => {
      counts[order.status] = (counts[order.status] || 0) + 1;
      return counts;
    }, {});
    // Calcula numero total de oders
    const totalOrders = orders.length;

    // Calcula porcentajes
    const statusPercentages = {};
    for (const status in statusCounts) {
      statusPercentages[status] = (
        (statusCounts[status] / totalOrders) *
        100
      ).toFixed(2);
    }
    return statusPercentages;
  };
  // Function para generar data Doughnut chart
  const generateChartData = (statusPercentages) => {
    const labels = Object.keys(statusPercentages);
    const data = Object.values(statusPercentages);

    return {
      labels: labels,
      datasets: [
        {
          data: data,
          backgroundColor: [
            "rgba(46, 204, 113, 0.6)",
            "rgba(255, 99, 132, 0.6)",
            "rgba(54, 162, 235, 0.6)",
          ],
        },
      ],
    };
  };
  const statusPercentages = calculateStatusPercentages(orders);
  const chartData = generateChartData(statusPercentages);

  //////////////////BAR CHART////////////////////

  const generateChartBarData = () => {
    const labels = products.map((product) => product.name);
    const data = products.map((product) => product.stock);

    return {
      labels: labels,
      datasets: [
        {
          label: "Stock",
          data: data,
          backgroundColor: "rgba(54, 162, 235, 0.6)",
        },
      ],
    };
  };

  const chartBarData = generateChartBarData();
  ////////////////////////////////////////////////////
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
          <h4 className="text-dark fs-4">Dashboard</h4>
          <p className="fw-semibold text-dark">Last 30 days</p>
          <div className="my-4">
            <div className="row">
              <div className="col">
                <div className="d-flex flex-column admin-card">
                  <div>
                    <i class="bi bi-receipt fs-1 text-light"></i>
                  </div>
                  <div>
                    <p className="fs-3 fw-semibold text-light">Monthly Sales</p>
                    <p className="fw-bold fs-1">{monthlySales}</p>
                  </div>
                  <div>
                    <a className="text-light text-decoration-none">View all</a>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="d-flex flex-column admin-card-1">
                  <div>
                    <i class="bi bi-bar-chart-fill fs-1 text-light"></i>
                  </div>
                  <div>
                    <p className="fs-3 fw-semibold text-light">Highest Sale</p>
                    <p className="fw-bold fs-1">
                      {highestTotalPriceOrder
                        ? highestTotalPriceOrder.totalPrice
                        : "N/A"}{" "}
                    </p>
                  </div>
                  <div>
                    <a className="text-light text-decoration-none">View all</a>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="d-flex flex-column admin-card-2">
                  <div>
                    <i class="bi bi-bag-fill fs-1 text-light"></i>
                  </div>
                  <div>
                    <p className="fs-3 fw-semibold text-light">
                      Most Sold Item
                    </p>
                    <p className="fw-bold fs-1">{mostSoldItem.productName}</p>
                  </div>
                  <div>
                    <a className="text-light text-decoration-none">View all</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-5">
            <div className="row">
              <div className="col-4 graphics-wrapper">
                <div className="d-flex flex-column justify-content-center admin-card-pie">
                  <p className="fs-3 fw-bold text-dark">Order Status</p>
                  <div className="pie-chart d-flex align-items-center justify-content-center">
                    <Doughnut data={chartData} />
                  </div>
                </div>
              </div>
              <div className="col-8 graphics-wrapper">
                <div className="d-flex flex-column justify-content-center admin-card-pie">
                  <p className="fs-3 fw-bold text-dark">Stock</p>
                  <div className="bar-chart d-flex align-items-center justify-content-center">
                    <Bar data={chartBarData} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* TABLE */}

          <div>
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
    </>
  );
}

export default Dashboard;
