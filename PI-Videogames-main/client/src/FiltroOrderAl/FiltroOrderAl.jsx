import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getVideoGamesCopy } from "../redux/actions";
import { filterByAlfab } from "../redux/actions";
import Styles from "./FiltroOrder.module.css";
function FiltroOrderAl() {
  const dispatch = useDispatch();

  const handleFilterOrigin = (event) => {
    dispatch(filterByAlfab(event.target.value));
  };

  return (
    <div>
      <select className={Styles.orderAlf} onChange={handleFilterOrigin}>
        <option disabled selected>
          Orden Alf
        </option>
        <option value="A-Z">A-Z</option>
        <option value="Z-A">Z-A</option>
      </select>
    </div>
  );
}
export default FiltroOrderAl;
