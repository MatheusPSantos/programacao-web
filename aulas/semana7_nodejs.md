# Introdução ao NodeJs

- O javascript é criado em 1995 pelo Brendan Eich
- ECMAScript foi documentado como uma especificação em 1997
- Google V8 lançado em 2009
- NodeJs foi criado em 2009 por Ryan Dahl

O Node é uma plataforma de desenvolvimento de aplicações do lado do servidor. É orientado a eventos e tem característica princial lidar com requisições HTTP com uma thread única com a execução do javascript.

Para implementar o Non Block IO o node implementa o event loop, que é utilizado para agendar a execução de tarefas de programação orientados a eventos, também implementa Continuos Passing Style, onde toda chamada assíncrona possui uma função de callback como parâmetro para ser executada quando a operação foi finalizada.

A arquitetura do Nodejs inclui uma implementação do motor V8. A libuv de fato implementa o event loop.

## módulos

Dentro do nodejs é possível fazer uso dos recursos de módulos, que permite a implementação de módulos que poderão ser utilizados em diferentes arquivos através da palavra chave `require`.

Dentro do ambiente também possível fazer uso de módulos padrão que já vem com o próprio NODE, por exemplo o módulo de file system, ou `fs`.