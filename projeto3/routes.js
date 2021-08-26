const express = require('express');
const routes = express.Router();
const UserController = require('./controllers/UserController');


routes.get('/user',
    (request, response) => UserController.index(request, response)
);
routes.post('/user',
    (request, response) => UserController.create(request, response)
);

module.exports = routes;