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
          <div className="row pb-3 mb-4 mt-3">
            <div className="col-4 text-center text-light">PRODUCT</div>
            <div className="col-5 text-center text-light">QUANTITY</div>
            <div className="col-3 text-center text-light pe-5">PRICE</div>
          </div>
        </div>
        {itemsInCart.map((item, index) => (
          <div className="row offcanvas-product-div ms-1 me-1" key={index}>
            <div className="col-4">
              <img
                className="w-75"
                src={`${import.meta.env.VITE_BUCKETS_URL}/${item.image}`}
                alt=""
              />
            </div>
            <div className="col-5 d-flex flex-column align-items-center">
              <div>
                <p className="fs-5">{item.name}</p>
              </div>
              <div>
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
            </div>
            <div className="col-3 fs-5 d-flex flex-column align-items-center">
              <span className=" mb-3">${item.price}</span>
              <button className="btn-delete-product">
                <i class="bi bi-trash3 "></i>
              </button>
            </div>
          </div>
        ))}
        <div className="mt-5 text-light d-flex justify-content-between align-items-center">
          <p className="fw-semibold">TOTAL PRICE:</p>
          <p className="fs-4 me-3">${totalPrice}</p>
        </div>

        <button className="btn-hero p-2 w-100 mt-4" onClick={handleCheckout}>
          Checkout <i className="bi bi-cart"></i>
        </button>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default CartOffCanvas;
