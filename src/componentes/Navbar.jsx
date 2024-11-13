import React, {useState,useEffect,useRef} from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
 // useref = permite reservar su propiedad en
const Navbar = () =>{ 
const [isclose, setopen] = useState (false);
const menuref = useRef(null);

const tooglemenu = () => {
  setopen(!isclose);
}
/*
useEffect(()=>{
const handclick =(e) =>{
if(uxmenu.current && !uxmenu.current.contains,(e.target)){

   setopen(false)
}

};
document.addEventListener("mousedown", handclick);
return()=>{
   document.removeEventListener("mousedown",handclick);
}

},[])*/

useEffect(()=>{
   const handclick =(e) => {
      if(menuref.current && !menuref.current.contains,(e.target)){
         setopen(false)
      }

   };
   document.addEventListener("mousedown",handclick);
   return ()=>{
      document.removeEventListener("mousedown",handclick);
   }
},[])

return(

<div className="navbar-container">
 <div className="logo-app"> 
   <Link to={"/"}>
    ASTRO-APIS
   </Link>
 </div>
 <div className="activacion" onClick={tooglemenu}> &#9776; 
   </div>
  <li 
   useRef={menuref}
  className={`opc-navbar  ${isclose ? `active`:``} `}>
   <ul> <Link className="opcion" to="/">Inicio </Link> </ul>
   <ul> <Link className="opcion" to="/">Informacion </Link> </ul>
   <ul> <Link className="opcion" to="/">Nosotros </Link></ul>
   <ul> <Link className="opcion" to="/">Contacto </Link></ul>
   
 </li>
</div>

)
}
export default Navbar;
