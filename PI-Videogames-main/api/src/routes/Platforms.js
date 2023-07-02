const { Router } = require("express");
const PlatformsRouter = Router();
const getPlatforms = require("../controllers/07-getPlatforms");

PlatformsRouter.get("/", async (req, res) => {
  try {
    const response = await getPlatforms();

    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = PlatformsRouter;
