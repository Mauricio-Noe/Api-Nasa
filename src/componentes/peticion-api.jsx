/* 
PRIMERA OPCION PARA EL LLAMADO DE LA API SOLO CON USESTATE

import React, { useEffect, useState } from "react";


const Apinasa = () => { 
const [data, setdata]=useState=(null);
const [loading, setloading]= useState=(null);
const [error, seterror]=useState=(null);

const fetchdata =async ()=> {
    try {
   const response =await fetch(`YeZXHY29QdWZ8XkDeCoPAEh1wnTSv7LmXwxxIw09`);
   if(!response.ok){
    throw new Error("error");
    
}
const result =await response.json();
  setdata(result);
  
   } catch(error){
    seterror(error.message);
   } finally{
    setloading(false);
   }
     };

     useEffect(()=>{
       fetchdata();}, []);
   if(loading) return <p>Cargando..</p>;
   if(error) return <p>Hubo una falla {error} </p>;

   return(
    <div>

    <h1> Datos Obtenidos</h1>
    <pre>{JSON.stringify(data, null, 2)} </pre>
    </div>
   );
 };
export default  Apinasa; */
/*


/* 
○♦♦SEGUNDA OPCION DE LA LLAMADA DE API UTILIZAMOS USE CONTEXT PARA MEGORAR LA FLUIDEZ DEL CODIGO YA QUE ESTAREMOS LLAMANDO A VARIAS API  , UTILIZANDO EL HOOCK USECONTEXT NOS PERMITE PROVEER LA INFORMACION SIN NECESIDAD DE REALIZAR VARIAS SOLICITUDES DE DIFERENTES COMPONENTES EN LA MISMA HOJA . EN CAMBIO CON ESTE HOOCK SOLO NECESITAMOS RENDERIZARLO 
SIN QUE HAGA UNA TAREA MAS INECCESARI

import React,{ useContext } from "react";
import { Apinasa } from "./context1";
 


const Apinasacomponent = () => { 

  const {data, loading, error, fetchData  } = useContext(Apinasa);



  if (loading) return <p>Cargando...</p>;  // Si está cargando, muestra el mensaje
  if (error) return <p>Hubo una falla: {error}</p>;  // Si hay error, muestra el mensaje

  return (

    <div>
      <h1>Datos Obtenidos</h1>
      {data ? (  
        <>
        <pre>{JSON.stringify(data, null, 2)}</pre>
        <p>{data.url} </p>
        <img src={data.url }  alt={data.title}style={{   width: '100%', height: 'auto' }} /> 
        </>
      ) :(
        <button onClick={fetchData}>Ver informacion</button>

      )}
      
    </div>
    
  );
  
};

export default Apinasacomponent;
*/
import React, { useContext, useState } from "react";
import { Apinasa } from "./context1"; // Importamos el contexto

const ApinasaComponent = () => {
  const { data, loading, error, fetchData } = useContext(Apinasa);
  const [showinfo, setshowinfo]= useState (false);


  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Hubo una falla: {error}</p>;

  return (
    <div>
   <button onClick= {()=> {
     if(!data) fetchData();
     setshowinfo(!showinfo);
     
    }}>
    {showinfo ? "ocultar": "mostrar"}
   </button>
      {showinfo && data && (
        <>
        <h1>Datos Obtenidos</h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>
          <p>{data.url}</p>
          <img src={data.url} alt={data.title} style={{ width: '100%', height: 'auto' }} />
        
       </>

      )} 

    </div>
  );
};

export default ApinasaComponent;
