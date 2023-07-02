import imagen from "../img/imagen.jpg";
import { Link } from "react-router-dom";
import Styles from "./Inicio.module.css"

function Inicio() {





    return <div>
   <h1 className={Styles.titulo}>Video Games</h1> 
    <Link to="/home">
      <button className={Styles.boton}>Iniciar</button>
         </Link>
<img className={Styles.imagenprin} src={imagen} alt="imagendeinicio" />
   
          </div>  

     }
 export default Inicio;
 
