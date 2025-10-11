// const array = ["apple", "banana", "orange", "banana", "grape", "apple", "kiwi"];
// for (let item of array) {
// //   console.log(item);//inp
// // }
// // array.forEach(value => console.log(value))

// const arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
// //array.method()=>console.log())

// //array.forEach((value, index, array) => console.log(value, index, array));
// // arr.forEach((value) => console.log(value));

// // console.log(arr.filter(value=>value<3))

// arr.filter((value) => console.log(value));
// //console.log(arr.find(value=>value<3))
// console.log(arr.some (value=>value<3))//true
// console.log(arr.every(value=>value<3))//false

// // const evenArr=[];
// // for(let i = 0 ; i<arr.length; i++){
// //
// if(arr[i]%2===0){
// //
// evenArr.push(arr[i]);
// //
// }
// //}
// // const evenArr= arr.filter(num=> num%2===0)
// // console.log(evenArr);
// //array.method((item, index, arr)=>{блок коду})
// const arr = [1,2,3,4,5];

// const people = [
//   { name: "John", age: 32, occupation: "programmer" },
//   { name: "Jane", age: 26, occupation: "teacher" },
//   { name: "Mike", age: 42, occupation: "engineer" },
//   { name: "Emily", age: 17, occupation: "designer" },
// ];

// const freturnindPeople = function (arr) {
//   arr.filter((value) => value.age > 18);

// };
// console.log(findPeople(people));

// const aray = [1, 27, 3, 44, 4, 5, 16, 6, 7];
// const filterRange = function (arr, a, b) {
//   return arr.filter((value) => a && value < b);
// };

// console.log(filterRange(array, 4, 10));
// console.log(filterRange(array, 1, 5));
// console.log(filterRange(array, 20, 30));
// Array.reduce((acc,val)=> acc+val, 0)
// console.log(summ)
// //console.log(arr.find(value=>value<3))
// console.log(arr.some(value=>value<3))//true
// console.log(arr.every (value=>value<3))//false
// //array.method((previousValue, carrentValue, index, array)=>console.log(), initialVal
// const summ = arr.reduce((acc, val)=> acc+val, 1000000)
// console.log(summ)

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];
// // const summ = tweets.reduce((acc, val)=> acc+val.likes, 0)
// // console.log(summ)

// // const summLikes = function(array){
// //     return array.reduce((accTweet, valTweet) => accTweet + valTweet.likes, 0);
// // }
// // console.log(summLikes(tweets))

// const tagsArray = tweets.reduce((newArray, tweet) => {
//     newArray.push(...tweet.tags)
// return newArrray},[])
// console.log(tagsArray)

// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
//   { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
//   { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
//   { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
//   { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
// ];


// const totalTime = function (array) {
//   return array.reduce(
// //     (accPlayers, valPlayers) => accPlayers + valPlayers.timePlayed,
// //     0
// //   );
// // };
// //  console.log(totalTime(players));

// const array = [0,4,1,5,9,2,10,11,12]

// // const sortedArray = array.sort()
// // console.log(sortedArray) //сортировка масива за алфавитом

// const sortedArray = (a,b) => b - a;
// console.log(array.sort(sortedArray)) //сортировка по номерам 

// const names = ["Anna", "olena","olexandra","nazar","vlad","vasia","polina"]
// console.log(names.sort((a,b)=>a.localeCompare(b))) //по алфавиту

// const names = ['Pierre','Jean','Louis','Paul','André','François','Antoine','Jacques']
// console.log(names.sort((a,b)=>a.localeCompare(b, "ca"))) //по алфавиту