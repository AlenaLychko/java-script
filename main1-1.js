

//змінна - ячейка в памьяти пк яка має 
// своє умья і може зберегати якісь значення

const nazar = "ножиці"; //консианта змінна яку ми в 
// процесі програм змінити не можемо

let number = 7; //можна змінити
let isStudent = true; 
number = number + 10;

const isOk = confirm("are u ok?");//виводить вікно з текстом з 
// віподповоддю так/ні
const eat = prompt("шо ти будешь?")// вікно для вводу тексту 

console.log(eat);
alert(nazar)

//let headerLink = undefined;
//console.log(headerLink)
//string текст "fhfhks"
//число  1 2 22 1.3 
//boolean true истинная правда false ложь
//null нічо порожнеча пустота
//undefined щось не вихначено або помилка 
 
const profile = "user"
let num = 30


let name = "Dyson";
let price = 280000;

console.log("ві обрали товар: " , name, "його ціна: ", price);

price = prompt("вкажи бажану ціну на товар")

price = 1000;
let summ = price*0.8;
console.log("ціна без знижки" , price, "ціна зі знижкою", summ)