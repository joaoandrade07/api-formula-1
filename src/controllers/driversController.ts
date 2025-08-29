import { FastifyReply, FastifyRequest } from "fastify";
import { getAll, getByName } from "../services/driversService";

export const getAllDrivers = async (response: FastifyReply) => {
    const data = await getAll();
    response.type("application/json");
    return response.code(200).send(data);
}

export const getDriversByName = async (name:string, response: FastifyReply) => {
    response.type("application/json");
    try {
        const data = await getByName(name);
        return response.code(200).send(data);
    } catch (err: any){
        return response.code(400).send({error: err.message})
    }
}