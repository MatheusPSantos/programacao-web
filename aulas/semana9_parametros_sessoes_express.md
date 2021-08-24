# Express.js, parâmetros e sessões

# Envio de parâmetros

Como funcion o envio de parâmetros utilizando o método HTTP GET. Toda vez que queremos carregar uma nova página é enviado uma nova requisição HTTP ao servidor.

Exemplo utilizando o Express:

```javascript
let express = require('express');
let http = require('http');
let path = require('path');
let app = express();

app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/mensagem', (req, res) => {
    let msg = req.query.mensagem;
    console.log(msg);
    res.end();
});

http.createServer(app).listen(3000);
```

O template index.hbs apresentará um formulário com um campo input e botão de enviar. O campo estará dentro de um elemento html `<form>` que utilizará o atributo `method` com o valor `GET` e o atributo `action` do formulário com o valor `/mensagem_get` que direcionará a requisição HTTP para essa url. No elemento HTML `<input>` o atributo `name` terá valor igual à `mensagem`, o que irá identificar o campo utilizado como parâmetro.

Dentro da aplicação, o objeto `req` possui um atributo `query` que possui os campos passados por GET url.