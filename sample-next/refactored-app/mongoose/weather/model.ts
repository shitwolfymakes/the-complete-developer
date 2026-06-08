import mongoose, { model } from "mongoose";
import { WeatherInterface } from "./interface";
import { WeatherSchema } from "./schema";

// This guard exists because of how Next.js works. In development, Next 
// hot-reloads modules, so this file can run multiple times. Mongoose 
// throws an error if you try to register the same model name twice 
// (OverwriteModelError). The || pattern means "reuse the existing 
// model if it's there, otherwise create it" — avoiding that crash.
export default mongoose.models.Weather ||
    model<WeatherInterface>("weather", WeatherSchema);