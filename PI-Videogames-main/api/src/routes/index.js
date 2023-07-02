const { Router } = require("express");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const VideogamesRouter = require("./Videogames.js");
const GenreRouter = require("./Genres.js");
const PlatformsRouter = require("./Platforms.js");

const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/videogames", VideogamesRouter);
router.use("/genre", GenreRouter);
router.use("/platforms", PlatformsRouter);

module.exports = router;
