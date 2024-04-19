import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import moment from "moment";

// new comment

function DashboardAdmin() {
  const [admins, setadmins] = useState();

  useEffect(() => {
    const fetchAlladmins = async () => {
      try {
        const response = await axios({
          method: "GET",
          url: `${import.meta.env.VITE_API_URL}/admin`,
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
    Swal.fire({
      title: "Do you really want to delete this admin?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`${import.meta.env.VITE_API_URL}/admin/${id}`);
          // Fetch admins again after deletion
          const response = await axios.get(
            `${import.meta.env.VITE_API_URL}/admin`
          );
          setadmins(response.data);
        } catch (error) {
          console.error("Error:", error);
        }

        Swal.fire({
          title: "Deleted!",
          text: "Admin has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="infoDashboard">
      <div className="administrationPanelMain">
        <div className="row align-items-center mb-4">
          <div className="col">
            <h4 className="text-dark fs-4">Admins</h4>
          </div>
          <div className="col text-end">
            <Link to="/admin/admins/create">
              <button className="btn-hero ">
                <i className="bi bi-plus"> </i>Add Admin
              </button>
            </Link>
          </div>
        </div>

        <div className="lastOrders">
          <table className="dashboardTable">
            <thead className="tableHeadDashboard">
              <tr className="text-light">
                <th>Id</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Email</th>
                <th>Created at</th>
                <th>Actions</th>
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
                    <td>{moment(new Date(admin.createdAt)).fromNow()}</td>
                    <td>
                      <Link to={`/admin/admins/edit/${admin.id}`} className="">
                        <button className="btn btn-outline-warning mb-2">
                          <i className="bi bi-pen text-dark"></i>
                        </button>
                      </Link>
                      <br />
                      <button
                        className="btn btn-outline-danger"
                        onClick={() => deleteAdmin(admin.id)}
                      >
                        <i className="bi bi-trash3 text-dark"></i>
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
