import Book from "../models/booksModel.js";
export const getAllBooks = async (res) => {
  try {
    const response = await Book.find().select("title");
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json("Something went wrong");
  }
};
