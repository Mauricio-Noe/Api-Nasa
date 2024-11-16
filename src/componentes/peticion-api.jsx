
import React, { useContext, useState } from "react";
import { Apinasa } from "./context1"; // Importamos el contexto
import "../styles/container-api.css";
const ApinasaComponent = () => {
  const { data, loading, error, fetchData } = useContext(Apinasa);
  const [showinfo, setshowinfo]= useState (false);


  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Hubo una falla: {error}</p>;

  return (
    <div className="container-info-api">
   <button className="btn-api" onClick= {()=> {
     if(!data) fetchData();
     setshowinfo(!showinfo);
     
    }}>
    {showinfo ? "ocultar": "visualizar"}
   </button>
      {showinfo && data && (
        <section className="info-json">
        
        <h1 className="title-api">{data.title} </h1> 
         <h4 className="info-api" >{data.explanation} </h4>
          <img className="nasa-image" src={data.url} alt={data.title}/>
         <h5 className="date-PI" >{data.date} </h5>
        
       
        </section> 

      )} 

    </div>
  );
};

export default ApinasaComponent;
