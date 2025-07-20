const num = 0;
console.log(num >= 0 || num <= 17);
//&& лошічне і те і те і те
// || логічне або
// !логічне не
console.log(!false);

//false && виконуватись не буде
//true || виконуватись не буде

//if(умова){
//   дія
//}else{
//   дія
//}

//const isRain = true;
//if(isRain===true){
///  console.log("візьми парасольку");
//}else{
//  console.log("НЕ бери парасольку!");
//}

//const price = 6000;

//if (price < 1000 && price > 550) {
// console.log("візьми квиток на економ");
//} else if (price >= 1000 && price < 1500) {
//console.log("візьми квиток на середний класс");
//} else if (price >= 1500) {
//console.log("лети бізнес класом");
//} else {
// console.log("тобі не вистачае грошей!");
//}

//if(age > 18){
//console.log("ти перволітній");
//}

// const isRain = true? 'іде дощь' : 'дощу нема'
// console.log(isRain);

//     const salary = 4000;

//  const isRich = salary >= 2500? "ти багатий" : "іди працюй"
//  console.log(isRich);

// const name = prompt("яка офіційна назва JS");

// const message = name === "ECMAScript" ? "правильно" : "ти шо?! не знаешь JS?";
// console.log(message);
// if (name === "ECMAScript") {
//   console.log("ти молодець! правильно");
// } else {
//   console.log("ти шо?! не знаешь JS?");
// }

//Використовуючи if..else, напишіть код, що отримує число з інпуту і потім виводить повідомлення на екран:
// 1, якщо значення більше нуля,
// -1, якщо меньше нуля,
// 0, якщо дорівнює нулю.

const number = prompt("ввиди якесь число");
if (number > 0) {
  console.log(1);
} else if (number < 0) {
  console.log(-1);
} else if (number == 0) {
  console.log(0);
}
