// const wand = {
//   wood: "vine wood",
//   core: "dragon heartstring core",
//   length: "10% inch",
// };
// // const { wood:woodName="wood birch ", core ="...", length } = wand;
// // console.log(woodName, core, length, a); //деструктилизація

// // const {wood, ... rest} = wand
// // console.log(rest)

// const arr = [1,2,22]
// // const{a,b,c}= arr

// // const{a,...rest}=arr
// const[,b,]= arr
// console.log(b)

// const hp = {
//   name: "Harry Potter",
//   house: "Gryffindor",
//   wand: {
//     wood: "глід",
//     core: "перо Фенікса",
//     length: "11 inch",
//   },
//   friends: ["Ronald", "Heriona", "Hagrid", "Dobby"],
//   abilities: "Parseltongue",
//   spells: ["Expecto Patronum", "Expeliarmus"],
//   inrtoduce() {
//     return `привіт я ${this.name}, я в ${this.house}`
//   }
// };
// const {
//     name,house,
//     wand:{wood, core, length},
//     friends:[f1,f2,f3,f4],
//     abilities,
//     spells:[s1,s2],
//     inrtoduce
// } = hp;
//  const bondIntroduce =  inrtoduce.bind(hp)

// console.log(bondIntroduce ());

// let arr = ["Ilya","Kantor"];
// const [firstName, lastName] = arr
// console.log(firstName, lastName);

// let options = {
//   size: {
//     width: 100,
//     height: 200,
//   },
//   items: ["Cake", "Donut"],
//   extra: true
// };
// const {
//     size,

//   ...rest
// } = options;
// const {width,height} = size,

// console.log( rest,size)

// const car = {
//   make: "Toyota",
//   model: "Camry",
//   year: 2020,
//   features: ["power windows rear camera", "navigation"],
//   safety: {
//     airbags: true,
//     antilock_brakes: true,
//     stability_control: true,
//   },
// };
// const {
//   make,
//   model,
//   year,
//   features: [features2, features3],
//   safety: { airbags, antilock_brakes, stability_control },
// } = car;

// let arr = ["Ilya", "Kantor"];
// [item1, item2] = arr;
// console.log(item2);

// const person = {
//   name: "Nelli",
//   surname: "Laroy",
//   age: 25,
// };
// const { name, surname, age } = person;
// console.log(surname);

// const student = {
//   name: "Bruce",
//   surname: "Lee",
//   grades: [4, 5, 3],
// };
// const calculateAverageGrade = function ({ name, surname, grades }) {
//   let avarage;
//   for (const i of grades) {
//     avarage += i;
//   }
//   return avarage/grades.lenght
// };
// console.log(calculateAverageGrade(student));

// const items = [
//   { name: "Футболка", price: 250, quantity: 2 },
//   { name: "Джинси", price: 800, quantity: 1 },
//   { name: "Кросівки", price: 1200, quantity: 1 },
// ];
// const calculateTotal = function (obj) {
//   let total = 0;
// for(const {price, quantity} of obj){
// total += price*quantity
// }

//   return total
// };
// console.log(calculateTotalCost(items));

// const dishes = [
//   { name: "Салат Цезар", calories: 250, portions: 2 },
//   { name: "Паста Болоньєзе", calories: 600, portions: 3 },
//   { name: "Суп", calories: 150, portions: 1 },
// ];

// const calculateAverageCalories = function (col) {
//   let total = 0;
//   for ({ calories, portions } of col) {
//     total += calories * portions;
//   }
//   return total;
// };
// console.log(calculateAverageCalories(dishes));

// const data = {
//   users: [
//     { name: "John", age: 25 },
//     { name: "Jane", age: 17 },
//     { name: "Bob", age: 30 },
//     { name: "Alice", age: 20 },
//   ],
// };
// const getAdultUsers = function ({users}) {
//   const adults =[

//   ]
//   for(const {name,age} of users){
//     if(age>18){
//       adults.push({name,age})
//     }
//   }
//   return adults
// };
// console.log(getAdultUsers(data));

// const library = {
//   books: [],
//   lastId: 0,
//   createBook(title, author) {
//     return {
//       id: ++this.lastId,
//       title,
//       author,
//     };
//   },
//   addBook(title, author) {
//     const newBooks = this.createBook.apply(title, author);
//     this.books.push(newBoooks);
//     alert(`book${title} added to library`)
//   },
//   removeBook(id){

//   }
// };
