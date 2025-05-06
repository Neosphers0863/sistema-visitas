import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import VisitForm from "../components/VisitForm";
import "../styles/App.css";

const API_URL = "http://localhost:3001/visitas";

export default function AdminPage() {
  const [visitas, setVisitas] = useState([]);
  const [fechaFiltro, setFechaFiltro] = useState("");

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setVisitas(data))
      .catch(() => Swal.fire("Error", "No se pudieron cargar las visitas", "error"));
  }, []);

  const agregarVisita = (nuevaVisita) => {
    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nuevaVisita),
    })
      .then((res) => {
        if (!res.ok) throw new Error("No se pudo guardar");
        return res.json();
      })
      .then((data) => {
        setVisitas((prev) => [...prev, data]);
      })
      .catch(() => {
        Swal.fire("Error", "No se pudo guardar la visita", "error");
      });
  };
  
  const marcarSalida = (id) => {
    const horaActual = new Date().toLocaleTimeString();
    console.log("Marcando salida para ID:", id);
  
    fetch(`${API_URL}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ horaSalida: horaActual })
    })
      .then((res) => {
        console.log("Respuesta PATCH:", res.status);
        if (!res.ok) throw new Error("Falló el PATCH");
        return res.json();
      })
      .then((visitaActualizada) => {
        console.log("Visita actualizada:", visitaActualizada);
        setVisitas((prev) =>
          prev.map((v) => (v.id === visitaActualizada.id ? visitaActualizada : v))
        );
        Swal.fire("Salida registrada", "Hora de salida actualizada", "success");
      })
      .catch((error) => {
        console.error("Error al marcar salida:", error);
        Swal.fire("Error", "No se pudo marcar la salida", "error");
      });
  };
  
  
  const handleLogout = () => {
    localStorage.removeItem("token");
    Swal.fire("Sesión cerrada", "Hasta luego", "info").then(() => {
      window.location.href = "/login";
    });
  };

  const visitasFiltradas = visitas.filter((visita) =>
    fechaFiltro ? visita.fecha === fechaFiltro : true
  );

  return (
    <div className="container">
      <h1 className="title" >Panel del Administrador</h1>

      <VisitForm onAddVisit={agregarVisita} />

      <hr />

      <div>
        <label>Filtrar por fecha:</label>
        <input
          type="date"
          value={fechaFiltro}
          onChange={(e) => setFechaFiltro(e.target.value)}
        />
        <button className="button" onClick={() => setFechaFiltro("")}>Limpiar filtro</button>
      </div>

      <h2 className="title" >Visitas Registradas</h2>

      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Motivo</th>
            <th>Hora Entrada</th>
            <th>Hora Salida</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {visitasFiltradas.map((visita) => (
            <tr key={visita.id}>
              <td>{visita.nombre}</td>
              <td>{visita.motivo}</td>
              <td>{visita.horaEntrada}</td>
              <td>{visita.horaSalida || "—"}</td>
              <td>
                {!visita.horaSalida && (
                  <button onClick={() => marcarSalida(visita.id)}>
                    Marcar salida
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr />
      <button className="button" onClick={handleLogout}>Cerrar sesión</button>
    </div>
    
  );
}



