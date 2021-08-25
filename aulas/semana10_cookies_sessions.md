# Persistência de dados

O servidor muitas vezes muitos usuários acessam concorrentemente a aplicação web. O servidor acaba tendo que lhe dar com múltiplas requisições ao mesmo tempo.

Muitas aplicações trabalham com a exibição de conteúdo dinâmico e diferente para cada usuário. Como o servidor faz para identificar o usuário que está utilizando a aplicação.

## Cookies e Sessions

# Cookies

Dado que o usuário acessa a plataforma, uma vez que o usuário insira uma informação na aplicação, meu servidor avisa ao navegador web que ele deve armazenar uma informação relacionado a essa entrada. Geralmente o conteúdo é um token e ele será utilizado nas requisições para que o servidor possa identificar o usuário dono do token.

- Mecanismos gerais para armazenar dados persistentes de navegação no lado do cliente de uma aplicação web.
- Estão associados a um determinado domínio de uma aplicação;
- O servidor envia os Cookies e estes são armazenados como arquivos texto no computador;
- Em toda requisição realizadda por um navegador web os cookies relacionados ao domínio do destino da requisição são enviados;

Ao tentar acessar a URL o servidor deverá implementar uma verificação da existência de cookies do usuário, caso não exista é feito uma resposta que redirecionará o cliente para uma página de login por exemplo.
Caso a requisição seja respondida com sucesso, ou seja o usuário tem login realizado normalmente, é adicionado ao cabeçalho de resposta um `set-cookies`.

No express, para utilizar o mecanismo de cookies, é preciso utilizar um middleware chamado `cookieParser`.

O armazenamento dos cookies é geralmente associados à domínios, pois pode causar trocas de informações indesejáveis. Geralmente esses cookies são serializados e possuem uma segurança mínima para não serem forjados. O cabeçalho tem um limite de tamanho para carregar os cookies. Para implementar uma funcionalidade de logout é necessário a remoção do cookie do navegador.

## Sessions

Mecanismos gerais para armazenar dados persistentes de navegação no lado do servidor de uma aplicação web. Utiliza-se de uma chave compartilhada entre o cliente e o servidor que é armazenada como cookie. Também utiliza um esquema de URL rewriting.

Consideramos um usuário sem cookies e duas URL's A e B. A URL A é protegida por login. Caso o usuário faça uma requisição para essa URL o sistema verifica que ele não possui uma chave de sessão e ele não terá acesso. Para ter a chave de sessão o usuário precisará realizar um login com as credenciais corretas. O servidor armazena internamente que a chave de sessão atrelada à um usuário será associada a um usuário logado.

Para utilizar o session com express, podemos utilizar o middleware `express-session`.