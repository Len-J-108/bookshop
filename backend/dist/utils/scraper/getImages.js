import fs from "fs";
import puppeteer from "puppeteer";
import { searchQuery } from "../string.js";
import { mkDir } from "../mkDir.js";
import "../mongoConnect.js";
import Book from "../../models/books-model.js";
const getImagesFromPresearch = async function (x) {
    console.log(`start getting cover of: ${x}`);
    const string = searchQuery(x);
    const url = `https://presearch.com/images?q=${string} book cover`;
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: "domcontentloaded" });
    await page.waitForSelector(".object-scale-down");
    const images = await page.$$eval(".object-scale-down", (ee) => ee.map((x) => x.src).slice(0, 5));
    //........Download Images............
    const saveName = `${x.split(" ").join("-")}`;
    const saveFolder = mkDir(saveName, "/home/len/Documents/projects/elektronika-comerza/backend/public/images/bookcover/");
    for (let i = 0; i < images.length; i++) {
        const viewImage = await page.goto(images[i]);
        fs.writeFile(`public/images/bookcover/${saveFolder}/${saveName}-${i}`, await viewImage.buffer(), () => console.log(`image: ${saveName} saved!`));
    }
    //---------------------------------
    await browser.close();
};
const getBooks = async (genre) => {
    try {
        const books = await Book.find({ genre: genre });
        return books.map((x) => x.title);
    }
    catch (err) {
        console.log(err.message);
        process.exit(1);
    }
};
const res = await getBooks("Thriller");
// res.forEach(async (book) => {
//   await getImagesFromPresearch(book);
// });
for (let book of res) {
    await getImagesFromPresearch(book);
}
process.exit(0);
