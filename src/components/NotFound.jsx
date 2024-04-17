import React from "react";
import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

function NotFound() {
  const routeError = useRouteError();
  return (
    <div className="bg-fondo3">
      <div className="container main d-flex flex-column justify-content-center">
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
          <p className="mb-3 fs-4 text-center">
            Our beans got a little too excited! We're brewing up a fix.
          </p>
          <p className="mb-5 fs-4"> Please try again shortly</p>
          <h3 className="mb-5">
            <i>
              {routeError.status} -{" "}
              {routeError.statusText || routeError.message}
            </i>
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
    </div>
  );
}

export default NotFound;
