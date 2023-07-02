import { useDispatch, useSelector } from "react-redux";
import { filterByGenre } from "../redux/actions";
import { getVideoGamesCopy } from "../redux/actions";
import { useEffect } from "react";
import Styles from "./FiltroGenre.module.css";

function Filtros({ genres }) {
  const dispatch = useDispatch();

  const handleFilter = (event) => {
    dispatch(filterByGenre(event.target.value));
  };
  return (
    <div>
      <select className={Styles.genres} onChange={handleFilter}>
        <option disabled selected>
          Generos
        </option>
        {genres?.map((genre, index) => (
          <option key={index} value={genre.name}>
            {genre.name}
          </option>
        ))}{" "}
      </select>
    </div>
  );
}

export default Filtros;
