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
      }, 3000);

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
        className="offcanvas-close-button d-flex justify-content-between"
      >
        <p className="fs-4">Shopping Cart</p>
        <Offcanvas.Title className="offcanvas-title"></Offcanvas.Title>
        <p className="fs-3 me-3 close-offcanvas">X</p>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <div>
          {itemsInCart.length === 0 ? (
            <div className="row pb-3  disabled">
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
            <div></div>
          )}
        </div>
        {itemsInCart.map((item, index) => (
          <div className="row offcanvas-product-div ms-1 me-1 mt-3" key={index}>
            <div className="col-3">
              <img
                className="w-100"
                src={`${import.meta.env.VITE_BUCKETS_URL}/${item.image}`}
                alt=""
              />
            </div>
            <div className="col-6 d-flex flex-column align-items-center justify-content-around">
              <div>
                <p>{item.name}</p>
              </div>
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
              <Toast
                show={showToast}
                onClose={() => dispatch(setShowToast(false))}
                delay={3000}
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
            <div className="col-3 d-flex flex-column align-items-center justify-content-around">
              <div>
                <p className="fs-5">${item.price}</p>
              </div>
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
            <hr className="text-orange mt-4" />
          </div>
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
