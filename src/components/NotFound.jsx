import React from "react";
import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

function NotFound() {
  const routeError = useRouteError();
  return (
    <div className="main-section bg-fondo3">
      <div className="d-flex flex-column align-items-center" id="error-page">
        <h2>Oooops!</h2>
        <p>Sorry, an unexpected error has ocurred.</p>
        <p>
          <i>{routeError.statusText || routeError.message}</i>
        </p>
        <Link
          to="/"
          className="text-decoration-none"
          onClick={() => window.scrollTo(0, 0)}
        >
          <button className="btn-hero">
            <i class="bi bi-arrow-left"></i> Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
