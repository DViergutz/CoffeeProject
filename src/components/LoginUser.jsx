import React, { useState } from "react";
import axios from "axios";

import Navigation from "./Navbar";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authUser } from "../redux/UserSlice.jsx";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "animate.css";

function LoginUser() {
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Estado local para almacenar los valores del formulario
  const [formData, setFormData] = useState({
    email: "user@user.com",
    password: "user",
  });

  // Manejar cambios en los campos del formulario
  const handleChange = (e) => {
    setError(false);
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const notifyErrorLogin = () => setError(true);

  /*   const notifyErrorLogin = () =>
    toast.error("Please enter valid credentials!", { theme: "dark" });
 */

  // Manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Enviar una solicitud al servidor para verificar las credenciales
      const response = await axios.post(
        "http://localhost:3000/login/tokens",
        formData
      );
      console.log("Login Response: " + response.data);

      const { token, userId } = response.data;

      if (token === undefined || userId === undefined) {
        notifyErrorLogin();
      } else {
        dispatch(
          authUser({ token: response.data.token, userId: response.data.userId })
        );
        window.history.back();
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  return (
    <div className="bg-fondo3">
      <div className="container main d-flex flex-colum align-items-center justify-content-center">
        <div className="p-2 pt-5">
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
              <div className="col-md-6 bg-light p-4 p-md-5 rounded-end">
                <h3 className="text-dark mb-3 fw-semibold">Login</h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label
                      htmlFor="email"
                      className={
                        error
                          ? "form-label text-dark animate__animated animate__headShake"
                          : "form-label text-dark"
                      }
                    >
                      Email
                    </label>
                    <input
                      type="text"
                      className={
                        error
                          ? "form-control animate__animated animate__headShake inputError input-style"
                          : "form-control input-style"
                      }
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <small className="text-secondary">Try: user@user.com</small>
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="password"
                      className={
                        error
                          ? "form-label text-dark animate__animated animate__headShake"
                          : "form-label text-dark"
                      }
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className={
                        error
                          ? "form-control animate__animated animate__headShake inputError input-style"
                          : "form-control input-style"
                      }
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                    <small className="text-secondary">Try: user</small>
                  </div>

                  <p className={error ? "error" : "hidden"}>
                    Please enter valid credentials!
                  </p>
                  <button
                    type="submit"
                    className="btn btn-subscribe w-100 my-3 text-light"
                  >
                    Login
                  </button>

                  <div className="d-flex">
                    <small className="text-dark">
                      Don't you have an Account ?{" "}
                      <Link
                        to="/user/register"
                        className="text-decoration-none"
                      >
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
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}

export default LoginUser;
