# Drive do Mongo para nodejs

Para que o projeto node possa se comunicar com o MongoDB é preciso que instalemos um pacote via Node pacakge manager, o npm.

Para instalar esse pacote é preciso informar o seguinte comando dentro da pasta raiz do projeto nodejs:

```javascript
$ npm install mongodb
```

Dentro da pasta do projeto será gerado dentro do `package.json` onde é acrescentado o campo de `dependencies` com o `mongodb` e sua versão listado dentro desse campo.

Geramos dentro da pasta do projeto chamado `index.js`:

```javascript
const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://mongo/db-name', (err, conn) => {
    if(err) throw err;
    const db = conn.db();
    console.log(db);
    conn.close();
});
```

Uma vez estabelecida a conexão, podemos realizar operações de CRUD dentro no nosso banco, como no exemplo a seguir:

> Inserção

```javascript
const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://mongo/db-name', (err, conn) => {
    if(err) throw err;
    const db = conn.db();
    /* Insertion */
    db.collection('posts').insertOne({
        name: 'Jhon', age: 23
    }); 
    conn.close(); //close connection
});
```
> Seleção de dados

Esse exemplo transforma a saída do método `find` diretamente para um Array.
```javascript
const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://mongo/db-name', (err, conn) => {
    if(err) throw err;
    const db = conn.db();
    
    /* Selection */
    db.collection('posts').find().toArray((err, res) => {
        if(err) throw err;
        console.log(res);
        conn.close(); //close connection
    });  
});
```

Quando usamos a api do mongo dentro no node, podemos trabalhar com callbacks, como nos exemplos a seguir. Porém ela também suporta o uso de `promises`. Por exemplo:

```javascript
const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://mongo/db-name', (err, conn) => {
    if(err) throw err;
    const db = conn.db();
    
    /* Selection */
    db.collection('posts')
      .find()
      .toArray()
      .then((res) => {
        console.log(res);
        conn.close(); //close connection
    });  
});
```

O javascript também tem as diretivas do `await`e `async`. E quando a api usa o conceito de `promises` também podemos usar esse conceito. Por exemplo:

```javascript
const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://mongo/db-name', async (err, conn) => {
    if(err) throw err;
    const db = conn.db();
    
    /* Selection */
    const res = await db.collection('posts').find().toArray();
    console.log(res);
    conn.close(); // close connection
});
```

O próprio método MongoDB poderia utilizar a funcionalidade `async/await`. O próximo exemplo ilustra isso.

```javascript
const MongoClient = require('mongodb').MongoClient;

(async () => {
    const conn = await MongoClient.connect('mongodb://mongo/db-name');
    const db = conn.db();
    /* Selection */
    const res = await db.collection('posts').find().toArray();  
    console.log(res);
    conn.close();
})();
```