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
import {Apiprovaider} from './componentes/context1';
import Navbar from './componentes/Navbar';
import Apinasacomponent from './componentes/peticion-api';



function App() {

  return (
    <div className="App">
      <section className='navbar'>
      <Navbar />    
      </section>
 
      <section>
       <div> <h1 className='text-principal'> Aqui encontroras imagenes, datos sobre la nasa !!!  </h1> </div>      
        
      </section>


      <Apiprovaider >

      <section className="container-api">
      
      <Apinasacomponent />    
      </section>
      </Apiprovaider>
    </div>
  );
}

export default App;
