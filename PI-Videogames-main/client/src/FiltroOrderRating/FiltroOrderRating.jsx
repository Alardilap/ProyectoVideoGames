import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getVideoGamesCopy } from "../redux/actions";
import { filterOrderAlfe } from "../redux/actions";
import Styles from "./FiltroOrderR.module.css";

function FiltroOrderRating() {
  const dispatch = useDispatch();

  const handleFilterOrderRat = (event) => {
    dispatch(filterOrderAlfe(event.target.value));
  };

  return (
    <div>
      <select className={Styles.orderRating} onChange={handleFilterOrderRat}>
        <option disabled selected>
          Orden Rating
        </option>
        <option value="1-5">1-5</option>
        <option value="5-1">5-1</option>
      </select>
    </div>
  );
}
export default FiltroOrderRating;
