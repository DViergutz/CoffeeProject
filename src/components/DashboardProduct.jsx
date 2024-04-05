import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function DashboardProduct() {
  const [products, setProducts] = useState();

  useEffect(() => {
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
  }, []);

  // cut description
  const abbreviateDescription = (description, maxLength) => {
    const words = description.split(" ");
    if (words.length > maxLength) {
      return words.slice(0, maxLength).join(" ") + "...";
    } else {
      return description;
    }
  };

  // delete product
  const deleteProduct = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:3000/products/${id}`);
        // Fetch products again after deletion
        const response = await axios.get("http://localhost:3000/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  return (
    <div className="infoDashboard">
      <div className="administrationPanelMain">
        <div className="row ">
          <div className="col">
            <h5>Products</h5>
          </div>
          <div className="col text-end">
            <Link
              to="/admin/products/create"
              className="btn btn-outline-success"
            >
              <i className="bi bi-plus-square"> Add Product</i>
            </Link>
          </div>
        </div>

        <div>
          <table className="dashboardTable">
            <thead className="tableHeadProduct">
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Category</th>
                <th>Image</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="bodyTableProducts">
              {products ? (
                products.map((product) => (
                  <tr key={product.id}>
                    <td className="bold ">{product.name}</td>
                    <td className="w-50">
                      {/* call abbreviate Function, pass string and number of words */}
                      {abbreviateDescription(product.description, 15)}
                    </td>

                    <td>${product.price}</td>
                    <td>{product.stock}</td>
                    <td>{product.category.name}</td>
                    <td>{product.image}</td>

                    <td>
                      <a
                        href={`/admin/products/edit/${product.id}`}
                        className=""
                      >
                        <button className="btn btn-outline-warning mb-2">
                          <i className="bi bi-pen text-dark"></i>
                        </button>
                      </a>
                      <br />
                      <button className="btn btn-outline-danger">
                        <i
                          className="bi bi-trash3 text-dark"
                          onClick={() => deleteProduct(product.id)}
                        ></i>
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

export default DashboardProduct;
