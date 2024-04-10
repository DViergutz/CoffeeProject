import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ResetDbButton() {
  const navigate = useNavigate();

  const resetDb = async () => {
    console.log("resetting DB...");
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
  };
  return (
    <>
      <p className="fst-italic fw-light">
        If the page doesn't display products below or the page seems to be
        broken we please you to reset the Database by clicking this button
      </p>
      <button
        className="btn btn-hero height65 mb-5 mt-0 fs-4"
        onClick={() => resetDb()}
      >
        Reset Database
      </button>
    </>
  );
}

export default ResetDbButton;
