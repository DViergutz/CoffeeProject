import React, { useState } from "react";
import axios from "axios";
import Navigation from "./Navbar";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });

  // Manejar cambios en los campos del formulario
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
        "http://localhost:3000/users",
        formData
      );

      navigate("/");
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  return (
    <div className="vh-100 bg-fondo3 d-flex flex-colum align-items-center justify-content-center">
      <div className=" p-5 ">
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
              <h3 className="text-dark mb-3 fw-semibold">Register</h3>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-2">
                      <label
                        forhtml="firstname"
                        className="form-label text-dark"
                      >
                        Firstname
                      </label>{" "}
                      <br />
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        id="firstname"
                        name="firstname"
                        value={formData.firstname}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="mb-2 col-md-6">
                    <label forhtml="lastname" className="form-label text-dark">
                      Lastname
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      id="lastname"
                      name="lastname"
                      value={formData.lastname}
                      onChange={handleChange}
                    />
                  </div>
                </div>

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
                </div>

                <div className="mb-2">
                  <label forhtml="username" className="form-label text-dark">
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
                </div>

                <div className="mb-2">
                  <label forhtml="phone" className="form-label text-dark">
                    Phone
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-2">
                  <label forhtml="address" className="form-label text-dark">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-subscribe w-100 my-3 text-light"
                >
                  Register Account
                </button>
                <div className="d-flex">
                  <small className="text-dark">
                    Already have an Account ?
                    <Link to="/user/login" className="text-decoration-none">
                      <span className="ms-2 text-decoration-none text-orange fw-semibold">
                        Login
                      </span>
                    </Link>
                  </small>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
