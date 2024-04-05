import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:3000/users/${id}`);
        // Fetch users again after deletion
        const response = await axios.get("http://localhost:3000/users");
        setUsers(response.data);
        console.log(response.data);
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
            <h5>Users</h5>
          </div>
          <div className="col text-end">
            <Link to="/admin/users/create" className="btn btn-outline-success">
              <i className="bi bi-plus-square"> Add User</i>
            </Link>
          </div>
        </div>

        <div className="lastOrders">
          <table className="dashboardTable">
            <thead className="tableHeadProduct">
              <tr>
                <th>Id</th>
                <th>Full name</th>
                <th className="">Email</th>
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
                    <td className="">
                      {/* call abbreviate Function, pass string and number of words */}
                      {user.firstname} {user.lastname}
                    </td>

                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.address}</td>
                    <td>{user.createdAt}</td>

                    <td>
                      <Link to={`/admin/users/edit/${user.id}`} className="">
                        <button className="btn btn-outline-warning mb-2">
                          <i className="bi bi-pen text-dark"></i>
                        </button>
                      </Link>
                      <br />
                      <button className="btn btn-outline-danger">
                        <i
                          className="bi bi-trash3 text-dark"
                          onClick={() => deleteUser(user.id)}
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

export default DashboardUser;
