const http = require('http');

const server = http.createServer(function (req, res) {
    console.log('recebeu requisição');
    res.write('Hello world');
    res.end();
});

server.listen(8000);