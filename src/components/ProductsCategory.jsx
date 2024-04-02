import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function ProductsCategory() {
  const params = useParams();
  const [productsOfCategory, setproductsOfCategory] = useState();

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
      <div className="productsOfCategory main-section bg-fondo3 ">
        <h3>Products of {params.categoryName}</h3>
        <div className="row mb-5 d-flex justify-content-center">
          {productsOfCategory ? (
            productsOfCategory.map((product) => (
              <div
                className="col-lg-4 col-md-6 col-sm-12 align-items-stretch d-flex g-3"
                key={product.id}
              >
                <Card>
                  <Card.Img
                    variant="top"
                    src={product.image}
                    id="relatedProductImg"
                  />
                  <Card.Body className="d-flex flex-column justify-content-between">
                    <Card.Title className="text-decoration-underline text-warning">
                      {product.name}
                    </Card.Title>
                    <Card.Text className="text-dark">
                      {product.description}
                    </Card.Text>
                    <div className="d-flex justify-content-center mt-auto">
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
    </>
  );
}

export default ProductsCategory;
