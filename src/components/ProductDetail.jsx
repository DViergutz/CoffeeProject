import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
  setIsCartOpen,
  addToCart,
} from "../redux/CartSlice.jsx";

function ProductDetail() {
  const [oneProduct, setOneProduct] = useState();
  const [relatedProducts, setRelatedProducts] = useState();
  const { productId } = useParams();
  const params = useParams();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = (oneProductId) => {
    if (quantity < oneProduct.stock) {
      setQuantity(quantity + 1);
      dispatch(incrementQuantity(oneProductId));
    }
  };
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  useEffect(() => {
    const fetchOneProduct = async () => {
      try {
        const response = await axios({
          method: "GET",
          url: `http://localhost:3000/products/${productId}`,
        });
        setOneProduct(response.data);
        console.log(response.data);
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
        // Filter out the oneProduct from the related products
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
      <div className="main-section bg-fondo3  ">
        <div className="row d-flex mt-2 ">
          <div className="col-md-6 text-center">
            {oneProduct ? (
              <img
                src={oneProduct.image}
                className=""
                style={{
                  maxWidth: "100%",
                  height: "",
                  maxHeight: "600px",
                }}
                alt={oneProduct.image}
              />
            ) : (
              <div>Loading...</div>
            )}
          </div>
          <div className=" col-lg-5 ">
            <div className="m-0 special-product-card d-flex flex-column justify-content-start p-5">
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
                <p className="fs-4 text-start">Quantity</p>
                <div className="w-100 d-flex mb-2">
                  <button
                    className="btn-view-product"
                    onClick={() => handleDecrement(oneProduct.id)}
                  >
                    <i className="bi bi-dash-circle fs-4 text-light"></i>
                  </button>
                  <span className="p-2 rounded mx-2 fs-3 text-orange">
                    {quantity}
                  </span>
                  <button
                    className="btn-view-product"
                    onClick={() =>
                      dispatch(
                        addToCart({
                          name: oneProduct.name,
                          id: oneProduct.id,
                          price: oneProduct.price,
                          image: oneProduct.image,
                        })
                      )
                    }
                  >
                    <i className="bi bi-plus-circle fs-4 text-light"></i>
                  </button>
                </div>
                <hr className="text-orange" />
                <div className="fs-4 text-start stock mb-1">
                  In stock:{" "}
                  {oneProduct ? (
                    <span className="text-start fs-5 ">{oneProduct.stock}</span>
                  ) : (
                    <div>Loading...</div>
                  )}{" "}
                </div>
                <hr className="text-orange" />
                <button
                  className="btn-hero p-2 w-100 mt-4"
                  onClick={() =>
                    dispatch(
                      addToCart(
                        {
                          name: oneProduct.name,
                          id: oneProduct.id,
                          price: oneProduct.price,
                          image: oneProduct.image,
                        },
                        dispatch(setIsCartOpen())
                      )
                    )
                  }
                >
                  Add to Cart <i className="bi bi-cart"></i>
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
                <p className="m-0">Mild nuttiness, chocolate</p>
              </div>
              <div className="d-flex align-items-center my-2">
                <strong className="text-orange">
                  <i className="bi bi-globe-americas me-4 fs-4"></i>
                </strong>
                <p className="m-0"> Peru, Columbia</p>
              </div>
              <div className="d-flex align-items-center">
                <strong className="text-orange">
                  <i className="bi bi-brilliance me-4 fs-4"></i>
                </strong>
                <div className="text-light">
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
        <div className="relatedProducts mt-5 container">
          <h3 className="related-products">Related Products</h3>
          <div className="row mb-5">
            {relatedProducts ? (
              relatedProducts.map((product) => (
                <div className="col-md-6 col-lg-3" key={product.id}>
                  <div className="d-flex flex-column h-100 ">
                    <div className="special-product-card h-100 d-flex flex-column">
                      <Card.Img className="card-img" src={product.image} />
                      <div className="text-start ">
                        <p className="fs-3 fw-semibold">{product.name}</p>
                        <p>{product.description}</p>
                      </div>

                      <div className="mt-auto">
                        <p className="fs-3 fw-semibold text-start">
                          <span className="text-orange">${product.price}</span>{" "}
                        </p>
                        <div className="d-flex justify-content-evenly">
                          <a href={`/products/${product.id}`} className="me-2">
                            <button className="btn btn-view-product height65">
                              View Product
                            </button>
                          </a>
                          <button
                            className="btn rounded-circle btn-cart "
                            onClick={() =>
                              dispatch(
                                addToCart(
                                  {
                                    name: oneProduct.name,
                                    id: oneProduct.id,
                                    price: oneProduct.price,
                                    image: oneProduct.image,
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
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
