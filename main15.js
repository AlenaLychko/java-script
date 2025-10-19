// class Film {
//   #director;
//    static team = 0;
//    static Type = {
//     Film: 'film',
//     Series:'series'
//    }
//   constructor({title, director, year,type = Film.Type}) {
//     this.title = title;
//     this.#director = director;
//     this.year = year;
//   }
//   //   changeDirector(name) {
//   //     return (this.#director = name);
//   //   }
//   // getTitle(){
//   //     return `movie name: ${this.title}`
//   // }\
//   get title() {
//     return `movie name: ${this.title}`;
//   }

//   set title(name) {
//    if(name === ''){
//     console.error('помилка порожне значення')
//    }
//    return this._title = name;
//   }

//   //   set director(name) {
//   //     return (this.#director = name);
//   //   }
// }

// const titanic = new Film({title:"Titanic", director:"James Kameron", year:1997, type: Film.type.Film});

// // class BdFilm {
// //   constructor(title, director, year) {
// //     this.title = title;
// //     this.director = director;
// //     this.year = year;
// //   }
// // }
// // const Inceprion = new BdFilm("Inception", "Chrostopher Nolan", 2010);
// // const sixSouls = new BdFilm("SixSouls", "Björn Stein", 2010);
// titanic.title = 'титаник'

// console.log(titanic.title)

// console.log(Film.team)
// console.log(titanic.team)

// class Rectangle {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }
//   getArea() {
//     return this.width * this.height;
//   }
// }
// const rectangle1 = new Rectangle(9,10);
// console.log(rectangle1.getArea())

// class Calculator {
//   add(a, b) {
//     return a + b;
//   }
//   subtract(a, b) {
//     return a - b;
//   }
//   multiply(a, b) {
//     return a * b;
//   }
//   divide(a, b) {
//     if (b === 0) {
//       return "you cant devide by 0";
//     }
//     return a / b;
//   }
// }
// const calculator = new Calculator();
// console.log(calculator.add(2, 3)); // 5
// console.log(calculator.subtract(5, 2)); // 3
// console.log(calculator.multiply(2, 4)); // 8
// console.log(calculator.divide(10, 2)); // 5
// console.log(calculator.divide(10, 0));

// class Animals {
//   constructor(name) {
//     this.name = name;
//   }
//   makeSound(){
//     console.log("this is animal sound")
//   }
// }
// class Dog extends Animals{
//   constructor(name, breed){
//     super(name);
//     this.breed = breed;
//   }
// }
// class Cats extends Animals{
//     makeSound(){
//         console.log('meeeooow')
//     }
// }

// const myDog = new Dog("Buddy", "Labrador Retriever");
// console.log(myDog); // { name: 'Buddy', breed: 'Labrador Retriev

// const animal = new Animals();
// animal.makeSound(); // "The animal makes a sound"

// const cat = new Cats();
// // cat.makeSound(); // "Meow"

// class Shape {
//   constructor(color) {
//     this.color = color;
//   }
//   draw() {
//     console.log("drawing... a shape");
//   }
// }

// class Circle extends Shape {
//   constructor(color, radius) {
//     super(color);
//     this.radius = radius;
//   }
//   draw() {
//     console.log(`drawing... a shape ${this.radius}`);
//   }
// }

// const myCircle = new Circle("red", 5);
// myCircle.draw(); // Drawing a circle with radius 5
// console.log(myCircle.color); // "red"

// class Product{
//     constructor(name,price, discount){
//         this.name = name;
//         this.price = price;
//         this.discount = discount;
//     }
//     getDiscountPrice(){
//         if(this.discount > 0){
//             return this.price - (this.price * this.discount/100)
//         }
//         return this.price
//     }
// }

// const product1 = new Product('Phone', 500, 10);
// console.log(product1.getDiscountPrice()); // 450.

// class Book {
//   constructor(title, autor, price) {
//     this.title = title;
//     this.author = autor;
//     this.price = price;
//   }
// }

// class BookStore {
//   constructor() {
//     this.books = [];
//   }
//   addBook(book) {
//     this.books.push(book);
//   }
//   removeBook(book) {
//     this.books = this.books.filter((item) => item !== book);
//   }
//   listBook() {
//     this.books.map((item) => {
//       console.log(`${item.title} - ${item.author} - ${this.price}`);
//     });
//   }
// }
// const myBookstore = new Bookstore();

// const book1 = new Book("The Catcher in the Rye", "J.D. Salinger", 10);
// const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 12);
// const book3 = new Book("1984", "George Orwell", 8);

// myBookstore.addBook(book1);
// myBookstore.addBook(book2);
// myBookstore.addBook(book3);

// myBookstore.listBooks();

// myBookstore.removeBook(book2);

// myBookstore.listBooks();
