# Express Js - Introdução e regras de roteamento

É uma ferramenta para facilitar o desenvolvimento das aplicações web dentro no nodejs.

O código a seguir é um código simples que representaria como um 'Hello world' seria dentro do express.js.

```javascript
let http = require('http');
let express = require('express');
let app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.end(`<h1>Hello world</h1>`);
});

http.createServer(app).list(PORT);
```

Esse código implementa uma funcionalidade de roteamento do express. No seguinte código podemos ver outro exemplo, comparando o uso do express com a implentação sem o express:

> Sem express.js
```javascript
let http = require('http');
const PORT = 3000;

http.createServer((req, res) => {
    let path = req.url;
    if (path === '/')   res.end(`<h1>Hello world</h1>`);
    if (path === '/by') res.end(`<h1>Goo by</h1>`);
}).listen(PORT);
```

> Com express.js
```javascript
let http = require('http');
let express = require('express');
let app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.end(`<h1>Hello world</h1>`);
});

app.get('/by', (req, res) => {
    res.end(`<h1>Goo by</h1>`);
});

http.createServer(app).listen(PORT);
```
Essas regras como o `.get()` não considera somente a url, mas o método HTTP que está sendo utilizado para chegar a url. Analogamente pode-se usar o `app`com qualquer método HTTP, como `post`, `get`, `put`, e outros.

O primeiro parâmetro do método `.get()` é a URL e o segundo é callback para o acesso dessa rota.