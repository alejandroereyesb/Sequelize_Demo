const express = require('express');
// Rutas de productos
const authorsApiController = require("../controllers/authorsApiController");
const authorsApiRouter = express.Router();

authorsApiRouter.get('/all',authorsApiController.getAuthorsAndEntries);
authorsApiRouter.post('/', authorsApiController.createAuthor);


module.exports = authorsApiRouter;