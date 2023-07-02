import {
  GET_VIDEOGAMESCOPY,
  POST_GAME,
  FILTER_RATING,
  GET_DETAILGAME,
  GET_GAMENAME,
  GET_GAMESGENRES,
  GET_VIDEOGAMES,
  FILTERGENRE,
  FILTERORIGIN,
  FILTERALFA,
  FILTERORDERRA,
  GET_PLATFORMS,
} from "./actions";

let initialState = {
  videoGames: [],
  copyGames: [],
  genres: [],
  platforms: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_VIDEOGAMES:
      return {
        ...state,
        videoGames: action.payload,
      };
    case GET_DETAILGAME:
      return {
        ...state,
        videoGames: action.payload,
      };
    case GET_VIDEOGAMESCOPY:
      return {
        ...state,
        copyGames: action.payload,
      };

    case POST_GAME:
      return {
        ...state,
        videoGames: [...state.videoGames, action.payload],
      };

    case GET_GAMENAME:
      return {
        ...state,
        videoGames: action.payload,
      };

    case GET_GAMESGENRES:
      return {
        ...state,
        genres: action.payload,
      };
    case GET_PLATFORMS:
      return {
        ...state,
        platforms: action.payload,
      };
    case FILTERGENRE:
      const filterGenres = state.copyGames.filter((game) =>
        game.genres.includes(action.payload)
      );
      return {
        ...state,
        videoGames: filterGenres,
      };
    case FILTER_RATING:
      const filtroRating = state.copyGames.filter(
        (game) => Math.floor(game.rating) == action.payload
      );
      // const filtroRating= state.copyGames.filter(game=>game.rating==action.payload)
      console.log(filtroRating);
      return {
        ...state,
        videoGames: filtroRating,
      };
    case FILTERORIGIN:
      let filtroUsuario;
      let filtroApi;
      if (action.payload === "usuario") {
        filtroUsuario = state.copyGames.filter((game) => isNaN(game.id));
      } else {
        filtroApi = state.copyGames.filter((game) => Number(game.id));
      }
      return {
        ...state,
        videoGames: filtroUsuario || filtroApi,
      };

    case FILTERALFA:
      let orderA;
      let orderZ;
      if (action.payload === "A-Z") {
        orderA = [...state.copyGames].sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      } else if (action.payload === "Z-A") {
        orderZ = [...state.copyGames].sort((b, a) =>
          a.name.localeCompare(b.name)
        );
      }
      return {
        ...state,
        videoGames: orderA || orderZ,
      };

    case FILTERORDERRA:
      let orderAsc;
      let OrderDes;
      if (action.payload === "1-5") {
        orderAsc = [...state.copyGames].sort((a, b) => a.rating - b.rating);
      } else if (action.payload === "5-1") {
        OrderDes = [...state.copyGames].sort((b, a) => a.rating - b.rating);
      }
      return {
        ...state,
        videoGames: orderAsc || OrderDes,
      };
    default:
      return { ...state };
  }
}

export default rootReducer;
