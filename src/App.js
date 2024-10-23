import './App.css';
import Navbar from './componentes/Navbar';
import Apinasa from './componentes/peticion-api';

function App() {
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
        <Apinasa />
      </section>
    </div>
  );
}

export default App;
