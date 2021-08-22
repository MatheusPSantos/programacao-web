# Mongo DB - linha de comando

Para entrar dentro do mongo db pelo terminal, é preciso acessar através do comando:
```
$ mongo
```

Para listar os bancos de dados dentro do mongo usa-se o comando:

```
$ show databases;
```

Para usar um banco de dados, é preciso usar o comando:

```
$ use nome-do-banco
```
Se o banco de dados especificado não existir o mongo entenderá que deve criá-lo e deixá-lo disponível para o uso.

Para criar uma collection usamos o comando:

```javascript
db.nomeDaCollection()
```

Para inserir dentro dessa collection um documento, usa-se o comando:
```javascript
db.nomeDaCollection.insert({text: 'First post'});
```

Para retornar todos os documentos dento da collection usa-se o comando:
```javascript
db.nomeDaCollection.find();
```

Outras operações podem ser feitas, como por exemplo, atualizar um documento de acordo com o termo de busca. Por exemplo:
```javascript
db.posts.updateOne({ tempo: 30}, {$set:{auth: 'name'}});
```

Para deletar um documento, é preciso passar uma chave de busca que irá ser o responsável por especificar qual o documento deverá ser utilizado:
```javascript
db.posts.deleteOne({ tempo: 30 });
```

Para mais informações sobre os comandos do mongo, recomenda-se estudar a documentação no site https://docs.mongodb.com/manual/tutorial/getting-started .