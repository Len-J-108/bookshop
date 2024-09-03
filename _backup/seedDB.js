import { faker } from "@faker-js/faker";
import Book from "../models/books-model";
import thrillers from "../utils/db-info/thriller";
import publishers from "../utils/db-info/publishers";

const deleteBooks = async () => {
  return await Book.deleteMany();
};

const generateBooks = () => {
  const newBooks = [];

  const rndm = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

  for (let i = 0; i < thrillers.length; i++) {
    const title = thrillers[i].title;
    const author = thrillers[i].author;
    const year = thrillers[i].year;
    // const publisher = publishers[rndm(0, 49)];
    // const inStock = faker.datatype.boolean(0.7);
    // const stockAmount = inStock
    //   ? faker.number.int({ min: 1, max: 10000 })
    //   : faker.number.int(0);
    // const genre = "Thriller";
    // const isbn = faker.commerce.isbn();
    // const deliveryTime = faker.number.int({ min: 3, max: 100 });
    // const pageNum = faker.number.int({ min: 20, max: 2500 });
    // const price = faker.number.int({ min: 5, max: 120 });
    // const discount = {
    //   isDiscounted: faker.datatype.boolean(0.3),
    //   amount: () => {
    //     return this.isDiscounted
    //       ? faker.number.int({ min: 2, max: 50 })
    //       : faker.number.int(0);
    //   },
    // };
    // const images = ["https://picsum.photos/id/237/200/300"];
    // const rating = faker.number.int({ min: 0, max: 5 });
    // const summary = faker.lorem.paragraph({ min: 2, max: 25 });

    newBooks.push(
      new Book({
        title,
        author,
        year,
        // publisher,
        // inStock,
        // stockAmount,
        // genre,
        // isbn,
        // deliveryTime,
        // pageNum,
        // price,
        // discount,
        // images,
        // rating,
        // summary,
      }),
    );
    return newBooks;
  }
};

try {
  const books = generateBooks();
  await Book.insertMany(cars);
  console.log("Database has been updated!");
} catch (e) {
  console.log(e);
}

// ---------------------------------
// example function
//
// const generateCars = (amount = 10) => {
//   const newCars = [];
//
//   for (let i = 0; i < amount; i++) {
//     const model = faker.vehicle.vehicle();
//     const type = faker.vehicle.type();
//     const fuel = faker.vehicle.fuel();
//     const color = faker.vehicle.color();
//     const buildYear = faker.date.past({ years: 25 });
//     const mileage = faker.number.int({ min: 50, max: 500000 });
//     const hp = faker.number.int({ min: 50, max: 500 });
//     const vin = faker.vehicle.vin();
//
//     newCars.push(
//       new Car({ model, type, fuel, color, buildYear, mileage, hp, vin }),
//     );
//   }
//   return newCars;
// };
//
// try {
//   if (!process.argv.includes("delete")) {
//     const cars = generateCars(process.argv[2]);
//
//     await Car.insertMany(cars);
//   } else {
//     await deleteCars();
//     console.log("All Documents deleted!");
//     const cars = generateCars(process.argv[3]);
//     await Car.insertMany(cars);
//   }
//   console.log("Database has been updated!");
//   process.exit(0); // ends node seed process
// } catch (e) {
//   console.log(e);
//   process.exit(1); // ends node seed process with mistake
// }
