
import React, { useContext, useState } from "react";
import { Apinasa } from "./context1"; // Importamos el contexto
import "../styles/container-api.css";
const ApinasaComponent = () => {
  const { data, loading, error, fetchData } = useContext(Apinasa);
  const [showinfo, setshowinfo]= useState (false);


  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Hubo una falla: {error}</p>;

  return (
    <div>
   <button className="btn-api" onClick= {()=> {
     if(!data) fetchData();
     setshowinfo(!showinfo);
     
    }}>
    {showinfo ? "ocultar": "mostrar"}
   </button>
      {showinfo && data && (
        <>
        <h1>Datos Obtenidos</h1>
         <h1 className="title-api">{data.title} </h1>
         <h4 className="info-api" >{data.explanation} </h4>
         <h5 className="date-PI" >{data.date} </h5>
          <p>{data.url}</p>
          <img src={data.url} alt={data.title}/>
        
       </>

      )} 

    </div>
  );
};

export default ApinasaComponent;
