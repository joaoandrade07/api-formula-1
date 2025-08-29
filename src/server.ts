import fastify from "fastify";
import {fastifyCors} from "@fastify/cors";
import routes from "./routes";

const server = fastify({logger:true});

server.register(fastifyCors, {
    origin: "*",
    methods:["POST"]
});

server.register(routes);

server.listen({port: 3333}, ()=> {
    console.log(`Servidor rodando na porta 3333`);
});