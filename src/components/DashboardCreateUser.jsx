import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";

function CreateUser() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [userData, setuserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    address: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setuserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmitEdit = async (e) => {
    e.preventDefault();
    console.log(userData);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/users`,
        userData
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error updating product:", error);
    }
    navigate("/admin/users");
  };

  return (
    <>
      <div className="infoDashboard">
        <div className="administrationPanelMain">
          <div className="container">
            <h4 className="text-dark pb-1">Create User</h4>
            <form onSubmit={handleSubmitEdit}>
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-2">
                    <label htmlFor="firstname" className="form-label text-dark">
                      Firstname
                    </label>{" "}
                    <br />
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      id="firstname"
                      name="firstname"
                      value={userData.firstname}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="mb-2">
                    <label htmlFor="lastname" className="form-label text-dark">
                      Lastname
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      id="lastname"
                      name="lastname"
                      value={userData.lastname}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="mb-2">
                    <label htmlFor="email" className="form-label text-dark">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control form-control-sm"
                      id="email"
                      name="email"
                      value={userData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="mb-2 ">
                    <label htmlFor="phone" className="form-label text-dark">
                      Phone
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      id="phone"
                      name="phone"
                      value={userData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="mb-2">
                <label htmlFor="address " className="form-label">
                  Address
                </label>
                <input
                  className="form-control"
                  id="address"
                  name="address"
                  value={userData.address}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-2">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={userData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-subscribe w-100 my-3 text-light"
              >
                Submit Changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateUser;
