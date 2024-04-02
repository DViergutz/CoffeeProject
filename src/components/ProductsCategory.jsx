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
        <h2>Products of {params.categoryName}</h2>
        <div className="container">
          <div className="row mb-5 d-flex justify-content-center">
            {productsOfCategory ? (
              productsOfCategory.map((product) => (
                <div className="col-md-6 col-lg-4 col-xl-3 " key={product.id}>
                  <div className="d-flex flex-column h-100  ">
                    <div className="special-product-card h-100 d-flex flex-column">
                      <Card.Img
                        variant="top"
                        className="card-img "
                        src={product.image}
                      />
                      <div className="text-start ">
                        <p className="fs-3 fw-semibold">{product.name}</p>
                        <p>{product.description}</p>
                      </div>

                      <div className="mt-auto">
                        <p className="fs-3 fw-semibold text-start">
                          <span className="text-orange">${product.price}</span>{" "}
                        </p>
                        <div className="d-flex justify-content-evenly">
                          <a href={`/products/${product.id}`} className="">
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

export default ProductsCategory;
