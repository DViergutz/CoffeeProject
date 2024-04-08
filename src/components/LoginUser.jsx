import React, { useState } from "react";
import axios from "axios";
import UticaBrandLogo from "../assets/img/logoUticaSB.png";
import Navigation from "./Navbar";
import { Link } from "react-router-dom";

function LoginUser() {
  // Estado local para almacenar los valores del formulario
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Manejar cambios en los campos del formulario
  const handleChange = (e) => {
    const { email, value } = e.target;
    setFormData({
      ...formData,
      [email]: value,
    });
  };

  // Manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Enviar una solicitud al servidor para verificar las credenciales
      const response = await axios.post(
        "http://localhost:3000/login",
        formData
      );
      console.log(response.data); // Hacer algo con la respuesta del servidor
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  return (
    <>
      <Navigation />
      <div className="bg-fondo3 h-100 pt-5">
        <div className="container vh-100">
          <div className="row d-flex align-items-center bg-dark-grey border-orange ">
            <div className="col-md-6 text-center">
              <img src={UticaBrandLogo} alt="UticaLogo" className="img-fluid" />
            </div>
            <div className="col-md-6 bg-light p-5 rounded-end">
              <h3 className="text-dark pb-3  fw-semibold">Login</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label forhtml="email" className="form-label text-dark">
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
                  <label forhtml="password" className="form-label text-dark">
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
                <div>
                  <small className="text-dark">
                    Don't you have an Account ?{" "}
                    <Link to="/user/register">
                      <a className="text-decoration-none text-orange fw-semibold">
                        Create an Account!
                      </a>
                    </Link>
                  </small>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginUser;
