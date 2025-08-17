// const lists1 = [5, 15, 17, 77, 110];

// const lists2 = [15, 115, 117, 177, 1110];

// const friuts = ["apple", "pineaple", "banana", "potato"];

// console.log(friuts.join("-")); //перетворює масив на рядок через оператор у дужках

// const str = "i love JS";
// console.log(str.split(" ")); //перетворює рядок y масив через оператор у дужках

// console.log(friuts.includes("apple"));// перевіряє чи включає певний елемент
// console.log(friuts.indexOf("0"));//виводить елемент по певному індексу

// if (friuts.includes("potato")) {
//   console.log("its potato");
// }else{
//      console.log("its fruits");
// }

// friuts.push("strawberry"); //додає елемен у кінець масиву
// friuts.push("apple");

// friuts.pop(); //видаляє елемент с кінця масиву
// friuts.shift(); //видаляє елемент з початку масиву
// friuts.unshift("apple"); //додає елемент на початок масива

// const newArray = lists1.concat(lists2); //об'еднуе двамасиму у новий не зминюючий старий
// console.log(lists1);

// const nums = [1, 2, 22];

// const pinks = [3, 4, 44];

// console.log(nums.join("3").typeOf);

// nums.push(15);
// nums.push(89);
// console.log(nums);

// const newArray = nums.concat(pinks);
// console.log(newArray);

// pinks.shifr();
// pinks.push(24);

// const title = "Top 10 benefits of React framework";
// title = title.toUpperCase()
// title = title.split(" ");
// console.log(title);

// let l = [];
// for (let letter of title) {
//   //   letter = letter.toUpperCase();
//   //   console.log(letter);
//   //   l = letter[0];
//   letter[0] = letter[0].toUpperCase();
// }

// const message = "Welcome to Ukraine!";

// for (let i = 0; i < message.length; i += 1) {
//   console.log(message[i]);
// }

const userData = [];
const login = prompt("enter your login");
const password = prompt("enter your password");

userData.push(login);
userData.push(password);

if (userData.length === 0) {
  console.log("wrong data");
} else {
  console.log(userData);
}
