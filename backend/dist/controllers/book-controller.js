import Book from "../models/books-model.js";
export const getAllBooks = async (req, res) => {
    try {
        const response = await Book.find();
        const mod = response.map((x) => x.title);
        res.status(200).json(mod);
    }
    catch (err) {
        res.status(500).json(err.message);
    }
};
export const getAllBooksForList = async (req, res) => {
    try {
        const response = await Book.find();
        const mod = response.map((x) => x.title);
        for (let i of mod)
            console.log(i);
        res.status(200).json(mod);
    }
    catch (err) {
        res.status(500).json(err.message);
    }
};
