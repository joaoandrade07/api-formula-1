import { drivers } from "../data/drivers"

export const getAll = async () => {
    return drivers;
}

export const getByName = async (name:string) => {
    const data = drivers.filter(value => value.name.toLowerCase().includes(name.toLowerCase()));

    if(data.length === 0){
        throw new Error("Driver not found!")
    }

    return data;
}