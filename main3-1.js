const str = "Hello "+"Maria ";//строчка один з примітивних типів
//кожен символ має свій індекс з 0

const str1 = "10" + 5 + 5;//конкатиниція (зшивання строчок)
console.log(str1);

const str2 =  5 + 5 + "10" ;
console.log(str2);

console.log(str.length)//довжина строчки
console.log(str.toLocaleUpperCase())//слова з виликої літери
console.log(str.toLocaleLowerCase())//слова з маленької літери
console.log(str.trim());//обрізае пробіли спереду і позаду

console.log(str.includes("@"));//превіряє наявність цих символів 
// але залєжит від регістру
console.log(str.indexOf("Maria"));//яке місце займає цей символ
console.log(str.includes("@"));// -1 означае що немає