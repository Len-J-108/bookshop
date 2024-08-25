import mongoose from "mongoose";
import { configDotenv } from "dotenv";

configDotenv();

mongoose
  .connect(process.env.MONGO_URL2, { dbName: process.env.DATABASE })
  .then(() => console.log("connected to mongoDB - bookstore"))
  .catch(() => console.log("mongo connection error"));
