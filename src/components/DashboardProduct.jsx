import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function DashboardProduct() {
  const [products, setProducts] = useState();

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const response = await axios({
          method: "GET",
          url: `${import.meta.env.VITE_API_URL}/products`,
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
    Swal.fire({
      title: "Do you really want to delete this product?",
      text: "You won't be able to revert this item!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`${import.meta.env.VITE_API_URL}/products/${id}`);
          // Fetch products again after deletion
          const response = await axios.get(
            `${import.meta.env.VITE_API_URL}/products`
          );
          setProducts(response.data);
        } catch (error) {
          console.error("Error:", error);
        }
        Swal.fire({
          title: "Deleted!",
          text: "Product has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="infoDashboard">
      <div className="administrationPanelMain">
        <div className="row ">
          <div className="col">
            <h4 className="text-dark fs-4 mb-3">Products</h4>
          </div>
          <div className="col text-end mb-5">
            <Link to="/admin/products/create" className="">
              <button className="btn-hero ">
                <i className="bi bi-plus"> </i>Add Product
              </button>
            </Link>
          </div>
        </div>

        <div>
          <table className="dashboardTable">
            <thead className="tableHeadProduct text-light">
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Category</th>
                <th>Image</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="bodyTableProducts">
              {products ? (
                products.map((product) => (
                  <tr key={product.id}>
                    <td className="bold ">{product.name}</td>
                    <td className="25">
                      {/* call abbreviate Function, pass string and number of words */}
                      {abbreviateDescription(product.description, 15)}
                    </td>

                    <td>${product.price}</td>
                    <td>{product.stock}</td>
                    <td>{product.category.name}</td>
                    <td>
                      <img
                        src={`${import.meta.env.VITE_BUCKETS_URL}/${
                          product.image
                        }`}
                        alt=""
                        style={{ maxWidth: "80px", maxHeight: "100px" }} // Adjust width and height as needed
                      />
                    </td>

                    <td>
                      <Link to={`/admin/products/${product.id}`}>
                        <button className="btn btn-outline-warning mb-2">
                          <i className="bi bi-pen text-dark"></i>
                        </button>
                      </Link>
                      <br />
                      <button
                        className="btn btn-outline-danger"
                        onClick={() => deleteProduct(product.id)}
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

export default DashboardProduct;
