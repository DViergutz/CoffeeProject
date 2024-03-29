import React, { useEffect, useState } from "react";
import { Navbar } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import imageSrc from "../assets/img/BlendsArtOfDarkness.png";
import axios from "axios";
import { ReactDOM } from "react";

function ProductDetail() {
  const [oneProduct, setOneProduct] = useState();
  const [relatedProducts, setRelatedProducts] = useState();
  const { productId } = useParams();

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
        console.log(filteredRelatedProducts);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchRelatedProducts();
  }, [oneProduct]);

  const params = useParams();
  return (
    <>
      <div className="main-section ">
        <div className="row d-flex mt-2 ">
          <div className="col-6  ">
            {oneProduct ? (
              <img
                src={oneProduct.image}
                className="oneProductImg"
                alt={oneProduct.image}
              />
            ) : (
              <div>Loading...</div>
            )}
          </div>
          <div className="col-6 ">
            <div className="product border rounded p-2">
              <h3 className="text-decoration-underline text-center">
                {oneProduct ? (
                  <div>{oneProduct.name}</div>
                ) : (
                  <div>Loading...</div>
                )}
              </h3>
              <div className="fs-4 fw-bold text-center">
                {oneProduct ? (
                  <div>${oneProduct.price}</div>
                ) : (
                  <div>Loading...</div>
                )}
              </div>
              <hr />
              <div className="d-flex flex-column align-items-center">
                <p className="fs-4 fw-bold">Quantity</p>
                <div className="w-100 d-flex justify-content-center">
                  <button className="w-25 fs-2 btn btn-dark rounded-pill">
                    -
                  </button>
                  <span className="p-2  rounded mx-2 fs-3">2</span>
                  <button className="w-25 fs-3 btn btn-dark rounded-pill">
                    +
                  </button>
                </div>
                <hr />
                <button className="w-50 rounded-pill p-2 fs-4">
                  Add to cart
                </button>
              </div>
            </div>
            <div className="p-2">
              <h5 className="text-dark fw-bold">
                Experience the taste of our famous
                {oneProduct ? (
                  <div className="text-decoration-underline">
                    {oneProduct.name}
                  </div>
                ) : (
                  <div>Loading...</div>
                )}
              </h5>
              <div>
                {oneProduct ? (
                  <div>{oneProduct.description}</div>
                ) : (
                  <div>Loading...</div>
                )}
              </div>
              <section className="d-flex">
                <strong>Tasting Notes:&nbsp;</strong>
                <p>Mild nuttiness, chocolate</p>
              </section>
              <section className="d-flex">
                <strong>Origin:&nbsp;</strong>
                <p>Peru, Columbia</p>
              </section>
              <section className="d-flex">
                <strong>Type:&nbsp;</strong>
                <div>
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
                <div className="col-3" key={product.id}>
                  <Card>
                    <Card.Img variant="top" src={product.image} />
                    <Card.Body>
                      <Card.Title>{product.name}</Card.Title>{" "}
                      <Card.Text>
                        {/* Description of the product */}
                        {product.description}
                      </Card.Text>
                      <div className="d-flex justify-content-center">
                        <a href={`/products/${product.id}`}>
                          <Button variant="dark">View Product</Button>
                        </a>
                      </div>
                    </Card.Body>
                  </Card>
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
