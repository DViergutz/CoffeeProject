import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import moment from "moment";

function DashboardUser() {
  const [users, setUsers] = useState();

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const response = await axios({
          method: "GET",
          url: `http://localhost:3000/users`,
        });
        setUsers(response.data);
        // console.log(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchAllUsers();
  }, []);

  // delete product
  const deleteUser = async (id) => {
    Swal.fire({
      title: "Do you really want to delete this user?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`http://localhost:3000/users/${id}`);
          // Fetch users again after deletion
          const response = await axios.get("http://localhost:3000/users");
          setUsers(response.data);
          console.log(response.data);
        } catch (error) {
          console.error("Error:", error);
        }
        Swal.fire({
          title: "Deleted!",
          text: "User has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="infoDashboard">
      <div className="administrationPanelMain">
        <h4 className="text-dark fs-4 mb-0">Users</h4>
        <div className="row ">
          <div className="col"></div>
          <div className="col text-end mb-5">
            <Link to="/admin/users/create" className="">
              <button className="btn-hero ">
                <i className="bi bi-plus"> </i>Add User
              </button>
            </Link>
          </div>
        </div>

        <div className="lastOrders">
          <table className="dashboardTable">
            <thead className="tableHeadProduct">
              <tr className="text-light">
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Created at</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="bodyTableProducts">
              {users ? (
                users.map((user) => (
                  <tr key={user.id}>
                    <td className="bold ">{user.id}</td>
                    <td>
                      <span>
                        {user.firstname}
                        <p className="fw-bold text-dark">{user.lastname}</p>
                      </span>
                    </td>

                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.address}</td>
                    <td>{moment(new Date(user.createdAt)).fromNow()}</td>

                    <td>
                      <Link to={`/admin/users/${user.id}`} className="">
                        <button className="btn btn-outline-warning mb-2">
                          <i className="bi bi-pen text-dark"></i>
                        </button>
                      </Link>
                      <br />
                      <button
                        className="btn btn-outline-danger"
                        onClick={() => deleteUser(user.id)}
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

export default DashboardUser;
