import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import bag2 from "../assets/img/bag2.svg";
import ResetDbButton from "./ResetDbButton";
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

  ////////////////// MOST ITEM SOLD///////////////////
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
                  <p>Montly Sales ($)</p>

                  <p className="numberDashboard">{monthlySales}</p>
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
                  <p>Highest Sale ($)</p>

                  <p className="numberDashboard">
                    {highestTotalPriceOrder
                      ? highestTotalPriceOrder.totalPrice
                      : "N/A"}{" "}
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
                  <p>Most Sold Item</p>

                  <p className="numberDashboard">{mostSoldItem.productName}</p>
                </div>
              </div>
              <a>View all</a>
            </div>
          </div>

          <div className="pie-chart">
            <Doughnut data={chartData} />
          </div>

          <div className="bar-chart">
            <Bar data={chartBarData} />
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
