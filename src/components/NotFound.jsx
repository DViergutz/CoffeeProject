import React from "react";
import { useRouteError } from "react-router-dom";

function NotFound() {
  const routeError = useRouteError();
  return (
    <div id="error-page">
      <h2>Oooops!</h2>
      <p>Sorry, an unexpected error has ocurred.</p>
      <p>
        <i>{routeError.statusText || routeError.message}</i>
      </p>
    </div>
  );
}

export default NotFound;
