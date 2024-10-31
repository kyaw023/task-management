
import express, {Express, Request, Response} from "express";
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import authRoutes from "./routes/authRoutes";
import mongoose from "mongoose";
import * as process from "node:process";

 // Load environment variables
// Import routes

const app : Express = express();
const PORT = process.env.PORT || 4000;

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(cookieParser());
app.use(express.json());
dotenv.config()

mongoose.connect(process.env.MONGODB_URL as string).then(
    () => console.log("Connected to MongoDB"),
).catch((err) => console.log("Failed to connect to MongoDB", err));

app.use('/api/auth',authRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
