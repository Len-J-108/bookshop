import { Router } from "express";
import * as BC from "../controllers/book-controller.js";
const booksRouter = Router();

booksRouter.get("/", BC.getAllBooks).get("/list", BC.getAllBooksForList);

export default booksRouter;
