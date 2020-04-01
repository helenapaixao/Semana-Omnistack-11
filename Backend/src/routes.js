const express = require('express');
const OngController = require('./Controllers/OngController');

const routes = express.Router();

 routes.get('/ongs',OngController.index);
 routes.post('/ongs', OngController.create );

 module.exports = routes;