import videojuegos from "../img/videojuegos.jpeg";
import Styles from "./Nav.module.css";
import { Link } from "react-router-dom";
import logo from "../img/logo.jpg";
// import { useDispatch, useEffect } from "react-redux";
import { getVideoGames } from "../redux/actions";

function Nav() {
  return (
    <nav className={Styles.barrabuscadora}>
      <Link to="/create">
        <button className={Styles.crear}>Crear</button>
      </Link>
      <img className={Styles.logo} src={logo} />
    </nav>
  );
}
export default Nav;
