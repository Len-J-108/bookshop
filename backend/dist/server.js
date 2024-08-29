import express from "express";
import dotenv from "dotenv";
dotenv.config();
const { PORT } = process.env;
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
    console.log("home route");
    res.json("server answered");
});
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});
