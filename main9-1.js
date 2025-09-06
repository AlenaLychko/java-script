// const fn1 = function () {
//   const a = 1;
//   var b = 1;

//   console.log(a, b);
// }
// fn1()
//function expression
// const fn1 = function(...arguments){
//     return console.log(arguments);
// // }
// const fn1 = (...arguments)=>{
//      return console.log(arguments);

// }
// fn1(1,2,3,4,22222)
// //function declaration
// function fn2(a,b){
//     return a+b;
// }
// fn2()
// //arrow function
// //const fn3=(a,b)=>{
//     //return a+b
//     //}
//     //const fn3=a=>a*2
//     // const fn3=()=> console.log('whatevr')
// const myNewArrowFunction = (...arguments) => {
//   return console.log(arguments);
// };
// myNewArrowFunction();
// myNewArrowFunction(1, 2, 3);
// myNewArrowFunction(100, 200, 300, 400, 500);
// myNewArrowFunction("Js", "Python", "Java", "PHP", "C++");

// //Знайдіть суму елементів масиву використанням, колоск-функції
// const arr = [1, 2, 3, 4, 5];
// function sumArray(arr, callback) {
//   let summ = 0;
//   for (let a of arr) {
//     summ += a;
//   }
//   callback(summ);
// }
// function cb(result) {
//   console.log(result);
// }
// sumArray(arr, cb);

// function first() {
//   console.log("first start");
//   second();
//   console.log("first end");
// }
// function second() {
//   console.log("inside second");
// }
// first();
// console.log("global end");

const myAverageScore = (arr) => {
  let summ = 0;
  for (let a of arr) {
    summ += a;
  }
  const average = summ/arr.lenght
  let grade;
  if (average >= 91) {
    grade = "A";
  } else if (average >= 81) {
    grade = "B";
  } else if (average >= 71) {
    grade = "C";
  } else {
    grade = "D";
  }
  return `middle garde; ${grade}`;
};
console.log(myAverageScore([100, 75, 81, 96]));
console.log(myAverageScore([45, 63, 85, 70]));
console.log(myAverageScore([77, 82, 60, 58]));
console.log(myAverageScore([93, 99, 93, 96]));
