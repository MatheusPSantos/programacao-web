# Template

Uma funcionalidade chamada de mecanismos de template. O problema é que muitas vezes nossas aplicações tem a responsabilidade de gerar códigos html.

Os mecanismos de template são recursos que vão facilitar a geração do nosso código HTML dentro das nossas aplicações web, e mantê-las mais organizadas. No código a seguir exemplificamos:

```javascript
let http = require('http');
let path = require('path');
let express = require('express');
let app = express();

const PORT = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render(`Hello-world`);
});

http.createServer(app).list(PORT);
```
No exemplo a cima importou-se o módulo nativo do node `path`. Na linha onde usa-se o primeiro `set` é adicionado no app o diretório onde serão guardados os templates que serão utilizados. O express suporta outros tipos de motores de templaet, no caso foi usado o `hbs` ou `handlebars`.

Uma vez que usa-se template, pode-se usar o método `render`. Ele identifica um arquivo que será usado para gerar uma resposta HTML para o nosso servidor. No caso, dentro da pasta `view` iremos procurar por um arquivo `Hello-word.hbs`.

O mecanismo de template tem outras funcionalidades que otimizam o uso de templates dentro da nossa aplicação web.

```javascript
app.get('/hello', (req, res) => {
    let names = ['hello', 'my name is', 'apple'];
    res.render('hello-template', {names:names});
});
``` 
Dentro do nosso template podemos utilizar a entrada `names` da seguinte forma:
```hbs
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="content-type" content="text/html; charset=utf-8"/>
        <title>Hello</title>
    </head>
    <body>
        <h1>initial page</h1>
        <ul>
            {{#each names}}
                <li>{{this}}/</li>
            {{/each}}
        </ul>
    </body>
</html>
```
