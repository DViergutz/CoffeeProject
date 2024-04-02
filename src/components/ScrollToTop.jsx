import React from "react";
import { useEffect, useState } from "react";
import { RiArrowUpDoubleFill } from "react-icons/ri";

function ScrollToTop() {
  const [showScrollTopButton, setShowScrollTopButton] = useState(true);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 900) {
        setShowScrollTopButton(true);
      } else {
        setShowScrollTopButton(false);
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
    <i className="p-3">
      {showScrollTopButton && (
        <RiArrowUpDoubleFill
          className="top-btn-position top-btn-style"
          onClick={scrollTop}
        />
      )}
    </i>
  );
}

export default ScrollToTop;
