/*import React, {createContext, useEffect, useState} from "react";

export const Apinasa = createContext();
 
export const Apiprovaider = ({children}) => {
 
    const [data, setData] = useState (null);
    const [loading, setLoading ] = useState ( true);
    const [error, setError]= useState= (null);

    const fetchData = async () =>{
            setLoading(true);
    try{
        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=YeZXHY29QdWZ8XkDeCoPAEh1wnTSv7LmXwxxIw09`);

        if(!response.ok){
        throw new Error("Error");
        
        }

        const result = await response.json();
        setData(result);
    } catch(error){
        setError(error.message);
    }finally{
    setLoading (false);
    }

        };

        useEffect(() => {
            fetchData();
          }, []);
        
          return (
            <Apinasa.Provider value={{ data, loading, error, fetchData }}>
              {children}
            </Apinasa.Provider>
          );
        

};
*/
import React, { createContext, useState } from "react";

export const Apinasa = createContext();

export const Apiprovaider = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("https://api.nasa.gov/planetary/apod?api_key=YeZXHY29QdWZ8XkDeCoPAEh1wnTSv7LmXwxxIw09");
      if (!response.ok) {
        throw new Error("Error en la solicitud");
      }
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Apinasa.Provider value={{ data, loading, error, fetchData }}>
      {children}
    </Apinasa.Provider>
  );
};

