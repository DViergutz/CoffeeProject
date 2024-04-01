import React from "react";
import { Outlet } from "react-router-dom";

import PanelAdmin from "./PanelAdmin";

function AdminLayout() {
  return (
    <div>
      <PanelAdmin />
      <Outlet />
    </div>
  );
}

export default AdminLayout;
