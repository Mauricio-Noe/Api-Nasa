/*import {React, useContext,useEffect} from "react";
import { ApiContext } from "./context1"; 


export function APIsection2() {
    const { 
        nasaData ,
         loading,
         error,
         fetchWeatherData
         } = useContext(ApiContext);
      
    useEffect(()=> {
     fetchWeatherData();
    }, []);
    if (loading) return <p>Cargando datos...</p>;

    // Mostrar mensaje de error si ocurre un problema
    if (error) return <p>Error: {error}</p>;
  
    // Validar que los datos existen antes de renderizarlos
    if (!nasaData) return <p>No hay datos disponibles.</p>;
    return(
        
            <section className="container-api2">
                
             <h1 className="title-api">{nasaData.title}</h1>
          <h4 className="info-api">{nasaData.explanation}</h4>
          <img className="nasa-image" src={nasaData.url} alt={nasaData.title} />
          <h5 className="date-PI">{nasaData.date}</h5>
        </section>
        
    )
}*/


/* async const apinasa (){
 const api = "/*************";}
  try{
  const response = await response(api)
   throw(error)
  }
const data= response.json()
   



} *//*
import React, { useContext, useEffect } from "react";
import { ApiContext } from "./context1";

export function APIsection2() {
  const {
    weatherData,      // Datos de la API
    loading,       // Estado de carga
    error,         // Errores en la solicitud
    fetchWeatherData, // Función para cargar los datos
  } = useContext(ApiContext);

  // Cargar datos al montar el componente
  useEffect(() => {
    fetchWeatherData();
  }, [fetchWeatherData]);

  // Mostrar mensaje de carga
  if (loading) return <p>Cargando datos...</p>;

  // Mostrar mensaje de error si ocurre un problema
  if (error) return <p>Error: {error}</p>;

  // Validar que los datos existen antes de renderizarlos
  if (!weatherData) return <p>No hay datos disponibles.</p>;

}
*/
import React from "react";

 function Proceso (){
return(

  <div className="proceso">
  En Proceso
  </div>
)

}
export default Proceso;