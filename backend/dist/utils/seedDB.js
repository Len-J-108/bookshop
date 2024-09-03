import { faker } from "@faker-js/faker";
import Book from "../models/books-model.js";
import thrillers from "./db-info/thriller.js";
import publishers from "../utils/db-info/publishers.js";
import "./mongoConnect.js";
const deleteBooks = async () => {
    return await Book.deleteMany();
};
const generateBooks = async () => {
    const newBooks = [];
    const rndm = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
    // delete old entries
    await deleteBooks().then(() => console.log("old data deleted"));
    for (let i = 0; i < thrillers.length; i++) {
        const title = thrillers[i].title;
        const author = thrillers[i].author;
        const year = thrillers[i].year;
        const publisher = publishers[rndm(0, 49)];
        const instock = faker.datatype.boolean(0.7);
        const stockamount = instock
            ? faker.number.int({ min: 1, max: 10000 })
            : faker.number.int(0);
        newBooks.push(new Book({
            title,
            author,
            year,
            publisher,
            instock,
            stockamount,
        }));
    }
    return newBooks;
};
try {
    const books = await generateBooks();
    await Book.insertMany(books);
    console.log("Database has been updated!");
    process.exit(0);
}
catch (e) {
    console.log(e);
    process.exit(0);
}
