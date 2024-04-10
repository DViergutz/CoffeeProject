import React from "react";
import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setIsCartOpen, incrementQuantity } from "../redux/CartSlice.jsx";
import { Link, useNavigate } from "react-router-dom";
import ResetDbButton from "./ResetDbButton.jsx";

function ProductsAll() {
  const [products, setproducts] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchOneProduct = async () => {
      try {
        const response = await axios({
          method: "GET",
          url: `http://localhost:3000/products`,
        });
        setproducts(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchOneProduct();
  }, []);

  return (
    <div className="main-section bg-fondo3  ">
      <ResetDbButton />

      {/* <CartMenu show={show} /> */}
      <h2>
        Our Complete <span className="text-orange">Coffee</span> Collection
      </h2>
      <div className="container">
        <div className="row mb-5 ">
          {/* start card 1 */}

          {products ? (
            products.map((product) => (
              <div className="col-md-6 col-lg-4 col-xl-3 " key={product.id}>
                <div className="d-flex flex-column h-100  ">
                  <div className="special-product-card h-100 d-flex flex-column">
                    <Link
                      to={`/products/${product.id}`}
                      className="text-decoration-none"
                    >
                      <Card.Img
                        variant="top"
                        className="card-img"
                        src={`${import.meta.env.VITE_BUCKETS_URL}${
                          product.image
                        }`}
                      />
                    </Link>
                    <div className="text-start ">
                      <p className="fs-3 fw-semibold">{product.name}</p>
                      <p>{product.description}</p>
                    </div>

                    <div className="mt-auto">
                      <p className="fs-3 fw-semibold text-start">
                        <span className="text-orange">${product.price}</span>{" "}
                      </p>
                      <div className="d-flex justify-content-evenly">
                        <div className="me-2">
                          <Link
                            to={`/products/${product.id}`}
                            className="text-decoration-none"
                          >
                            <button
                              className="btn btn-view-product height65"
                              onClick={() => window.scrollTo(0, 0)}
                            >
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
            <div>Loading...</div>
          )}
          {/* end card 1 */}
        </div>
      </div>
    </div>
  );
}

export default ProductsAll;
