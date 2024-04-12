import React from "react";
import { Outlet } from "react-router-dom";
import CartOffCanvas from "./CartOffCanvas";
import Navigation from "./Navbar";

function LogLayout() {
  return (
    <div>
      <Navigation />
      <CartOffCanvas />
      <Outlet />
    </div>
  );
}

export default LogLayout;
