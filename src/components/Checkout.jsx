import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementQuantity, decrementQuantity } from "../redux/CartSlice.jsx";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { deleteOneProduct } from "../redux/CartSlice.jsx";

function Checkout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const itemsInCart = useSelector((state) => state.cart.inCart);
  const user = useSelector((state) => state.user);

  const totalPrice = itemsInCart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleCreateOrder = async () => {
    if (user.isLogged) {
      try {
        const response = await axios({
          method: "post",
          url: `http://localhost:3000/orders`,
          data: {
            user,
            itemsInCart,
            method: selectedOption,
            totalPrice,
          },
        });
        console.log(response.data);
        /* Swal.fire({
          title: "Thank you for placing order!",
          text: "We will keep you updated about the state of your order.",
          icon: "success",
          confirmButtonText:
            '<a href="/thank-you" style="color: white; text-decoration: none;">Continue</a>',
        }); */
        navigate("/thank-you");
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      navigate("/user/login");
    }
  };
  /*   useEffect(() => {
     window.scrollTo(0, 0);
  }, []);
 */
  return (
    <div className="bg-fondo3">
      <div className="container pb-5 checkout-section">
        <h2 className="h2-checkout mb-5">
          Shopping <span className="text-orange"> Cart</span>
        </h2>
        <div className="row">
          <div className="col-md-7 pt-4 checkout-products">
            {itemsInCart.length === 0 ? (
              <div className="d-flex justify-content-evenly pb-3 disabled">
                <div className="col-3 fw-bold text-center">PRODUCT</div>
                <div className="col-3 fw-bold text-center">UNIT PRICE</div>
                <div className="col-3 fw-bold text-center">QUANTITY</div>
                <div className="col-2 fw-bold text-center">TOTAL</div>
                <div className="col-1"></div>
              </div>
            ) : (
              <div className="d-flex justify-content-evenly pb-3">
                <div className="col-3 fw-bold text-center">PRODUCT</div>
                <div className="col-3 fw-bold text-center">UNIT PRICE</div>
                <div className="col-3 fw-bold text-center">QUANTITY</div>
                <div className="col-2 fw-bold text-center">TOTAL</div>
                <div className="col-1"></div>
              </div>
            )}
            <hr className="text-orange" />
            {itemsInCart.length === 0 ? (
              <div className="mt-5 d-flex flex-column align-items-center justify-content-center empty-cart-1">
                <p className=" text-center">
                  <span className="text-orange fs-1">Oops!</span>{" "}
                </p>
                <p className="fs-4 text-center">
                  It seems your cart is as empty as a Monday morning before
                  coffee.{" "}
                </p>
                <p className="fs-4">Let's fill it up with some goodies! </p>
                <Link
                  to="/products/"
                  className="text-decoration-none"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <button className="btn-hero mt-4">
                    <i className="bi bi-arrow-left me-2"></i> Explore our
                    products
                  </button>
                </Link>
              </div>
            ) : (
              <></>
            )}
            <div>
              {itemsInCart.map((item) => (
                <div key={item.id}>
                  <div className="d-flex py-3">
                    <div className="col-3 fw-semibold d-flex justify-content-center align-items-center">
                      <img
                        className="img-checkout"
                        src={`${import.meta.env.VITE_BUCKETS_URL}/${
                          item.image
                        }`}
                        alt=""
                      />
                    </div>
                    <div className="col-3 fw-semibold d-flex justify-content-center align-items-center">
                      ${item.price}
                    </div>
                    <div className="col-3 fw-semibold d-flex justify-content-center align-items-center">
                      <div>
                        {item.quantity === 1 ? (
                          <i className="bi bi-dash-circle fs-8 text-secondary btn-view-product-offcanvas-disabled"></i>
                        ) : (
                          <button
                            className="btn-view-product-offcanvas"
                            onClick={() => {
                              dispatch(
                                decrementQuantity({
                                  name: item.name,
                                  id: item.id,
                                  price: item.price,
                                  image: item.image,
                                })
                              );
                            }}
                          >
                            <i className="bi bi-dash-circle fs-8 text-light"></i>
                          </button>
                        )}

                        <span className="qty-box">{item.quantity}</span>
                        <button
                          className="btn-view-product-offcanvas"
                          onClick={() =>
                            dispatch(
                              incrementQuantity({
                                name: item.name,
                                id: item.id,
                                price: item.price,
                                image: item.image,
                                stock: item.stock,
                              })
                            )
                          }
                        >
                          <i className="bi bi-plus-circle fs-8 text-light"></i>
                        </button>
                      </div>
                    </div>
                    <div className="col-2 fw-semibold d-flex justify-content-center align-items-center fs-5">
                      ${item.price * item.quantity}
                    </div>
                    <div className="col-1 d-flex justify-content-center align-items-center">
                      <button
                        className="btn-delete-product mb-1"
                        onClick={() => {
                          dispatch(deleteOneProduct({ id: item.id }));

                          // Check if itemsInCart will be empty after deleting
                          if (itemsInCart.length === 1) {
                            // If it will be empty, close the off-canvas
                            dispatch(setIsCartOpen(false));
                          }
                        }}
                      >
                        <i className="bi bi-trash3"></i>
                      </button>
                    </div>
                  </div>
                  <hr className="text-orange" />
                </div>
              ))}
              {itemsInCart.length === 0 ? (
                <></>
              ) : (
                <Link
                  to="/products/"
                  className="text-decoration-none"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <button className="btn-view-product ms-3 mt-4">
                    <i className="bi bi-arrow-left me-2"></i> Continue Shopping
                  </button>
                </Link>
              )}
            </div>
          </div>
          <div className="col-md-4 bg-light border rounded p-4 checkout-card">
            <div className=" fw-bold mb-3">CARD DETAILS</div>
            <hr className="text-orange" />
            <form className="d-flex flex-column" action="">
              <div className="d-flex flex-column">
                <label htmlFor="card-number" className="form-label fw-semibold">
                  Card Number
                </label>
                <input
                  className="form-control mb-4 mt-1 input-style"
                  type="text"
                  id="card-number"
                  name="card-number"
                  placeholder="1234  5678  9101  1121"
                />
              </div>
              <div className="d-flex">
                <div className="d-flex flex-column me-2">
                  <label
                    htmlFor="expiration-date"
                    className="form-label fw-semibold"
                  >
                    Expiration Date
                  </label>
                  <input
                    className="form-control mb-4 mt-1 input-style"
                    type="text"
                    id="expiration-date"
                    name="expiration-date"
                    placeholder="MM/YY"
                  />
                </div>
                <div className="d-flex flex-column">
                  <label htmlFor="cvv" className="form-label fw-semibold">
                    CVV
                  </label>
                  <input
                    className="form-control mt-1 input-style"
                    type="number"
                    id="cvv"
                    name="cvv"
                    placeholder="123"
                  />
                </div>
              </div>
              <hr className="text-orange" />
              <div className=" fw-bold mb-3 mt-2">PAYMENT METHOD</div>
              <div className="d-flex justify-content-between">
                <div>
                  <input
                    type="radio"
                    id="Visa"
                    name="paymentMethod"
                    value="Visa"
                    className="ms-2 form-check-input input-style"
                    checked={selectedOption === "Visa"}
                    onChange={handleOptionChange}
                  />
                  <label htmlFor="Visa" className="ms-2">
                    <img
                      className="checkout-payment-icon mb-2"
                      src={`${
                        import.meta.env.VITE_BUCKETS_URL
                      }/about_icons/visa.png`}
                      alt=""
                    />
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="Mastercard"
                    name="paymentMethod"
                    value="Mastercard"
                    className="ms-4 form-check-input input-style"
                    checked={selectedOption === "Mastercard"}
                    onChange={handleOptionChange}
                  />
                  <label htmlFor="Mastercard" className="ms-2">
                    <img
                      className="checkout-payment-icon mb-2"
                      src={`${
                        import.meta.env.VITE_BUCKETS_URL
                      }/about_icons/master-card.png`}
                      alt=""
                    />
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="MercadoPago"
                    name="paymentMethod"
                    value="MercadoPago"
                    className="ms-4 form-check-input input-style"
                    checked={selectedOption === "MercadoPago"}
                    onChange={handleOptionChange}
                  />
                  <label htmlFor="MercadoPago" className="ms-2">
                    <img
                      className="checkout-payment-icon mb-2"
                      src={`${
                        import.meta.env.VITE_BUCKETS_URL
                      }/about_icons/mercado-pago.png`}
                      alt=""
                    />
                  </label>
                </div>
              </div>
            </form>
            <hr className="text-orange mt-2" />
            <div className=" fw-bold mb-4 mt-2">PAYMENT SUMMARY</div>
            <div className="">
              <div className="d-flex justify-content-between">
                <p className="fw-semibold text-dark">Subtotal:</p>
                <p className="text-dark">${totalPrice}</p>
              </div>
              <div className="d-flex justify-content-between">
                <p className="fw-semibold text-dark">Shipping:</p>
                <p className="text-dark">$25</p>
              </div>
              <div className="d-flex justify-content-between ">
                <p className="fw-bold text-dark ">Total (tax incl.):</p>
                <p className="fw-bold text-dark fs-5">
                  ${totalPrice ? totalPrice + 25 : 0}
                </p>
              </div>
              {itemsInCart.length === 0 ? (
                <button
                  className="btn-hero-disabled p-2 w-100 mt-4"
                  onClick={handleCreateOrder}
                >
                  Checkout<i className="ms-2 bi bi-lock-fill"></i>
                </button>
              ) : (
                <button
                  className="btn-hero p-2 w-100 mt-4"
                  onClick={handleCreateOrder}
                >
                  Checkout<i className="ms-2 bi bi-lock-fill"></i>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
