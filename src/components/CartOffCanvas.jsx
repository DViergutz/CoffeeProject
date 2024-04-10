import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementQuantity,
  setIsCartOpen,
  decrementQuantity,
  setShowToast,
} from "../redux/CartSlice.jsx";
import { useNavigate } from "react-router-dom";
import { Offcanvas } from "react-bootstrap";
import { Toast, Button } from "react-bootstrap";

function CartOffCanvas() {
  const dispatch = useDispatch();
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);
  const itemsInCart = useSelector((state) => state.cart.inCart);
  const showToast = useSelector((state) => state.cart.showToast);
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

  useEffect(() => {
    if (showToast) {
      // Después de 3 segundos, ocultar el toast
      const timer = setTimeout(() => {
        dispatch(setShowToast(false));
      }, 10000);

      // Limpiar el temporizador al desmontar el componente o cuando showToast cambie
      return () => clearTimeout(timer);
    }
  }, [showToast, dispatch, setShowToast]);

  return (
    <Offcanvas
      show={isCartOpen}
      placement="end"
      scroll={true}
      onHide={() => dispatch(setIsCartOpen())}
    >
      <Offcanvas.Header
        onClick={() => dispatch(setIsCartOpen())}
        className="offcanvas-close-button"
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
        {itemsInCart.map((item, index) => (
          <div className="offcanvas-product-div row ms-1 me-1" key={index}>
            <div className="col-5">
              <img
                className="w-50"
                src={`${import.meta.env.VITE_BUCKETS_URL}/${item.image}`}
                alt=""
              />
            </div>
            <div className="col-5 p-1 ">
              <button
                className="btn-view-product-offcanvas"
                onClick={() => {
                  if (item.quantity === 1 && itemsInCart.length === 1)
                    dispatch(setIsCartOpen());
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
              <Toast
                show={showToast}
                onClose={() => dispatch(setShowToast(false))}
                delay={10000}
                autohide
              >
                <Toast.Body
                  closeButton={false}
                  className="text-dark toast-cart"
                >
                  <div className="d-flex">
                    <div>Has alcanzado el límite de stock!</div>
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => dispatch(setShowToast(false))}
                      className="toast-button"
                    >
                      X
                    </Button>
                  </div>
                </Toast.Body>
              </Toast>
            </div>
            <div className="col-2">{item.price}</div>
          </div>
        ))}
        <div className="mt-5 text-light">
          TOTAL PRICE: <p>{totalPrice}</p>
        </div>

        <button className="btn-hero p-2 w-100 mt-4" onClick={handleCheckout}>
          Checkout <i className="bi bi-cart"></i>
        </button>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default CartOffCanvas;
