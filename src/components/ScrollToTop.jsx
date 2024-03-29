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
      console.log(showScrollTopButton);
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
        <RiArrowUpDoubleFill
          className="top-btn-position top-btn-style"
          onClick={scrollTop}
        />
      )}
    </div>
  );
}

export default ScrollToTop;
