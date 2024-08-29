import mongoose from "mongoose";
import { configDotenv } from "dotenv";

configDotenv();
const MONGO_URL: any = process.env.MONGO_URL;

mongoose
  .connect(MONGO_URL)
  .then(() => console.log(`connected to mongoDB - ${process.env.DATABASE}`))
  .catch(() => console.log("mongo connection error"));
