import { Link } from "react-router-dom";
import "../styles/App.css";

export default function PublicPage() {
  return (
    <div className="container">
      <h1 className="title" >Sistema de Registro de Visitas</h1>
      <p className="title" >
        Registra y consulta las visitas que recibes
      </p>
      <p className="title" >
        <Link className="button" to="/login"> Ingresar </Link>
      </p>
    </div>
  );
}



