// const name = "Harry Potter";
// const autor = "Rowling";
// const book = {
//   name,
//   autor,
//   pages: 365,
// };
//for in використвовуемо для обьектов
// for (let hey in book) {
//   console.log(typeof key);
//   console.log(book[key]);
// }

// let keys = Object.keys(book); //масив з ключами
// // let values = Object.values(book); // масив з наченнями

// let ent = Object.entries(book); //масив з масивами властивостей
// console.log(ent);
// for (let e of ent) {
//   let keys = e[0];
//   let value = e[1];
//   console.log(values);
// }

// const fruits = {
//   apple: 10,
//   bananas: 15,
//   pineapple: 2,
// };
// let values = Object.values(fruits);
// let summ;
// for (let value of values) {
//   summ += value;
// }
// console.log(summ);

// let a = [1, 2, 22];
// let c = [3, 4, 14];
// let b = [...a, ...b];
// // console.log(a===b)
// console.log(Math.max(...b));

// const fruits = {
//   apple: 10,
//   bananas: 15,
//   pineapple: 2,
// }
// const fruitsCopy = {...fruits,pineplle:22, fish:0}
// console.log(fruitsCopy)

// const nums =[1,2,3,4,5]
// const arr = [6,7,8,9]
// const connect = [...nums,...arr, 10,11,12]
// console.log(connect)

// const friends = [
//   { name: "Mango", online: false },
//   { name: "Kiwi", online: true },
//   { name: "Poly", online: false },
//   { name: "Ajax", online: false },
// ];
// const findFriendByName = function (friends, name){
//   for (const friend of friends) {
//     if (friend.name === name) {
//       return "friend is found";
//     }
//   } return "friend is not found";
// };
// console.log(findFriendByName(friends, "Poly"));
// console.log(findFriendByName(friends, "Chelsy"));
// const getAllNames = function (friends) {
//   const names = []
//   for(const friend of friends){
//     if(!friends.online){
// names.push(friend.name)
//     }
//   }
//   return names
// };

// console.log(getAllNames(friends));

// const getFriendsByStatus = function (arr) {
// const friendByStat = {
//   onlineFriends: [],
//   offlineFriends: [],
// };

//   for(const friend of arr){
//     if(friend.online){
//       friendByStat.onlineFriends.push(friend.name)
//     }
//   else{
//      friendByStat.offlineFriends.push(friend.name);
//   }
// }
// return friendByStat;
// };
// console.log(getFriendsByStatus(friends));

// const movies = [
//   {
//     title: "Inception",
//     director: "Christopher Nolan",
//     year: 2010,
//     genre: "sci-fi",
//   },
//   {
//     title: "The Notebook",
//     director: "Nick Cassavetes",
//     year: 2004,
//     genre: "romance",
//   },
//   {
//     title: "Interstellar",
//     director: "Christopher Nolan",
//     year: 2014,
//     genre: "sci-fi",
//   },
//   { title: "Titanic", director: "James Cameron", year: 1997, genre: "romance" },
// ];

// const getMovies = function (arr, genre) {
//   genreFilms = [];
//   for (const a of arr) {
//     if (a.genre === genre) {
//       genreFilms.push(a);
//     }
//   }
//   return genreFilms;
// };
// console.log(getMovies(movies, "romance"));

//Створіть об'єкт "product" з властивостями "name",
// "price" та "quantity". Додайте до об'єкту метод,
//  який буде розраховувати вартість всіх товарів.
//  Результат повинен бути виведений на екран.
const product = {
  name: "Phone",
  price: 2000,
  quantity: 5,
  totalPrice() {
    return `product name:${this.name},price: ${this.price}, total price: ${
      this.price * this.quantity
    }`;
  },
};
console.log(product.totalPrice());
