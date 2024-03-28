import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./Navbar";
import Footer from "./Footer";

function MainLayout() {
  return (
    <div>
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}

export default MainLayout;
