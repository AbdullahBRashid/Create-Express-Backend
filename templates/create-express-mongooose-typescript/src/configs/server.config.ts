import { config } from "dotenv";
config();

export const httpPort = parseInt(process.env.PORT || "3000");

export const corsURLS = (process.env.CLIENT_URLS) ? process.env.CLIENT_URLS.split(" ").map(url => url.trim()) : [];
corsURLS.push("http://localhost:" + httpPort);

export const mongoURL = process.env.MONGO_URL as string;

export default {
    httpPort,
    corsURLS,
    mongoURL
}