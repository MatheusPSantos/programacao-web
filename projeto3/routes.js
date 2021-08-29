const express = require('express');
const routes = express.Router();

const LoginController = require('./controllers/LoginController');
const UserController = require('./controllers/UserController');
const ColorController = require('./controllers/ColorController');
const PostsController = require('./controllers/PostsController');

routes.post('/login', (request, response) => LoginController.login(request, response));

routes.post('/logout', (request, response) => LoginController.logout(request, response));

routes.get('/user',
    async (request, response) => await UserController.index(request, response)
);

routes.post('/user',
    (request, response) => UserController.create(request, response)
);

routes.post('/posts',
    async (request, response) => await PostsController.createPost(request, response)
);

routes.get('/posts', async (request, response) => await PostsController.index(request, response));

routes.delete('/posts',
    (request, response) => PostsController.deletePost(request, response)
);

module.exports = routes;