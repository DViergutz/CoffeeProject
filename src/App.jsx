import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
