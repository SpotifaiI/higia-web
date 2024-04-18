# Higia Web

# Rodando o projeto

Esse é um projeto feito com [Next.js](https://nextjs.org/) criado com o comando [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Variáveis ambiente

Primeiro passo para rodar o projeto, é configurar os parâmetros contidos no arquivo `.env`. Para isso, basta pegar o arquivo `example.env` que está na raiz do projeto, e renomeá-lo para `.env`.

Após isso, preencha os parâmetros com os valores desejados de configurações, então só falta rodar o projeto.

## Ativando o servidor

Caso estiver usando Docker, basta rodar `docker compose up` para que a aplicação seja executada. Caso contrário, só seguir o passo a passo a seguir.

Para rodar, basta rodar os comandos abaixo.

```bash
$ npm install
$ npm run dev

# ou

$ yarn
$ yarn dev
```

Então vá ao navegador e abra o endereço `http://localhost:<porta-configurada-no-arquivo-env>` para ver o resultado.