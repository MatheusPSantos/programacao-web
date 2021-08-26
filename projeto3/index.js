const express = require('express');
const app = express();
const routes = require('./routes');
const PORT = 3000;

//  middlewares
app.use(express.json());
//  rotas
app.use(routes);

app.listen(PORT);