import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideoGames, getVideoGamesCopy } from "../redux/actions";
import Cards from "../Cards/Cards";
import NavBar from "../NavBar/NavBar";
import Filtros from "../Filtros/Filtros";
import { getGamesGenres } from "../redux/actions";
import FiltroRating from "../FiltroRating/FiltroRating";
import FiltroOrigenGame from "../FiltroOrigenGame/FiltroOrigenGame";
import FiltroOrderAl from "../FiltroOrderAl/FiltroOrderAl";
import Nav from "../Nav/Nav";
import CreateGame from "../CreateGame/CreateGame";
import Paginado from "../Paginado/Paginado";
import FiltroOrderRating from "../FiltroOrderRating/FiltroOrderRating";
import { Link } from "react-router-dom";
import Styles from "./Home.module.css";

function Home() {
  const dispatch = useDispatch();
  const videoGames = useSelector((state) => state.videoGames);
  const genres = useSelector((state) => state.genres);
  const [paginaActual, setPaginaActual] = useState(1);
  const [videoJuegosPorPagina, setVideoJuegosPorPagina] = useState(15);
  const indiceUltimoVideoJuego = paginaActual * videoJuegosPorPagina;
  const indicePrimerVideoJuego = indiceUltimoVideoJuego - videoJuegosPorPagina;
  const juegosActual = videoGames.slice(
    indicePrimerVideoJuego,
    indiceUltimoVideoJuego
  );

  const paginado = (numeroPagina) => {
    setPaginaActual(numeroPagina);
  };

  useEffect(() => {
    dispatch(getVideoGames());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getGamesGenres());
  }, [dispatch]);

  const handleClick = (e) => {
    dispatch(getVideoGames());
  };
  return (
    <div>
      <button className={Styles.buttonRef} onClick={handleClick}>
        Refrescar
      </button>
      <Nav />
      <FiltroOrderRating />
      <Paginado
        totaljuegos={videoGames.length}
        paginado={paginado}
        videoJuegosPorPagina={videoJuegosPorPagina}
      />
      <FiltroOrigenGame />
      <NavBar />
      <Filtros genres={genres} />
      <FiltroOrderAl />
      <FiltroRating />
      <Cards videoGames={videoGames} juegosActual={juegosActual} />
    </div>
  );
}

export default Home;
