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
let total = 0;

const sum = function () {
  for (argument of arguments) {
    total += argument;
  }
  return total
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(1, 2, 3, 4)); //10
console.log(sum(1, 2, 3, 4, 5)); // 15
