import React, { useState } from "react";
import axios from "axios";

import Navigation from "./Navbar";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authUser } from "../redux/UserSlice.jsx";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LoginUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize navigate for navigation

  // Estado local para almacenar los valores del formulario
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Manejar cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const notifyErrorLogin = () => toast("Please enter valid credentials!");
  // Manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Enviar una solicitud al servidor para verificar las credenciales
      const response = await axios.post(
        "http://localhost:3000/login/tokens",
        formData
      );
      console.log("RESPUESTA DEL SERVIDOR : " + response.data);

      const { token, userId } = response.data;

      if (token === undefined || userId === undefined) {
        notifyErrorLogin();
      } else {
        dispatch(
          authUser({ token: response.data.token, userId: response.data.userId })
        );
        navigate("/");
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  return (
    <>
      <Navigation />
      <div className="bg-fondo3 p-5">
        <div className="container login-wrapper">
          <div className="row bg-dark-grey border-orange mt-5">
            <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
              <div className="text-center">
                <img
                  src={`${
                    import.meta.env.VITE_BUCKETS_URL
                  }/fotos_varias/logo-utica-white.png`}
                  alt="UticaLogo"
                  className="utica-logo-login"
                />
              </div>
            </div>
            <div className="col-md-6 bg-light p-5 rounded-end">
              <h3 className="text-dark mb-3 fw-semibold">Login</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label text-dark">
                    Email
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label text-dark">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-subscribe w-100 my-3 text-light"
                >
                  Login
                </button>
                <div className="d-flex">
                  <small className="text-dark">
                    Don't you have an Account ?{" "}
                    <Link to="/user/register" className="text-decoration-none">
                      <span className="ms-2 text-decoration-none text-orange fw-semibold">
                        Create an Account!
                      </span>
                    </Link>
                  </small>
                </div>
              </form>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default LoginUser;
