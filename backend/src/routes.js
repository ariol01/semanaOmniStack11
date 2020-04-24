const express = require('express');
const routes = express.Router();
const OngController = require('./controllers/OngController');

routes.use(express.json());
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);
module.exports = routes;