import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function ResetDbButton() {
  const navigate = useNavigate();

  const resetDb = async () => {
    Swal.fire({
      title:
        "Are you sure you want to reset the following tables to their initial state?",
      html: `
      <ul class="list-unstyled">
        <li>Product</li>
        <li>User</li>
        <li>Category</li>
        <li>Admin</li>
        <li>Order</li>
      </ul>
    
    `,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, reset them!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axios({
            method: "GET",
            url: `http://localhost:3000/resetDb`,
          });
          console.log(response.data);
        } catch (error) {
          console.error("Error:", error);
        }
        // window.location.reload();
        navigate(0);

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <>
      <button className="btn btn-hero" onClick={() => resetDb()}>
        Reset Database
      </button>
    </>
  );
}

export default ResetDbButton;
