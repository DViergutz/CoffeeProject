import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./Navbar";
import Footer from "./Footer";
import CartOffCanvas from "./CartOffCanvas";

function MainLayout() {
  return (
    <div>
      <Navigation />
      <CartOffCanvas />
      <Outlet />
      <Footer />
    </div>
  );
}

export default MainLayout;
