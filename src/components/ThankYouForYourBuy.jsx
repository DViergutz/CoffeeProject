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
        <h5>
          Exciting news! Your coffee order is confirmed and on its way. While
          you wait, why not indulge in some virtual coffee art? Hover over our
          featured image below and let your imagination brew!
        </h5>
        <div
          className=" logo-container"
          ref={logoRef}
          onMouseMove={(event) => handleMouseMove(event)}
        >
          <Logo cursor={cursor} logoRef={logoRef} />
        </div>
      </div>
    </div>
  );
}

export default ThankYouForYourBuy;
