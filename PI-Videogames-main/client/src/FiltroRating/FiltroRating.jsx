import { filterRating } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getVideoGamesCopy } from "../redux/actions";
import Styles from "./FiltroRating.module.css";

function FiltroRating() {
  const dispatch = useDispatch();

  const handleFilter = (event) => {
    dispatch(filterRating(event.target.value));
  };

  return (
    <div>
      <select className={Styles.rating} onChange={handleFilter}>
        <option disabled selected>
          Calificación
        </option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    </div>
  );
}
export default FiltroRating;
