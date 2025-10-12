//процедурный код(змінні і функцїї)

// const baseSalary = 3000;
// const overTime = 10;
// const overPrice = 15;

// const salary = function (a, b, c) {
//   return a + b * c;
// };

//  console.log(salary(baseSalary,overTime,overPrice))

//ОПП

// const employee = {
//   baseSalary: 3000,
//   overtime: 10,
//   overprice: 15,
//   salary() {
//     return this.baseSalary + this.overtime * this.overprice;
//   },
// };

// console.log(employee.salary())

// const animal = {
//     paws:4,
// }//прототип

// const dog = Object.create(animal)
// dog.name = "Patron"
// dog.ears = 2

// console.log(dog.legs);
// console.log(dog.hasOwnProperty('paws'));
// console.log(dog.ears);
// console.log(dog.hasOwnProperty('name'));

// for(let key in dog){
//     if(!dog.hasOwnProperty(key))continue
//         console.log(key)
// }

class User {
  name;
  #email; //# приватна інформація
  constructor({ name, email, country, phoneNumber }) {
    this.name = name;
    this.#email = email;
    this.country = country;
    this.phoneNumber = phoneNumber;
  }

  introduce() {
    return `my name is ${this.name}`;
  }
  changeEmail(newEmail) {
    this.#email = newEmail;
  }
}
//інкапсуляйція приховати методи або властивості
const anatholii = new User({
  name: "Anatholii",
  email: "anatholii@gmail.com",
  country: "Ukraine",
  phoneNumber: "+38 087 465 78",
});
console.log(anatholii);

const oleh = new User({
  name: "Oleh",
  email: "oleh@gmail.com",
  country: "Poland",
  phoneNumber: "+48 675 765 897",
});
console.log(oleh);

anatholii.changeEmail("NewAnatholii@gmail.com");
//инкапсуляция (приват инфа)

const alena = new User({
  name: "Alena",
  email: "alena@gmail.com",
  country: "Canada",
  phoneNumber: "+1 514 346 6787",
});
console.log(alena);

class Person {
    name;
    lastName;
    constructor({name,lastName}){
        this.name = name;
        this.lastName = lastName;
    }
    introduce(){
       `my name is ${this.name}, my last name is ${this.lastName}`;
    }
}

const daria = new Person({name:'Daria', lastName:"Bova"})
console.log(daria)