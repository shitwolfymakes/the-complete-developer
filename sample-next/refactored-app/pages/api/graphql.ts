import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { resolvers } from "../../graphql/resolvers";
import { typeDefs } from "../../graphql/schema";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

//@ts-ignore
const server = new ApolloServer({
    resolvers,
    typeDefs
});

const handler = startServerAndCreateNextHandler(server);

// This is the *higher-order function pattern, a function that returns another
// function. Takes an asynchronous handler function `fn`, then passes it into 
// the inner function. The inner function sets the headers then calls the 
// function it was passed.
const allowCors = 
    (fn: NextApiHandler) => async (req: NextApiRequest, res: NextApiResponse) => {
        res.setHeader("Allow", "POST");
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods", "POST");
        res.setHeader("Access-Control-Allow-Headers", "*");
        res.setHeader("Access-Control-Allow-Credentials", "true");

        if (req.method === "OPTIONS") {
            res.status(200).end();
        }
        return await fn(req, res);
    };

// Alternatively, less compressed syntactically
// const allowCors = (fn: NextApiHandler) => {
//     return async (req: NextApiRequest, res: NextApiResponse) => {
//         res.setHeader("Allow", "POST");
//         res.setHeader("Access-Control-Allow-Origin", "*");
//         // ...more headers
//         if (req.method === "OPTIONS") {
//             res.status(200).end();
//         }
//         return await fn(req, res);
//     };
// };

export default allowCors(handler);
