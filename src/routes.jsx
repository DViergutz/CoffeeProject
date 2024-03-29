import { createBrowserRouter } from "react-router-dom";
import ProductsAll from "./components/ProductsAll";
import ProductsCategory from "./components/ProductsCategory";
import ProductDetail from "./components/ProductDetail";
import Checkout from "./components/Checkout";
import LoginAdmin from "./components/LoginAdmin";
import Dashboard from "./components/Dashboard";
import Signup from "./components/Signup";
import LoginUser from "./components/LoginUser";
import AboutThisProject from "./components/AboutThisProject";
import NotFound from "./components/NotFound";
import MainLayout from "./components/MainLayout";
import Home from "./components/Home";

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
      {
        path: "/about-this-project",
        element: <AboutThisProject />,
      },
    ],
  },
  {
    path: "/admin/login",
    element: <LoginAdmin />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "user/sign-up",
    element: <Signup />,
  },
  {
    path: "/user/login",
    element: <LoginUser />,
  },
]);

export default router;
