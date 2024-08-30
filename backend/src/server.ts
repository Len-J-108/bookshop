import express, { Express, Request, Response } from "express";

import dotenv from "dotenv";
dotenv.config();

import genreRouter from "./routers/genre-router.js";
import booksRouter from "./routers/books-router.js";
import "./utils/mongoConnect.js";

const { PORT } = process.env;

const app: Express = express();

app.use(express.json());

app.get("/", (req: Request, res: Response): void => {
  console.log("home route");
  res.json("server answered");
});

// --- Routes -------------
app.use("/books", booksRouter);
app.use("/genre", genreRouter);
// --- Routes -------------

app.listen(PORT, () => {
  console.log(`
----------------------------------------
Server listening on port: ${PORT}`);
});
