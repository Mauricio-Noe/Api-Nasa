
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

      const apikey= process.env.REACT_APP_NASA_API_KEY;
      const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apikey}`);
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

