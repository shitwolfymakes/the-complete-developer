import { db } from "./data";
import { findByZip, updateByZip } from "../mongoose/weather/services";

declare interface WeatherInterface {
    zip: string;
    weather: string;
    tempC: string;
    tempF: string;
    friends: string[];
}

export const resolvers = {
    Query: {
        weather: async (_: any, param: WeatherInterface) => {
            let data = await findByZip(param.zip);
            return [data];
        }
    },
    Mutation: {
        weather: async (_: any, param: { data: WeatherInterface}) => {
            await updateByZip(param.data.zip, param.data);
            let data = await findByZip(param.data.zip);
            return [data];
        }
    }
};