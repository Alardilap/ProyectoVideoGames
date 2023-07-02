
import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
import { getVideoGamesCopy } from "../redux/actions";
import { filterByOrigin } from "../redux/actions";
import Styles from "./FiltroOrigen.module.css"
function FiltroOrigenGame() {

    
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getVideoGamesCopy());
    },[dispatch]);
    
    

    const handleFilterOrigin=(event)=>{
        dispatch(filterByOrigin(event.target.value));
     
    }

    return <div>
         
    
         <select className={Styles.origen}  onChange={handleFilterOrigin} >
         <option disabled selected>Origen</option>
         <option value="api">API</option>  
         <option value="usuario" >Creado por el usuario</option>  
      </select>

        </div>


    }
 export default FiltroOrigenGame;
 
