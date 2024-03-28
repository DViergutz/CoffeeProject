import React from "react";
import { Navbar } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import imageSrc from "../assets/img/BlendsArtOfDarkness.png";

function ProductDetail() {
  const params = useParams();
  return (
    <>
      <div className="container ">
        <div className="row d-flex mt-2 ">
          <div className="col-6 productDetailImage"></div>
          <div className="col-6 ">
            <div className="product border rounded p-2">
              <h2 className="text-decoration-underline">Product Name</h2>
              <p className="fs-2 fw-bold text-center">$250</p>
              <hr />
              <div className="d-flex flex-column align-items-center">
                <p className="fs-2 fw-bold">Quantity</p>
                <div className="w-100 d-flex justify-content-center">
                  <button className="w-25 fs-3 btn btn-dark rounded-pill">
                    -
                  </button>
                  <span className="p-2  rounded mx-2 fs-3">2</span>
                  <button className="w-25 fs-3 btn btn-dark rounded-pill">
                    +
                  </button>
                </div>
                <hr />
                <button className="w-100 rounded-pill p-2 fs-3">
                  Add to cart
                </button>
              </div>
            </div>
            <div className="p-2">
              <h4 className="text-dark">
                Experience our clean, sweet Product Name
              </h4>
              <p>
                Product description Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Illo obcaecati laudantium libero fuga maiores
                omnis!
              </p>
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
                <p>Blend</p>
              </section>
            </div>
          </div>
        </div>

        {/* -----------------------------Related Products-------------- */}
        <div className="relatedProducts mt-5">
          <h3>Related Products</h3>
          <div className="row mb-5">
            <div className="col-3">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={imageSrc} />
                <Card.Body>
                  <Card.Title>Product Name</Card.Title>
                  <Card.Text>
                    Decription of the product, notes, aromas, sabor, etc. Algo
                    corto que ocupe dos línes de texto.
                  </Card.Text>
                  <div className="d-flex justify-content-center">
                    <Button variant="dark">View Product</Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="col-3">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={imageSrc} />
                <Card.Body>
                  <Card.Title>Product Name</Card.Title>
                  <Card.Text>
                    Decription of the product, notes, aromas, sabor, etc. Algo
                    corto que ocupe dos línes de texto.
                  </Card.Text>
                  <div className="d-flex justify-content-center">
                    <a href="/products/3">
                      <Button variant="dark">View Product</Button>
                    </a>{" "}
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="col-3">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={imageSrc} />
                <Card.Body>
                  <Card.Title>Product Name</Card.Title>
                  <Card.Text>
                    Decription of the product, notes, aromas, sabor, etc. Algo
                    corto que ocupe dos línes de texto.
                  </Card.Text>
                  <div className="d-flex justify-content-center">
                    <a href="/products/3">
                      <Button variant="dark">View Product</Button>
                    </a>{" "}
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="col-3">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={imageSrc} />
                <Card.Body>
                  <Card.Title>Product Name</Card.Title>
                  <Card.Text>
                    Decription of the product, notes, aromas, sabor, etc. Algo
                    corto que ocupe dos línes de texto.
                  </Card.Text>
                  <div className="d-flex justify-content-center">
                    <a href="/products/3">
                      <Button variant="dark">View Product</Button>
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
