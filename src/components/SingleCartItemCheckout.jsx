import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  setShowToast,
  deleteOneProduct,
} from "../redux/CartSlice.jsx";

import { Toast, Button } from "react-bootstrap";

function SingleCartItemCheckout({ item }) {
  const [showToast, setShowToast] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (showToast) {
      // Después de 3 segundos, ocultar el toast
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 3000);

      // Limpiar el temporizador al desmontar el componente o cuando showToast cambie
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  return (
    <div key={item.id}>
      <div className="d-flex py-3">
        <div className="col-3 fw-semibold d-flex justify-content-center align-items-center">
          <img
            className="img-checkout"
            src={`${import.meta.env.VITE_BUCKETS_URL}/${item.image}`}
            alt=""
          />
        </div>

        <div className="col-3 fw-semibold d-flex justify-content-center align-items-center">
          ${item.price}
          <Toast
            show={showToast}
            onClose={() => setShowToast(false)}
            delay={3000}
            autohide
          >
            <Toast.Body closeButton={false} className="text-dark toast-cart">
              <div className="d-flex">
                <div>Has alcanzado el límite de stock!</div>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => setShowToast(false)}
                  className="toast-button"
                >
                  X
                </Button>
              </div>
            </Toast.Body>
          </Toast>
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
              onClick={() => {
                if (item.stock > item.quantity) {
                  dispatch(
                    incrementQuantity({
                      name: item.name,
                      id: item.id,
                      price: item.price,
                      image: item.image,
                      stock: item.stock,
                    })
                  );
                } else {
                  setShowToast(true);
                }
              }}
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
  );
}

export default SingleCartItemCheckout;
