import { useState } from "react";
import Swal from "sweetalert2";
import "../styles/App.css";

export default function LoginPage() {
  const [usuario, setUsuario] = useState("");
  const [clave, setClave] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (usuario === "admin" && clave === "1234") {
      localStorage.setItem("token", "abc123");
      Swal.fire("Bienvenido", "Inicio de sesión exitoso", "success").then(() => {
        window.location.href = "/admin";
      });
    } else {
      Swal.fire("Error", "Credenciales incorrectas", "error");
    }
  };

  return (
    <div className="container">
      <h2 className="title" >Iniciar sesión</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Usuario:</label>
          <input
            type="text"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={clave}
            onChange={(e) => setClave(e.target.value)}
          />
        </div>
        <button className="button" type="submit">Ingresar</button>
      </form>
    </div>
  );
}



