import { faker } from "@faker-js/faker";
import Book from "../models/books-model.js";
import Genre from "../models/genre-model.js";
import { IGenre } from "./db-info/thriller.js";
import thrillers from "./db-info/thriller.js";
import publishers from "../utils/db-info/publishers.js";
import "./mongoConnect.js";

const deleteBooks = async () => {
  return await Book.deleteMany();
};

const allGenres = [thrillers];

const generateBooks = async (x: IGenre[]) => {
  const newBooks: Array<any> = [];

  const rndm = (min: number, max: number): number =>
    Math.floor(Math.random() * (max - min + 1) + min);

  x.forEach((genre) => {
    const { genreName, data } = genre;
    console.log(`generating: ${genreName}`);
    for (let i = 0; i < data.length; i++) {
      const title = data[i].title;
      const author = data[i].author;
      const year = data[i].year;
      const publisher = publishers[rndm(0, 49)];
      const instock = faker.datatype.boolean(0.7);
      const stockamount = instock
        ? faker.number.int({ min: 1, max: 10000 })
        : faker.number.int(0);
      const genre = genreName;
      const isbn = faker.commerce.isbn();
      newBooks.push(
        new Book({
          title,
          author,
          year,
          publisher,
          instock,
          stockamount,
          genre,
          isbn,
        }),
      );
    }
  });
  return newBooks;
};

try {
  // delete old entries
  await deleteBooks().then(() => console.log("old data deleted"));

  const books = await generateBooks(allGenres);
  await Book.insertMany(books);
  console.log("Database has been updated!");
  process.exit(0);
} catch (e) {
  console.log(e);
  process.exit(0);
}
