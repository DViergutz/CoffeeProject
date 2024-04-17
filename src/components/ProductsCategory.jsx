import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

import { setIsCartOpen, incrementQuantity } from "../redux/CartSlice.jsx";
import { useDispatch } from "react-redux";
import ResetDbButton from "./ResetDbButton.jsx";
import DotLoader from "react-spinners/DotLoader.js";

function ProductsCategory() {
  const params = useParams();
  const [productsOfCategory, setproductsOfCategory] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchProductsOfCategory = async () => {
      try {
        const response = await axios({
          method: "GET",
          url: `http://localhost:3000/category/${params.categoryName}`,
        });
        setproductsOfCategory(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchProductsOfCategory();
  }, [params]);

  return (
    <>
      <div className="bg-fondo3 ">
        <div className="container main">
          <p className="fst-italic fw-light">
            If the page doesn't display products below or the page seems to be
            broken we please you to reset the tables to their initial state by
            clicking this button.
          </p>
          <ResetDbButton />
          <h2 className="all-products-h2">
            Explore Our{" "}
            <span className="text-orange text-capitalize">
              {params.categoryName}
            </span>{" "}
            Coffee Selection
          </h2>
          <div className="container">
            <div className="row mb-5 ">
              {productsOfCategory ? (
                productsOfCategory.map((product) => (
                  <div
                    className="col-md-6 col-lg-4 col-xl-3 d-flex flex-column align-items-center justify-content-center"
                    key={product.id}
                  >
                    <div className="d-flex flex-column h-100 ">
                      <div className="special-product-card h-100 d-flex flex-column">
                        <Link
                          to={`/products/${product.id}`}
                          onClick={() => window.scrollTo(0, 0)}
                          className="text-decoration-none"
                        >
                          <Card.Img
                            variant="top"
                            className="card-img "
                            src={`${import.meta.env.VITE_BUCKETS_URL}/${
                              product.image
                            }`}
                          />
                        </Link>
                        <div className="text-start ">
                          <p className="fs-3 fw-semibold product-name">
                            {product.name}
                          </p>
                          <p className="product-description">
                            {product.description}
                          </p>
                        </div>

                        <div className="mt-auto">
                          <p className="fs-3 fw-semibold text-start">
                            <span className="text-orange">
                              ${product.price}
                            </span>{" "}
                          </p>
                          <div className="d-flex justify-content-evenly">
                            <div className="">
                              <Link
                                to={`/products/${product.id}`}
                                onClick={() => window.scrollTo(0, 0)}
                                className="text-decoration-none"
                              >
                                <button className="btn btn-view-product height65">
                                  View Product
                                </button>
                              </Link>
                            </div>
                            <button
                              className="btn rounded-circle btn-cart "
                              onClick={() =>
                                dispatch(
                                  incrementQuantity(
                                    {
                                      name: product.name,
                                      id: product.id,
                                      price: product.price,
                                      image: product.image,
                                      stock: product.stock,
                                    },
                                    dispatch(setIsCartOpen())
                                  )
                                )
                              }
                            >
                              <i className="bi bi-cart"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="d-flex justify-content-center mt-3 ">
                  <DotLoader color="#ee7828" size={80} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductsCategory;
