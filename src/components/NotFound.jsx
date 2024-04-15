import React from "react";
import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

function NotFound() {
  const routeError = useRouteError();
  return (
    <div className="main-section bg-fondo3 d-flex flex-column justify-content-center">
      <div className="d-flex flex-column align-items-center" id="error-page">
        <img
          src={`${
            import.meta.env.VITE_BUCKETS_URL
          }/fotos_varias/logo-utica-white.png`}
          alt="UticaLogo"
          className="utica-logo-login-2"
        />
        <h2 className="mb-4">
          <span className="text-orange">Ooooops!</span>
        </h2>
        <h5 className="mb-3">
          Our beans got a little too excited! We're brewing up a fix.
        </h5>
        <h5 className="mb-5"> Please try again shortly</h5>
        <h3 className="mb-5">
          <i>{routeError.statusText || routeError.message}</i>
        </h3>
        <Link
          to="/"
          className="text-decoration-none"
          onClick={() => window.scrollTo(0, 0)}
        >
          <button className="btn-hero">
            <i className="bi bi-arrow-left"></i> Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
