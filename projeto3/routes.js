const express = require('express');
const routes = express.Router();

const LoginController = require('./controllers/LoginController');
const UserController = require('./controllers/UserController');

routes.post('/login', (request, response) => LoginController.login(request, response));

routes.post('/logout', (request, response) => LoginController.logout(request, response));

routes.get('/user',
    async (request, response) => await UserController.index(request, response)
);
routes.post('/user',
    (request, response) => UserController.create(request, response)
);

module.exports = routes;