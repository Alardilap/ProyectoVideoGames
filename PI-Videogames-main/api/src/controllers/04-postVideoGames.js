const axios = require("axios");
require("dotenv").config();
const { API_KEY } = process.env;
const { Videogame, Genre } = require("../db");

const postVideoGames = async (
  name,
  description,
  platforms,
  background_image,
  released,
  rating,
  genres
) => {
  const newVideogame = await Videogame.create({
    name,
    description,
    platforms,
    background_image,
    released,
    rating,
    genres,
  });

  const genrest = await Promise.all(genres.map((id) => Genre.findByPk(id)));

  const mappedVideogame = {
    id: newVideogame.id,
    name: newVideogame.name,
    description: newVideogame.description,
    platforms: newVideogame.platforms,
    background_image: newVideogame.background_image,
    released: newVideogame.released,
    rating: newVideogame.rating,
    genres: genrest.map((genre) => genre.name),
  };

  await newVideogame.addGenre(genrest);
  return [mappedVideogame];
};

module.exports = postVideoGames;
