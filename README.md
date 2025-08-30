# 🏎️ Formula 1 API - 2025

Uma API simples feita com **Fastify** em **TypeScript** que fornece
informações sobre os **pilotos** e **equipes** da temporada 2025 da
Fórmula 1.

------------------------------------------------------------------------

## 🚀 Tecnologias

-   [Node.js](https://nodejs.org/)
-   [TypeScript](https://www.typescriptlang.org/)
-   [Fastify](https://fastify.dev/)
-   [@fastify/cors](https://github.com/fastify/fastify-cors)

------------------------------------------------------------------------

## 📂 Estrutura de Pastas

    ├── server.ts          # Inicializa o servidor Fastify
    ├── routes.ts          # Define as rotas da API
    ├── controllers/       # Controladores de Pilotos e Equipes
    ├── constants/         # Constantes de dados (drivers, teams)

------------------------------------------------------------------------

## 🔧 Instalação

Clone o repositório e instale as dependências:

``` bash
git clone https://github.com/joaoandrade07/api-formula-1.git
cd api-formula-1
npm install
```

------------------------------------------------------------------------

## ▶️ Executando o servidor

Para rodar em ambiente de desenvolvimento:

``` bash
npm run start:dev
```

O servidor rodará em:

    http://localhost:3333

------------------------------------------------------------------------

## 📌 Endpoints disponíveis

### 👨‍🚀 Pilotos

-   `GET /drivers` → Lista todos os pilotos.
-   `GET /drivers/:name` → Busca piloto pelo nome.

### 🏁 Equipes

-   `GET /teams` → Lista todas as equipes.
-   `GET /teams/:name` → Busca equipe pelo nome.

------------------------------------------------------------------------

## 📝 Exemplo de Uso

### Requisição

``` bash
curl http://localhost:3333/drivers
```

### Resposta

``` json
[
  {
    "name": "Max Verstappen",
    "team": "Red Bull Racing",
    "country": "Netherlands",
    "number": 1
  },
  {
    "name": "Lewis Hamilton",
    "team": "Ferrari",
    "country": "United Kingdom",
    "number": 44
  }
]
```

------------------------------------------------------------------------

## 📄 Licença

Este projeto é open-source e pode ser usado livremente.
