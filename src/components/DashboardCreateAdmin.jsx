import React, { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function CreateAdmin() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [adminData, setAdminData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdminData({
      ...adminData,
      [name]: value,
    });
  };

  const handleSubmitEdit = async (e) => {
    e.preventDefault();
    console.log(adminData);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/admin`,
        adminData
      );
    } catch (error) {
      console.error("Error updating admin:", error);
    }
    navigate("/admin/admins");
  };

  return (
    <>
      {adminData ? (
        <div className="infoDashboard">
          <div className="administrationPanelMain">
            <div className="container">
              <h4 className="text-dark pb-1 fw-semibold">Create admin</h4>
              <form onSubmit={handleSubmitEdit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-2">
                      <label
                        htmlFor="firstname"
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
                        value={adminData.firstname}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="mb-2">
                      <label
                        htmlFor="lastname"
                        className="form-label text-dark"
                      >
                        Lastname
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        id="lastname"
                        name="lastname"
                        value={adminData.lastname}
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
                        value={adminData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-2">
                      <label
                        htmlFor="password"
                        className="form-label text-dark"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control form-control-sm"
                        id="password"
                        name="password"
                        value={adminData.password}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
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
      ) : (
        <tr>
          <td>Loading...</td>
        </tr>
      )}
    </>
  );
}

export default CreateAdmin;
