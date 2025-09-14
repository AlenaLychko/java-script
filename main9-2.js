// //об'єкт
// const lesson = {
//   nameLesson: "Math",
//   tutor: "Klavdia Petrivna",
//   duration: 45,
//   students: ["Vlad", "Sasha", "Vadym", "Anna", "Polina", "Olena"],
// };

// lesson.tutor = "Taras Shevchenko"; //міняємо знасення об'єкта за ключем
// lesson.audience = "101, 3 floor";

// delete lesson.duration //delete об'єкт.key deleting

// console.log(lesson["students"]);

// let tutor = "Klavdia Petrivna";
// const lesson = {
//   nameLesson: "Math",
//   tutor,
//   duration: 45,
//   students: ["Vlad", "Sasha", "Sasha", "Vadym", "Anna", "Polina", "Olena"],
//   fu() {
//     console.log(this.nameLesson);
//   },
// };
// console.log(lesson.fu());

// const characters [{
//   name: "Harry Potter",
//   house: "Gryffindor",
//   wand: {
//     wood: "глід",
//     core: "перо фенікса",
//     lenght: "11 inch",
//   },
//   friends: ["Ronald", "Heriona", "Hagrid", "Dobby"],
//   abilities: "Parseltong",
//   spells: ["expecto patronum", "expeliarmus"],
//   introduce() {
//     return `hello i am Harry Poter ${this.name}, i am from ${
//        this.house}
//     }`;
//   },

// {
//   name: "Hermione Granger",
//   house: "Gryffindor",
//   wand: {
//     wood: "vine",
//     core: "dragon heartstring",
//     length: "10 inches",
//   },
//   friends: ["Ron Weasley", "Neville Longbottom", "Ginny Weasley", "Poter"],
//   abilities: "Brilliant memory",
//   spells: ["Alohomora", "Protego", "Petrificus Totalus"],
//   introduce() {
//     return `hello i am Hermione Granger ${this.name}, i am from ${this.house}
//     }`;
//   },
// };]
// const book = {
//     title: "Harry Poter",
//     author: "Joan Rowling",
//     introduce(){
//         console.log(`you choose ${book.author} ${book.title}`);

//     },
// changeTitle(name){
//   this.title = name
// }

// }
// changeTitle("study to study");
//  book.introduce()
//  const name = "Harry Poter"
//  const author ="Rowling"

// const book ={
//     name:name,
//     author,
//     pages:365
// }
// console.log(book['pages'])
// const restaurant = {
//   name: "Victoria",
//   cuisine: "korean",
//   adress: "38eavenue, victoria",
//   rating: "5",
//   newInfo(newAddress, newRating) {
//     this.address = newAddress;
//     this.rating = newRating;
//   },
// };

// restaurant.newInfo("457 provost 7", 4.5);
// console.log(restaurant);
const car = {
  brand: "Mersedes",
  model: "CLA 250 4MATIC",
  year: "2025",
  color: "white",
  introduce() {
    console.log(
      `you choose ${car.brand} ${car.model} ${car.year} ${car.color}`
    );
  },
};
console.log(car);
