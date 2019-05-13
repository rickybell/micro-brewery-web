# micro_brewery_web

Hello.

Esta é uma pequena aplicação que simula o painel de controle de temperatura das cervejas que o caminhão de entregas de uma pequena cervejaria do interior da Austrália necessita controlar em suas viagens.

A linguagem utilizada foi foi Javascript e a aplicação possui API é um Client ou o frontend.

A API preenche inicialmente o "painel", quando ele é executado e vai, posteriormente atualizando ele a cada 30 segundos simulando que a temperatura da carga vai se alterando conforme a viagem transcorre.

O projeto da API é uma aplicação Nodejs, com Express para gerenciamento da API.

A cobertura de testes não é completa na API, mas procuramos gerar exemplos bem estilo TDD mesmo é utilizamos Jest que acompanha o React.

Do lado do Client, utilizamos React para sua construção, a cobertura de testes também não é completa devido a simplicidade da aplicação, mas selecionamos e aplicamos testes em alguns pequenas partes que apresentam alguma lógica mais complexa ou alguma tarefa que seja dependente de algo externo a aplicação.

O projeto é um repositório aqui no Github e sua execução bem é simples, tudo foi utilizado em suas versões mais novas "software bom é software atualizado".

Para execução:

- Gitclone
- Yarn install, individualmente na pasta da API é na pasta do Client.
- Yarn start na pasta de cada lado da aplicação, API é Client.

A API roda na porta 9000 e o Client na porta 3000.

E é isto(That all folks!!!)

Meu contato é henrique.belloube@gmail.com para qualquer dúvida e ajuda.

Obrigado.
