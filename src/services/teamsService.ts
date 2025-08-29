import { teams } from "../data/teams"

export const getAll = async() => {
    return teams;
}

export const getByName = async (name:string) => {
    const data = teams.filter(team => team.name.toLowerCase().includes(name.toLowerCase()));

    if(data.length === 0){
        throw new Error("Team not found!");
    }

    return data;
}