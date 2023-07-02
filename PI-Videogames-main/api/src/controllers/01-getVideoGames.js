const axios = require("axios");
const { Videogame, Genre } = require("../db");
require("dotenv").config();
const { API_KEY } = process.env;

// const maxGames= 100;
// const gamesPage= 20;
// const totalPeti= Math.ceil(maxGames/gamesPage)

const totalPeti = 5;
const getVideoGames = async () => {
  let game = [];
  for (let page = 1; page <= totalPeti; page++) {
    const searchApi = (
      await axios.get(
        `https://api.rawg.io/api/games?key=${API_KEY}&page=${page}`
      )
    ).data;

    const mappedData = searchApi.results.map(
      ({ id, name, background_image, platforms, released, rating, genres }) => {
        console.log(genres);
        return {
          id,
          name,
          background_image,
          platforms: platforms?.map((platform) => platform.platform.name),
          released,
          rating,
          genres: genres?.map((genre) => genre.name),
          // genres,
        };
      }
    );

    game.push(...mappedData);
    // if(game.length>=maxGames)
    // break
  }
  const dataBaseVideoGame = await Videogame.findAll({
    include: {
      model: Genre,
      attributes: ["name"],
      through: { attributes: [] },
    },
  });
  const map = dataBaseVideoGame.map((genr) => {
    return {
      id: genr.id,
      name: genr.name,
      description: genr.description,
      platforms: genr.platforms?.map((platform) => platform),
      background_image: genr.background_image,
      released: genr.released,
      rating: genr.rating,
      genres: genr.Genres?.map((genre) => genre.name),
      created: genr.created,
    };
  });

  return [...game, ...map];
};
module.exports = getVideoGames;
