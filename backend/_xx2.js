import { faker } from "@faker-js/faker";
const summary = faker.lorem.word({ length: { max: 200, min: 20 } });
const ee = faker.lorem.paragraph({ min: 2, max: 25 });
console.log(ee);
