import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";

function EditAdmin() {
  const { id } = useParams();
  const navigate = useNavigate(); // Initialize navigate for navigation

  const [adminData, setadminData] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/admin/${id}`
        );
        setadminData(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setadminData({
      ...adminData,
      [name]: value,
    });
  };

  const handleSubmitEdit = async (e) => {
    e.preventDefault();
    console.log(adminData);
    try {
      const response = await axios.patch(
        `${import.meta.env.VITE_API_URL}/admin/${id}`,
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
              <h4 className="text-dark pb-1 fw-semibold">
                Edit admin: <span>{adminData.id}</span>
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

export default EditAdmin;
