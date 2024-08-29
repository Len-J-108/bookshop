import express, { Express, Request, Response } from "express";

import dotenv from "dotenv";
dotenv.config();

const { PORT } = process.env;

const app: Express = express();

app.use(express.json());

app.get("/", (req: Request, res: Response): void => {
  console.log("home route");
  res.json("server answered");
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
