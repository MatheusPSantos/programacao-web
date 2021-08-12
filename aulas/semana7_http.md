# HTTP

## Arquitetura cliente-servidor

É uma arquitetura distribuída entre cliente/servidor, onde, no contexto de aplicações web:
- cliente: considera as partes da aplicação que são executadas no navegador;
- servidor: partes executadas no servidor, na nuvem de computadores.

## padrão HTTP

Hyper Text Transfer Protocol é um protocolo, utiliza o IP/TCP, atuando no nível da aplicação (modelo OSI). É o padrão utilizado na WWW (world wide web).

O protocolo é fundamentalmente representado por duas etapas, a requisição HTTP que representa os dados que saem do navegador e vão para o servidor, e a segunda etapa a resposta HTTP que são os dados que saem do servidor e vão para o cliente.

Existem métodos HTTP, como o GET, POST, DELETE, PUT, HEAD entre outros.

O método GET é utilizado principalmente para enviar parâmetros de busca e leitura para o servidor.

O método POST é utilizado para enviar parâmetros de escrita no servidor, os dados são enviados no corpo da requisição HTTP.

Exemplo de requisição e resposta HTTP:

- requisição:
```
> GET /HTTP/1.1
> User-Agent: Firefox
> Host: www.google.com.br
> Accept: */*
```
- resposta:
```
< HTTP/1.1 200 OK
< cache-control: private,...
< content-enconding: gzip
< content-type: text/html
<!doctype html><html itemscope="" itemtype="http://schema.org/WebPage" lang="pt"><head><meta content="Imagens do Google. A pesquisa de imagens mais completa da web" name="description">    
```

Na primeira linha o servidor responde com a versão HTTP que está sendo utilizada e o status da resposta.
Tipos de status são:
- 1XX indica uma mensagem informacional
- 2XX indica sucesso na transação
- 3XX redireciona o cliente para outra URL
- 4XX indica um erro por parte do cliente
- 5XX indica um erro por parte do servidor

# Parâmetros e funcionamento com o navegador

O envio de parâmetros para a transação é feita utilizando o formato x-www-urlencoded. Por exemplo:

`http://url-do-site.com.br?q=alguma_coisa_para_buscar`

Dependendo do método HTTP utilizado na requisição, o parâmetro será enviado de maneira diferente. No caso do GET o parâmetro será enviador pela URL enquanto que no POST o parâmetro será enviado pelo corpo da requisição.

## Conteúdos estáticos e dinâmicos

Existem dois cenários que valem a pena serem destacados. Basicamente esses cenários representam a forma como o servidor faz para responder as requisições web que vem do cliente. No primeiro cenário o cliente manda uma requisição HTTP para o servidor e o servidor responde enviando um código html, imagem, script ou css por exemplo. O servidor faz uma consulta ao sistema de arquivos e em seguida ele envia para o cliente.

Em outro cenário, o servidor tem um trabalho diferente, quando o cliente faz a requisição o servidor não acessa somente o sistema de arquivos e da uma respota, ele precisará criar uma camada a mais de processamento onde ele poderá acessar um sistema de dados ou algo do tipo e construir a resposta que será enviada para o cliente.

O primeiro cenário é um cenário de uso de conteúdo estático. O segundo cenário é o de uso de conteúdo dinâmico, nesse cenário necessariamente é preciso implementar essa camada de processamento e ela será responsável por gerar o conteúdo que será enviado para o cliente.

Vantagens do conteúdo estático são:
- velocidade pois não precisa de processamente complexo do servidor
- políticas de cache mais agressivas
- compatível com a maior parte de servidores

Conteúdo dinâmico tem certas vantagens:
- permite que os conteúdos sejam atualizados mais rapidamente
- permite que o conteúdo se adeque ao perfil do usuário

## CGI - Common gateway interface

É um método padrão utilizado para gerar conteúdo dinâmico em aplicações web. Considerando a arquitetura cliente/servidor, geralmente temos um servidor único que deve responder a múltiplos clientes. Para cada requisição HTTP que sai do cliente e chega no servidor, o módulo CGI irá receber essas requisições. Esse módulo irá gerá um processo no SO para cada requisição HTTP, que executará um script que será usado para gerar um conteúdo dinâmico que será enviado para o cliente. Esse processo é o shellCGI.

Para cada requisição que chegava no módulo o SO precisava iniciar um processo, executar e responder o cliente. Isso traz uma dificuldade de escalabilidade. Umas das alternativas são o JEE, mod_php, FastCGI e o nodejs.