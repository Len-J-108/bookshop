import mongoose from "mongoose";
import { configDotenv } from "dotenv";

configDotenv();

mongoose
  // .connect(process.env.MONGO_URL3, { dbName: process.env.DATABASE })
  .connect(process.env.MONGO_URL)
  .then(() => console.log(`connected to mongoDB - ${process.env.DATABASE}`))
  .catch(() => console.log("mongo connection error"));
