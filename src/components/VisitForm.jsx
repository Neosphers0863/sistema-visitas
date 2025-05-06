import { useState } from "react";

export default function VisitForm({ onAddVisit }) {
  const [nombre, setNombre] = useState("");
  const [motivo, setMotivo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const nuevaVisita = {
      nombre,
      motivo,
      horaEntrada: new Date().toLocaleTimeString(),
      horaSalida: "",
      fecha: new Date().toISOString().split("T")[0]
    };
  
    onAddVisit(nuevaVisita); // Aquí se manda a AdminPage
    setNombre("");
    setMotivo("");
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <h2 className="title" >Registrar nueva visita</h2>
      <div>
        <label>Nombre del visitante:</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Motivo de la visita:</label>
        <input
          type="text"
          value={motivo}
          onChange={(e) => setMotivo(e.target.value)}
          required
        />
      </div>
      <button className="button" type="submit">Registrar visita</button>
    </form>
  );
}
