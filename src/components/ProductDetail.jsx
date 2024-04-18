import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { useDispatch } from "react-redux";

import { incrementQuantity, setIsCartOpen } from "../redux/CartSlice.jsx";
import DotLoader from "react-spinners/DotLoader.js";

function ProductDetail() {
  const [oneProduct, setOneProduct] = useState();
  const [relatedProducts, setRelatedProducts] = useState();
  const { productId } = useParams();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    dispatch(
      incrementQuantity({
        name: oneProduct.name,
        id: oneProduct.id,
        price: oneProduct.price,
        image: oneProduct.image,
        stock: oneProduct.stock,
      })
    );
    dispatch(setIsCartOpen());
  };

  useEffect(() => {
    const fetchOneProduct = async () => {
      try {
        const response = await axios({
          method: "GET",
          url: `http://localhost:3000/products/${productId}`,
        });
        setOneProduct(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchOneProduct();
  }, [productId]);

  useEffect(() => {
    const fetchRelatedProducts = async () => {
      try {
        const response = await axios({
          method: "GET",
          url: `http://localhost:3000/category/${oneProduct.category.name}`,
        });

        const filteredRelatedProducts = response.data.filter(
          (product) => product.name !== oneProduct.name
        );
        setRelatedProducts(filteredRelatedProducts);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchRelatedProducts();
  }, [oneProduct]);

  return (
    <>
      <div className="bg-fondo3">
        <div className="container main prod-detail-margin">
          <div className="row">
            <div className="col-md-6 d-flex align-items-start justify-content-center">
              {oneProduct ? (
                <img
                  src={`${import.meta.env.VITE_BUCKETS_URL}/${
                    oneProduct.image
                  }`}
                  className="img-product-detail"
                  alt={oneProduct.image}
                />
              ) : (
                <div className="d-flex justify-content-center align-items-center vh-100">
                  <div className="d-flex justify-content-center align-items-center">
                    <DotLoader color="#ee7828" size={80} />
                  </div>
                </div>
              )}
            </div>
            <div className="col-md-6 col-lg-5 ">
              <div className="m-0 special-product-card-2 d-flex flex-column justify-content-start p-5">
                <h4 className=" text-start">
                  {oneProduct ? (
                    <div>{oneProduct.name}</div>
                  ) : (
                    <div>Loading...</div>
                  )}
                </h4>
                <div className="fs-5 fw-semibold ">
                  {oneProduct ? (
                    <div className="text-orange text-start fs-2">
                      ${oneProduct.price}
                    </div>
                  ) : (
                    <div>Loading...</div>
                  )}
                </div>
                <hr className="text-orange" />
                <div className="d-flex flex-column">
                  <div className="fs-4 text-start stock mb-1">
                    In stock:{" "}
                    {oneProduct ? (
                      <span className="text-start fs-5 ">
                        {oneProduct.stock}
                      </span>
                    ) : (
                      <div>Loading...</div>
                    )}{" "}
                  </div>
                  <hr className="text-orange" />
                  <button
                    className="btn-hero p-2 w-100 mt-4"
                    onClick={handleIncrement}
                  >
                    Add to Cart <i className="bi bi-cart ms-2"></i>
                  </button>
                </div>
              </div>
              <div className="px-2 pt-4">
                <h5 className=" mb-3">
                  Experience the taste of our famous
                  {oneProduct ? (
                    <span className="text-orange"> {oneProduct.name}</span>
                  ) : (
                    <div>Loading...</div>
                  )}
                </h5>
                <div>
                  {oneProduct ? (
                    <div className="text-light mb-4">
                      {oneProduct.description}
                    </div>
                  ) : (
                    <div>Loading...</div>
                  )}
                </div>
                <hr className="text-orange" />
                <div className="d-flex align-items-center mt-4">
                  <strong className="text-orange">
                    <i className="bi bi-cup-hot-fill me-4 fs-4"></i>
                  </strong>
                  <p className="m-0 align-self-center">
                    Mild nuttiness, chocolate
                  </p>
                </div>
                <div className="d-flex align-items-center my-2">
                  <strong className="text-orange">
                    <i className="bi bi-globe-americas me-4 fs-4"></i>
                  </strong>
                  <p className="m-0 align-self-center"> Peru, Colombia</p>
                </div>
                <div className="d-flex align-items-center">
                  <strong className="text-orange">
                    <i className="bi bi-brilliance me-4 fs-4"></i>
                  </strong>
                  <div className="text-light align-self-center">
                    {oneProduct ? (
                      <p className="m-0">{oneProduct.category.name}</p>
                    ) : (
                      <div>Loading...</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relatedProducts mt-5">
            <h3 className="related-products">Related Roasts</h3>
            <div className="row mb-5">
              {relatedProducts ? (
                relatedProducts.map((product) => (
                  <div
                    className="col-md-6 col-lg-3 d-flex flex-column align-items-center justify-content-center"
                    key={product.id}
                  >
                    <div className="d-flex flex-column h-100 ">
                      <div className="special-product-card h-100 d-flex flex-column align-items-center justify-content-center">
                        <Card.Img
                          className="card-img-top"
                          src={`${import.meta.env.VITE_BUCKETS_URL}/${
                            product.image
                          }`}
                        />
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
                            <div className="me-2">
                              <Link to={`/products/${product.id}`}>
                                <button
                                  className="btn-view-product height65"
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
                                      quantity: quantity,
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

export default ProductDetail;
