import { createBrowserRouter } from "react-router-dom";
import ProductsAll from "./components/ProductsAll";
import ProductsCategory from "./components/ProductsCategory";
import ProductDetail from "./components/ProductDetail";
import Checkout from "./components/Checkout";
import Dashboard from "./components/Dashboard";
import DashboardProduct from "./components/DashboardProduct";
import DashboardUser from "./components/DashboardUser";
import DashboardOrder from "./components/DashboardOrder";
import Signup from "./components/Signup";
import LoginUser from "./components/LoginUser";
import AboutThisProject from "./components/AboutThisProject";
import NotFound from "./components/NotFound";
import MainLayout from "./components/MainLayout";
import Home from "./components/Home";
import AdminLayout from "./components/AdminLayout";
import DashboardEditProduct from "./components/DashboardEditProduct";
import DashboardCreateProduct from "./components/DashboardCreateProduct";
import DashboardCreateUser from "./components/DashboardCreateUser";
import DashboardEditUser from "./components/DashboardEditUser";
import DashboardAdmin from "./components/DashboardAdmin";
import DashboardEditAdmin from "./components/DashboardEditAdmin";
import DashboardCreateAdmin from "./components/DashboardCreateAdmin";
import LoginAdmin from "./components/LoginAdmin";
import LogLayout from "./components/LogLayout";
import ThankYouForYourBuy from "./components/ThankYouForYourBuy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/products",
        element: <ProductsAll />,
      },
      {
        path: "/products/:productId",
        element: <ProductDetail />,
      },
      {
        path: "/category/:categoryName",
        element: <ProductsCategory />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
  //------- ADMIN LAYOUT --------
  {
    path: "/admin",
    element: <AdminLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/admin",
        element: <Dashboard />,
      },
      {
        path: "/admin/products",
        element: <DashboardProduct />,
      },
      {
        path: "/admin/products/:id",
        element: <DashboardEditProduct />,
      },
      {
        path: "/admin/products/create",
        element: <DashboardCreateProduct />,
      },
      {
        path: "/admin/users",
        element: <DashboardUser />,
      },
      {
        path: "/admin/users/:id",
        element: <DashboardEditUser />,
      },
      {
        path: "/admin/users/create",
        element: <DashboardCreateUser />,
      },
      {
        path: "/admin/orders",
        element: <DashboardOrder />,
      },
      {
        path: "/admin/admins",
        element: <DashboardAdmin />,
      },
      {
        path: "/admin/admins/edit/:id",
        element: <DashboardEditAdmin />,
      },
      {
        path: "/admin/admins/create",
        element: <DashboardCreateAdmin />,
      },
    ],

    // ---------- FIN DASHBOARD ADMIN ----------
  },

  {
    path: "/",
    element: <LogLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/admin/login",
        element: <LoginAdmin />,
      },
      {
        path: "/user/register",
        element: <Signup />,
      },
      {
        path: "/user/login",
        element: <LoginUser />,
      },
      {
        path: "/about-this-project",
        element: <AboutThisProject />,
      },
      {
        path: "/thank-you",
        element: <ThankYouForYourBuy />,
      },
    ],
  },
]);

export default router;
