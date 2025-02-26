// // let phone = {
// //     company: "Apple",
// //     model: "iPhone",
// //     year: 2022,
// //     color: "graphity",
// //     price: 1500,
// // }
// // console.log(phone);

// // let avarage = {
// //     monthOfLearning: "JavaScript",
// //     name: "Ahmad",
// //     score: [96, 93, 100, 100],
// // }

// // console.log(avarage.score.reduce((a, b) => a + b) / avarage.score.length);

// function formatPerson(object) {
//     return `${object.name} is ${object.age} years old and lives in ${object.location}`
// }
// console.log(formatPerson({ name: "John", age: 30, location: "New-york" }));

// function getTotalPrice(products) {
//     return products.reduce((acc, product) => acc + product.price, 0)
// }
// console.log(getTotalPrice([{ name: "Book", price: 10 }, { name: "Pen", price: 2 }, { name: "Notebook", price: 5 }]));
// console.log(getTotalPrice([{ name: "Shoes", price: 50 }, { name: "Shirt", price: 20 }, { name: "Hat", price: 15 }]));
// console.log(getTotalPrice([{ name: "Bag", price: 30 }, { name: "Belt", price: 10 }, { name: "Jacket", price: 100 }]));

// function getVoteCount(object) {
//     return object.upvotes - object.downvotes;
// }
// console.log(getVoteCount({ upvotes: 13, downvotes: 0 }));
// console.log(getVoteCount({ upvotes: 2, downvotes: 33 }));
// console.log(getVoteCount({ upvotes: 132, downvotes: 132 }));

// function getAge(object) {
//     return 2024 - object.birthYear;
// }
// console.log(getAge({ firstName: "John", lastName: "Doe", birthYear: 2000 }));
// console.log(getAge({ firstName: "Alice", lastName: "Smith", birthYear: 1990 }));
// console.log(getAge({ firstName: "Bob", lastName: "Brown", birthYear: 1985 }));

// function summarizeBook(object) {
//     let res = object.ratings.reduce((a, b) => a + b)
//     return `${object.author} by ${object.author} has an average rating of ${res / object.ratings.length}`
// }
// console.log(summarizeBook({ title: "The Great Gatsby", author: "F. Scott Fitzgerald", ratings: [5, 4, 5, 3, 4] }));
// console.log(summarizeBook({
//     title: "1984", author: "George Orwell",
//     ratings: [5, 5, 5, 4, 4]
// }));
// console.log(summarizeBook({ title: "To Kill a Mockingbird", author: "Harper Lee", ratings: [5, 4, 4, 5, 5] }));

// function countProperties(object) {
//     let cnt = null;
//     for (const key in object) {
//         cnt++
//     }
//     return cnt;
// }
// console.log(countProperties({ name: "John", age: 30, city: "New York" }));
// console.log(countProperties({ a: 1, b: 2 }));
// console.log(countProperties({ key1: "value1" }));

// function getProperty(object, str) {
//     return object[str];
// }
// console.log(getProperty({ name: "Alice", age: 25 }, "name"));
// console.log(getProperty({ name: "Bob", age: 30 }, "age"));
// console.log(getProperty({ a: 10, b: 20 }, "a"));

// function sortKeys(object) {
//     let str = "";
//     for (const key in object) {
//         str += key + ": " + object[key] + ", ";
//     }
//     return '{'`${str}`'}';
// }
// console.log(sortKeys({ b: 2, a: 1, c: 3 }));
// console.log(sortKeys({ name: "Charlie", age: 30, job: "Engineer" }));
// console.log(sortKeys({ x: 10, z: 5, y: 20 }));

// function deleteProperty(object, str) {
//     for (const key in object) {
//         if (key == str) {
//             delete object[key];
//         }
//     }
//     return object
// }
// console.log(deleteProperty({ a: 1, b: 2, c: 3 }, "b"));
// console.log(deleteProperty({ name: "Alice", age: 25 }, "age"));
// console.log(deleteProperty({ x: 10, y: 20, z: 30 }, "x"));

// function uppercaseKeys(object) {
//     let object2 = {};
//     for (let key in object) {
//         object2[key.toUpperCase()] = object[key];
//     }
//     return object2;
// }
// console.log(uppercaseKeys({ a: 1, b: 2 }));
// console.log(uppercaseKeys({ name: "Alice", age: 25 }));
// console.log(uppercaseKeys({ x: 10, y: 20 }));

// let person = {
//     name: "John",
//     age: 30,
//     city: "New-York",
// };
// console.log(Object.keys(person)); // pokazivaet klyuchi v massive
// console.log(Object.values(person)); // pokazivaet znacheniya v massive
// console.log(Object.entries(person)); // pokazivaet klyuchi i znacheniya v otdelnom massive
// console.log(person.name);
// // let { a, b, c } = person;
// console.log(a);

// let arr = [1, 2, 3];
// let [a, b, c] = arr;

// function totalAmountAdjectives(object) {
//     let cnt = null;
//     for (const key in object) {
//         cnt++;
//     }
//     return cnt;
// }
// console.log(totalAmountAdjectives({ a: "moron" }));
// console.log(totalAmountAdjectives({ a: "idiot", b: "idiot", c: "idiot" }));
// console.log(totalAmountAdjectives({ a: "moron", b: "scumbag", c: "moron", d: "dirtbag" }));

// function nSidedShape(a) {
//     let geometry = {
//         1: "circle",
//         2: "semi-circle",
//         3: "triangle",
//         4: "square",
//         5: "pentagon",
//         6: "hexagon",
//         7: "heptagon",
//         8: "octagon",
//         9: "nonagon",
//         10: "decagon",
//     };
//     return geometry;
// }
// console.log(nSidedShape(geometry[1]));
// console.log(nSidedShape(1));
// console.log(nSidedShape(9));

// function isInRange(a, object) {
//     if(object.min < a && object.max > a) return true;
//     else return false;
// }
// console.log(isInRange(4, { min: 0, max: 5 }));
// console.log(isInRange(4, { min: 4, max: 5 }));
// console.log(isInRange(4, { min: 6, max: 10 }));

// function get(obj) {
//     return `${obj[1]} ${obj[2]} ${obj[3]} ${obj[2]}`;
// }
// console.log(get({ 1: "Mommy", 2: "please", 3: "help" }));
// console.log(get({ 1: "Me", 2: "innocent", 3: "is" }));
// console.log(get({ 1: "Must", 2: "lawyer", 3: "call" }));

// function hasKey(object, str) {
//     for (const key in object) {
//         if (key == str) return true
//     }
//     return false;
// }
// console.log(hasKey({ a: 44, b: 45, c: 46 }, "d"));
// console.log(hasKey({ craves: true, midnight: true, snack: true }, "morning"));
// console.log(hasKey({ pot: 1, tot: 2, not: 3 }, "not"));

// function inkLevels(object) {
//     let min = Infinity;
//     for (const key in object) {
//         if(object[key] < min) min = object[key]
//     }
//     return min;
// }
// console.log(inkLevels({ "cyan": 432, "magenta": 543, "yellow": 777 }));

// function calculateDifference(object, a) {
//     let sum = null;
//     for (const key in object) {
//         sum += object[key]
//     }
//     return sum - a;
// }
// console.log(calculateDifference({ "baseball bat": 20 }, 5));
// console.log(calculateDifference({ skate: 10, painting: 20 }, 19));
// console.log(calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400));

function maximumScore(arr) {

}
console.log();
