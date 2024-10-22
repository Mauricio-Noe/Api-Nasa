import React from "react";
import { useState } from "react";
import "../styles/navbar.css";


const Navbar = () =>{ 
const [isclose, setopen] = useState (false);

const tooglemenu = () => {
  setopen(!isclose);
}

return(

<div className="navbar-container">
 <div className="logo-app">
    NASA-API
 </div>
 <div className="activacion" onClick={tooglemenu}> &#9776;  </div>

 <li className={`opc-navbar  ${isclose ? `active`:``} `}>

    <ul className="opcion">Inicio</ul>
    <ul className="opcion">Informacion</ul>
    <ul className="opcion"> Cuenta</ul>
    <ul className="opcion">Salir</ul>

 </li>
</div>

)
}
export default Navbar;
