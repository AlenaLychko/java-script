const num1 = "17";
const num2 = 17;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);
// оператор порівняння
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);
console.log(num1 !== num2);// не дорівнює, не строге. *!* означає "не"
console.log(num1 == num2);// не строге дорінює
console.log(num1 === num2);// строге дорівнює


console.log(null == undefined);
console.log(null === undefined);

const num3 ="fkkjfhksjf" + 17;
console.log( num3);

console.log("1" == true);
console.log(1 !== true);//строга неррівність

console.log( typeof Number (num3)) //NaN not a number - я не число 


console.log(Number.parseInt("ппвпвпвпв"));//виділить число перше
console.log(Number.parseInt("17.6аопврповрплв"));//виділить і десяткове
const num4 = NaN;
console.log(Number.isNaN(num4))

//ex.1
const a1 = 5+3;
console.log(a1);

const a2 = 5 - 3;
console.log(a2);

const a3 = 5 * 3;
console.log(a3);

const a4 = 5 / 3;
console.log(a4);

const a5 = 5 % 3;
console.log(a5);

//ex.2
const a6 = "5"- 3;
console.log(a6);

const a7 = 75 + "kg";
console.log(a7);

alert(a6)

