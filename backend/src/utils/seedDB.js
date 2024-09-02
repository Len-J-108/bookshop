import { faker } from "faker-js/faker";
import "./mongoConnect";
import Book from "../models/books-model";

const deleteBooks = async () => {
  return await Book.deleteMany();
};
