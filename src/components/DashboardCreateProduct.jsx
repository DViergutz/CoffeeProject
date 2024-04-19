import React, { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function CreateProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    productImage: "",
    categoryId: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const parsedValue = name === "categoryId" ? parseInt(value) : value; // Convert value to integer only for categoryId
    setProductData({
      ...productData,
      [name]: parsedValue,
    });
  };

  const handleSubmitEdit = async (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    try {
      const response = await axios({
        url: `${import.meta.env.VITE_API_URL}/products`,
        method: "POST",
        data,
      });
    } catch (error) {
      console.error("Error updating product:", error);
    }
    navigate("/admin/products");
  };

  return (
    <>
      {productData ? (
        <div className="infoDashboard">
          <div className="administrationPanelMain">
            <div className="container">
              <h3 className="text-dark pb-1 fw-semibold">Create new Product</h3>
              <form
                onSubmit={handleSubmitEdit}
                encType="multipart/form-data"
                method="post"
                action="/products"
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-2">
                      <label htmlFor="name" className="form-label text-dark">
                        Name
                      </label>
                      <br />
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        id="name"
                        name="name"
                        value={productData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-2 col-md-6">
                    <label htmlFor="stock" className="form-label text-dark">
                      Stock
                    </label>
                    <input
                      type="number"
                      min="0"
                      className="form-control form-control-sm"
                      id="stock"
                      name="stock"
                      value={productData.stock}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="mb-2">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <textarea
                    className="form-control"
                    id="description"
                    name="description"
                    rows="4"
                    value={productData.description}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-2">
                  <label htmlFor="price" className="form-label text-dark">
                    Price
                  </label>
                  <input
                    type="number"
                    min="0"
                    className="form-control form-control-sm"
                    id="price"
                    name="price"
                    value={productData.price}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-2">
                  <label htmlFor="categoryId" className="form-label text-dark">
                    Category
                  </label>
                  <select
                    className="form-select"
                    id="categoryId"
                    name="categoryId"
                    value={productData.categoryId}
                    onChange={handleChange}
                    required
                  >
                    <option disabled value="">
                      Choose Category
                    </option>
                    <option value={1}>Flavored</option>
                    <option value={2}>Blends</option>
                    <option value={3}>Single Origin</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="formFile" className="form-label">
                    Upload Image
                  </label>
                  <input
                    className="form-control"
                    type="file"
                    id="productImage"
                    name="productImage"
                    value={productData.image}
                    onChange={handleChange}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-subscribe w-100 my-3 text-light"
                >
                  Submit Changes
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <tr>
          <td>Loading...</td>
        </tr>
      )}
    </>
  );
}

export default CreateProduct;
