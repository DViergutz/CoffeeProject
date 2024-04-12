import Navigation from "./Navbar";
import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import { Link, useNavigate } from "react-router-dom";

function LoginAdmin() {
  const navigate = useNavigate();
  const notifyErrorLogin = () => toast("Please enter valid credentials!");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/login/tokens/admin",
        formData
      );

      const { token, adminId } = response.data;

      if (token === undefined || adminId === undefined) {
        notifyErrorLogin();
      } else {
        navigate("/admin");
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };
  return (
    <>
      <Navigation />
      <div className="bg-fondo3 p-5 ">
        <div className="container login-wrapper">
          <div className="row bg-dark-grey border-orange mt-5 ">
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
              <h3 className="text-dark mb-3 fw-semibold">Login Admin</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-2">
                  <label forhtml="email" className="form-label text-dark">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control form-control-sm"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <small className="text-secondary">Try: test@test.com</small>
                </div>

                <div className="mb-2">
                  <label
                    forhtml="username"
                    className="form-label text-dark mt-2"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control form-control-sm"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <small className="text-secondary">Try: 123</small>
                </div>

                <button
                  type="submit"
                  className="btn btn-subscribe w-100 my-3 text-light"
                >
                  Login
                </button>
                <div className="d-flex"></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginAdmin;
