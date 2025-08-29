import { FastifyInstance } from "fastify";
import { getAllDrivers, getDriversByName } from "./controllers/driversController";
import { getAllTeams, getTeamsByName } from "./controllers/teamsController";

const routes = async (fastify: FastifyInstance) => {
    fastify.get('/', async (request, reply) => {
        return { hello: 'world' }
    });

    fastify.get('/drivers', async (request, response) => {
        return await getAllDrivers(response);
    });

    fastify.get<{Params:{name:string}}>('/drivers/:name', async (request, response) => {
        const name:string = request.params.name;
        return await getDriversByName(name, response);
    });

    fastify.get('/teams', async (request, response) => {
        return await getAllTeams(response);
    });

    fastify.get<{Params:{name:string}}>('/teams/:name', async (request, response) => {
        const name:string = request.params.name;
        return await getTeamsByName(name, response);
    });
};

export default routes;