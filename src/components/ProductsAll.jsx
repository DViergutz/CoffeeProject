import React from "react";
import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setIsCartOpen, incrementQuantity } from "../redux/CartSlice.jsx";
import { Link, useNavigate } from "react-router-dom";

function ProductsAll() {
  const [products, setproducts] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const resetDb = async () => {
    console.log("resetting DB...");
    try {
      const response = await axios({
        method: "GET",
        url: `http://localhost:3000/resetDb`,
      });
      console.log(response.data);
    } catch (error) {
      console.error("Error:", error);
    }

    navigate(0);
  };

  return (
    <div className="main-section bg-fondo3  ">
      <p className="fst-italic fw-light">
        If you don`t view any producty below or the page seems broken please
        reset the Database by clicking this button
      </p>
      <resetButton />
      <button
        className="btn btn-view-product height65 mb-3 mt-0 fs-4"
        onClick={() => resetDb()}
      >
        Reset Database
      </button>

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
                        src={product.image}
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
