/*/*import './App.css';
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
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {  ApiProvider} from './componentes/context1';
import Navbar from './componentes/Navbar';
import ApinasaComponent from './componentes/peticion-api';
import imgastronomia  from "./IMG-ASTRONOMIA/astronomia.jpg";
import { APIsection2 } from './componentes/peticionapi-2';
function App() {
  return (
    <BrowserRouter>  
      <div className="App">
        <section className='navbar'>
          <Navbar />
        </section>
        <main>
          <Routes> 
            <Route
              path='/'
              element={
                <section className='Inicio-app'>
                     <h1 className='sub-text-titulo'>
                    Aqui podras encontrar datos relacionados con la astrologia como datos y imagenes de la nasa !!!
                  </h1>
                  <div className='container-img'> 
                   <img className="img-astrono" src={imgastronomia} alt='' />
                  </div>
                  

                 <div className='text-container-1'> 


                  <p  className='text-precentacion'>¿Te imaginas tener acceso directo a información de la NASA, como imágenes espectaculares del universo o datos sobre planetas y eventos astronómicos? </p>
                 </div>
                  

                 <section className='contexto-pagina'>
                                     
                   
                 </section>
                  <ApiProvider>
                    <section className="container-api">
                  <h3><center> Oo tal vez ver la publicacion del dia por parte de la nasa !! </center>  </h3>
                      <ApinasaComponent />
                    </section>
                  </ApiProvider>
                  <p className='text-subprecentacion'>Aqui podras explorar el espacio desde tu pantalla, aprender sobre constelaciones, fases lunares espectaculares, entre otras muchas mas </p>
                    
                </section>
              }
            />
            <Route path='HOJA2' element={    <APIsection2 />   } > </Route>
          </Routes>
        </main>
      </div>
    </BrowserRouter>  
  );
}

export default App;
