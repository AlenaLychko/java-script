// const wand = {
//   wood: "vine wood",
//   core: "dragon heartstring core",
//   length: "10% inch",
// };
// // const { wood:woodName="wood birch ", core ="...", length } = wand;
// // console.log(woodName, core, length, a); //деструктилизація

// // const {wood, ... rest} = wand
// // console.log(rest)

// const arr = [1,2,22]
// // const{a,b,c}= arr

// // const{a,...rest}=arr
// const[,b,]= arr
// console.log(b)

// const hp = {
//   name: "Harry Potter",
//   house: "Gryffindor",
//   wand: {
//     wood: "глід",
//     core: "перо Фенікса",
//     length: "11 inch",
//   },
//   friends: ["Ronald", "Heriona", "Hagrid", "Dobby"],
//   abilities: "Parseltongue",
//   spells: ["Expecto Patronum", "Expeliarmus"],
//   inrtoduce() {
//     return `привіт я ${this.name}, я в ${this.house}`
//   }
// };
// const {
//     name,house,
//     wand:{wood, core, length},
//     friends:[f1,f2,f3,f4],
//     abilities,
//     spells:[s1,s2],
//     inrtoduce
// } = hp;
//  const bondIntroduce =  inrtoduce.bind(hp)

// console.log(bondIntroduce ());

// let arr = ["Ilya","Kantor"];
// const [firstName, lastName] = arr
// console.log(firstName, lastName);

// let options = {
//   size: {
//     width: 100,
//     height: 200,
//   },
//   items: ["Cake", "Donut"],
//   extra: true
// };
// const {
//     size,

//   ...rest
// } = options;
// const {width,height} = size,

// console.log( rest,size)

const car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
  features: ["power windows rear camera", "navigation"],
  safety: {
    airbags: true,
    antilock_brakes: true,
    stability_control: true,
  },
};
const {
  make,
  model,
  year,
  features: [features2, features3],
  safety: { airbags, antilock_brakes, stability_control },
} = car;
