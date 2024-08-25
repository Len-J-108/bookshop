import { Router } from "express";
import * as BC from "../controllers/book-controller.js";
const booksRouter = Router();

booksRouter.get("/all-books", BC.getAllBooks);

export default booksRouter;
