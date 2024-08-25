import mongoose from "mongoose";
import { configDotenv } from "dotenv";

configDotenv();

mongoose
  // .connect(process.env.MONGO_URL3, { dbName: process.env.DATABASE })
  .connect(process.env.MONGO_URL4)
  .then(() => console.log("connected to mongoDB - bookstore"))
  .catch(() => console.log("mongo connection error"));
