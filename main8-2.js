//function declaration = оголошення функціі

// function sum(x, y){
//     return x+y
// }
// console.log(sum(10,20))
// console.log(sum(40, 20))
// console.log(sum(90, 20))

// function mult(x, y){
//     return console.log(x*y)
// }
// mult(10,20)

//function expresson = функціональний вираз
// const sum = function (x, y) {
//   x = x*2
//   y = y*2
//   return x+y
// };
// console.log(sum(40, 20));
// console.log(sum(90, 20));
// console.log(sum(70, 20));

// const fnA = function(){
//     console.log("я фукнція fnA")
//     fnB()
//      console.log("я фукнція fnA");
// }
// const fnB = function () {
//   console.log("я фукнція fnB")

// }
// fnA()

// const sum = function (x = "name", y = "last name") {
//   return`miss ${x} ${y}`
// }
// console.log(sum("Petrenko", "Petro"));

// const bank = function (balance, cash) {
//   if (cash === 0) {
//     console.log("enter the sum more that 0");
//     return;
//   }
//   if (cash > balance) {
//     console.log("not enough");
//     return;
//   }

//   console.log("okay")
// }
// bank(
//   Number(prompt("enter your salary")),
//   Number(prompt("enter how much you want to take"))
// );
// let total = 0;

// const sum = function () {
//   for (argument of arguments) {
//     total += argument;
//   }
//   return total
// }
// const sum = function(...args){
//     return args
// }
// console.log(sum(1, 2, 3)); // 6
// console.log(sum(1, 2, 3, 4)); //10
// console.log(sum(1, 2, 3, 4, 5)); // 15
// const c = 10; //глобальна
// if (true) {
//   //блочна область видимості
//   const a = -15;
//   console.log(a);
// }
// function rooB() {
//   const b = 15; //функціональна область видимості
//   if (true) {
//     const a = function fuA() {
//       console.log("fuA");
//     };
//   }
//   console.log(a);
// }

// const b = 10;
// const add = function () {
//   const a = 5;
//    //const b = 100;
//   return a + b;
// };
// console.log(add());

// const value = 50;
// const add = function (num) {
//   const value = 10;
//   const innerValue = 5;
//   return num + value + innerValue;
// };

// console.log(value); // 50
// console.log(add(20)); // 35

//  console.log(innerValue)
//  innerValue = 5;
//   console.log(innerValue)
// consolr.log(a)
// var a = 15
// consolr.log(a)

// const add = function () {
//     //var
//    concole.log(innerValue)
//   var innerValue = 5;
//  concole.log(innerValue)

// }
// add()

// function changeCase(string) {
//   let result = "";

//   for (let letter of string) {
//     if (letter === letter.toLowerCase()) {
//       result += letter.toUpperCase();
//     } else {
//       result += letter.toLowerCase();
//     }
//   }

//   return result;
// }
// console.log(changeCase("qweRTY")); // QWErty
// console.log(changeCase("mAnGo")); // MaNgO
// console.log(changeCase("AjAx")); // aJaX

// function isEven(numm){
//   if( numm %2  === 0){
//     console.log(true)}
//     else{
//         console.log(false)
//     }
// }

// console.log(isEven(4)); // true
// console.log(isEven(3));

// const factorial = function(num){
//     let result = 1;
//     for(let i=1; i<=num; i++){
//         //result*=i
//         result = result*i;
//     }
//     return console.log(result)
// }
// factorial(5)

