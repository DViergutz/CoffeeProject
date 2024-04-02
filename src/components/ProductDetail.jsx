import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";

function ProductDetail() {
  const [oneProduct, setOneProduct] = useState();
  const [relatedProducts, setRelatedProducts] = useState();
  const { productId } = useParams();
  const params = useParams();

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
          <div className="col-lg-6 col-md-6 col-sm-12 text-center">
            {oneProduct ? (
              <img
                src={oneProduct.image}
                className="img-fluid"
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
          <div className="col-lg-4 col-md-4 col-sm-12 ">
            <div className="m-0 special-product-card d-flex flex-column justify-content-start p-5">
              <h3 className=" text-start">
                {oneProduct ? (
                  <div>{oneProduct.name}</div>
                ) : (
                  <div>Loading...</div>
                )}
              </h3>
              <div className="fs-4 fw-bold ">
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
                <div className="w-100 d-flex ">
                  <button className="w-10 btn-view-product fs-3 fw-bold rounded-pill">
                    -
                  </button>
                  <span className="p-2  rounded mx-2 fs-3 text-light">2</span>
                  <button className="w-10 btn-view-product fs-3 fw-bold rounded-pill">
                    +
                  </button>
                </div>
                <hr className="text-orange" />
                <button className="btn-hero p-2 w-100 mt-4">
                  Add to {""}
                  <i className="bi bi-cart"></i>
                </button>
              </div>
            </div>
            <div className="p-2">
              <h5 className="fw-semi-bold mb-3">
                Experience the taste of our famous
                {oneProduct ? (
                  <span className="text-orange"> {oneProduct.name}</span>
                ) : (
                  <div>Loading...</div>
                )}
              </h5>
              <div>
                {oneProduct ? (
                  <div className="text-light  mb-4">
                    {oneProduct.description}
                  </div>
                ) : (
                  <div>Loading...</div>
                )}
              </div>
              <hr className="text-orange" />
              <section className="d-flex">
                <strong className="text-orange">
                  <i className="bi bi-cup-hot-fill me-4 fs-4"></i>
                </strong>
                <p>Mild nuttiness, chocolate</p>
              </section>
              <section className="d-flex">
                <strong className="text-orange">
                  <i className="bi bi-globe-americas me-4 fs-4"></i>
                </strong>
                <p> Peru, Columbia</p>
              </section>
              <section className="d-flex">
                <strong className="text-orange">Type:&nbsp;</strong>
                <div className="text-light">
                  {" "}
                  {oneProduct ? (
                    <div>{oneProduct.category.name}</div>
                  ) : (
                    <div>Loading...</div>
                  )}
                </div>
              </section>
            </div>
          </div>
        </div>

        {/* -----------------------------Related Products-------------- */}
        <div className="relatedProducts mt-5">
          <h3>Related Products</h3>
          <div className="row mb-5">
            {relatedProducts ? (
              relatedProducts.map((product) => (
                <div className="col-md-6 col-lg-3 col-xl-3 " key={product.id}>
                  <div className="d-flex flex-column h-100  ">
                    <div className="special-product-card h-100 d-flex flex-column">
                      <Card.Img
                        variant="top"
                        className="card-img"
                        src={product.image}
                      />
                      <div className="text-start ">
                        <p className="fs-3 fw-semibold">{product.name}</p>
                        <p>{product.description}</p>
                      </div>

                      <div className="mt-auto">
                        <p className="fs-3 fw-semibold text-center">
                          <span className="text-orange">${product.price}</span>{" "}
                        </p>
                        <div className="d-flex justify-content-evenly">
                          <a href={`/products/${product.id}`} className="me-2">
                            <button className="btn btn-view-product height65">
                              View Product
                            </button>
                          </a>
                          <button className="btn rounded-circle btn-cart ">
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
