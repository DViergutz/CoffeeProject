import React from "react";
import { Outlet } from "react-router-dom";

import Navigation from "./Navbar";

function LogLayout() {
  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  );
}

export default LogLayout;
