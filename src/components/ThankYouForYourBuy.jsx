import React, { useRef, useState } from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";

function ThankYouForYourBuy() {
  const logoRef = useRef(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    if (logoRef.current != null) {
      const rect = logoRef.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      setCursor({ x: x, y: y });
    }
  };

  ///////useEFFECT QUE ME BORRE el carrito array de dependecnvias vacio////////

  return (
    <div className="background-thank">
      <div className=" main container ">
        <div className=" special-product-card-tank-you d-flex flex-column align-items-center justify-content-center ">
          {/* <h2>Thank you!!</h2> */}
          <h2 className="mt-4 mb-4 fw-semibold text-center">
            <span className="text-orange">Thank you!!</span> Your coffee order
            is <span className="text-orange">confirmed!</span>
          </h2>
          <p className="fs-5">Dive into virtual coffee art.</p>
          <p className="fs-5 text-center">
            While you wait
            <span className="text-orange"> Hover </span> over our featured image
            and stir your creativity!
          </p>
          <div
            className="logo-container"
            ref={logoRef}
            onMouseMove={(event) => handleMouseMove(event)}
          >
            <Logo cursor={cursor} logoRef={logoRef} />
          </div>
          <div className="mt-4 d-flex flex-column align-items-center justify-content-center">
            <p className="fs-4 mb-4  text-center">
              Discover new flavors and keep the caffeine journey going!
            </p>
            <Link
              to="/"
              className="text-decoration-none"
              onClick={() => window.scrollTo(0, 0)}
            >
              <button className="btn-hero">
                <i className="bi bi-arrow-left"></i> Let's Brew!
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThankYouForYourBuy;
