const axios = require("axios");
const { Videogame, Genre } = require("../db");
require("dotenv").config();
const { API_KEY, API_URL } = process.env;
const { Sequelize, Error } = require("sequelize");

const getVideoGamesName = async (name) => {
  try {
    const info = await axios.get(
      `https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`
    );
    const infod = info.data.results;

    const filtro = infod.filter((videoGame) =>
      videoGame.name.toLowerCase().includes(name.toLowerCase())
    );

    const limitedResults = filtro.slice(0, 15);

    const map = limitedResults.map(
      ({
        name,
        description,
        id,
        platforms,
        background_image,
        released,
        rating,
        genres,
      }) => {
        return {
          id,
          name,
          description,
          platforms: platforms?.map((platform) => platform.platform.name),
          background_image,
          released,
          rating,
          // genres,
          genres: genres?.map((genre) => genre.name),
        };
      }
    );

    const searchBd = await Videogame.findAll({
      where: {
        name: {
          [Sequelize.Op.iLike]: `%${name}%`,
        },
      },
      include: [
        {
          model: Genre,
          attributes: ["name"],
          through: { attributes: [] },
        },
      ],
    });

    const dbResponse = searchBd.map((videoGame) => {
      return {
        id: videoGame.id,
        name: videoGame.name,
        description: videoGame.description,
        platforms: videoGame.platforms?.map((platform) => platform),
        background_image: videoGame.background_image,
        released: videoGame.released,
        rating: videoGame.rating,
        genres: videoGame.Genres?.map((genre) => genre.name),
      };
    });

    if (map.length === 0 && dbResponse.length === 0) {
      throw new Error(`No se encontró ningún juego con el nombre "${name}".`);
    }

    return [...dbResponse, ...map];
  } catch (error) {
    throw error;
  }
};

module.exports = getVideoGamesName;
