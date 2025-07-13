const str = "Hello " + "Maria@gmail.com"; //строчка один з примітивних типів
//кожен символ має свій індекс з 0

const str1 = "10" + 5 + 5; //конкатиниція (зшивання строчок)
console.log(str1);

const str2 = 5 + 5 + "10";
console.log(str2);

console.log(str.length); //довжина строчки
console.log(str.toLocaleUpperCase()); //слова з виликої літери
console.log(str.toLocaleLowerCase()); //слова з маленької літери
console.log(str.trim()); //обрізае пробіли спереду і позаду

console.log(str.includes("@")); //превіряє наявність цих символів
// але залєжит від регістру
console.log(str.indexOf("Maria")); //яке місце займає цей символ
console.log(str.indexOf("Maria"));
console.log(str.includes("@")); // -1 означае що немає
//console.log(str.trim().endsWith("@gmail.com"))// endsWith перевірк на серв
//console.log(str.trim().startsWith("@gmail.com"))

console.log(str.padEnd(100, "@")); //заповне якимись символами допоки у строчки не стане 100

const name = "Alena Lychko";
console.log(name.lenght);
console.log(name.toLocaleUpperCase());
console.log(name.charAt()); //метод виводить першу літеру імени
console.log(name.indexOf(" "));
console.log(name.replace("Alena ", "Maria")); //реплейс допомагае заміняти перший аргумент на другий

const language = "JavaScript";
console.log(language.substring(0,4)); //скорочує строчку до вказаного діпозону

