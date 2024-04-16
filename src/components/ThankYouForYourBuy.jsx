import React, { useRef, useState } from "react";
import Logo from "./Logo";

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

  return (
    <div className="background-thank">
      <div className="thank-div main container ">
        {" "}
        <h5 className="my-5" style={{ maxWidth: "900px", lineHeight: "1.5" }}>
          Coffee <span className="text-orange">order confirmed!</span> Dive into
          virtual coffee art. While you wait{" "}
          <span className="text-orange"> Hover </span> over our featured image
          and stir your creativity!
        </h5>
        <div
          className=" logo-container"
          ref={logoRef}
          onMouseMove={(event) => handleMouseMove(event)}
        >
          <Logo cursor={cursor} logoRef={logoRef} />

          <button className="btn btn-view-product height65">
            Continue Brewing!
          </button>
        </div>
      </div>
    </div>
  );
}

export default ThankYouForYourBuy;
