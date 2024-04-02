import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import axios from "axios";
import { Description } from "@mui/icons-material";

function ProductsAll() {
  const [products, setproducts] = useState();

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

  return (
    <div className="main-section bg-fondo3 ">
      <h2>All Products</h2>
      <div>
        <div className="row mb-5 ">
          {/* start card 1 */}

          {products ? (
            products.map((product) => (
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
                      <p className="fs-3 fw-semibold text-center">
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
          {/* end card 1 */}
        </div>
      </div>
    </div>
  );
}

export default ProductsAll;

<div className="">
  <div className="special-product-card">
    <div className="special-product-1 mb-2"></div>
    <div className="text-start">
      <p className="fs-3 fw-semibold">Art of Darkness</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic nihil
        aliquid a cupiditate error neque adipisci, dolorum rem asperiores!
      </p>
      <p className="fs-3 fw-semibold">
        <span className="text-orange">$250</span>{" "}
        <span className="text-decoration-line-through fs-5 fw-light">$220</span>
      </p>
    </div>
    <div className="d-flex justify-content-between">
      <button className="btn btn-view-product w-100 me-2">View Product</button>
      <div className="btn-cart">
        <i className="bi bi-cart"></i>
      </div>
    </div>
  </div>
</div>;

// <div className="col-3 d-flex align-items-stretch my-2" key={product.id}>
//   <div className="special-product-card">
//     <Card>
//       <Card.Img variant="top" className="card-img" src={product.image} />
//       <Card.Body className="d-flex flex-column justify-content-between">
//         <Card.Title className="text-decoration-underline">
//           {product.name}
//         </Card.Title>
//         <Card.Text className="text-dark">{product.description}</Card.Text>
//         <div className="d-flex justify-content-center mt-auto">
//           <a href={`/products/${product.id}`}>
//             <Button variant="dark" className="">
//               View Product
//             </Button>
//           </a>
//         </div>
//       </Card.Body>
//     </Card>
//   </div>
// </div>;
