import { useState } from "react";
import Validation from "../Validation";
import { getGamesGenres, postVideoGame, getPlatforms } from "../redux/actions";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { filterByOrigin } from "../redux/actions";
import { useSelector } from "react-redux";
import Styles from "./Create.module.css";
import logo from "../img/logo.jpg";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

function CreateGame() {
  const history = useHistory();
  const dispatch = useDispatch();

  const genres = useSelector((state) => state.genres);
  const platforms = useSelector((state) => state.platforms);
  console.log(platforms);

  const [videoGame, setVideoGame] = useState({
    name: "",
    description: "",
    platforms: [],
    background_image: "",
    released: "",
    rating: "",
    genres: [],
  });

  const [errors, setErrors] = useState({
    name: "",
    description: "",
    // platforms: [],
    background_image: "",
    released: "",
    rating: "",
    genres: [],
  });
  // const [selectedGenres, setSelectedGenres] = useState([]
  //   )
  useEffect(() => {
    dispatch(getGamesGenres());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getPlatforms());
  }, [dispatch]);

  const handleSelectPlatforms = (e) => {
    setVideoGame({
      ...videoGame,
      platforms: [...videoGame.platforms, e.target.value],
    });
  };
  const handleInputChange = (e) => {
    let updateValue = e.target.value;
    if (e.target.name === "genres" && e.target.checked) {
      updateValue = [...videoGame.genres, e.target.value];
    }
    if (e.target.name === "genres" && !e.target.checked) {
      const updatedGenres = videoGame.genres.filter(
        (genre) => genre !== e.target.value
      );
      updateValue = updatedGenres;
    }

    setVideoGame({
      ...videoGame,
      [e.target.name]: updateValue,
    });

    setErrors(
      Validation({
        ...videoGame,
        [e.target.name]: updateValue,
      })
    );
  };
  const handleSubmit = (e) => {
    dispatch(postVideoGame(videoGame));
  };

  // console.log(videoGame)
  return (
    <div className={Styles.formulario}>
      <div className={Styles.contenerdorformulario}>
        <h1 className={Styles.titulo}>
          Formulario para la creación de un videojuego
        </h1>
        <form onSubmit={handleSubmit}>
          <div className={Styles.contenedorNombre}>
            <label className={Styles.inputnombre} htmlFor="namevideogame">
              Nombre:
            </label>
            <input
              className={Styles.camponombre}
              id="namevideogame"
              type="text"
              name="name"
              value={videoGame.name}
              onChange={handleInputChange}
            />
            <span>{errors.name}</span>
          </div>
          <div className={Styles.contenedordescription}>
            <label className={Styles.descriptionname} htmlFor="description">
              Descripcion:
            </label>
            <input
              className={Styles.inputdescription}
              id="description"
              type="text"
              name="description"
              value={videoGame.description}
              onChange={handleInputChange}
            />
            <span>{errors.description}</span>
          </div>

          <div className={Styles.contenedorimagen}>
            <label htmlFor="image">Imagen:</label>
            <input
              id="image"
              type="text"
              name="background_image"
              value={videoGame.background_image}
              onChange={handleInputChange}
            />
            <span>{errors.background_image}</span>
          </div>
          <div className={Styles.contenedorlanzamiento}>
            <label htmlFor="released">Lanzamiento:</label>
            <input
              placeholder="dd/mm/aa"
              id="released"
              type="text"
              name="released"
              value={videoGame.released}
              onChange={handleInputChange}
            />
            <span>{errors.released}</span>
          </div>
          <div className={Styles.contenedorpuntaje}>
            <label htmlFor="rating">Puntaje:</label>
            <input
              id="rating"
              type="number"
              name="rating"
              value={videoGame.rating}
              onChange={handleInputChange}
            />
            <span>{errors.rating}</span>
          </div>

          <div>
            <label className={Styles.plata}>Platforms: </label>
            <select
              className={Styles.selectPlat}
              onClick={handleSelectPlatforms}
            >
              {platforms.map((p) => {
                return <option value={p}>{p}</option>;
              })}
            </select>
            <p>{/* <p>{videoGame.platforms.map((p) => p + " - ")}</p> */}</p>
          </div>
          <div className={Styles.contenedorgenres}>
            <label className={Styles.gener}>Generos</label>
            {genres &&
              genres.map((genre) => (
                <div key={genre.id}>
                  <input
                    className={Styles.inputgenres}
                    type="checkbox"
                    value={genre.id}
                    name="genres"
                    onChange={handleInputChange}
                  />
                  <label className={Styles.labelgeneros}>{genre.name}</label>
                  <span>{errors.genres}</span>
                  {/* <div>{JSON.stringify(genres)}</div> */}
                </div>
              ))}
          </div>
          <Link to="/home">
            <button className={Styles.homebutton}>Home</button>
          </Link>
          {errors.name ||
          errors.description ||
          errors.platforms ||
          errors.released ||
          errors.rating ||
          errors.background_image ? null : (
            <button className={Styles.buttonsend} type="submit">
              {" "}
              Enviar
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default CreateGame;
