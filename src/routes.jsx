import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/products",
    element: <ProductsAll />,
  },
  {
    path: "/products/:category",
    element: <ProductsCategory />,
  },
  {
    path: "/shop/:productDetail",
    element: <ProductDetail />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
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
    path: "/sign-up",
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
]);

export default router;
