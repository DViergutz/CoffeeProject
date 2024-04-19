import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authUser } from "../redux/UserSlice.jsx";

function LoginAdmin() {
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const notifyErrorLogin = () => toast("Please enter valid credentials!");
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "test@test.com",
    password: "123",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const notifyErrorAdminLogin = () => setError(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/login/tokens/admin",
        formData
      );

      const { token, adminId } = response.data;

      if (token === undefined || adminId === undefined) {
        notifyErrorAdminLogin();
      } else {
        ///////////////////////////////
        dispatch(
          authUser({
            token: response.data.token,
            userId: response.data.userId,
            name: response.data.name,
            role: response.data.role,
          })
        );
        navigate("/admin");
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
              <div className="col-md-6 bg-light p-4 p-md-5 rounded-end">
                <h3 className="text-dark mb-3 fw-semibold">Login Admin</h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label
                      htmlFor="email"
                      className={
                        error
                          ? "form-label text-dark animate__animated animate__headShake"
                          : "form-label text-dark "
                      }
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className={
                        error
                          ? "form-control  animate__animated animate__headShake inputError input-style"
                          : "form-control input-style"
                      }
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <small className="text-secondary">Try: test@test.com</small>
                  </div>

                  <div className="mb-2">
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
                          ? "form-control  animate__animated animate__headShake inputError input-style"
                          : "form-control input-style"
                      }
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
      </div>
    </div>
  );
}

export default LoginAdmin;
