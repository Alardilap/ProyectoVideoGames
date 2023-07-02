const { Router } = require("express");
const VideogamesRouter = Router();
const getVideoGames = require("../controllers/01-getVideoGames");
const getIdVideoGames = require("../controllers/02-getIdVideoGames");
const getVideoGamesName = require("../controllers/03-getVideoGamesName");
const postVideoGames = require("../controllers/04-postVideoGames");
const getVideoGamesNameBd = require("../controllers/06-getVideoGamesNameBd");
const getPlatforms = require("../controllers/07-getPlatforms");

VideogamesRouter.get("/name", async (req, res) => {
  const { name } = req.query;

  try {
    const result = await getVideoGamesName(name);
    console.log(result);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

VideogamesRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  const search = isNaN(id) ? "buscar en la bd" : "buscar en la api";
  try {
    const result = await getIdVideoGames(id, search);

    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});

VideogamesRouter.get("/", async (req, res) => {
  try {
    const response = await getVideoGames();

    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

VideogamesRouter.post("/", async (req, res) => {
  const {
    name,
    description,
    platforms,
    background_image,
    released,
    rating,
    genres,
  } = req.body;
  console.log(
    name,
    description,
    platforms,
    background_image,
    released,
    rating,
    genres
  );
  try {
    const result = await postVideoGames(
      name,
      description,
      platforms,
      background_image,
      released,
      rating,
      genres
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = VideogamesRouter;
