import React from "react";
import { useEffect, useState } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";

function ScrollToTop() {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.screenY > 300) {
        setShowScrollTopButton(true);
      } else {
        setShowScrollTopButton(true);
      }
    });
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {showScrollTopButton && (
        <FaAngleDoubleUp
          className="top-btn-position top-btn-style"
          onClick={scrollTop}
        />
      )}
    </div>
  );
}

export default ScrollToTop;
