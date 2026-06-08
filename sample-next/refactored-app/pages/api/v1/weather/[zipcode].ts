import type { NextApiRequest, NextApiResponse } from "next";
import { findByZip } from "../../../../mongoose/weather/services";
import dbConnect from "./../../../../middleware/db-connect";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
): Promise<NextApiResponse<WeatherDetailType> | void> {
    await dbConnect(); // put here so the db seed is completed BEFORE the lookup
    let data = await findByZip(req.query.zipcode as string);
    return res.status(200).json(data);
}