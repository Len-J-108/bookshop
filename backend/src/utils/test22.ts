import thrillers from "./db-info/thriller.js";

for (let i = 0; i < thrillers.length; i++) {
  console.log(`---------------------------------`);
  console.log(`book numer: ${i}`);
  console.log(`title: ${thrillers[i].title}`);
  console.log(`author: ${thrillers[i].author}`);
  console.log(`year: ${thrillers[i].year}`);
}
