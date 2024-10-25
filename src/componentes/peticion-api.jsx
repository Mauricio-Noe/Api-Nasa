/* import React, { useEffect, useState } from "react";


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

import React, { useEffect, useState } from "react";


  
const Apinasa = () => { 
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);  // Inicializado como true
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=YeZXHY29QdWZ8XkDeCoPAEh1wnTSv7LmXwxxIw09`);  // Asegúrate de usar una URL válida
      if (!response.ok) {
        throw new Error("Error en la solicitud");
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);  // Finaliza el estado de carga
    }
  };

  useEffect(() => {
    fetchData();
  }, []);  // Se ejecuta solo una vez al montar el componente

  if (loading) return <p>Cargando...</p>;  // Si está cargando, muestra el mensaje
  if (error) return <p>Hubo una falla: {error}</p>;  // Si hay error, muestra el mensaje

  return (

    <div>
        <button onClick={fetchData}>Ver informacion</button>
            
      <h1>Datos Obtenidos</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <p>{data.url} </p>
    <img src={data.url }  alt={data.title}style={{   width: '100%', height: 'auto' }} /> 
    </div>
    
  );
  
};

export default Apinasa;
*/
/*
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
import React, { useContext } from "react";
import { Apinasa } from "./context1"; // Importamos el contexto

const ApinasaComponent = () => {
  const { data, loading, error, fetchData } = useContext(Apinasa);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Hubo una falla: {error}</p>;

  return (
    <div>
      <h1>Datos Obtenidos</h1>
      {/* Mostramos el botón si no hay datos */}
      {!data ? (
        <button onClick={fetchData}>Ver información</button>
      ) : (
        <>
          <pre>{JSON.stringify(data, null, 2)}</pre>
          <p>{data.url}</p>
          <img src={data.url} alt={data.title} style={{ width: '100%', height: 'auto' }} />
        </>
      )}
    </div>
  );
};

export default ApinasaComponent;
