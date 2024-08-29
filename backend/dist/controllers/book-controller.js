import Book from "../models/booksModel.js";
export const getAllBooks = async (req, res) => {
    try {
        const response = await Book.find().select("title");
        const mod = response.map((x) => x.title);
        res.status(200).json(mod);
    }
    catch (err) {
        res.status(500).json(err.message);
    }
};
