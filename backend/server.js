import express from "express";
import dotenv from "dotenv";
dotenv.config();
import "./utils/mongoConnect.js";
import booksRouter from "./routers/books-router.js";
// import cors from "cors";

const app = express();

const PORT = process.env.PORT;

app.use(express.json());

app.get("/", (req, res) => {
  console.log("jojojo");
  res.json({ message: "Server answered" });
});

app.use("/books", booksRouter);

//   cors({
//     origin: "http://localhost:80", // 5173 is where we have set our frontend to run
//     credentials: true,
//   }),
// );

app.listen(PORT, () => {
  console.log("Server is listening on port:", PORT);
});
