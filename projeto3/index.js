const express = require('express');
const session = require('express-session');
const app = express();
const routes = require('./routes');
const PORT = 3000;

//  middlewares
app.use(express.json());
app.use(session({
	secret: 'projeto3',
	resave: false,
	saveUninitialized: true,
	cookie: {secure: false},
}));
//  rotas
app.get("/", ((req, res) => {
	console.log("session ID >>>>>", req.sessionID);
}));

app.use(routes);

app.listen(PORT);