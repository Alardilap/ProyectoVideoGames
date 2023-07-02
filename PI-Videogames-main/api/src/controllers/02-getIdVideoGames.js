const axios = require("axios");
require("dotenv").config();
const { API_KEY } = process.env;
const { Videogame, Genre } = require("../db");
const { Sequelize, Error } = require("sequelize");

const getIdVideoGames = async (id, search) => {
  if (search === "buscar en la bd") {
    try {
      const responseBd = [
        await Videogame.findByPk(id, {
          include: [
            {
              model: Genre,
              attributes: ["id", "name"],
              through: { attributes: [] },
            },
          ],
        }),
      ];

      const map = responseBd.map((genr) => {
        return {
          id: genr.id,
          name: genr.name,
          description: genr.description_raw,
          platforms: genr.platforms?.map((platform) => platform),
          background_image: genr.background_image,
          released: genr.released,
          rating: genr.rating,
          genres: genr.Genres?.map((genre) => genre.name),
        };
      });

      return map;
    } catch (error) {
      throw new Error(`No se encontro el id ${id} en la base de datos`);
    }
  } else {
    try {
      const searchApi = [
        (await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`))
          .data,
      ];
      const resultApi = searchApi.map(
        ({
          id,
          name,
          background_image,
          description,
          released,
          rating,
          genres,
          platforms,
        }) => {
          return {
            id,
            name,
            description,
            released,
            rating,
            background_image,
            genres: genres?.map((genre) => genre.name),
            platforms: platforms?.map((platform) => platform.platform.name),
          };
        }
      );
      return resultApi;
    } catch (error) {
      throw new Error(`No se encontro el id ${id} en la Api`);
    }
  }
};

module.exports = getIdVideoGames;
