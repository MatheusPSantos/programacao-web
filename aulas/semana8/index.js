let http = require('http');
let path = require('path');
let express = require('express');
let app = express();

let Posts = require('./models/Posts');

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'view'));

app.use(express.static(path.join(__dirname, 'public'))); // configuração dos arquivos estáticos
app.use(express.urlencoded({ extended: false }));

app.get('/home', (req, res) => {
    res.render(
        'home',
        { title: 'Página Inicial' }
    );
});

// adicionando uma rota
app.get('/perfil', (req, res) => {
    res.end(`
        <h1>Perfil</h1>
    `);
});

// adicionando outra rota com hbs de resposta no render
app.get('/account', (req, res) => {
    res.render('account');
});

// iniciando trabalho com modulo do mongo
app.get('/posts', async (req, res) => {
    const posts = await Posts.find();
    res.render('posts', { posts: posts});
});

app.listen(3000);