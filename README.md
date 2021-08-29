# programacao-web
Repositório dos trabalhos e projetos da disciplina de Programação Web

# Link do projeto

## Front-end da aplicação (.projeto-1/)
O projeto está hospedado no vercel, na seguinte url: <a href="https://programacao-web-chi.vercel.app/">https://programacao-web-chi.vercel.app/</a>.

## Back-end da aplicação (.projeto3/)

O backend da aplicação, ou a api rest, está rodando através da nuvem do Heroku. A url da aplicação é: https://progweb-proj3.herokuapp.com/

## Endpoints

Esses são os endpoints da aplicação:

|Método|Rota|Funcionalidade|
|----|----------|--------------|
|post|/login| login|
|post|/logout| logout|
|get|/user| listar usuários|
|post|/user|criar usuário|
|post|/posts| criar post|
|get|/posts|listar posts|
|delete|/posts|deletar post|
|get|/colors|buscar paleta de cor aleatória|

## Banco de dados

O banco de dados utilizado pela aplicação do servidor é o banco mongodb. Para utilizar o projeto em modo local, ou seja, rodando em localhost, é preciso alterar o arquivo `projeto3/config.js`, descomentando a linha que contem o `mongoURL` igual à `localhost` e comentar a linha com o outro valor para `mongoURL`.

Para acessar o banco de dados na nuvem, utilizar a url: `mongodb+srv://admin:projeto3@cluster0.220ie.mongodb.net/myFirstDatabase?retryWrites=true&w=majority` através de um serviço como o https://www.mongodb.com/products/compass .

## Usuários de teste

|Usuário de teste com nível de admin|Usuário normal|
|-----|----|
|email: prog-web@mail.com|email: teste@teste.com|
|senha: teste|senha: teste|




## Membros do projeto]
|             Nome           |               Github              |
|----------------------------|-----------------------------------|
| Matheus Pereira dos Santos | https://github.com/matheuspsantos |
|   Gustavo Kenji Komatsu    |  https://github.com/GustavoKenji  |


