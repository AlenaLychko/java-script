// напиши скрипт взодження числа у відрізок значений
//  х1 та х2.
//  до х1 після х1 до х2 до х1 або після х2

// const x1 = 10;
// const x2 = 30;
// const number = prompt("введи випадкове ціле число");

// let text = "";

// if (x1 < number) {
//   text = "до х1";
// } else if (x2 < number) {
//   text = "після числа х2";
// } else if (bumber >= x1 && number <= x2) {
//   text = "в проміжку";
// }

// console.log(text);

// if(number >= 100){
//   text = "число дуже велике";
// } else{
//   text = "число НЕ дуже велике";
// }
//  text = number >= 100 ? "число дуже велике" : "число НЕ дуже велике";

// console.log(text);

// let type
// const age =  number >= 18 ? "adult" : "child";
// console.log(age);

const totalSpent = Number(prompt("введить загально витрачену сумму"));
const payment = Number(prompt("введить сумму поточного замовлення"));
let discount = 0;

if (totalSpent >= 5000) {
  discount = 0.1;
  console.log(`ти золотий партнер розмір твоеї знижки 10%`);
} else if (totalSpent >= 1000) {
  discount = 0.5;
  console.log(`ти срібрний партнер розмір твоеї знижки 5%`);
} else if (totalSpent >= 100) {
  discount = 0.2;
  console.log(`ти бронзовий партнер розмір твоеї знижки 2%`);
} else {
  discount = 0;
  console.log(`в тебе ще немає знижки`);
}
