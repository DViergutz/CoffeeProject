import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function DashboardAdmin() {
  const [admins, setadmins] = useState();

  useEffect(() => {
    const fetchAlladmins = async () => {
      try {
        const response = await axios({
          method: "GET",
          url: `http://localhost:3000/admin`,
        });
        setadmins(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchAlladmins();
  }, []);

  //   delete admin
  const deleteAdmin = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:3000/admin/${id}`);
        // Fetch admins again after deletion
        const response = await axios.get("http://localhost:3000/admin");
        setadmins(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  return (
    <div className="infoDashboard">
      <div className="administrationPanelMain">
        <div className="row ">
          <div className="col">
            <h5>Admins</h5>
          </div>
          <div className="col text-end">
            <Link to="/admin/admins/create" className="btn btn-outline-success">
              <i className="bi bi-plus-square"> Add Admin</i>
            </Link>
          </div>
        </div>
        <div className="lastOrders">
          <table className="dashboardTable">
            <thead className="tableHeadDashboard">
              <tr>
                <th>Id</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Email</th>
                <th>Created at</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="bodyTableadmins">
              {admins ? (
                admins.map((admin) => (
                  <tr key={admin.id}>
                    <td className="bold">{admin.id}</td>
                    <td>{admin.firstname}</td>
                    <td>{admin.lastname}</td>
                    <td>{admin.email}</td>
                    <td>{admin.createdAt}</td>
                    <td>
                      <Link to={`/admin/admins/edit/${admin.id}`} className="">
                        <button className="btn btn-outline-warning mb-2">
                          <i className="bi bi-pen text-dark"></i>
                        </button>
                      </Link>
                      <br />
                      <button className="btn btn-outline-danger">
                        <i
                          className="bi bi-trash3 text-dark"
                          onClick={() => deleteAdmin(admin.id)}
                        ></i>
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td>Loading...</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DashboardAdmin;
