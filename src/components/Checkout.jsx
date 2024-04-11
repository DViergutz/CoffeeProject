import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementQuantity, decrementQuantity } from "../redux/CartSlice.jsx";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

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
        Swal.fire({
          title: "Thank you for placing order!",
          text: "We will keep you updated about the state of your order.",
          icon: "success",
          footer: '<a href="/">Return to Home</a>',
        });
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
      <div className="container pb-5">
        <h2>Shopping Cart</h2>
        <div className="row">
          <div className="col-md-8 bg-light border rounded pt-4 checkout-products">
            <div className="d-flex justify-content-evenly pb-3">
              <div className="col fw-bold text-center">PRODUCT</div>
              <div className="col fw-bold text-center">PRICE</div>
              <div className="col fw-bold text-center">QUANTITY</div>
              <div className="col fw-bold text-center">TOTAL</div>
            </div>
            {itemsInCart.map((item) => (
              <div key={item.id}>
                <hr className="text-orange" />
                <div className="d-flex py-3">
                  <div className="col fw-semibold d-flex justify-content-center align-items-center img-checkout"></div>
                  <div className="col fw-semibold d-flex justify-content-center align-items-center">
                    ${item.price}
                  </div>
                  <div className="col fw-semibold d-flex justify-content-center align-items-center">
                    <div className="d-flex flex-column align-items-center">
                      <div className="d-flex ">
                        <button
                          className="btn-view-product-offcanvas"
                          onClick={() =>
                            dispatch(
                              decrementQuantity({
                                id: item.id,
                              })
                            )
                          }
                        >
                          <i className="bi bi-dash-circle fs-8"></i>
                        </button>
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
                          <i className="bi bi-plus-circle fs-8"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col fw-semibold d-flex justify-content-center align-items-center">
                    ${item.price * item.quantity}
                  </div>
                </div>
                <hr className="text-orange" />
              </div>
            ))}
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
                  className="form-control mb-4 mt-1"
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
                    className="form-control mb-4 mt-1"
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
                    className="form-control mb-4 mt-1"
                    type="number"
                    id="cvv"
                    name="cvv"
                    placeholder="123"
                  />
                </div>
              </div>
              <div>
                <input type="checkbox" className="form-check-input me-2" />
                <label htmlFor="">Save card details</label>
              </div>
              <hr className="text-orange" />
              <div className=" fw-bold mb-3 mt-2">PAYMENT METHOD</div>
              <div className="d-flex justify-content-between">
                <div>
                  <input
                    type="radio"
                    id="visa"
                    name="paymentMethod"
                    value="visa"
                    className="ms-2"
                    checked={selectedOption === "visa"}
                    onChange={handleOptionChange}
                  />
                  <label htmlFor="visa" className="ms-2">
                    Visa
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="mastercard"
                    name="paymentMethod"
                    value="mastercard"
                    className="ms-4"
                    checked={selectedOption === "mastercard"}
                    onChange={handleOptionChange}
                  />
                  <label htmlFor="mastercard" className="ms-2">
                    Mastercard
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="mercadopago"
                    name="paymentMethod"
                    value="mercadopago"
                    className="ms-4"
                    checked={selectedOption === "mercadopago"}
                    onChange={handleOptionChange}
                  />
                  <label htmlFor="mercadopago" className="ms-2">
                    Mercado Pago
                  </label>
                </div>
                <hr className="text-orange mt-4" />
              </div>
            </form>
            <div className=" fw-bold mb-4 mt-2">PAYMENT SUMMARY</div>
            <div className="">
              <div className="d-flex justify-content-between">
                <p className="fw-semibold text-dark">Subtotal:</p>
                <p className="text-dark">${totalPrice}</p>
              </div>
              <div className="d-flex justify-content-between">
                <p className="fw-semibold text-dark">Shipping:</p>
                <p className="text-dark">$25.00</p>
              </div>
              <div className="d-flex justify-content-between ">
                <p className="fw-bold text-dark ">Total (tax incl.):</p>
                <p className="fw-bold text-dark">
                  ${totalPrice ? totalPrice + 25 : 0}
                </p>
              </div>
              <button
                className="btn-hero w-100 mt-4"
                onClick={handleCreateOrder}
              >
                Checkout<i className="ms-2 bi bi-lock-fill"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
