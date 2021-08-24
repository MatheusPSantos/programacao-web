# MVC

O padrão MVC é um padrão popular dentro do desenvolvimento web. Ele visa separar o desenvolvimento em componentes e podemos considerá-lo praticamente neutro com relação às tecnologias que são utilizadas para a construção da aplicação:

- <b>Model</b>: representação da regra de negócio.
- <b>View</b>: representação de detalhes da apresentação.
- <b>Controller</b>: controle que respondea a interação do usuário, executa o Model e define a View que será utilizada.


```
                                   Model (consulta as regras de negócios) 
                                //
    Req HTTP ~~~~~~> Controller 
                                \
                                  View (envia resposta HTML, json, XML)
```

- Controller:
    - responsável por processar a requisição HTTP
    - chama o model
    - decide qual a view será renderizada

- Model:
    - Regra de negócios
    - persistência dos dados

- View:
    - Mecanismo de template
    - renderiza HTML, XML

# Exemplo

Vamos considerar uma implementação simples desse padrão, vamos utilizar o express como framework:

> index.js

```javascript
let express = require('express');
let http = require('http');
let path = require('path');
let UserDAO = rquire('./app/model/Users');
let app = express();

app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'hbs');

app.get('/exemplo', (req, res) => {
    UserDAO.find().then((users) => {
        res.render('index', {users: users});
    });
});

http.createServer(app).listen(3000);
```

> User.js
```javascript
let client = require('mongodb').MongoClient();

module.exports = class User {
    static find() {
        return client.connect('mongodb://localhost:27017/mongo-test', {
            useNewUrlParser: true
        }).then((client) => {
            let db = client.db('mongo-test');

            return db.collection('users').find({}).toArray();
        });
    }
};
```

> index.hbs

```hbs
<html>
    <head>
        <meta http-equiv="content-type" content="text/html; charset=utf-8"/>
        <title>Usuários</title>
    </head>
    <body>
        <h1>Usuários</h1>
        <ul>
            {{#users}}
                <li>{{name}}</li>
            {{/users}}
        </ul>
    </body>
</html>
```

A princípio a primeira camada que é ativada dentro do nosso padrão será a camada de Controller. No exemplo ela será representada pela definição da rota. Em seguida esse controller faz uma chamada ao Model.

Dentro do Model temos a chamada de find() que basicamente faz uma requisição para o nosso banco de dados mongo, o que é a regra de negócio básica.

Uma vez com o resultado do Model representado, esse será passado para o controller, que em seguida executará a chamada de template passando os dados vindos do Model para ele. Dentro da View index.hbs é utilizado os dados que vieram do model.