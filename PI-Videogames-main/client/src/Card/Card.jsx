import { Link } from "react-router-dom";
import Styles from "./Card.module.css"
import imagen from "../img/imagen.jpg"

function Card({videoGame}) {

const {id,name, background_image, genres,rating} = videoGame

    return <div className={Styles.contenedorCards}>
        <p className={Styles.nombres}>  
    <Link className={Styles.a}to={`detail/${id}`}>{name}</Link></p>
    <img className={Styles.image} src={background_image} alt="imagende videojuegos"/> 
    {/* <p className={Styles.genres}>{genres.join(" ")}</p> */}

    <p className={Styles.genres}>{genres.join(" ")}</p>
   <p className={Styles.rating}>{rating}</p> 
         </div>

    }
 export default Card;
 