/*
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
*/
import React, { createContext, useState } from "react";

// Crear el contexto
export const ApiContext = createContext();

// Proveedor del contexto
export const ApiProvider = ({ children }) => {
  const [nasaData, setNasaData] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [marsData, setMarsData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchApi = async (url, setter) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Error al obtener los datos.");
      const data = await response.json();
      setter(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchNasaData = () => {
    const apikey = process.env.REACT_APP_NASA_API_KEY;
    const nasaUrl = `https://api.nasa.gov/planetary/apod?api_key=${apikey}`;
    fetchApi(nasaUrl, setNasaData);
  };

  const fetchWeatherData = () => {
    const apikey = process.env.REACT_APP_NASA_API_KEY;
    const weatherUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${apikey}`;
    fetchApi(weatherUrl, setWeatherData);
  };

  const fetchMarsData = () => {
    const apikey = process.env.REACT_APP_NASA_API_KEY;
    const marsUrl = `https://api.nasa.gov/techtransfer/patent/?engine&api_key=${apikey}`;
    fetchApi(marsUrl, setMarsData);
  };

  return (
    <ApiContext.Provider
      value={{
        nasaData,
        weatherData,
        marsData,
        loading,
        error,
        fetchNasaData,
        fetchWeatherData,
        fetchMarsData,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};
