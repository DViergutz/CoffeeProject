import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseCount,
  increaseCount,
  removeFromCart,
  setIsCartOpen,
  addToCart,
} from "../redux/CartSlice.jsx";
import { useNavigate } from "react-router-dom";
import { Offcanvas, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function CartOffCanvas() {
  const [show, setShow] = useState(true);
  const dispatch = useDispatch();
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);
  const itemsInCart = useSelector((state) => state.cart.inCart);

  return (
    <Offcanvas show={isCartOpen} placement="end" scroll={true} backdrop={true}>
      <Offcanvas.Header
        closeButton
        className="offcanvas-close-button"
        onClick={() => dispatch(setIsCartOpen())}
      >
        <Offcanvas.Title className="offcanvas-title">
          Shopping Cart
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <div>
          <div className="d-flex justify-content-evenly pb-3 mb-5 mt-4">
            <div className="col fw-bold text-center text-light">PRODUCT</div>
            <div className="col fw-bold text-center text-light">QUANTITY</div>
            <div className="col fw-bold text-center text-light">PRICE</div>
          </div>
        </div>
        {itemsInCart.map((item) => (
          <div className=" offcanvas-product-div row ms-1 me-1">
            <div className="col-5">
              <img className="w-50" src={item.image} alt="" />
            </div>
            <div className="col-5 p-1 ">
              <button className="btn-view-product-offcanvas">
                <i className="bi bi-plus-circle fs-8 text-light"></i>
              </button>
              <span className="qty-box">1</span>
              <button className="btn-view-product-offcanvas">
                <i className="bi bi-dash-circle fs-8 text-light"></i>
              </button>
            </div>
            <div className="col-2">{item.price}</div>
          </div>
        ))}
        <div className="mt-5 text-light">TOTAL PRICE:</div>
        <Link to="/checkout">
          <button
            className="btn-hero p-2 w-100 mt-4"
            onClick={() => dispatch(setIsCartOpen())}
          >
            Checkout <i className="bi bi-cart"></i>
          </button>
        </Link>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default CartOffCanvas;
