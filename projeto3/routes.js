const express = require('express');
const routes = express.Router();

routes.get('/user', (req,res) => console.log('rota de usuário'));
routes.post('/user', (req,res) => console.log('rota de usuário'));

module.exports = routes;