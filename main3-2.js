const str = "Harry Poter by J.K Rolling";
const book = "вій";
const name = prompt("як тебе звуть");
const message = `привіт ${name} твоя улюблена книга ${book}`; 
//шаблонний рядом
console.log(message);

const how = prompt("як справи");
const answer = `привіт ${name} в тебе справи ${how}`;
console.log(answer);

console.log(str.padEnd(22, "!"));
console.log(str.includes("Rolling"));
console.log(str.length);
console.log(str.indexOf("Harry"));
const pl = "Привіт, як справи?"
console.log(pl.trim()); 