const { Router } = require('express');
const filmRoutes = require('./film.routes');
const categoryRoutes = require('./category.routes');

const router = Router();

router.use("/movies", filmRoutes);
router.use("/users", categoryRoutes);

module.exports = router;