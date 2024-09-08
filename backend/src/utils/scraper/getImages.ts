import fs from "fs";
import puppeteer from "puppeteer";
import { searchQuery } from "../string.js";
import { mkDir } from "../mkDir.js";
import "../mongoConnect.js";
import Book from "../../models/books-model.js";

const getImagesFromPresearch = async function (x: string): Promise<void> {
  const string: string = searchQuery(x);
  const url = `https://presearch.com/images?q=${string} book cover`;

  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: "domcontentloaded" });

  await page.waitForSelector(".object-scale-down");
  const images = await page.$$eval(".object-scale-down", (ee) =>
    ee.map((x: any) => x.src).slice(0, 5),
  );
  //........Download Images............
  const saveName: string = `${x.split(" ").join("-")}`;
  const saveFolder: string = mkDir(
    saveName,
    "/home/len/Documents/projects/elektronika-comerza/backend/public/images/bookcover/",
  );
  for (let i = 0; i < images.length; i++) {
    const viewImage: any = await page.goto(images[i]);

    fs.writeFile(
      `${saveFolder}/${saveName}-${i}`,
      await viewImage.buffer(),
      () => console.log(`image: ${saveName} saved!`),
    );
  }
  //---------------------------------

  await browser.close();
};

const getBooks = async (genre: string): Promise<string[]> => {
  try {
    const books = await Book.find({ genre: genre });
    return books.map((x) => x.title);
  } catch (err: any) {
    console.log(err.message);
    process.exit(1);
  }
};

const res = await getBooks("Thriller");
console.log(res);

res.forEach((book) => {
  getImagesFromPresearch(book);
});

process.exit(0);
