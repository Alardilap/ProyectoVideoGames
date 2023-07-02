const axios = require("axios")
const { Videogame ,Genre} = require("../db")
require('dotenv').config();
const {API_KEY, API_URL} = process.env
const { Sequelize, Error } = require('sequelize');



const getVideoGamesNameBd= async (name) =>{
console.log(name)
const searchBd = await Videogame.findAll({
    where: {
      name: {
        [Sequelize.Op.iLike]: `%${name}%`
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
  console.log(searchBd)
  const dbResponse = searchBd.map((videoGame) => {
    return {
      name: videoGame.name,
      description: videoGame.description,
      platforms: videoGame.platforms?.map((platform) => platform),
      background_image: videoGame.background_image,
      released: videoGame.released,
      rating: videoGame.rating,
      genres: videoGame.Genres?.map((genre) => genre.name),
    };
  })

  return searchBd
}
module.exports = getVideoGamesNameBd;