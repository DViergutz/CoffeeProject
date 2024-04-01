import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import axios from "axios";

function ProductsAll() {
  const [products, setproducts] = useState();

  useEffect(() => {
    const fetchOneProduct = async () => {
      try {
        const response = await axios({
          method: "GET",
          url: `http://localhost:3000/products`,
        });
        console.log("Response:", response.data);
        setproducts(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchOneProduct();
  }, []);

  return (
    <div className="main-section">
      <h3>All Products</h3>
      <div>
        <div className="row mb-5 ">
          {/* start card 1 */}

          {products ? (
            products.map((product) => (
              <div
                className="col-3 d-flex align-items-stretch my-2"
                key={product.id}
              >
                <Card>
                  <Card.Img variant="top" src={product.image} />
                  <Card.Body className="d-flex flex-column justify-content-between">
                    <Card.Title className="text-decoration-underline text-secondary">
                      {product.name}
                    </Card.Title>
                    <Card.Text className="text-dark">
                      {product.description}
                    </Card.Text>
                    <div className="d-flex justify-content-center mt-auto">
                      <a href={`/products/${product.id}`}>
                        <Button variant="dark" className="text-warning">
                          View Product
                        </Button>
                      </a>
                    </div>
                  </Card.Body>
                </Card>
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
