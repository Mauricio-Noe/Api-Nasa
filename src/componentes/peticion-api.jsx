import React, { useContext, useState } from "react";
import { ApiContext } from "./context1"; // Importamos el contexto
import "../styles/container-api.css";

const ApinasaComponent = () => {
  const { nasaData, loading, error, fetchNasaData } = useContext(ApiContext);
  const [showInfo, setShowInfo] = useState(false);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Hubo una falla: {error}</p>;

  return (
    <div className="container-info-api">
      <button
        className="btn-api"
        onClick={() => {
          if (!nasaData) fetchNasaData(); // Cambia `fetchData` a `fetchNasaData`
          setShowInfo(!showInfo);
        }}
      >
        {showInfo ? "Ocultar" : "Visualizar"}
      </button>
      {showInfo && nasaData && (
        <section className="info-json">
          <h1 className="title-api">{nasaData.title}</h1>
          <h4 className="info-api">{nasaData.explanation}</h4>
          <img className="nasa-image" src={nasaData.url} alt={nasaData.title} />
          <h5 className="date-PI">{nasaData.date}</h5>
        </section>
      )}
    </div>
  );
};

export default ApinasaComponent;
