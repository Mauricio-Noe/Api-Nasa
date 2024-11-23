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
import imgespacio from "./IMG-ASTRONOMIA/imgespacio.jpg";
import { Nosotros } from './componentes/nosotros';
import Proceso from './componentes/peticionapi-2';
function App() {
  return (
            <ApiProvider>
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
                <>
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
                    <section className="container-api">
                  <h3><center> Oo tal vez ver la publicacion del dia por parte de la nasa !! </center>  </h3>
                      <ApinasaComponent />
                    </section>
                  <p className='text-subprecentacion'>Aqui podras explorar el espacio desde tu pantalla, aprender sobre constelaciones, fases lunares espectaculares, entre otras muchas mas </p>
                         <img className='img-precentacion ' src={imgespacio} alt='' />
                </section>

                
                  <section className='container-info'>

                 <h1 className='titulo-info' > ASTRONOMIA</h1>


                 <p className='texto-info'>
  Alguna vez te has hecho la pregunta de cómo se originó todo el espacio o cómo es que podemos saber información sobre otros planetas? 
</p>
<p className='texto-info'>
  Estas preguntas se presentaron en las mentes de científicos y pensadores desde tiempos inmemoriales. La teoría más aceptada sobre el origen del universo es el Big Bang, un evento cósmico que tuvo lugar hace aproximadamente 13.8 mil millones de años. Este marcó el comienzo del espacio, el tiempo y toda la materia conocida.
</p>
<p className='texto-info'>
  Desde entonces, el estudio del espacio ha revolucionado nuestra comprensión del cosmos y nuestra posición en él. A través de la exploración espacial, hemos aprendido sobre la formación de galaxias, la existencia de agujeros negros y las condiciones para la vida en otros planetas. Este conocimiento no solo ha ampliado nuestras fronteras científicas, sino que también ha impactado profundamente a la humanidad al inspirar tecnologías como los satélites, los GPS, e incluso mejoras en el cuidado médico.
</p>

                  </section>
                 

            </>
              
              
               }
              />

            <Route path='HOJA2' element={    <Proceso />   } > </Route>
            <Route path='nosotros' element={<Nosotros />}>  </Route>
          </Routes>
        </main>
      </div>
    </BrowserRouter>  
              </ApiProvider>
  );
}

export default App;
