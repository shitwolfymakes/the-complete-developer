import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

async function dbConnect(): Promise<any | String> {
    const mongoServer = await MongoMemoryServer.create();
    const MONGOIO_URI = mongoServer.getUri();
    // teardown any existing db connection first
    await mongoose.disconnect();
    // open a fresh connection to the db
    await mongoose.connect(MONGOIO_URI, {
        dbName: "weather",
    });
};