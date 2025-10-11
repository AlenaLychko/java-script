// const name = prompt("what is your name?");
// const weight = Number(prompt("what is your weight?"));
// const tall = Number(prompt("what is your height?"));
// const age = Number(prompt("how old are you?"));
// const parents = confirm("with parents?");

// const waterSlide = function (tall, weight) {
//   return tall >= 124 && weight >= 100;
// };

// const rollerCoaster = function (tall, age) {
//   return tall >= 135 && age >= 14;
// };

// const haunedHouse = function (age, parents) {
//   return age >= 16 || parents;
// };
// const slide = waterSlide(tall,weight)
// const coaster= rollerCoaster(tall,age)
// const house = haunedHouse(age,parents)

// if(slide){
//     console.log("you can go to water slide)")
// }else{
//     console.log("go cry, u cant use that coaster")
// }

// const names = [
//   "Anna",
//   "olena",
//   "olexandra",
//   "nazar",
//   "vlad",
//   "vasia",
//   "polina",
// ];

// const array = [0, 4, 1, 5, 9, 2, 10, 11, 12];

// const summ = function (arr) {
//   return arr.reduce((total, element) => total + element, 0);
// };

// console.log(summ(array));

// console.log(names.sort());
// console.log(array.sort((a, b) => a - b));

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// // const even = numbers.filter((x) => x % 2 === 0);
// // console.log(even)

// // const doubled = even.map((x) => x * 2);
// // console.log(doubled);

// // const reversed = doubled.reverse();
// // console.log(reversed);

// const newNumbers = numbers
//   .filter((x) => x % 2 === 0)
//   .map((x) => x * 2)
//   .reverse();

// console.log(newNumbers);

// const users = [
//   {
//     name: "Olena Koval",
//     age: 25,
//     city: "Kyiv",
//     hobbies: ["music", "reading", "sports"],
//     purchases: [120, 340, 560],
//   },
//   {
//     name: "Andrii Petrenko",
//     age: 31,
//     city: "Lviv",
//     hobbies: ["coding", "music", "gaming"],
//     purchases: [50, 40],
//   },
//   {
//     name: "Maria Bondar",
//     age: 19,
//     city: "Kyiv",
//     hobbies: ["drawing", "reading", "traveling"],
//     purchases: [900, 200, 150, 70],
//   },
//   {
//     name: "Taras Holub",
//     age: 27,
//     city: "Odesa",
//     hobbies: ["sports", "traveling", "music"],
//     purchases: [300, 200],
//   },
// ];

// const getEveryAge = function (users) {
//   const totalAge = users.reduce((summ, items) => summ + items.age, 0);
//   return totalAge / users.length;
// };
// console.log(getEveryAge(users));

// const getUsersFromcity = function(array,cityName){
//     return array.flter(user => user.city === cityName).map(users=> user.name)
// }

// console.log(getUsersFromcity(users,"Kyiv"));

