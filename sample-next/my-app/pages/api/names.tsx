import type { NextApiRequest, NextApiResponse } from "next";

type responseItemType = {
    id: string;
    name: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
): Promise<NextApiResponse<responseItemType[]> | void> {
    const url = "https://usemodernfullstack.dev/api/v1/users";
    let data;
    try {
        // this does the call and pauses the function execution until
        // the response is received. JS is single threaded so blocking
        // here would hang the entire server
        const response = await fetch(url);

        // this pauses funcex until the json is parsed
        data = (await response.json()) as responseItemType[];
    } catch (err) {
        return res.status(500);
    }

    // this runs a function to map the json response into an array of
    // responseItemTypes.
    // 
    // "for each item in this array, produce the value returned by this
    // little function, and collect the results into a new array."
    const names = data.map((item) => {
        return { id: item.id, name: item.name };
    });

    // return the response code and data
    return res.status(200).json(names);
}