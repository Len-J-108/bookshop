import { Router } from "express";
import * as GC from "../controllers/genre-controller.js";

const genreRouter = Router();

genreRouter.get("/all", GC.getAllGenres).post("/new-genre", GC.addNewGenre);

export default genreRouter;
