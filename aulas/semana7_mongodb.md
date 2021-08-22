# Mongo DB

O Mongo db é um banco de dados que entram no modelo não relacional.

O motivo era tentar melhorar a performance, tolerância a falhas, escalabilidade e aceitar o modelo schemaless

Algumas das características do mongoDB:
- Alta performance;
- alta disponibilidade;
- schemaless;
- distribuído;
- baseado em documentos JSON;
- open source.

Relações podem ser feitas entre o mongoDB e um banco SQL.

| SQL termos | MongoDB termos|
|-|-|
| database   | database|
|  tables   | collections|
| rows  | documentos (BSON)|
|colunas    |   fields |

Enquanto que no banco de dados relacional nós armazenamos os dados seguinto o formato de tabelas, dentro do mongoDb vamos armazenar estrutura do tipo JSON, listas de objetos JSON, eles possuem um atributo _id que é gerado automáticamente.

Após a instalação do mongo db, pode-se chamar o mongo de acordo com o seguinte comando.
```
$ mongo
```
Utilizar o banco de dados é feito rodando o comando:
```bash
$ use mongo-test
```

Listar as tabelas do banco:
```
$ show collections
```

Existem métodos que permitem inserir, atualizar, remover elementos dentro da collection.

O método `db.collection.insert()` insere um documento dentro da collection. O método `db.collection.find()` lista todos os documentos dentro da collection.

## Mongo e Nodejs

Exemplo de código de acesso ao mongodb em uma aplicação nodejs.

```javascript
let client = require('mongodb).MongoClient;

client.connect(
    'mongodb://localhost:27017/mongo-test',
    { useNewUrlParser: true},
    function (error, client) {
        if(error) throw error;
        let db = client.db('mongo-test');
        // database code
    }
);
```

Uma vez o acesso ao banco sendo concluído, é possível realizar ações de alteração no banco.

É possível fazer uma busca por meio de substrings. Para isso é preciso utilizar um objeto de expressão regular, o RegExp.

```javascript
db.collection('users').find({name: new RegExp('^W', 'i')})
                      .limit(1)
                      .toArray(function (err, result) {
                          if(err) {
                              console.error(err);
                              return;
                          }
                          console.log('return values ...');
                          console.log(result);
                          client.close();            
                      });
```

- Método para atualiazar mais de um objeto através de uma chave: `updateMany()`
- Método para atualizar um objeto através de uma chave: `updateOne()`

O método mostrado na última linha do código anterior é responsável por encerrar a conexão com o banco.
```javascript
client.close();
```

