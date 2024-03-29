import React, { useState } from "react";
import axios from "axios";

function LoginUser() {
  // Estado local para almacenar los valores del formulario
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  // Manejar cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Enviar una solicitud al servidor para verificar las credenciales
      const response = await axios.post(
        "http://localhost:3000/login",
        formData
      );
      console.log(response.data); // Hacer algo con la respuesta del servidor
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  return (
    <div>
      <h2>Estamos en LoginUser</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <div class="mb-3">
            <label for="username" class="form-label">
              Username
            </label>
            <input
              type="text"
              class="form-control"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <button type="submit" class="btn btn-success">
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginUser;
