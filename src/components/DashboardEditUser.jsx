import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Email } from "@mui/icons-material";

function EditUser() {
  const { id } = useParams();
  const navigate = useNavigate(); // Initialize navigate for navigation

  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/users/${id}`);
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmitEdit = async (e) => {
    e.preventDefault();
    console.log(userData);
    try {
      const response = await axios.patch(
        `http://localhost:3000/users/${id}`,
        userData
      );
      console.log(response.data); // Handle response from server
    } catch (error) {
      console.error("Error updating user:", error);
    }
    navigate("/admin/users");
  };

  return (
    <>
      {userData ? (
        <div className="infoDashboard">
          <div className="administrationPanelMain">
            <div className="container">
              <h4 className="text-dark pb-1 fw-semibold">
                Edit User: <span>{userData.id}</span>
              </h4>
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
                        value={userData.firstname}
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
                  <label htmlFor="address" className="form-label">
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
        "Loading..."
      )}
    </>
  );
}

export default EditUser;
