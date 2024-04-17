import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementQuantity,
  setIsCartOpen,
  decrementQuantity,
  setShowToast,
  deleteOneProduct,
} from "../redux/CartSlice.jsx";
import { useNavigate } from "react-router-dom";
import { Offcanvas } from "react-bootstrap";
import { Toast, Button } from "react-bootstrap";
import SingleCartItem from "./SingleCartItem.jsx";

function CartOffCanvas() {
  const dispatch = useDispatch();
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);
  const itemsInCart = useSelector((state) => state.cart.inCart);
  const totalPrice = itemsInCart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const navigate = useNavigate();

  const handleCheckout = () => {
    dispatch(setIsCartOpen());
    () => window.scrollTo(0, 0);
    navigate("/checkout");
  };

  return (
    <Offcanvas
      show={isCartOpen}
      placement="end"
      scroll={true}
      onHide={() => dispatch(setIsCartOpen())}
    >
      <Offcanvas.Header
        onClick={() => dispatch(setIsCartOpen())}
        className="offcanvas-close-button d-flex justify-content-between"
      >
        <p className="fs-4">Shopping Cart</p>
        <Offcanvas.Title className="offcanvas-title"></Offcanvas.Title>
        <p className="fs-3 me-3 close-offcanvas">X</p>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <div>
          {itemsInCart.length === 0 ? (
            <div className="row pb-3 disabled">
              <div className="col-4 text-center text-light">PRODUCT</div>
              <div className="col-4 text-center text-light">QUANTITY</div>
              <div className="col-4 text-center text-light">UNIT PRICE</div>
            </div>
          ) : (
            <div className="row pb-3">
              <div className="col-4 text-center text-light">PRODUCT</div>
              <div className="col-4 text-center text-light">QUANTITY</div>
              <div className="col-4 text-center text-light">UNIT PRICE</div>
            </div>
          )}
          <hr className="text-orange" />
          {itemsInCart.length === 0 ? (
            <div className="mt-5 d-flex flex-column align-items-center justify-content-center empty-cart">
              <p className="fs-4">Ready to shop?</p>
              <p className="fs-4">Your cart is waiting for you!</p>
            </div>
          ) : (
            <></>
          )}
        </div>
        {itemsInCart.map((item, index) => (
          <SingleCartItem key={item.id} item={item} />
        ))}
        {itemsInCart.length === 0 ? (
          <div className="d-flex justify-content-end disabled align-items-center mt-5 mx-4">
            <p className="fw-semibold me-3">TOTAL PRICE:</p>
            <p className="fs-4 me-2">${totalPrice}</p>
          </div>
        ) : (
          <div className="d-flex justify-content-end align-items-center mt-5 mx-4">
            <p className="fw-semibold me-3">TOTAL PRICE:</p>
            <p className="fs-4">${totalPrice}</p>
          </div>
        )}
        {itemsInCart.length === 0 ? (
          <button className="btn-hero-disabled p-2 w-100 mt-4">
            Checkout <i className="bi bi-cart"></i>
          </button>
        ) : (
          <button className="btn-hero p-2 w-100 mt-4 " onClick={handleCheckout}>
            Checkout <i className="bi bi-cart"></i>
          </button>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default CartOffCanvas;
