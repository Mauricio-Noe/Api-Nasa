/*import './App.css';
import { useState } from 'react';
import Navbar from './componentes/Navbar';
import Apinasa from './componentes/peticion-api';


function App() {
const [showapi, setshowapi] = useState (false);

const handlerbton = () =>{
setshowapi (true);

};
  return (
    <div className="App">
      <section className='navbar'>
      <Navbar />    
      </section>
 
      <section>
       <div> <h1 className='text-principal'> Aqui encontroras imagenes, datos sobre la nasa !!!  </h1> </div>      
        
      </section>
      <section className="container-api">
<div ></div>
        <button onClick={handlerbton}> mas informacion</button>
        {showapi && <Apinasa />}
      </section>
    </div>
  );
}

export default App;
*/
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Asegúrate de importar BrowserRouter y Routes correctamente
import { Apiprovaider } from './componentes/context1';
import Navbar from './componentes/Navbar';
import ApinasaComponent from './componentes/peticion-api';

function App() {
  return (
    <BrowserRouter>  {/* Aquí es donde debes usar BrowserRouter */}
      <div className="App">
        <section className='navbar'>
          <Navbar />
        </section>
        <main>
          <Routes> {/* Aquí debes usar Routes y no Route fuera de este contenedor */}
            <Route
              path='/'
              element={
                <section className='Inicio-app'>
                  <h1 className='sub-text-titulo'>
                    Aqui podras encontrar datos relacionados con la astrologia como datos y imagenes de la nasa !!!
                  </h1>
                  { /* Uso de useContext */ }
                  <Apiprovaider>
                    <section className="container-api">
                      <ApinasaComponent />
                    </section>
                  </Apiprovaider>
                </section>
              }
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>  
  );
}

export default App;
