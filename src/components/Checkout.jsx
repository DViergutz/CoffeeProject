import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementQuantity, decrementQuantity } from "../redux/CartSlice.jsx";

function Checkout() {
  const dispatch = useDispatch();
  const itemsInCart = useSelector((state) => state.cart.inCart);

  const totalPrice = itemsInCart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

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
                      <div className="d-flex border p-1">
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
                          <i className="bi bi-dash-circle fs-8 text-light"></i>
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
                              })
                            )
                          }
                        >
                          <i className="bi bi-plus-circle fs-8 text-light"></i>
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
            </form>
            <hr className="text-orange" />
            <div className=" fw-bold mb-3 mt-5">PAYMENT SUMMARY</div>
            <hr className="text-orange" />
            <div className="mt-5">
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
              <button className="btn-hero w-100 mt-4">
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
