
import { useState, useEffect} from "react";
import { getVideoGamesName } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Styles from "./NavBar.module.css"
import Card from "../Card/Card";

function NavBar() {
 

  const dispatch = useDispatch();
  const videoGames = useSelector(state=>state.videoGames)

  const [searchName, setSearchName] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
  setSearchName(event.target.value);
  };


  const handleSubtmit = (event) => {
dispatch(getVideoGamesName(searchName));
  };


  return (
    <div className={Styles.search}>
      <label className={Styles.searchName}>Search VideoGame:</label>
      <input className={Styles.input} type="search" value={searchName} name="searchName" onChange={handleChange} />
      <button className={Styles.boton}onClick={handleSubtmit}>Buscar</button>
    </div>
  )
   
}

export default NavBar;

