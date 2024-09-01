import { Router } from "express";
import * as BC from "../controllers/book-controller.js";
const booksRouter = Router();

booksRouter.get("/", BC.getAllBooks);

export default booksRouter;
