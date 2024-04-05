import React from "react";
import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  setIsCartOpen,
  addToCart,
} from "../redux/CartSlice.jsx";

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

  /*   const handleAddToCart = () => {
    dispatch(setIsCartOpen());
    dispatch(addToCart({ name: product.name, id: product.id }));
  };
 */
  return (
    <div className="main-section bg-fondo3  ">
      {" "}
      {/* <CartMenu show={show} /> */}
      <h2>All Products</h2>
      <div className="container">
        <div className="row mb-5 ">
          {/* start card 1 */}

          {products ? (
            products.map((product) => (
              <div className="col-md-6 col-lg-4 col-xl-3 " key={product.id}>
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
                              addToCart({ name: product.name, id: product.id })
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
