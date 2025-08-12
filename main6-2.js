const students = ["Поліна", "олександра", "влад", "алена"]; //масив []

console.log(students[0]);
console.log(students[1]);
console.log(students[2]);
console.log(students[3]);

students[4] = "Milana"; //додали новий елемент
students[1] = "sasha"; // можемо перезадати
students[0] = "polya";
console.log(students.length); //довжина масиву

for (let i = 0; i < students.length; i += 1) {
  console.log(students[i]);
}

// const numbers = []

// for (let i = 0; i <101; i += 1) {
//   numbers.push(`номер${i}`) // push додати елем ент у масив
// }
// console.log(numbers);

// for( .. of ..){

// }
// const elements = [1, 2, 22]
// for( let student of students){
//     console.log(student);
// }

// const string = 'webstudio'
// for(str of string){
//     console.log(str)
// }

const teacher = "Milana";
for (let student of students) {
  if (student === teacher) {
    console.log(`це не студент`);
  }
  console.log(student);
}

const numbers = [1, 17, 18, 3, 331, -17];
const numbersNew = [];
for (let number of numbers) {
  if (number >= 17) {
    numbersNew.push(number);
  } else {
    console.log(number);
  }
}
console.log(numbersNew);

const films = ['weapons', 'It', 'harry poter']

for( let film of films){
    if(film === 'harry poter'){
        console.log("im harry poter")
    }
}
