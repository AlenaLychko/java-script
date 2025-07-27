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

// const totalSpent = Number(prompt("введить загально витрачену сумму"));
// const payment = Number(prompt("введить сумму поточного замовлення"));
// let discount = 0;

// if (totalSpent >= 5000) {
//   discount = 0.1;
//   console.log(`ти золотий партнер розмір твоеї знижки 10%`);
// } else if (totalSpent >= 1000) {
//   discount = 0.5;
//   console.log(`ти срібрний партнер розмір твоеї знижки 5%`);
// } else if (totalSpent >= 100) {
//   discount = 0.2;
//   console.log(`ти бронзовий партнер розмір твоеї знижки 2%`);
// } else {
//   discount = 0;
//   console.log(`в тебе ще немає знижки`);
// }

// payment = payment - (payment * discount);
// console.log(payment);

// let tarif = "base";
// let age = 18;
// if (tarif === "base" || age >= 18) {
//   console.log(`ти можеш зайти у дитячий і дорослий басейн`);
// } else if (tarif === "base" && age <= 18) {
//   console.log(`ти можеш зайти у дитячий басейн`);
// }

// let tarif = prompt("обери свій тариф");

// if (tarif === "base") {
//   console.log("ти заплатив за абоонимент 100");
// } else if (tarif === "standart") {
//   console.log("ти заплатив за абоонимент 200");
// } else if (tarif === "pro") {
//   console.log("ти заплатив за абоонимент 300");
// } else{}

// switch (tarif) {
//   case "base":
//     console.log("ти заплатив за абоонимент 100");
//     break;
//   case "standart":
//     console.log("ти заплатив за абоонимент 200");
//     break;
//   case "pro":
//     console.log("ти заплатив за абоонимент 300");
//     break;
//   default:
//     console.log("ти ще не обрав тариф");
// }

// const browser = "Chrome";

// switch (browser) {
//   case "Chrome":
//     console.log("ми підтримуємо цей браузер");
//     break;
//   case "FireFox":
//     console.log("ми підтримуємо цей браузер");
//     break;
//   case "Opera":
//     console.log("ми підтримуємо цей браузер");
//     break;
//   case "Safari":
//     console.log("ми не підтримуємо цей браузер");
//     break;
// }

// let a = Number(prompt("введи чісло"));

// if (a === 0){
//   p.textContent  = 0;
// } if(a === 1){
//   p.textContent =1;
// }

// if (a === 2 || a===3){
//  p.textContent = '2,3';
// }

// switch (a) {
//   case 0:
//     text = "ти ввів 0";
//     break;
//   case 1:
//     text = "ти ввів 1";
//     break;
//   case 2:
//     case 3:
//     text = "ти ввів 2 або 3";
//     break;
//     default : "присвоїти невідоме значення";
// }
// console.log(text);
// let inp = Number(prompt("введи чісло"));
// switch (true) {
//   case inp >= 55 && inp <= 99:
//     break;
//   default:
//     console.log("число нe потравляє в діапазон");
// }
const followed = "online";
switch (followed) {
  case "online":
    console.log("людина онлайн и відповисть скоро");
    break;
  case "resently":
    console.log("людина була онлайн недавно");
    break;
  case "ago":
    console.log("людина була онлайн один рок тому, тобі ніхто не відповість");
    break;
}
