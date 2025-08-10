// let sum = 0;
// for (let i = 0; i < 101; i += 2) {
//   sum = sum + i;
//   console.log(i);
// }
// console.log(sum);

// for (let i = 0; i < 101; i += 1) {
//   if (i % 2 === 0) {
//     sum = sum + i;
//   }
// }
// console.log(sum);

//0 1 1 2 3 5 8 13...
// let a = 0;
// let b = 1;
// for (i = 3; i <= 100; i +=1) {
//   let c = a + b;
//   console.log(c);
//   a = b;
//   b = c;
// }

// let user = Numberprompt("загадай число");
// for(let i = 1; i<= user; i+=1){
//     console.log(i);
// }

// let summ = 0;
// for (let i = 1; i <= 7; i++) {
//   let spend = Number(prompt(`сумма за день ${i}`));
//   summ = summ + spend;
// }
// console.log(summ);

// let userNum = Number(prompt("введіть число"));
// while(userNum < 100){
//     userNum =Number(prompt("веддіть ще"));
// }

for (let index = 0; index < 10; index += 1) {
  if (index === 7) {
    //break; //насильна зупинка
   // continue; //скипає і продовжує далі
  }
  console.log(index);
}
