import { faker } from "@faker-js/faker";
import Book from "../models/books-model.js";
import { IGenre } from "./db-info/thriller.js";
import publishers from "./db-info/publishers.js";
import allGenresCombined from "./db-info/allGenresCombined.js";
import "./mongoConnect.js";

const deleteBooks = async () => {
  return await Book.deleteMany();
};

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
      const deliverytime = faker.number.int({ min: 3, max: 100 });
      const pagenum = faker.number.int({ min: 20, max: 2500 });
      const price = faker.number.int({ min: 5, max: 120 });
      const isdiscounted = faker.datatype.boolean(0.3); // --NOTE: for discount
      const amount = isdiscounted // --NOTE: for discount
        ? faker.number.int({ min: 2, max: 50 })
        : faker.number.int(0);
      const discount = {
        isdiscounted,
        amount,
      };
      const images = ["https://picsum.photos/id/237/200/300"];
      const rating = faker.number.int({ min: 0, max: 5 });
      const summary = faker.lorem.paragraph({ min: 2, max: 25 });
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
          deliverytime,
          pagenum,
          price,
          discount,
          images,
          rating,
          summary,
        }),
      );
    }
  });
  return newBooks;
};

try {
  // delete old entries
  await deleteBooks().then(() => console.log("old data deleted"));

  const books = await generateBooks(allGenresCombined);
  await Book.insertMany(books);
  console.log("Database has been updated!");
  console.log("-----------------------------");
  process.exit(0);
} catch (e) {
  console.log(e);
  process.exit(0);
}
