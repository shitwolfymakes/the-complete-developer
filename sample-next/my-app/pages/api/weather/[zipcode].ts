// this file is an example of a dynamic api route
import type { NextApiRequest, NextApiResponse } from "next";

// define the response type
type WeatherDetailType = {
    zipcode: string;
    weather: string;
    temp?: number;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
): Promise<NextApiResponse<WeatherDetailType> | void> {
    return res.status(200).json({
        zipcode: req.query.zipcode, // grab the dynamic value from the url
        weather: "sunny",
        temp: 15
    });
}