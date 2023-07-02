import axios from "axios";
export const FILTERGENRE = "FILTERGENRE";
export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const GET_DETAILGAME = "GET_DETAILGAME";
export const GET_GAMENAME = "GET_GAMENAME";
export const GET_GAMESGENRES = "GET_GAMESGENRE";
export const GET_VIDEOGAMESCOPY = "GET_VIDEOGAMESCOPY";
export const FILTER_RATING = "FILTER_RATING";
export const FILTERORIGIN = "FILTERORIGIN";
export const FILTERALFA = "FILTERALFA";
export const POST_GAME = "POST_GAME";
export const FILTERORDERRA = "FILTERORDERRA";
export const GET_PLATFORMS = "GET_PLATFORMS";

export const getVideoGames = () => {
  return async function (dispatch) {
    const infoVideoGames = await axios.get(`http://localhost:3001/videogames`);
    const response = infoVideoGames.data;
    dispatch({ type: GET_VIDEOGAMES, payload: response });
  };
};

export const getVideoGamesDetail = (id) => {
  return async function (dispatch) {
    const infoGames = await axios.get(`http://localhost:3001/videogames/${id}`);

    const responseDetail = infoGames.data;

    dispatch({ type: GET_DETAILGAME, payload: responseDetail });
  };
};

export const getVideoGamesName = (name) => {
  return async function (dispatch) {
    console.log(name);
    const infoGames = await axios.get(
      `http://localhost:3001/videogames/name?name=${name}`
    );
    const responseName = infoGames.data;
    dispatch({ type: GET_GAMENAME, payload: responseName });
  };
};

export const getGamesGenres = () => {
  return async function (dispatch) {
    const infoGames = await axios.get(`http://localhost:3001/genre`);
    const genres = infoGames.data;

    dispatch({ type: GET_GAMESGENRES, payload: genres });
  };
};

export const getPlatforms = () => {
  return async function (dispatch) {
    const infoGames = await axios.get(`http://localhost:3001/platforms`);
    const platforms = infoGames.data;
    console.log(platforms);
    dispatch({ type: GET_PLATFORMS, payload: platforms });
  };
};

export const filterByGenre = (genres) => {
  return { type: FILTERGENRE, payload: genres };
};

export const getVideoGamesCopy = () => {
  return async function (dispatch) {
    const infoVideoGames = await axios.get(`http://localhost:3001/videogames`);
    const response = infoVideoGames.data;

    dispatch({ type: GET_VIDEOGAMESCOPY, payload: response });
  };
};

export const postVideoGame = (payload) => {
  return async function (dispatch) {
    console.log(payload);
    const postGame = await axios.post(
      `http://localhost:3001/videogames`,
      payload
    );
    const res = await postGame.data;

    dispatch({ type: POST_GAME, payload: res });
  };
};
// const postVideogame = (payload) => {
//     return async (dispatch) => {
//       const res = await axios.post(`${URL}/videogames`, payload);
//       const res_1 = await res.data;
//       return dispatch({
//         type: POST_VIDEOGAMES,
//         payload: res_1,
//       });
//     }
//   };

export const filterRating = (rating) => {
  return { type: FILTER_RATING, payload: rating };
};

export const filterByOrigin = (created) => {
  console.log(created);
  return { type: FILTERORIGIN, payload: created };
};

export const filterByAlfab = (name) => {
  console.log(name);
  return { type: FILTERALFA, payload: name };
};

export const filterOrderAlfe = (rating) => {
  return { type: FILTERORDERRA, payload: rating };
};
